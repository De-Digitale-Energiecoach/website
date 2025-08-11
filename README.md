# Powerwise Website

A modern, responsive website for Powerwise - an AI-powered energy coaching app that helps users reduce energy bills and lower their CO₂ footprint.


## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (buttons, cards, etc.)
│   ├── Header.tsx      # Navigation header with language switcher
│   ├── Footer.tsx      # Site footer
│   └── LanguageSwitcher.tsx  # Language toggle component
├── sections/           # Page sections
│   ├── Hero.tsx        # Hero section
│   ├── Features.tsx    # Features showcase
│   ├── HowItWorks.tsx  # How it works section
│   ├── WhyItMatters.tsx # Why it matters section
│   ├── AboutUs.tsx     # About us section
│   └── CallToAction.tsx # Call to action section
├── i18n/               # Internationalization
│   ├── index.ts        # i18n configuration
│   └── locales/        # Translation files
│       ├── en.json     # English translations
│       └── nl.json     # Dutch translations
├── layouts/            # Layout components
├── pages/              # Page components
└── styles/             # Global styles
```

## 🎨 Design System

The website uses a modern design system built with:
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible UI primitives
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Customization

### Styling
- Global styles are in `src/styles/globals.css`
- Component-specific styles use Tailwind CSS classes
- Theme colors and design tokens are defined in `tailwind.config.js`

### Content
- All text content is managed through the i18n system
- Images and assets are in `src/assets/`
- Static content can be updated in the translation files

## 📄 License

This project is licensed under the MIT License. 
