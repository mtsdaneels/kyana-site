# 🧭 Repository Navigation Guide

This guide will help you navigate the Kyana Site repository efficiently.

## 📂 Core Folder Structure

- **`app/`**: The main application code.
  - **`components/`**: Reusable UI components.
    - **`cards/`**: Components for displaying boxed information (Features, Pricing).
    - **`form/`**: Specialized components for forms (Inputs, Selects).
    - **`sections/`**: Larger page segments that combine other components.
  - **`data/`**: **IMPORTANT**: This is where almost all the text and configuration lives.
    - `siteData.ts`: Homepage content, instructor info, location info.
    - `bookingData.ts`: Package prices, session types, schedules.
  - **`routes/`**: The pages of the website.
    - `_index.tsx`: The home page.
    - `aanbod.tsx`: Services/Offerings page.
    - `over-mij.tsx`: About me page.
    - `contact.tsx`: Contact form page.
  - **`styles/`**: Global styling rules.
    - `global.css`: Contains CSS variables for colors, fonts, and spacing.
- **`public/`**: Assets like images and fonts.
- **`docs/`**: Documentation (where you are now).

## 🚀 Quick Navigation Tips

### 📝 Where to update text?
Don't look in the components or routes first! Check `app/data/siteData.ts` or `app/data/bookingData.ts`. Most content is mapped from these files.

### 🎨 Where to change colors?
Open `app/styles/global.css`. Look for the `:root` section at the top. Changing a variable there (like `--primary-color`) will update it across the entire site.

### 🧩 Where to find a component?
If you see something on a page you want to change:
1. Check the corresponding file in `app/routes/`.
2. Look at which components it imports (e.g., `InstructorSection`).
3. Find that component in `app/components/`.

### 🖼️ Where to add images?
Put them in `public/`. Reference them in components using relative paths from the root, e.g., `<img src="/my-image.jpg" />`.

## 🛠️ Naming Conventions
- **Components**: PascalCase (e.g., `FeatureCard.tsx`)
- **Data files**: camelCase (e.g., `siteData.ts`)
- **Routes**: kebab-case or underscore for Remix index (e.g., `over-mij.tsx`, `_index.tsx`)
- **CSS Variables**: kebab-case (e.g., `--primary-color`)
