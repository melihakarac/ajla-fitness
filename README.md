# Ajla Fitness

A modern, responsive fitness website for personal trainer Ajla, featuring bilingual support (English/Bosnian), before/after results gallery, and comprehensive program information.

## Features

- 🌍 **Bilingual Support**: Full English and Bosnian language support with easy language switching
- 📱 **Mobile-First Design**: Fully responsive design optimized for all screen sizes
- 🎨 **Modern UI**: Clean, professional design with smooth animations
- 📸 **Results Gallery**: Interactive carousel showcasing before/after transformations
- 💪 **Program Information**: Detailed information about training programs, nutrition coaching, and supplement consultations
- ✉️ **Contact Form**: Easy-to-use contact form for inquiries
- ⚡ **Performance Optimized**: Fast loading times and smooth user experience

## Tech Stack

- **React 19.2.3** - Modern React with latest features
- **CSS3** - Custom styling with CSS variables and mobile-first approach
- **React Context API** - For language state management
- **Create React App** - Development and build tooling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ajla-fitness
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Available Scripts

### `npm start`
Runs the app in development mode. The page will reload when you make changes.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder. Optimized and minified for best performance.

### `npm run eject`
**Note: This is a one-way operation!** Ejects from Create React App to get full control over configuration.

## Project Structure

```
src/
├── components/          # React components
│   ├── common/         # Reusable components (Button, Card, Grid, etc.)
│   ├── About.js        # About section
│   ├── Contact.js       # Contact form
│   ├── Footer.js        # Footer component
│   ├── Header.js        # Navigation header
│   ├── Hero.js          # Hero section
│   ├── Programs.js       # Programs section
│   ├── Results.js       # Before/after results carousel
│   └── Testimonials.js  # Client testimonials
├── contexts/           # React contexts
│   └── LanguageContext.js  # Language state management
├── data/               # Content data
│   ├── content.en.json  # English translations
│   └── content.bs.json  # Bosnian translations
├── hooks/              # Custom React hooks
│   └── useCarousel.js   # Carousel functionality hook
├── styles/             # Global styles
│   ├── animations.css  # Animation definitions
│   └── variables.css   # CSS variables and design tokens
└── constants/          # Constants
    └── sections.js     # Section IDs and navigation links
```

## Design Principles

### Mobile-First Approach
The entire application follows mobile-first design principles:
- Styles start with mobile breakpoints
- Progressive enhancement for larger screens
- Touch-friendly interactive elements (minimum 44px touch targets)
- Fluid typography using `clamp()` for responsive scaling

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: 1024px+
- Wide: 1200px+

## Language Support

The website supports two languages:
- **English (EN)**: Default language
- **Bosnian (BS)**: Full translation support

Language switching is available in the header (desktop) or mobile menu (mobile devices).

## Sections

1. **Hero**: Main landing section with call-to-action
2. **Programs**: Training programs, nutrition coaching, online workouts, and supplement consultations
3. **About**: Information about Ajla and her approach
4. **Testimonials**: Client success stories
5. **Results**: Before/after transformation gallery with auto-sliding carousel
6. **Contact**: Contact form and motivation message

## Customization

### Adding Content
Content is managed through JSON files in `src/data/`:
- Edit `content.en.json` for English content
- Edit `content.bs.json` for Bosnian content

### Styling
- CSS variables are defined in `src/styles/variables.css`
- Component-specific styles are in their respective `.css` files
- Follow mobile-first principles when adding new styles

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary.

## Contact

For questions or support, please use the contact form on the website.
