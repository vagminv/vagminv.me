# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS. The site is a single-page application showcasing personal information, work experience, projects, education, and hobbies. Features include dark mode support and resume download functionality.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs at http://localhost:5173)
npm run dev

# Type check without building
npm run type-check

# Build for production (includes TypeScript compilation)
npm run build

# Preview production build
npm run preview
```

## Agent Skills

This project uses [Vercel Agent Skills](https://github.com/vercel-labs/agent-skills) for React best practices:

```bash
# Install/update agent skills
npx add-skill vercel-labs/agent-skills
```

**What this provides:**
- 40+ React and Next.js performance optimization rules
- 8 categories ordered by impact (CRITICAL to LOW)
- Automatic detection by AI coding agents (Claude Code, Cursor, etc.)
- Structured code review capabilities

**Agent Skills guide development by:**
- Eliminating async waterfalls
- Reducing bundle size
- Optimizing re-renders
- Applying performance best practices from Vercel Engineering

Check `AGENTS.md` or `.skills/` directory for installed skills.

## Node Version Management

This project uses NVM to manage Node.js versions:
```bash
nvm install  # Install the version specified in .nvmrc (25.4.0)
nvm use      # Switch to the correct version
```

## Architecture

### TypeScript
- Project uses TypeScript for type safety
- Type definitions in `src/types/index.ts` define interfaces for all data structures
- All React components use `.tsx` extension
- Configuration files use `.ts` extension
- TSConfig targets modern ES with React JSX transform

### Entry Point and Rendering
- `index.html` contains a single `<div id="main">` where the React app mounts
- `src/index.tsx` is the entry point that renders `App.tsx` into the DOM with StrictMode
- App is wrapped with `ThemeProvider` for dark mode context

### Component Structure
- `src/App.tsx` is the main component that renders all sections in a vertical layout
- Components are organized in `src/components/` and follow a single-file-per-component pattern
- All sections (Header, SocialLinks, About, Education, WorkExperience, Projects, Hobbies, Contact, ResumeDownload, ThemeToggle) are rendered sequentially in App.tsx
- Components are typed with proper interfaces and return `JSX.Element`

### Data Architecture
- All content is centralized in `src/data/content.ts` as exported typed constants
- Components import specific data they need from this single source of truth
- To update content (work experience, projects, etc.), edit `src/data/content.ts`
- Data structure uses:
  - Objects for single entities (personalInfo, education, contact, resume)
  - Arrays for lists (workExperience, projects, hobbies, socialLinks)
- All data exports are typed according to interfaces in `src/types/index.ts`

### Theme System (Dark Mode)
- Tailwind configured with `darkMode: 'class'` for class-based theme switching
- `src/context/ThemeContext.tsx` provides theme state and toggle function
- Theme preference persists in localStorage
- Respects system `prefers-color-scheme` on first visit
- All components styled with dark mode variants using `dark:` prefix
- ThemeToggle component provides accessible UI for switching themes

### Styling Architecture
- **SCSS-first approach**: Complex styles, color schemes, fonts, and themes managed in SCSS
- **Tailwind for utilities only**: Use Tailwind exclusively for simple layout utilities (flex, grid, gap, padding, margin)
- **Modular SCSS structure**:
  ```
  src/styles/
  ├── _variables.scss    # Color palettes, fonts, spacing, breakpoints
  ├── _mixins.scss       # Reusable CSS patterns and functions
  ├── _base.scss         # Reset and base element styles
  ├── _typography.scss   # Font styles and text hierarchy
  ├── _components.scss   # Component-specific styles
  ├── _themes.scss       # Light/dark theme CSS custom properties
  └── main.scss          # Main entry point (imports all partials)
  ```
- **CSS Custom Properties for theming**: Colors defined as `var(--bg-primary)`, `var(--text-primary)`, etc.
- **Semantic class names**: Components use BEM-style class names (`.card`, `.button`, `.social-links__link`)
- **Theme switching**: Controlled via `[data-theme='dark']` attribute on root element
- Icons come from `lucide-react` package

**Styling Guidelines:**
- ✅ USE Tailwind for: `flex`, `grid`, `gap-*`, `p-*`, `m-*`, `hidden`, `block`
- ❌ DON'T USE Tailwind for: colors, fonts, complex hover states, transitions, shadows
- All color values use CSS custom properties for automatic theme support
- Complex interactions and animations defined in SCSS
- Responsive breakpoints managed via SCSS mixins

### Build Configuration
- Vite is the build tool (configured in `vite.config.ts`)
- TypeScript compilation happens before Vite build
- ESLint runs automatically during development via `vite-plugin-eslint2`
- ESLint configured for TypeScript with `@typescript-eslint/parser`
- PostCSS processes Tailwind CSS and Autoprefixer
- SCSS preprocessor configured to auto-import variables and mixins
- ESLint configuration uses flat config format with React, accessibility, TypeScript, and import plugins

### React Best Practices
Following [Vercel's React Best Practices](https://vercel.com/blog/introducing-react-best-practices):

**Performance Principles (by priority):**
1. **Eliminate Async Waterfalls**: Parallelize independent async operations
2. **Reduce Bundle Size**: Minimize dependencies, use code splitting
3. **Optimize Re-renders**: Use React.memo(), useMemo(), useCallback() appropriately

**Component Guidelines:**
- Keep components focused on single responsibilities
- Use lazy initialization for expensive state: `useState(() => expensiveOp())`
- Memoize components that receive static data
- Extract reusable logic into custom hooks
- Avoid prop drilling - use composition or context

**Code Quality:**
- Address performance regressions immediately
- Prioritize high-impact fixes before micro-optimizations
- Combine multiple iterations over same data into single passes

## Key Features

### Resume Download
- PDF resume stored in `public/resume.pdf`
- `ResumeDownload` component triggers browser download with proper filename
- Resume metadata configured in `src/data/content.ts`
- Button styled for both light and dark modes

### Dark Mode
- Toggle between light and dark themes
- Preference persists across sessions (localStorage)
- Respects system color scheme preference
- All components support both themes

## Adding New Sections

To add a new section to the portfolio:
1. Define TypeScript interface in `src/types/index.ts` if needed
2. Add typed data to `src/data/content.ts`
3. Create a new component in `src/components/` with `.tsx` extension
4. Import and render it in `src/App.tsx` in the desired order
5. Ensure component has dark mode styles (`dark:` classes)

## Plans Directory

The `/plans` directory contains implementation plans and feature roadmaps. Check `plans/plan.md` for detailed implementation steps for major features.

## Deployment

The site is deployed from the main branch on Render as a static site. Production builds are created in the `dist/` directory.
