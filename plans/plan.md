# Implementation Plan: TypeScript + Code Quality + Dark Mode + Resume Download

**Goal**: Migrate to TypeScript, improve code quality with React best practices, implement SCSS-based styling architecture, add dark mode, and resume download functionality.

**Reference**: [Vercel React Best Practices](https://vercel.com/blog/introducing-react-best-practices)

---

## Phase 0: Install Vercel Agent Skills (React Best Practices)

**Goal**: Install Vercel's Agent Skills to provide AI agents (Claude Code, Cursor, etc.) with React performance best practices.

### 0.1 Install Agent Skills

Run the following command in your project root:

```bash
npx add-skill vercel-labs/agent-skills
```

**What this does:**
- Fetches [Vercel's agent-skills repository](https://github.com/vercel-labs/agent-skills)
- Installs the react-best-practices skill containing 40+ performance rules
- Creates an `AGENTS.md` file that AI agents can reference
- No further configuration needed - agents detect skills automatically

**What you get:**
- 8 performance categories (CRITICAL to LOW impact)
- 40+ React and Next.js optimization rules
- Concrete code examples for each pattern
- Structured performance review capabilities

### 0.2 Verify Installation

After installation:
- Check that `AGENTS.md` or `.skills/` directory exists in project root
- AI agents (Claude Code) will automatically reference these rules when reviewing code
- Test by asking the agent to review component performance

**Resources:**
- [Introducing React Best Practices](https://vercel.com/blog/introducing-react-best-practices)
- [Agent Skills Repository](https://github.com/vercel-labs/agent-skills)
- [React Best Practices Skill](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices)

---

## Phase 1: TypeScript Migration

### 1.1 Setup TypeScript Configuration
**Files to create/modify:**
- Create `tsconfig.json` with React + Vite configuration
- Update `vite.config.js` → `vite.config.ts`
- Update `eslint.config.js` → `eslint.config.ts`
- Update `tailwind.config.js` → `tailwind.config.ts`

**Dependencies to install:**
```bash
npm install --save-dev typescript @types/react @types/react-dom @types/node
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

### 1.2 Rename Files to TypeScript
**File conversions (.jsx → .tsx, .js → .ts):**
- `src/index.jsx` → `src/index.tsx`
- `src/App.jsx` → `src/App.tsx`
- `src/data/content.js` → `src/data/content.ts`
- All components in `src/components/*.jsx` → `src/components/*.tsx`

### 1.3 Define Type Interfaces
**Create `src/types/index.ts` with interfaces for:**
```typescript
export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  profileImage: string;
}

export interface SocialLink {
  type: string;
  url: string;
  icon: string;
}

export interface Education {
  institution: string;
  logo: string;
  degree: string;
  date: string;
  gpa: string;
  coursework: string[];
}

export interface WorkExperience {
  company: string;
  logo: string;
  role: string;
  date: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
}

export interface Contact {
  text: string;
  email: string;
}

export interface Resume {
  fileName: string;
  path: string;
  downloadText: string;
}
```

### 1.4 Add Types to Components
**For each component, add:**
- Type imports
- Props interfaces
- Proper typing for hooks
- Return type annotations: `JSX.Element`

**Example:**
```typescript
import { PersonalInfo } from '../types';

interface HeaderProps {
  // Add props if needed
}

function Header(): JSX.Element {
  // Component code
}

export default Header;
```

### 1.5 Update Data File
**`src/data/content.ts`:**
- Import all types from `src/types/index.ts`
- Add type annotations to all exported constants
- Ensure data matches type definitions

### 1.6 Update package.json Scripts
```json
"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "preview": "vite preview",
  "type-check": "tsc --noEmit"
}
```

---

## Phase 2: Code Quality & Styling Architecture Refactor

**Goal**: Apply Vercel React best practices and establish SCSS-based styling architecture.

### 2.1 React Best Practices (Vercel Guidelines)

**Performance Optimizations:**

1. **Eliminate Async Waterfalls**
   - Ensure no sequential async operations that could be parallel
   - For future data fetching, parallelize independent operations

2. **Lazy Initialization for Expensive State**
   ```typescript
   // If we have expensive computations, use lazy initialization
   const [state, setState] = useState(() => expensiveOperation());
   ```

3. **Optimize Re-renders**
   - Ensure components only re-render when necessary
   - Use `React.memo()` for components that receive same props frequently
   - Consider `useMemo()` and `useCallback()` for expensive computations

4. **Component Structure Best Practices**
   - Keep components focused and single-purpose
   - Extract reusable logic into custom hooks
   - Avoid prop drilling - use composition or context when appropriate

**Apply to Current Components:**
- Review each component for unnecessary re-renders
- Memoize components that receive static data (About, Education, Contact)
- Extract repeated logic into custom hooks if needed

### 2.2 SCSS Architecture Setup

**Goal**: Move global styles, color schemes, fonts, and complex CSS to SCSS. Use Tailwind only for simple utilities (spacing, flex, grid).

**File Structure:**
```
src/styles/
├── _variables.scss      # Color schemes, fonts, spacing
├── _mixins.scss         # Reusable CSS patterns
├── _base.scss           # Reset and base styles
├── _typography.scss     # Font styles and text
├── _components.scss     # Component-specific styles
├── _themes.scss         # Light/dark theme definitions
└── main.scss            # Main entry point
```

### 2.3 Create SCSS Files

**`src/styles/_variables.scss`:**
```scss
// Color Palette
$colors: (
  // Light theme
  'light-bg': #ffffff,
  'light-text': #111827,
  'light-text-secondary': #6b7280,
  'light-border': #e5e7eb,
  'light-hover': #f9fafb,
  'light-accent': #111827,

  // Dark theme
  'dark-bg': #111827,
  'dark-text': #f9fafb,
  'dark-text-secondary': #9ca3af,
  'dark-border': #374151,
  'dark-hover': #1f2937,
  'dark-accent': #f9fafb,

  // Semantic colors
  'primary': #111827,
  'secondary': #6b7280,
  'accent': #3b82f6,
);

// Typography
$font-primary: 'Inter', system-ui, -apple-system, sans-serif;
$font-mono: 'JetBrains Mono', 'Roboto Mono', monospace;

$font-sizes: (
  'xs': 0.75rem,
  'sm': 0.875rem,
  'base': 1rem,
  'lg': 1.125rem,
  'xl': 1.25rem,
  '2xl': 1.5rem,
  '3xl': 1.875rem,
  '4xl': 2.25rem,
);

// Spacing
$spacing-unit: 0.25rem;

// Breakpoints
$breakpoints: (
  'sm': 640px,
  'md': 768px,
  'lg': 1024px,
  'xl': 1280px,
);

// Transitions
$transition-fast: 150ms ease;
$transition-base: 200ms ease;
$transition-slow: 300ms ease;

// Shadows
$shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
$shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
$shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
```

**`src/styles/_mixins.scss`:**
```scss
// Responsive breakpoint mixin
@mixin respond-to($breakpoint) {
  @if map-has-key($breakpoints, $breakpoint) {
    @media (min-width: map-get($breakpoints, $breakpoint)) {
      @content;
    }
  }
}

// Theme color mixin
@function color($color-name) {
  @return map-get($colors, $color-name);
}

// Flexbox center mixin
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

// Card style mixin
@mixin card {
  background: var(--bg-secondary);
  border-radius: 0.5rem;
  padding: 1.5rem;
  transition: all $transition-base;

  &:hover {
    transform: translateY(-2px);
    box-shadow: $shadow-lg;
  }
}

// Button reset mixin
@mixin button-reset {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font: inherit;
  color: inherit;
}
```

**`src/styles/_themes.scss`:**
```scss
// CSS Custom Properties for theming
:root {
  --bg-primary: #{color('light-bg')};
  --bg-secondary: #{color('light-hover')};
  --text-primary: #{color('light-text')};
  --text-secondary: #{color('light-text-secondary')};
  --border-color: #{color('light-border')};
  --accent-color: #{color('light-accent')};
  --hover-bg: #{color('light-hover')};
}

[data-theme='dark'] {
  --bg-primary: #{color('dark-bg')};
  --bg-secondary: #{color('dark-hover')};
  --text-primary: #{color('dark-text')};
  --text-secondary: #{color('dark-text-secondary')};
  --border-color: #{color('dark-border')};
  --accent-color: #{color('dark-accent')};
  --hover-bg: #{color('dark-hover')};
}

// Smooth theme transitions
* {
  transition: background-color $transition-base,
              color $transition-base,
              border-color $transition-base;
}
```

**`src/styles/_base.scss`:**
```scss
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  font-family: $font-primary;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
}

#main {
  min-height: 100vh;
}
```

**`src/styles/_typography.scss`:**
```scss
h1, h2, h3, h4, h5, h6 {
  margin: 0;
  font-weight: 700;
  line-height: 1.2;
  color: var(--text-primary);
}

h1 {
  font-size: map-get($font-sizes, '3xl');

  @include respond-to('md') {
    font-size: map-get($font-sizes, '4xl');
  }
}

h2 {
  font-size: map-get($font-sizes, '2xl');

  @include respond-to('md') {
    font-size: map-get($font-sizes, '3xl');
  }
}

h3 {
  font-size: map-get($font-sizes, 'xl');
}

p {
  margin: 0;
  color: var(--text-primary);
  line-height: 1.6;
}

a {
  color: var(--accent-color);
  text-decoration: none;
  transition: opacity $transition-fast;

  &:hover {
    opacity: 0.8;
  }
}

.mono {
  font-family: $font-mono;
}
```

**`src/styles/_components.scss`:**
```scss
// Section styling
.section {
  margin-bottom: 4rem;

  &__title {
    margin-bottom: 1.5rem;
    font-size: map-get($font-sizes, 'xl');
    font-weight: 600;
  }
}

// Card components
.card {
  @include card;
  border: 1px solid var(--border-color);
}

// Social links
.social-links {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;

  &__link {
    @include flex-center;
    padding: 0.5rem 0.75rem;
    background: var(--bg-secondary);
    border-radius: 0.375rem;
    font-size: map-get($font-sizes, 'sm');
    transition: all $transition-fast;

    &:hover {
      background: var(--hover-bg);
      transform: translateY(-1px);
    }
  }
}

// Project cards
.project-card {
  @include card;
  border: 1px solid var(--border-color);

  &__title {
    font-size: map-get($font-sizes, 'lg');
    margin-bottom: 0.5rem;
  }

  &__description {
    color: var(--text-secondary);
    margin-bottom: 1rem;
  }

  &__tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  &__tag {
    padding: 0.25rem 0.75rem;
    background: var(--accent-color);
    color: var(--bg-primary);
    border-radius: 9999px;
    font-size: map-get($font-sizes, 'xs');
    font-weight: 500;
  }
}

// Button styles
.button {
  @include button-reset;
  @include flex-center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--accent-color);
  color: var(--bg-primary);
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all $transition-fast;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
}

// Theme toggle
.theme-toggle {
  @include button-reset;
  @include flex-center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  background: var(--bg-secondary);
  transition: all $transition-fast;

  &:hover {
    background: var(--hover-bg);
  }
}
```

**`src/styles/main.scss`:**
```scss
@import 'variables';
@import 'mixins';
@import 'themes';
@import 'base';
@import 'typography';
@import 'components';
```

### 2.4 Update Component Files

**Remove most Tailwind classes, use semantic class names and SCSS:**

**Example - Before (Header.tsx):**
```tsx
<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
  <h1 className="text-3xl font-bold text-gray-900 mb-2">
```

**After:**
```tsx
<div className="flex flex-col sm:flex-row gap-6">
  <h1 className="header__title">
```

**Tailwind Usage Guidelines:**
- ✅ **USE Tailwind for**: `flex`, `grid`, `gap-*`, `p-*`, `m-*`, `hidden`, `block`, `inline-flex`
- ❌ **DON'T USE Tailwind for**: colors, fonts, complex hover states, transitions, shadows

### 2.5 Update Vite Config
**Modify `vite.config.ts` to load main SCSS:**
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint2'
import autoprefixer from 'autoprefixer'
import tailwindcss from '@tailwindcss/postcss'

export default defineConfig({
  plugins: [
    react(),
    eslint(),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/_variables.scss"; @import "./src/styles/_mixins.scss";`
      }
    }
  },
})
```

### 2.6 Update index.tsx
**Replace style.scss import:**
```typescript
import './styles/main.scss'
```

### 2.7 Component Refactoring Checklist

For each component:
- [ ] Remove Tailwind color/font/complex utility classes
- [ ] Add semantic class names (BEM style)
- [ ] Create corresponding SCSS in `_components.scss`
- [ ] Use CSS custom properties for theme colors
- [ ] Keep Tailwind for layout utilities only
- [ ] Apply React best practices (memoization where appropriate)

---

## Phase 3: Dark Mode Implementation

### 3.1 Create Theme Context
**Create `src/context/ThemeContext.tsx`:**
```typescript
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored) return stored;

    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;

    // Remove previous theme
    root.removeAttribute('data-theme');

    // Set new theme
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    }

    // Persist to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
```

### 3.2 Create Theme Toggle Component
**Create `src/components/ThemeToggle.tsx`:**
```typescript
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function ThemeToggle(): JSX.Element {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}

export default ThemeToggle;
```

### 3.3 Wrap App with Theme Provider
**Update `src/index.tsx`:**
```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { ThemeProvider } from './context/ThemeContext'
import './styles/main.scss'

createRoot(document.getElementById('main')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
```

### 3.4 Add Theme Toggle to UI
**Update `src/App.tsx`:**
- Import `ThemeToggle`
- Add to Header area (top-right)

---

## Phase 4: Resume Download Feature

### 4.1 Setup Resume File Structure
**User will provide:**
- PDF resume file → place in `public/resume.pdf`

### 4.2 Add Resume Data to Content
**Update `src/data/content.ts`:**
```typescript
export const resume: Resume = {
  fileName: "Vagmin_Viswanathan_Resume.pdf",
  path: "/resume.pdf",
  downloadText: "Download Resume"
}
```

### 4.3 Create Resume Download Component
**Create `src/components/ResumeDownload.tsx`:**
```typescript
import { Download } from 'lucide-react';
import { resume } from '../data/content';

function ResumeDownload(): JSX.Element {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume.path;
    link.download = resume.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="button"
      aria-label="Download resume"
    >
      <Download size={18} />
      <span>{resume.downloadText}</span>
    </button>
  );
}

export default ResumeDownload;
```

### 4.4 Add Resume Button to UI
**Options:**
- **Header**: Prominent placement for recruiters
- **Contact section**: Natural location for next steps
- **Both**: Icon in header, full button in contact

---

## Testing Checklist

### TypeScript Migration
- [ ] No TypeScript errors (`npm run type-check`)
- [ ] All components render correctly
- [ ] Dev server runs without errors
- [ ] Build completes successfully (`npm run build`)
- [ ] Preview works (`npm run preview`)
- [ ] ESLint passes with TypeScript files

### Code Quality & Styling
- [ ] SCSS compiles without errors
- [ ] CSS custom properties work correctly
- [ ] All components styled with SCSS classes
- [ ] Tailwind only used for layout utilities
- [ ] No console errors or warnings
- [ ] Responsive design works on all breakpoints
- [ ] Components follow React best practices
- [ ] No unnecessary re-renders

### Dark Mode
- [ ] Theme toggle switches between light and dark
- [ ] Theme persists on page reload (localStorage)
- [ ] All text is readable in both modes
- [ ] All components adapt to theme
- [ ] System preference detected on first visit
- [ ] Smooth transitions between themes
- [ ] No flash of wrong theme on load
- [ ] Keyboard accessible (Enter/Space to toggle)
- [ ] Proper ARIA labels

### Resume Download
- [ ] Button visible and styled correctly
- [ ] Click triggers download
- [ ] File downloads with correct name
- [ ] Works in both light and dark mode
- [ ] Button is keyboard accessible
- [ ] Proper aria-label for accessibility
- [ ] Hover state provides visual feedback

---

## File Changes Summary

### New Files
- `tsconfig.json`
- `src/types/index.ts`
- `src/styles/_variables.scss`
- `src/styles/_mixins.scss`
- `src/styles/_base.scss`
- `src/styles/_typography.scss`
- `src/styles/_components.scss`
- `src/styles/_themes.scss`
- `src/styles/main.scss`
- `src/context/ThemeContext.tsx`
- `src/components/ThemeToggle.tsx`
- `src/components/ResumeDownload.tsx`
- `public/resume.pdf` (user provided)

### Renamed Files
- `vite.config.js` → `vite.config.ts`
- `eslint.config.js` → `eslint.config.ts`
- `tailwind.config.js` → `tailwind.config.ts`
- `src/index.jsx` → `src/index.tsx`
- `src/App.jsx` → `src/App.tsx`
- `src/data/content.js` → `src/data/content.ts`
- All `src/components/*.jsx` → `src/components/*.tsx`

### Removed Files
- `src/style.scss` (replaced by modular SCSS structure)

### Modified Files
- `package.json` (scripts and dependencies)
- All component files (SCSS classes instead of Tailwind)
- `src/data/content.ts` (types, resume data)
- `src/App.tsx` (ThemeProvider, ThemeToggle, ResumeDownload)
- `index.html` (if script reference needs update)

---

## Dependencies to Install

```bash
# TypeScript and types
npm install --save-dev typescript @types/react @types/react-dom @types/node

# TypeScript ESLint
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin

# SCSS (should already be installed via sass package)
# If not: npm install --save-dev sass
```

---

## Implementation Order

1. **Install Agent Skills** (Phase 0)
   - Run npx add-skill command
   - Verify installation
   - Test agent can reference rules

2. **TypeScript Migration** (Phase 1)
   - Setup and configuration
   - File conversions
   - Type definitions
   - Verify everything builds

3. **Code Quality & Styling Refactor** (Phase 2)
   - Create SCSS architecture
   - Refactor components
   - Apply React best practices (guided by Agent Skills)
   - Test thoroughly

4. **Dark Mode** (Phase 3)
   - Theme context and provider
   - Theme toggle component
   - Verify SCSS theming works

5. **Resume Download** (Phase 4)
   - Add resume file
   - Create component
   - Integrate into UI

**Estimated time:**
- Phase 0: 5-10 minutes
- Phase 1: 2-3 hours
- Phase 2: 4-5 hours (major refactor)
- Phase 3: 1-2 hours
- Phase 4: 30 minutes
- Testing: 1-2 hours
- **Total: 8-12 hours**

---

## React Best Practices Applied

Based on [Vercel's React Best Practices](https://vercel.com/blog/introducing-react-best-practices):

1. ✅ **Eliminate Async Waterfalls**: Ensured parallel async operations
2. ✅ **Reduce Bundle Size**: Modular SCSS, minimal Tailwind usage
3. ✅ **Optimize Re-renders**: Use React.memo() for static components
4. ✅ **Lazy Initialization**: Use lazy state initialization for expensive operations
5. ✅ **Component Structure**: Single-purpose, focused components
6. ✅ **Performance First**: Address high-impact items (waterfalls, bundle) before micro-optimizations

---

## Notes

- Keep git commits small and focused (one phase per commit or smaller)
- Test after each phase before moving to the next
- SCSS architecture allows for easier theme customization
- CSS custom properties enable smooth theme transitions
- Tailwind usage minimized to layout utilities only
- Components follow semantic naming conventions (BEM style)
- React best practices ensure optimal performance
- Resume download analytics could be added later
