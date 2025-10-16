# Development Guide

This is a React + Vite application with React Router for client-side routing and Tailwind CSS for styling.

## Project Structure

\`\`\`
src/
├── components/          # Reusable React components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Footer component
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Hero.tsx        # Hero section
│   ├── CategoryCard.tsx # Category card component
│   ├── ContactForm.tsx # Contact form
│   ├── EventsSlider.tsx # Events carousel
│   ├── TestimonialsSlider.tsx # Testimonials carousel
│   └── ui/             # shadcn/ui components
├── pages/              # Page components
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   ├── EventsPage.tsx
│   └── GalleryPage.tsx
├── data/               # Static data
│   ├── categories.ts
│   ├── events.ts
│   └── testimonials.ts
├── lib/                # Utility functions
│   └── utils.ts
├── App.tsx             # Main app with routes
├── main.tsx            # Entry point
└── index.css           # Global styles
\`\`\`

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

\`\`\`bash
npm install
\`\`\`

### Development Server

\`\`\`bash
npm run dev
\`\`\`

The app will be available at `http://localhost:5173`

### Build for Production

\`\`\`bash
npm run build
\`\`\`

Output will be in the `dist/` directory.

### Preview Production Build

\`\`\`bash
npm run preview
\`\`\`

## Key Technologies

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router v6** - Client-side routing
- **Tailwind CSS v4** - Utility-first CSS
- **shadcn/ui** - Component library
- **TypeScript** - Type safety
- **Sonner** - Toast notifications
- **React Hook Form** - Form management
- **Zod** - Schema validation

## Routing

Routes are defined in `src/App.tsx` using React Router:

- `/` - Home page
- `/about` - About page
- `/contact` - Contact page
- `/events` - Events page
- `/gallery` - Gallery page

All routes are client-side and handled by React Router.

## Styling

The project uses Tailwind CSS v4 with custom design tokens defined in `src/index.css`:

- Primary colors: Black/White
- Semantic tokens: background, foreground, card, muted, etc.
- Dark mode support via `.dark` class

## Components

### UI Components
Located in `src/components/ui/`, these are shadcn/ui components:
- Button
- Card
- Input
- Textarea
- Alert

### Feature Components
Located in `src/components/`:
- Header - Navigation with mobile menu
- Footer - Footer with links
- Hero - Hero section
- CategoryCard - Category display card
- ContactForm - Contact form with validation
- EventsSlider - Events carousel
- TestimonialsSlider - Testimonials carousel

## Data Management

Static data is stored in `src/data/`:
- `categories.ts` - Training categories
- `events.ts` - Upcoming events
- `testimonials.ts` - Client testimonials

Data is imported directly into components as needed.

## Deployment

The app is deployed on Vercel with automatic deployments from the main branch.

### Vercel Configuration
- Build command: `npm run build`
- Output directory: `dist`
- Framework: None (Vite)
- SPA rewrites configured for client-side routing

## Development Tips

1. **Hot Module Replacement (HMR)** - Changes are reflected instantly during development
2. **Type Safety** - Use TypeScript for better development experience
3. **Component Reusability** - Create small, focused components
4. **Tailwind Classes** - Use utility classes for styling
5. **React Router** - Use `<Link>` for navigation instead of `<a>` tags

## Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will use the next available port.

### Build Errors
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf dist`

### Styling Issues
- Ensure Tailwind CSS is properly imported in `src/index.css`
- Check that component classes are using Tailwind utilities
- Verify dark mode is working by adding `.dark` class to `<html>`

## Performance

- **Code Splitting** - Vite automatically splits code for optimal loading
- **Tree Shaking** - Unused code is removed during build
- **Minification** - Production builds are minified with Terser
- **Source Maps** - Disabled in production for smaller bundle size

## Next Steps

1. Customize the design tokens in `src/index.css`
2. Add more pages as needed
3. Implement data fetching if needed
4. Add authentication if required
5. Deploy to Vercel or your preferred hosting
