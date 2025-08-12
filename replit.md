# CodeNode Legal Website

## Overview

This is a modern single-page website built for CodeNode, a company that creates professional websites specifically for law firms. The application showcases two service plans: a simple website with WhatsApp integration and an advanced version featuring AI-powered automated customer service. The site features a dark, professional theme with gold accents designed specifically for the legal industry, emphasizing trust and professionalism.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a modern React-based stack with:
- **React 18** with TypeScript for type safety and component-based development
- **Vite** as the build tool and development server for fast hot module replacement
- **Wouter** for lightweight client-side routing
- **TanStack Query** for efficient data fetching and caching
- **Tailwind CSS** for utility-first styling with custom legal industry color variables
- **Radix UI** components for accessible, unstyled UI primitives
- **ShadCN/UI** component library built on top of Radix for consistent design system

### Design System
The application implements a specialized legal industry design system:
- **Typography**: Merriweather for headings (professional serif) and Inter for body text
- **Color Scheme**: Dark theme (#0F172A) with gold accents (#D4AF37) specifically chosen for legal professionalism
- **Layout**: Single-page application with smooth scrolling navigation between sections
- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop

### Component Architecture
The frontend follows a modular component structure:
- **Page Components**: Single home page with route handling for 404
- **Section Components**: Modular sections (Hero, Benefits, Plans, etc.) for easy maintenance
- **UI Components**: Reusable design system components in `/components/ui/`
- **Custom Hooks**: Smooth scrolling navigation and mobile detection utilities

### Backend Architecture
Minimal Express.js backend setup:
- **Express Server** with middleware for JSON parsing and request logging
- **Development Setup**: Vite integration for hot reloading in development
- **Production Build**: ESBuild for server bundling and Vite for client assets
- **Storage Interface**: Abstract storage layer with in-memory implementation (ready for database integration)

### Database Design
Currently uses in-memory storage with a defined schema ready for PostgreSQL migration:
- **User Schema**: Basic user structure with username/password fields
- **Drizzle ORM**: Type-safe database operations with PostgreSQL dialect configuration
- **Migration System**: Drizzle-kit for database schema management

### Styling Architecture
- **CSS Variables**: Dynamic theming system with legal industry color palette
- **Component Variants**: Class Variance Authority (CVA) for consistent component styling
- **Utility Classes**: Tailwind for rapid UI development
- **Custom Fonts**: Google Fonts integration for Merriweather and Inter typography

### Form Handling
- **React Hook Form** with Zod validation for type-safe form management
- **Custom Form Components**: Reusable form inputs with consistent styling
- **Toast Notifications**: User feedback system for form submissions and actions

## External Dependencies

### UI and Styling
- **@radix-ui/***: Comprehensive set of accessible UI primitives (dialogs, dropdowns, navigation, etc.)
- **tailwindcss**: Utility-first CSS framework with custom legal industry configuration
- **class-variance-authority**: Component variant management
- **clsx & tailwind-merge**: Dynamic className composition

### State Management and Data Fetching
- **@tanstack/react-query**: Server state management and caching
- **react-hook-form**: Form state management with validation
- **@hookform/resolvers**: Form validation resolvers

### Development and Build Tools
- **vite**: Fast build tool and development server
- **@vitejs/plugin-react**: React support for Vite
- **typescript**: Static type checking
- **esbuild**: Fast JavaScript bundler for server-side code

### Database and ORM
- **drizzle-orm**: Type-safe SQL ORM with PostgreSQL support
- **@neondatabase/serverless**: Serverless PostgreSQL client
- **drizzle-kit**: Database migration and schema management tools

### Server and Runtime
- **express**: Web application framework
- **tsx**: TypeScript execution for development
- **wouter**: Lightweight React router

### Utility Libraries
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation
- **zod**: Schema validation and type inference

### Replit Integration
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit-specific development tools