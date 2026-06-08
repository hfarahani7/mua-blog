# EmailJS Setup Guide

This project now uses **EmailJS** to handle form submissions and send emails. Follow these steps to set it up:

## 1. Create an EmailJS Account

1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Click **Sign Up** and create a free account
3. Verify your email address

## 2. Set Up an Email Service

1. In the EmailJS dashboard, go to **Email Services** (left sidebar)
2. Click **Add Service**
3. Choose your email provider:
   - **Gmail**: Select "Gmail" and follow the authentication steps
   - **SMTP**: Choose "Other" and enter your email provider's SMTP settings
4. Click **Create Service**
5. Copy your **Service ID** (looks like `service_xxxxx`)

## 3. Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Name it something like "Inquiry Form Template"
4. Replace the template content with this:

```
From: {{from_email}} ({{from_name}})
Reply-To: {{reply_to_email}}
Subject: {{subject}}

---

{{message}}
```

5. Click **Save**
6. Copy your **Template ID** (looks like `template_xxxxx`)

## 4. Get Your API Keys

1. Go to **Account** > **API Keys**
2. Copy your **Public Key** (it's safe to expose publicly in your app)

## 5. Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`
   ```bash
   cp .env.local.example .env.local
   ```

2. Fill in the values:
   ```
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_from_step_4
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_from_step_2
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_from_step_3
   NEXT_PUBLIC_OWNER_EMAIL=your-email@example.com
   ```

## 6. Install Dependencies

```bash
npm install --legacy-peer-deps
```

## 7. Test the Form

1. Run the development server:
   ```bash
   npm run dev
   ```

2. Navigate to the Inquiries page (`/inquiries`)
3. Fill out and submit a test form
4. Check your email inbox for the inquiry

## How It Works

- When a user submits the form, it sends the data directly to EmailJS (client-side)
- EmailJS processes the request and sends an email to your address
- No backend server needed!
- The form data is formatted nicely and sent as an email

## Troubleshooting

### "Failed to send inquiry" error
- Check that all environment variables are correctly set in `.env.local`
- Verify your email service is properly authenticated in EmailJS dashboard
- Check browser console for more detailed error messages

### Email not received
- Check your spam/junk folder
- Verify the NEXT_PUBLIC_OWNER_EMAIL is correct
- Make sure your email service in EmailJS is active and verified

### Rate Limiting
- EmailJS free tier has rate limits. If you hit them, upgrade your plan or wait for the limit to reset
