# TechCraft Solutions - Software Development Company

## Overview

TechCraft Solutions is a comprehensive digital services company based in Visakhapatnam, India, specializing in software development, web applications, mobile apps, and digital marketing services. The application is a modern full-stack web platform built to showcase services, handle client inquiries, and manage business operations for a local software development company targeting the Visakhapatnam market.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side is built using React with TypeScript, leveraging modern development practices:
- **React 18** with functional components and hooks
- **Vite** as the build tool for fast development and optimized production builds
- **Wouter** for lightweight client-side routing
- **TanStack Query** for server state management and API data fetching
- **shadcn/ui** component library built on Radix UI primitives for consistent, accessible UI components
- **Tailwind CSS** for utility-first styling with custom design tokens
- **Theme Provider** supporting light/dark mode switching

### Backend Architecture
The server follows a RESTful API design pattern:
- **Express.js** server with TypeScript for type safety
- **Modular route structure** with separate route handlers and storage layers
- **Memory-based storage** using in-memory data structures (currently MemStorage class)
- **Middleware stack** including JSON parsing, CORS handling, and request logging
- **Error handling** with structured error responses

### Data Storage Solutions
Currently implements an in-memory storage pattern with interfaces designed for easy migration:
- **IStorage interface** defining contract for data operations
- **MemStorage implementation** for development and testing
- **Drizzle ORM** configured for PostgreSQL with migration support
- **Schema definition** using Drizzle with Zod validation for type-safe database operations
- Database schema includes contacts table with fields for client inquiries

### Validation and Type Safety
- **Zod schemas** for runtime validation of API requests and responses
- **Shared schema definitions** between client and server for consistent typing
- **TypeScript** throughout the entire stack for compile-time type checking
- **Form validation** using React Hook Form with Zod resolvers

### SEO and Performance Optimization
- **Local SEO optimization** specifically targeting Visakhapatnam/Vizag keywords
- **Structured data markup** (JSON-LD) for local business information
- **Meta tag management** with dynamic SEO component
- **Responsive design** optimized for mobile-first approach
- **Performance optimizations** including code splitting and lazy loading preparation

### Development and Build Process
- **Development server** with hot module replacement via Vite
- **Production build** process combining Vite for frontend and esbuild for backend
- **TypeScript compilation** with strict mode enabled
- **Path aliases** configured for clean import statements
- **ESM modules** throughout the application for modern JavaScript standards

## External Dependencies

### Database and ORM
- **Drizzle ORM** with PostgreSQL dialect for database operations
- **@neondatabase/serverless** for PostgreSQL connections (configured for Neon DB)
- **drizzle-kit** for database migrations and schema management

### UI and Styling
- **Radix UI** comprehensive component library for accessible, unstyled UI primitives
- **Tailwind CSS** for utility-first styling
- **class-variance-authority** for component variant management
- **Lucide React** for consistent iconography

### Form Handling and Validation
- **React Hook Form** for performant form management
- **Zod** for schema validation and type inference
- **@hookform/resolvers** for Zod integration with React Hook Form

### Development Tools
- **Vite** for fast development server and build tooling
- **TypeScript** for static type checking
- **PostCSS** with Autoprefixer for CSS processing
- **@replit/vite-plugin-runtime-error-modal** for enhanced error debugging
- **@replit/vite-plugin-cartographer** for development insights

### Utility Libraries
- **date-fns** for date manipulation and formatting
- **clsx** and **tailwind-merge** for conditional className handling
- **embla-carousel-react** for carousel/slider components
- **cmdk** for command palette functionality