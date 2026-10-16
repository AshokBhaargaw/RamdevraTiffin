# Ramdevra Tiffin Services - Official Website

High-converting, ultra-fast, SEO-optimized website built for **Ramdevra Tiffin Services**. Designed specifically to drive high-volume customer calls and WhatsApp orders to **+91 7014372575**, fully pre-configured for **Netlify** hosting.

---

## 🚀 Key Features

### 1. High-Conversion Call & WhatsApp Architecture
- **Persistent Mobile Call Bar**: Sticky bottom bar with one-tap dialing (`tel:+917014372575`) with pulse animations.
- **Direct WhatsApp Ordering**: Pre-formatted WhatsApp order links (`wa.me/917014372575`) with customized meal selection.
- **Top Announcement & Hero CTAs**: Urgent, prominent call prompts with chef direct line options.
- **Netlify Form Integration**: "Request Callback / Book Tiffin" form with fallback to instant WhatsApp message and telephone dialer.

### 2. Required Local & Technical SEO
- **Semantic HTML5 Architecture**: Proper `header`, `main`, `section`, `article`, `footer`, and single `h1` structure.
- **Schema.org Structured Data (JSON-LD)**:
  - `FoodEstablishment` & `LocalBusiness` schema with cuisine, ratings, hours, price range, and telephone.
  - `FAQPage` schema enabling rich search results directly on Google SERPs.
- **Social Graph & Meta**: Open Graph (`og:image`, `og:title`), Twitter Cards, and canonical tags.
- **Search Engine Directives**: Valid [`sitemap.xml`](sitemap.xml) and [`robots.txt`](robots.txt) for crawlability.
- **Google Business Profile Integration**: Direct link to the official Google Business / Maps profile (`https://share.google/LCebzyuJUJPaSat8O`).

### 3. Rich User Experience & Visuals
- **Interactive Meal Pricing Switcher**: Toggle between Daily Tiffin and Monthly Subscriptions (15% savings).
- **Weekly Rotating Menu**: Interactive Monday to Sunday daily menu schedule for Lunch and Dinner.
- **Photorealistic Food Imagery**: High-resolution, authentic Indian thali and tiffin visuals.
- **Customer Reviews & FAQ**: Verified social proof and interactive expandable FAQ accordion.

---

## 🌐 How to Host on Netlify

### Option A: Drag & Drop (Zero Code / Easiest)
1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Log in to your Netlify account.
3. Drag the entire `RamdevraTiffin` folder into the drop zone.
4. Your website is live in 5 seconds!

### Option B: Connect via GitHub / GitLab
1. Push this folder to a GitHub repository.
2. On Netlify, click **"Add new site" > "Import an existing project"**.
3. Select your repository.
4. Settings:
   - **Build command**: *(leave empty)*
   - **Publish directory**: `.` *(current directory)*
5. Click **Deploy Site**.

### Option C: Using Netlify CLI
```bash
# 1. Install Netlify CLI (if not already installed)
npm install -g netlify-cli

# 2. Deploy directly from this directory
netlify deploy --prod --dir=.
```

---

## 📁 File Structure
```
RamdevraTiffin/
├── index.html            # Main semantic webpage with JSON-LD schema & CTAs
├── netlify.toml          # Netlify configuration & security/caching headers
├── _redirects            # Netlify routing rules
├── sitemap.xml           # XML sitemap for Google Search Console
├── robots.txt            # Search crawler directives
├── manifest.json         # PWA mobile app manifest
├── assets/
│   ├── css/
│   │   └── style.css     # Responsive design system & micro-animations
│   ├── js/
│   │   └── main.js       # Pricing calculator, menu switcher, form handler
│   └── images/
│       ├── hero-thali.jpg
│       ├── standard-tiffin.jpg
│       ├── deluxe-thali.jpg
│       └── fresh-kitchen.jpg
└── README.md
```

---

## 📞 Primary Contact
- **Phone**: [+91 7014372575](tel:+917014372575)
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/917014372575)
- **Google Maps**: [View Profile](https://share.google/LCebzyuJUJPaSat8O)
