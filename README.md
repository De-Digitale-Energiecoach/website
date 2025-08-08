# PowerWise Website

A modern React TypeScript website for PowerWise, a smart energy management platform. Built with Vite, Tailwind CSS, and shadcn/ui components.

## Features

- 🎨 Modern, responsive design
- 🌙 Dark mode support
- ⚡ Fast development with Vite
- 🎯 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 🧩 shadcn/ui components
- 📱 Mobile-first design

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Development**: ESLint, TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
website/
├── public/                   # Static files (favicon, robots.txt, images, etc.)
│   ├── favicon.ico
│   ├── logo.png
│   └── og-image.png
│
├── src/                      # Source code
│   ├── assets/               # Custom images, fonts, icons
│   ├── components/           # Reusable UI components
│   │   ├── ui/              # shadcn/ui components
│   │   ├── figma/           # Figma-specific components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Footer.tsx       # Footer component
│   │   ├── BackToTop.tsx    # Back to top button
│   │   └── AnimatedSection.tsx # Animation wrapper
│   ├── layouts/              # Page layout wrappers
│   │   └── MainLayout.tsx   # Main application layout
│   ├── pages/                # Page components
│   │   ├── Home.tsx         # Home page (contains all sections)
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Features.tsx     # Features section
│   │   ├── HowItWorks.tsx   # How it works section
│   │   ├── WhyItMatters.tsx # Why it matters section
│   │   ├── AboutUs.tsx      # About us section
│   │   ├── FAQ.tsx          # FAQ section
│   │   └── CallToAction.tsx # Call to action section
│   ├── styles/               # Global styles
│   │   └── globals.css      # Tailwind + custom CSS
│   ├── App.tsx               # Main React app
│   └── main.tsx              # Entry point for Vite
│
├── tailwind.config.js        # Tailwind config
├── postcss.config.js         # PostCSS config
├── tsconfig.json             # TypeScript config
├── index.html                # Root HTML file (used by Vite)
├── package.json              # NPM dependencies and scripts
└── vite.config.ts            # Vite config
```

## Customization

### Colors and Theme

The project uses CSS custom properties for theming. You can modify the colors in `src/styles/globals.css`:

- Primary colors: Green theme (`#025134`)
- Dark mode: Automatic with `dark` class
- Custom properties: Defined in `:root` and `.dark` selectors

### Adding New Components

1. Create your component in the `src/components/` directory
2. Import and use shadcn/ui components from `src/components/ui/`
3. Use Tailwind CSS classes for styling

### Adding New Pages

1. Create your page component in the `src/pages/` directory
2. Import and use the `MainLayout` from `src/layouts/`
3. Add the page to your routing logic

## Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## License

This project is part of the PowerWise platform. 