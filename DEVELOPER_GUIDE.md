# TypingPro Website - Developer Guide

A modern, modular typing classes website built with Remix and Cloudflare Workers.

## 📁 Project Structure

```
app/
├── components/           # Reusable UI components
│   ├── cards/           # Card components
│   │   ├── FeatureCard.tsx      # Feature display cards
│   │   ├── InfoCard.tsx         # Information cards
│   │   └── PricingCard.tsx      # Pricing plan cards
│   ├── form/            # Form input components
│   │   ├── FormInput.tsx        # Text/email/tel/date inputs
│   │   ├── FormSelect.tsx       # Dropdown selects
│   │   └── FormTextarea.tsx     # Textarea fields
│   ├── sections/        # Page section components
│   │   ├── InstructorSection.tsx
│   │   └── LocationSection.tsx
│   ├── Alert.tsx        # Success/error/info alerts
│   ├── Footer.tsx       # Site footer
│   ├── Navigation.tsx   # Site navigation
│   ├── ProgressBar.tsx  # Progress/stat bars
│   └── SectionHeader.tsx # Page headers
├── data/                # Content and configuration
│   ├── bookingData.ts   # Booking-related data
│   └── siteData.ts      # Site content data
├── routes/              # Page routes
│   ├── _index.tsx       # Home page
│   ├── book.tsx         # Booking page
│   └── contact.tsx      # Contact page
├── styles/
│   └── global.css       # Global styles and design system
└── root.tsx             # Root layout

```

## 🎨 Making Changes

### Updating Content

All text content is centralized in the `data/` folder for easy updates:

**Site Content** (`app/data/siteData.ts`):
- `FEATURES` - What Our Classes Offer section
- `PRICING_PLANS` - Class pricing options
- `STUDENT_STATS` - Student results statistics
- `INSTRUCTOR_INFO` - Instructor biography and qualifications
- `LOCATION_INFO` - Studio and online class information
- `CONTACT_INFO` - Phone, email, and hours

**Booking Data** (`app/data/bookingData.ts`):
- `CLASS_PACKAGES` - Available class packages
- `SESSION_TYPES` - In-person or online options
- `TIME_SLOTS` - Available booking times
- `BOOKING_STEPS` - Booking process steps
- `PAYMENT_METHODS` - Accepted payment methods
- `CANCELLATION_POLICY` - Cancellation terms

### Updating Styles

Global styles are in `app/styles/global.css`:

**CSS Variables** (lines 10-50):
- Colors: `--primary-color`, `--secondary-color`, etc.
- Spacing: `--spacing-sm`, `--spacing-md`, etc.
- Fonts: `--font-sans`, `--font-display`

**To change the color scheme**:
```css
:root {
  --primary-color: #6366f1;      /* Change this */
  --secondary-color: #ec4899;    /* And this */
}
```

**To change fonts**:
1. Update Google Fonts link in `app/root.tsx` (line 17)
2. Update CSS variable in `global.css`:
```css
--font-sans: 'YourFont', sans-serif;
```

### Adding New Features

**Add a new feature card** (Home page):
1. Open `app/data/siteData.ts`
2. Add to `FEATURES` array:
```typescript
{
  icon: "🚀",
  title: "Your Feature",
  description: "Description here",
}
```

**Add a new pricing plan**:
1. Open `app/data/siteData.ts`
2. Add to `PRICING_PLANS` array:
```typescript
{
  title: "New Plan",
  price: "$99",
  description: "Plan description",
  features: ["Feature 1", "Feature 2"],
  isPopular: false,
}
```

**Add a new time slot** (Booking page):
1. Open `app/data/bookingData.ts`
2. Add to `TIME_SLOTS` array:
```typescript
{ value: "18:00", label: "6:00 PM" }
```

## 🧩 Reusable Components

### Form Components

**FormInput**
```tsx
<FormInput
  label="Your Label"
  name="fieldName"
  type="text"  // text, email, tel, date
  placeholder="Enter value..."
  required={true}
  error={errors?.fieldName}
/>
```

**FormSelect**
```tsx
<FormSelect
  label="Choose Option"
  name="fieldName"
  options={[
    { value: "opt1", label: "Option 1" },
    { value: "opt2", label: "Option 2" },
  ]}
  required={true}
  error={errors?.fieldName}
/>
```

**FormTextarea**
```tsx
<FormTextarea
  label="Message"
  name="message"
  placeholder="Enter your message..."
  required={true}
  minHeight="200px"
/>
```

### Card Components

**FeatureCard**
```tsx
<FeatureCard
  icon="🎯"
  title="Feature Title"
  description="Feature description"
/>
```

**PricingCard**
```tsx
<PricingCard
  title="Package Name"
  price="$99"
  description="Package description"
  features={["Feature 1", "Feature 2"]}
  isPopular={true}
/>
```

**InfoCard**
```tsx
<InfoCard title="Card Title" icon="📍">
  <p>Your content here</p>
</InfoCard>
```

### Other Components

**Alert**
```tsx
<Alert type="success" message="Operation successful!" />
<Alert type="error" message="Something went wrong" />
<Alert type="info" message="Please note..." />
```

**ProgressBar**
```tsx
<ProgressBar
  label="Speed"
  value="+40 WPM"
  percentage={80}
/>
```

**SectionHeader**
```tsx
<SectionHeader
  title="Page Title"
  subtitle="Optional subtitle text"
  centered={true}
/>
```

## 🚀 Development

**Install dependencies:**
```bash
npm install
```

**Run development server:**
```bash
npm run dev
```

**Build for production:**
```bash
npm run build
```

**Deploy:**
```bash
npm run deploy
```

## 📝 Adding a New Page

1. Create a new file: `app/routes/yourpage.tsx`
2. Add the route:
```tsx
import type { MetaFunction } from "@remix-run/cloudflare";
import SectionHeader from "~/components/SectionHeader";

export const meta: MetaFunction = () => {
  return [
    { title: "Your Page - TypingPro" },
    { name: "description", content: "Page description" },
  ];
};

export default function YourPage() {
  return (
    <section className="section" style={{ paddingTop: "var(--spacing-2xl)" }}>
      <div className="container">
        <SectionHeader title="Your Page" subtitle="Optional subtitle" />
        {/* Your content */}
      </div>
    </section>
  );
}
```
3. Add navigation link in `app/components/Navigation.tsx`

## 🎯 Form Handling

Forms use Remix actions for server-side processing. Example:

```tsx
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const name = formData.get("name");
  
  // Validate
  const errors: { [key: string]: string } = {};
  if (!name) errors.name = "Name is required";
  
  if (Object.keys(errors).length > 0) {
    return json({ errors, success: false }, { status: 400 });
  }
  
  // Process form (send email, save to DB, etc.)
  
  return json({ success: true, message: "Success!" });
}
```

## 💡 Tips

- All colors use CSS variables - change them in one place!
- Content is separate from components - easy to update text
- Components are reusable - use them across pages
- Form validation is server-side for security
- Mobile-responsive by default

## 📚 Key Files to Modify

| What You Want to Change | File to Edit |
|------------------------|-------------|
| Site text/content | `app/data/siteData.ts` |
| Booking options | `app/data/bookingData.ts` |
| Colors/fonts | `app/styles/global.css` |
| Navigation links | `app/components/Navigation.tsx` |
| Page layouts | `app/routes/*.tsx` |

---

Built with ❤️ using Remix and Cloudflare Workers
