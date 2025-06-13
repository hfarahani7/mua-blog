import {
  Box,
  ImageList,
  ImageListItem
} from '@mui/material';
import Stack from '@mui/material/Stack';

import styles from '../styles/header.module.css';

const glamImages = [
  {
    link: "https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8636.JPEG",
    altText: "Jeanice doing makeup"
  },
  {
    link: "https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8632.PNG",
    altText: "Bride with dress"
  },
  {
    link: "https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_9555.PNG",
    altText: "Image of finished makeup"
  },
  {
    link: "https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8631.PNG",
    altText: "Holding mirror up to finished makeup"
  }
];

const natImages = [
  {
    link: "https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8636.JPEG",
    altText: "Jeanice doing makeup"
  },
  {
    link: "https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8632.PNG",
    altText: "Bride with dress"
  },
  {
    link: "https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_9555.PNG",
    altText: "Image of finished makeup"
  },
  {
    link: "https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8631.PNG",
    altText: "Holding mirror up to finished makeup"
  }
];

const studioImages = [
  {
    link: "https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8636.JPEG",
    altText: "Jeanice doing makeup"
  },
  {
    link: "https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8632.PNG",
    altText: "Bride with dress"
  },
  {
    link: "https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_9555.PNG",
    altText: "Image of finished makeup"
  },
  {
    link: "https://jeanice-mua.s3.us-east-2.amazonaws.com/images/IMG_8631.PNG",
    altText: "Holding mirror up to finished makeup"
  }
];

export default function Portfolio() {
  return (
    <Box
      sx={{
        backgroundColor: '#F7EFDA',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box id="natural">
        <ImageList sx={{ width: 500, height: 450 }} rowHeight={164}>
          <ImageListItem>
            {natImages.map(({link, altText}) => (
              <img
                src={link}
                alt={altText}
                loading="lazy"
              />
            ))}
          </ImageListItem>
        </ImageList>
      </Box>

      <Box id="glam">
        <ImageList sx={{ width: 500, height: 450 }} rowHeight={164}>
          <ImageListItem>
            {glamImages.map(({link, altText}) => (
              <img
                src={link}
                alt={altText}
                loading="lazy"
              />
            ))}
          </ImageListItem>
        </ImageList>
      </Box>

      <Box id="studio">
        <ImageList sx={{ width: 500, height: 450 }} rowHeight={164}>
          <ImageListItem>
            {studioImages.map(({link, altText}) => (
              <img
                src={link}
                alt={altText}
                loading="lazy"
              />
            ))}
          </ImageListItem>
        </ImageList>
      </Box>
    </Box>
  );
}