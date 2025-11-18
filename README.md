# Harzotech Website

Modern, responsive website for Harzotech - a leading technology company building powerful SaaS solutions and automation systems for businesses across Africa and beyond.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 16, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive across all devices
- **Brand Colors**: Professional blue (#0066FF) and orange (#FF6B00) color scheme
- **SEO Optimized**: Meta tags and descriptions for all pages
- **Fast Performance**: Optimized build with static page generation

## 📄 Pages

### Home (`/`)
- Hero section with gradient background
- Company stats showcase
- About section
- Featured products grid
- Services overview
- Call-to-action section

### Products (`/products`)
Showcasing all 8 SaaS products:
1. Restaurant & Food Business SaaS
2. Real Estate & Property Management SaaS
3. Fintech & Digital Wallet Systems
4. Hotel Management SaaS
5. CRM & Sales Automation Platform
6. Point of Sale (POS) System
7. Fleet & Logistics Management System
8. Other Custom & SaaS Products

### Services (`/services`)
Highlighting 5 service categories:
1. Software Development
2. Website Design & Development
3. Marketing Automation
4. Digital Ads & Growth
5. Managed IT & Support

### About (`/about`)
- Company mission and vision
- Company story
- Core values
- Journey timeline
- Team overview

### Contact (`/contact`)
- Contact information cards
- Interactive contact form
- FAQ section
- Why choose Harzotech section

## 🎨 Brand Guidelines

### Primary Colors
- **Blue**: `#0066FF` (Primary brand color)
- **Blue Dark**: `#0052CC`
- **Blue Light**: `#3385FF`

### Secondary Colors
- **Orange**: `#FF6B00` (Accent color)
- **Orange Dark**: `#E55F00`
- **Orange Light**: `#FF8833`

### Typography
- System font stack for optimal performance
- Clean, modern sans-serif typeface

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Package Manager**: npm

## 📦 Project Structure

```
harzotech-nigeria/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── products/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── ContactForm.tsx
│       └── ProductCard.tsx
├── public/
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/agbona24/harzotech-nigeria.git
cd harzotech-nigeria
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## 🎯 Key Components

### Navigation
- Fixed top navigation with mobile menu
- Smooth scrolling
- Active link highlighting

### Footer
- Company information
- Product links
- Service links
- Contact details
- Social media links

### Button Component
Reusable button with variants:
- `primary` - Blue background
- `secondary` - Orange background
- `outline` - Border only

### Product Card
Displays product information with:
- Icon
- Title and description
- Feature list
- Call-to-action link

### Contact Form
Interactive form with:
- Form validation
- Service/product selection
- Success/error states
- Responsive design

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Configuration

### Tailwind CSS
Custom color variables are defined in `app/globals.css` and can be used throughout the project:
- `var(--primary-blue)`
- `var(--primary-orange)`
- `var(--gray-*)`

## 📈 Performance

- Static page generation for optimal performance
- Optimized images and assets
- Minimal JavaScript bundle
- Fast page loads

## 🤝 Contributing

This is a private project for Harzotech. For any changes or improvements, please contact the development team.

## 📧 Contact

- **Email**: info@harzotech.com.ng
- **Website**: harzotech.com.ng

## 📝 License

© 2024 Harzotech. All rights reserved.
