import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { mkdir, readdir, readFile } from 'fs/promises';
import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import mime from 'mime-types';
import {
  S3Client,
  ListObjectsV2Command,
  GetObjectCommand,
  PutObjectCommand,
} from '@aws-sdk/client-s3';

dotenv.config();

// Resolve __dirname for ESModules
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGE_DIR = path.join(__dirname, 'public', 'images');
const BUCKET_NAME = process.env.AWS_S3_BUCKET;
const REGION = process.env.AWS_REGION || 'us-east-1';

// Validate required env vars
['AWS_ACCESS_KEY_ID', 'AWS_SECRET_ACCESS_KEY', 'AWS_S3_BUCKET'].forEach((name) => {
  if (!process.env[name]) {
    console.error(`❌ Missing ${name} in environment variables.`);
    process.exit(1);
  }
});

// Init S3
const s3 = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

async function downloadImagesFromS3() {
  console.log('📥 Downloading images from S3...');
  await mkdir(IMAGE_DIR, { recursive: true });

  const { Contents } = await s3.send(
    new ListObjectsV2Command({ Bucket: BUCKET_NAME, Prefix: 'images/' })
  );

  if (!Contents || Contents.length === 0) {
    console.log('ℹ️ No images found in S3.');
    return;
  }

  for (const obj of Contents) {
    const key = obj.Key;
    const fileName = path.basename(key);
    const filePath = path.join(IMAGE_DIR, fileName);
    const contentType = mime.lookup(filePath) || 'application/octet-stream';

    try {
      const response = await s3.send(new GetObjectCommand({ Bucket: BUCKET_NAME, Key: key, ContentType: contentType }));

      if (!response.Body) {
        console.warn(`⚠️ Skipped ${key} — no Body returned.`);
        continue;
      }

      const fileStream = createWriteStream(filePath);
      await pipeline(response.Body, fileStream);
      console.log(`✅ Downloaded ${key} → ${filePath}`);
    } catch (err) {
      console.error(`❌ Error downloading ${key}:`, err.message);
    }
  }
}

async function uploadImagesToS3() {
  console.log('☁️ Uploading images to S3...');
  const files = await readdir(IMAGE_DIR);

  for (const file of files) {
    const filePath = path.join(IMAGE_DIR, file);
    const body = await readFile(filePath);

    await s3.send(
      new PutObjectCommand({
        Bucket: BUCKET_NAME,
        Key: `images/${file}`,
        Body: body,
        ContentType: 'image/jpeg', // Optional: refine for .png, .webp, etc.
      })
    );

    console.log(`✅ Uploaded ${filePath} → images/${file}`);
  }
}

async function syncImages() {
  try {
    await downloadImagesFromS3();
    await uploadImagesToS3();
    console.log('✅ Image sync complete.');
  } catch (err) {
    console.error('❌ Sync failed:', err);
    process.exit(1);
  }
}

syncImages();
