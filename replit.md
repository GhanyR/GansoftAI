# Overview

This is a modern full-stack web application built for Gansoft, an AI consumer apps company. The project features a sleek, animated landing page with a sophisticated dark gradient design and smooth animations. The application is built using React with TypeScript on the frontend and Express.js on the backend, with Drizzle ORM for database management.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend is built using modern React with TypeScript and follows a component-based architecture:

- **UI Framework**: React 18 with TypeScript for type safety
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Animations**: Framer Motion for smooth page transitions and interactive animations
- **Form Handling**: React Hook Form with Zod validation through @hookform/resolvers

### Key Design Decisions:
- **Component Library**: Uses shadcn/ui components built on Radix UI primitives for accessibility
- **Animation Strategy**: Heavy use of Framer Motion for professional-grade animations and transitions
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Theme System**: CSS variables-based theming with dark mode support

## Backend Architecture

The backend follows a minimal Express.js architecture with TypeScript:

- **Framework**: Express.js with TypeScript for API endpoints
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Development**: Vite integration for hot module replacement in development
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database implementations

### Key Design Decisions:
- **Database Strategy**: Uses Drizzle ORM for type-safe database operations with PostgreSQL
- **API Structure**: RESTful API design with `/api` prefix for all endpoints
- **Development Experience**: Integrated Vite dev server for seamless full-stack development
- **Error Handling**: Centralized error handling middleware

## Data Storage

- **Primary Database**: PostgreSQL via Neon Database serverless platform
- **ORM**: Drizzle ORM with TypeScript support for schema definition and migrations
- **Schema Management**: Shared schema definitions between frontend and backend
- **Session Storage**: connect-pg-simple for PostgreSQL-based session storage

### Database Design:
- **User Management**: Basic user schema with username/password authentication
- **Type Safety**: Zod schemas for runtime validation matching database schema
- **Migrations**: Drizzle-kit for database schema migrations

## External Dependencies

### Core Framework Dependencies:
- **@neondatabase/serverless**: Serverless PostgreSQL connection for Neon Database
- **drizzle-orm**: Type-safe database toolkit and ORM
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation library for React components

### UI and Styling:
- **@radix-ui/***: Headless UI primitives for accessibility
- **tailwindcss**: Utility-first CSS framework
- **shadcn/ui**: Pre-built component library built on Radix UI

### Development Tools:
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production builds

### Authentication and Session Management:
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **express-session**: Session middleware for Express.js

### Validation and Forms:
- **zod**: TypeScript-first schema validation
- **react-hook-form**: Performant forms with easy validation
- **@hookform/resolvers**: Validation resolvers for react-hook-form

The application is designed to be easily deployable on platforms like Replit, with proper environment variable configuration for database connectivity and session management.