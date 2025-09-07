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
- **Terminal Interface**: Interactive terminal-style portfolio (`src/components/Terminal.jsx`)
  - React component with command-line interface simulation
  - Commands: help, welcome, about, projects, contact, experience, clear
  - State management for command history and user input

### Project Structure
- `src/pages/index.astro` - Main page with Terminal component
- `src/components/Terminal.jsx` - Interactive terminal component
- `src/styles/terminal.css` - Terminal styling
- `astro.config.mjs` - Astro configuration with React integration and Vercel adapter

### Configuration
- **Output**: Server-side rendering enabled (`output: "server"`)
- **Adapter**: Vercel serverless adapter for deployment
- **Integrations**: React for interactive components
- **TypeScript**: Strict mode configuration via `astro/tsconfigs/strict`