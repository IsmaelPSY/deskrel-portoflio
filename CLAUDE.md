# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands are run from the project root:

- `npm install` - Install dependencies
- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Type check and build production site to ./dist/
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

## Architecture

This is an Astro-based portfolio website with SSR capabilities configured for Vercel deployment.

### Key Components
- **Portfolio Component**: Main React component rendering the complete portfolio (`src/components/Portfolio.jsx`)
  - Professional portfolio with sections: Hero, About, Experience, Projects, Education, Contact
  - Dark/Light theme toggle with localStorage persistence
  - Responsive design with CSS Grid and Flexbox layouts
  - Dynamic content rendering from hardcoded data arrays

### Project Structure
- `src/pages/index.astro` - Main page with Portfolio component and meta tags
- `src/components/Portfolio.jsx` - Complete portfolio React component with all sections
- `src/styles/portfolio.css` - Comprehensive styling with CSS custom properties for theming
- `astro.config.mjs` - Astro configuration with React integration and Vercel adapter

### Content Management
The portfolio data is currently hardcoded within the Portfolio.jsx component:
- `experience` array - Work history with detailed responsibilities and technologies
- `projects` array - Featured projects with descriptions, technologies, and highlights
- `skills` array - Technical skills with proficiency levels and categories
- `education` array - Educational background and certifications
- `languages` array - Language proficiencies

### Styling Architecture
- CSS custom properties (`--bg-primary`, `--text-primary`, etc.) for theme management
- Responsive breakpoints at 768px and 480px
- Component-based styling with consistent spacing and typography
- Smooth transitions and hover effects throughout

### Configuration
- **Output**: Server-side rendering enabled (`output: "server"`)
- **Adapter**: Vercel serverless adapter for deployment
- **Integrations**: React for interactive components
- **TypeScript**: Strict mode configuration via `astro/tsconfigs/strict`