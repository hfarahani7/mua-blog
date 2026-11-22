# EmailJS Setup Guide

The inquiry form on `/inquiries` sends email from the browser through **EmailJS**. There is no backend.

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
4. Set **To Email** to `{{to_email}}` and **Reply To** to `{{reply_to_email}}`
5. Replace the template content with this:

```
From: {{from_email}} ({{from_name}})
Reply-To: {{reply_to_email}}
Subject: {{subject}}

---

{{message}}
```

6. Click **Save**
7. Copy your **Template ID** (looks like `template_xxxxx`)

The site sends exactly these template parameters: `to_email`, `from_name`, `from_email`, `subject`, `message`, `reply_to_email`. Don't rename them in the template.

## 4. Get Your Public Key

1. Go to **Account** > **API Keys**
2. Copy your **Public Key** (it's safe to expose publicly in your app)

## 5. Configure the values

### Locally

```bash
cp .env.example .env
```

Fill in:

```
PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_from_step_4
PUBLIC_EMAILJS_SERVICE_ID=your_service_id_from_step_2
PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_from_step_3
PUBLIC_OWNER_EMAIL=your-email@example.com
```

### On GitHub (production)

The deploy workflow reads the same four names from **repository variables** (not secrets):
**Settings → Secrets and variables → Actions → Variables → New repository variable.**
A push to `master` fails the build if any of them is missing, so a broken form is never deployed.

## 6. Test the Form

```bash
npm install
npm run dev
```

Open `http://localhost:4321/inquiries`, send a test inquiry and check your inbox.

## Troubleshooting

### "Sorry, your inquiry couldn't be sent" error
- Check that all four `PUBLIC_EMAILJS_*` / `PUBLIC_OWNER_EMAIL` values are set (in `.env` locally, or as GitHub variables)
- Restart `npm run dev` after editing `.env`
- Verify your email service is properly authenticated in the EmailJS dashboard
- Check the browser console for the detailed EmailJS error

### Email not received
- Check your spam/junk folder
- Verify `PUBLIC_OWNER_EMAIL` and the template's **To Email** field
- Make sure your email service in EmailJS is active and verified

### Rate Limiting
- The EmailJS free tier has rate limits. If you hit them, upgrade your plan or wait for the limit to reset
