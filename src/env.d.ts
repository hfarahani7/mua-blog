/// <reference types="astro/client" />

// Public build-time variables (see .env.example and CLAUDE.md → Forms).
interface ImportMetaEnv {
  readonly PUBLIC_EMAILJS_PUBLIC_KEY: string;
  readonly PUBLIC_EMAILJS_SERVICE_ID: string;
  readonly PUBLIC_EMAILJS_TEMPLATE_ID: string;
  readonly PUBLIC_OWNER_EMAIL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
