# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a full-stack Astro + Strapi crash course project demonstrating headless CMS architecture:
- **Client** (`/client`): Astro 5.12.8 static site generator
- **Server** (`/server`): Strapi 5.20.0 headless CMS with TypeScript

## Development Commands

### Client (Astro)
```bash
cd client
npm install
npm run dev      # Development server at localhost:4321
npm run build    # Production build to ./dist/
npm run preview  # Preview production build
```

### Server (Strapi)
```bash
cd server
npm install      # or yarn install (project uses yarn.lock)
yarn develop     # Development with auto-reload at localhost:1337
yarn build       # Build admin panel and API
yarn start       # Production mode
```

### Initial Setup
Extract seed data: `tar -xzf server/seed-data.tar.gz` in server directory for sample content.

## Architecture

### Content Types & API Structure

The Strapi backend defines several content types with sophisticated relationships:

**Articles** (`api::article.article`):
- Full-featured blog posts with rich text content
- Relations: author (many-to-one), contentTags (one-to-many), relatedArticles
- Uses dynamic blocks system for flexible content layout

**Dynamic Block System**:
- `blocks.hero` - Hero sections with rich text and CTAs
- `blocks.card-grid` - Grid layouts using shared card components  
- `blocks.content-with-image` - Content sections with images
- `blocks.section-heading` - Section headings
- `blocks.markdown` - Markdown content blocks
- `blocks.person-card` - Author/person cards
- `blocks.faqs` - FAQ sections
- `blocks.newsletter` - Newsletter signup
- `blocks.featured-articles` - Article showcases

**Layout Components**:
- `layout.header` - Site navigation with logo and nav items
- `layout.footer` - Site footer configuration
- `layout.banner` - Site announcement banner

**Pages & Global Settings**:
- `Global` (single type): Site-wide settings with header/footer/banner components
- `Pages` (collection): Slug-based pages using dynamic blocks
- `Landing Page` (single type): Homepage with dynamic blocks

### Middleware Architecture

**Key Middleware**:
- `article-populate.ts`: Auto-populates articles with featured images, author details, tags, blocks, and related articles
- `global-page-populate.ts`: Handles population for page-level content including all block types

These middlewares are automatically applied via route configuration and handle complex nested data population for optimal API responses.

### Database Configuration

Multi-database support with environment-based configuration:
- **Default**: SQLite (`.tmp/data.db`)
- **Production**: MySQL/PostgreSQL with SSL support
- **Configuration**: `server/config/database.ts` handles all database types

Key environment variables for database switching:
- `DATABASE_CLIENT` - sqlite/mysql/postgres
- `DATABASE_URL` - Connection string (postgres)
- `DATABASE_HOST`, `DATABASE_PORT`, `DATABASE_NAME`, etc.

### API Population Strategy

The content types use sophisticated population middleware that:
- Selects only necessary image fields (url, alternativeText) for performance
- Populates nested components and blocks recursively
- Handles author relationships with image and bio data
- Manages related articles to prevent circular references

### TypeScript Integration

- Full TypeScript support across both client and server
- Generated type definitions in `server/types/generated/`
- Strapi factory pattern used throughout (createCoreController, createCoreService)

## Development Patterns

### Strapi Patterns
- Use factory methods: `strapi.factories.createCoreController()`
- Apply middleware via route configuration for automatic population
- Leverage component system for reusable content blocks
- Environment-based configuration for deployment flexibility

### Content Architecture
- Dynamic zones enable flexible page building without code changes
- Shared components (`shared.link`, `shared.card`) promote consistency
- Block-based system allows complex layouts through CMS interface

### API Integration
- REST API at `localhost:1337/api/`
- Rich population strategies minimize additional requests
- Content relationships automatically resolved through middleware

The project is designed for content-driven websites where editors need layout flexibility while maintaining developer control over components and performance optimization.