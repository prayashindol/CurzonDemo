# Homely - Real Estate Platform Copilot Instructions

## Project Architecture
This is a **Next.js 15 + React 19** real estate/property management platform using the **App Router** pattern. The main application lives in `package/` with a dual-workspace structure.

**Key Tech Stack:**
- **Styling**: Tailwind CSS v4 with custom design tokens (`@theme` in globals.css)
- **UI Components**: ShadCN/UI (New York style) + Radix UI primitives
- **Authentication**: NextAuth.js v4 with session management
- **Content**: MDX blogs processed with gray-matter + remark
- **State**: React Context + next-themes for dark mode
- **Icons**: Lucide React + Iconify

## File Structure Patterns
```
package/src/
├── app/                    # Next.js App Router (layout.tsx sets global providers)
│   ├── (site)/            # Route groups for organization
│   └── api/               # API routes
├── components/
│   ├── Home/              # Page-specific components (Hero, Services, etc.)
│   ├── Layout/            # Header/Footer shared components  
│   ├── shared/            # Reusable components across pages
│   ├── ui/                # ShadCN/UI primitives (accordion, button, carousel)
│   └── utils/             # Component utilities (markdown processing)
├── types/                 # TypeScript definitions (blog.ts, featuredProperty.ts)
└── lib/utils.ts           # Single utility file (cn() for class merging)
```

## Development Workflows

**Working Directory**: Always `cd package/` first - the main app is nested here, not in root.

**Key Commands**:
- `npm run dev --turbopack` - Development with Turbopack bundler
- `npm run build` - Production build
- `npm run lint` - ESLint checking

**Environment Setup**: The project uses Windows PowerShell - use `;` for command chaining.

## Component Patterns

**Theme Integration**: All components support dark mode via `dark:` prefixes. Use the established color tokens:
```tsx
className='bg-skyblue dark:bg-[#4298b0] text-white dark:text-dark'
```

**Custom CSS Variables**: Defined in `globals.css` `@theme` block:
- Colors: `--color-primary`, `--color-skyblue`, `--color-dark`
- Spacing: `--spacing-45p`, `--spacing-8xl` for responsive layouts
- Typography: `--text-9xl`, `--text-xm` for consistent sizing

**ShadCN Component Usage**: Import from `@/components/ui/` - follow the New York style patterns with `cn()` utility for class merging.

## Content Management

**Blog System**: MDX files in `package/markdown/blogs/` with frontmatter:
```yaml
---
title: Home buying tips
date: 2025-02-05
coverImage: /images/blog/blog-1.jpg
tag: Tip
---
```

**Image Assets**: All in `package/public/images/` with organized subdirectories (`hero/`, `blog/`, `properties/`, etc.)

**Content Processing**: Use `getPostBySlug()` and related utilities from `components/utils/markdown.ts` for MDX content.

## TypeScript Conventions

**Type Definitions**: Simple interfaces in `src/types/` - keep minimal and focused:
```tsx
export type Blog = {
  title?: string;
  date: string;
  tag: string;
  // etc.
};
```

**Path Aliases**: Use `@/` for imports - configured for components, utils, lib, ui, hooks.

**Styling**: Prefer `cn()` utility over direct className concatenation for conditional classes.

## Common Patterns

**Page Structure**: Follow the established pattern in `page.tsx` - import page-specific components from `components/Home/`.

**Authentication**: Wrap providers in `layout.tsx` - SessionProvider + ThemeProvider pattern is established.

**Responsive Design**: Use custom breakpoints (`xs:`, `mobile:`) and percentage-based widths (`max-w-45p`) for layouts.

**Component Organization**: 
- `Home/` for page-specific components
- `shared/` for cross-page reusable components  
- `Layout/` for Header/Footer shell components
- `ui/` only for ShadCN primitives

When adding new features, follow these established patterns for consistency with the existing codebase architecture.