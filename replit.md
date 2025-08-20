# CodeNode Legal Website

## Overview

This is a modern single-page website built for CodeNode.AI, a company that creates professional websites specifically for autonomous lawyers who don't yet have a digital presence. The application showcases two service plans: "Site Essencial" (basic professional website) and "Site com IA no WhatsApp" (AI-powered automated customer service). The site features a dark, professional theme with gold accents designed specifically for the legal industry, emphasizing trust and professionalism. The target audience has been refined to focus on individual autonomous lawyers rather than law firms.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (August 2024)

**AI WhatsApp Section Added (August 2024)**:
- Added dedicated section explaining AI WhatsApp functionality before Plans section
- Highlights AI assistant as 24/7 digital secretary for law practices
- Features automatic client screening, lead qualification, and appointment scheduling
- Includes quantified benefits (300% lead increase, 80% time reduction)
- Added navigation link "IA no WhatsApp" to header menu
- Section emphasizes 3-day testing period for AI configuration

**Template Simplification (August 2024)**:
- Simplified from two templates to single template approach
- Section renamed from "Nossos Templates" to "Nosso Template"
- Single template card centered with professional dark theme
- External template link: https://template-site-simples-01-contato526.replit.app
- Navigation updated from "Templates" to "Template" in header
- Changed button text to "Ver Template" for clarity
- Updated WhatsApp contact number to 5548991974158 across all components
- Added CodeNode yellow logo favicon (500x500) with multiple sizes for cross-device compatibility

**Major Content Update - Target Audience Shift**:
- Updated target audience from law firms to autonomous lawyers without existing websites
- Hero section: Changed title to "Seu primeiro site jurídico profissional"  
- Updated subtitle to focus on autonomous lawyers who don't yet have sites
- Benefits section: Updated descriptions to use "sua" instead of organizational language
- Plans section: Renamed "Site Simples" to "Site Essencial" and "Site com Agente IA" to "Site com IA no WhatsApp"
- How It Works: Updated copy to reflect individual lawyer focus
- About section: Changed from law firms to "advogados autônomos"
- Contact section: Updated call-to-action to "criar seu primeiro site"
- FAQ section: Updated plan names and maintained relevant content
- New Models section added with navigation link showing two demo lawyer websites

**Template-Based Approach (August 2024)**:
- Clarified that sites are built based on a single professional template adapted for each client
- Simplified from dual template approach to single "Template Profissional"
- Updated navigation from "Modelos" to "Template"
- Hero section clarifies template-based approach
- Template section explains adaptation process for individual law practices

**Pricing Update (August 2024)**:
- Site Essencial: R$600 setup + R$30/month (was R$500 + R$29.90)
- Site com IA no WhatsApp: R$1.500 setup + R$150/month (was R$2.000 + R$200)
- Payment terms: Setup fee paid on delivery, monthly fee starts after first month
- Emphasized 3-day dedicated testing period for AI plan
- Updated comparison table and FAQ with new pricing

**New Components & Routes**:
- Created Models component with single external template link
- Template Profissional links to: https://template-site-simples-01-contato526.replit.app
- Template opens in new tab with target="_blank"
- Updated header navigation to include "Template" section
- Simplified layout with centered single template card
- Enhanced FAQ with dedicated AI testing period explanation

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
- **Page Components**: Home page, two model demo pages (modelo-advogado, modelo-advogada), and 404 handler
- **Section Components**: Modular sections (Hero, Benefits, Plans, Models, etc.) for easy maintenance
- **UI Components**: Reusable design system components in `/components/ui/`
- **Custom Hooks**: Smooth scrolling navigation and mobile detection utilities
- **Demo Pages**: Complete lawyer website examples showing different specializations and target audiences

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