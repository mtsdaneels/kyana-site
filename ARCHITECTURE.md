# Component Architecture Overview

## 🏗️ Architecture Principles

This project follows a modular, component-based architecture with clear separation of concerns:

```
┌─────────────────────────────────────────┐
│          DATA LAYER (Content)           │
│  • siteData.ts - Site content          │
│  • bookingData.ts - Booking options    │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│       COMPONENT LAYER (Reusable)        │
│  • Form Components (Input, Select...)  │
│  • Card Components (Feature, Pricing)  │
│  • UI Components (Alert, Progress...)  │
│  • Section Components (Instructor...)  │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│         PAGE LAYER (Routes)             │
│  • Home (_index.tsx)                   │
│  • Contact (contact.tsx)               │
│  • Booking (book.tsx)                  │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│        STYLE LAYER (Design)             │
│  • global.css - Design system          │
│  • CSS Variables for theming           │
└─────────────────────────────────────────┘
```

## 📦 Component Breakdown

### Form Components (`app/components/form/`)
Reusable, validated form inputs:
- **FormInput** - All text-based inputs (text, email, tel, date)
- **FormSelect** - Dropdown selections with options
- **FormTextarea** - Multi-line text input

### Card Components (`app/components/cards/`)
Content presentation containers:
- **FeatureCard** - Icon + title + description
- **PricingCard** - Price display with features list
- **InfoCard** - General purpose information container

### Section Components (`app/components/sections/`)
Complete page sections that combine multiple components:
- **InstructorSection** - About the instructor
- **LocationSection** - Location information

### Utility Components (`app/components/`)
Single-purpose UI elements:
- **Alert** - Success/error/info messages
- **ProgressBar** - Visual stat displays
- **SectionHeader** - Page title + subtitle
- **Navigation** - Site navigation bar
- **Footer** - Site footer

## 🔄 Data Flow

### Example: Pricing Cards on Home Page

```
1. Data Source:
   siteData.ts → PRICING_PLANS array

2. Page Import:
   _index.tsx imports PRICING_PLANS

3. Component Mapping:
   {PRICING_PLANS.map((plan) => <PricingCard {...plan} />)}

4. Component Rendering:
   PricingCard receives props and displays
```

### Example: Contact Form

```
1. User fills form using FormInput/FormTextarea components

2. Form submitted to Remix action (server-side)

3. Action validates data and returns errors or success

4. Page receives actionData and displays Alert component

5. Form components show individual field errors
```

## 🎨 Styling Strategy

**Global Design System** (`global.css`):
- CSS Variables for all colors, spacing, fonts
- Utility classes (`.card`, `.btn`, `.grid`)
- Animation keyframes
- Responsive breakpoints

**Component Styles**:
- Inline styles for component-specific variations
- Use CSS variables for consistency
- No hardcoded colors or spacing values

## 📊 Component Dependencies

```
Page (e.g., _index.tsx)
├── SectionHeader ← General purpose
├── FeatureCard ← Uses data from FEATURES
├── PricingCard ← Uses data from PRICING_PLANS
├── InstructorSection
│   ├── ProgressBar ← Uses STUDENT_STATS
│   └── Data from INSTRUCTOR_INFO
└── LocationSection
    ├── InfoCard
    └── Data from LOCATION_INFO
```

## 🔧 Maintenance Benefits

### ✅ Easy Content Updates
All text in central data files - no need to touch components

### ✅ Consistent Design
CSS variables ensure visual consistency across all pages

### ✅ Code Reuse
Components used multiple times across different pages

### ✅ Type Safety
TypeScript interfaces ensure correct prop usage

### ✅ Scalability
Add new features by extending data arrays, not rewriting code

## 🚦 Making Changes - Quick Reference

| Change Type | Files to Edit | Complexity |
|------------|---------------|------------|
| Update text/prices | `data/*.ts` | ⭐ Easy |
| Change colors | `styles/global.css` | ⭐ Easy |
| Add form field | Use existing form component | ⭐⭐ Medium |
| Modify layout | `routes/*.tsx` | ⭐⭐ Medium |
| Create component | `components/*.tsx` | ⭐⭐⭐ Advanced |
| Add new page | Create route + nav link | ⭐⭐⭐ Advanced |

## 💡 Design Patterns Used

1. **Composition**: Small components combine into larger sections
2. **Props-based Configuration**: Components configured via props, not hardcoded
3. **Data-driven Rendering**: Arrays map to components
4. **Centralized Content**: All content in data files
5. **Separation of Concerns**: Data → Components → Pages → Styles

## 🎯 Best Practices

- ✅ Always use CSS variables for styling
- ✅ Extract repeated UI patterns into components
- ✅ Keep data separate from presentation
- ✅ Use TypeScript interfaces for type safety
- ✅ Server-side validation for all forms
- ✅ Responsive design by default

---

This architecture makes the codebase:
- **Maintainable** - Easy to find and update specific features
- **Scalable** - Add new features without touching existing code
- **Consistent** - Reused components ensure uniform UX
- **Developer-friendly** - Clear structure and documentation
