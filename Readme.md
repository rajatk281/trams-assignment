# Figma to React Frontend Assignment

A responsive React landing page developed from a provided Figma design as part of a frontend development internship assignment.

The primary objective of this project is to accurately convert the provided Figma design into a functional, responsive, and maintainable React application.

The implementation focuses on design accuracy, responsive layouts, reusable React components, clean frontend architecture, and attention to typography, spacing, colors, and visual composition.

---

## Live Demo

**Live Application:** Add Vercel Deployment URL

---

## Figma Design

The user interface of this application is based on the Figma design provided as part of the frontend internship assignment.

The design contains an editorial-style landing page with large typography, circular image compositions, organic decorative elements, service sections, customer testimonials, and a newsletter section.

---

## Project Overview

This project is a single-page responsive website developed using React, Vite, and Tailwind CSS.

The application translates the provided Figma design into reusable React components while maintaining a clean and scalable frontend structure.

Special attention has been given to:

- Design accuracy
- Typography
- Section spacing
- Image positioning
- Circular image compositions
- Organic decorative elements
- Responsive layouts
- Component reusability
- Interactive UI states

The desktop layout closely follows the original Figma composition, while tablet and mobile layouts are adapted to maintain usability and visual consistency across different screen sizes.

---

## Features

- Figma-based UI implementation
- Responsive landing page
- Desktop layout support
- Tablet layout support
- Mobile layout support
- Reusable React components
- Data-driven UI rendering
- Responsive typography
- Circular image compositions
- Organic decorative elements
- Interactive testimonial section
- Newsletter form interaction
- Button and link hover states
- Subtle UI transitions
- Semantic HTML structure
- Organized asset management
- Clean and maintainable codebase

---

## Tech Stack

- React
- Vite
- JavaScript
- Tailwind CSS v4
- CSS Grid
- Flexbox
- Vercel

---

## Project Architecture

```text
figma-react-assignment/
│
├── public/
│   ├── favicon.svg
│   │
│   └── fonts/
│       ├── primary-font.woff2
│       └── secondary-font.woff2
│
├── src/
│   │
│   ├── assets/
│   │   │
│   │   ├── images/
│   │   │   │
│   │   │   ├── hero/
│   │   │   │   ├── person-01.webp
│   │   │   │   ├── person-02.webp
│   │   │   │   ├── person-03.webp
│   │   │   │   ├── person-04.webp
│   │   │   │   ├── person-05.webp
│   │   │   │   ├── person-06.webp
│   │   │   │   └── person-07.webp
│   │   │   │
│   │   │   ├── vision/
│   │   │   │   └── vision-team.webp
│   │   │   │
│   │   │   ├── collaboration/
│   │   │   │   └── collaboration-team.webp
│   │   │   │
│   │   │   └── testimonials/
│   │   │       ├── customer-01.webp
│   │   │       ├── customer-02.webp
│   │   │       ├── customer-03.webp
│   │   │       ├── customer-04.webp
│   │   │       ├── customer-05.webp
│   │   │       ├── customer-06.webp
│   │   │       ├── customer-07.webp
│   │   │       └── customer-08.webp
│   │   │
│   │   ├── icons/
│   │   │   ├── arrow-left.svg
│   │   │   ├── arrow-right.svg
│   │   │   ├── menu.svg
│   │   │   └── index.js
│   │   │
│   │   └── decorative/
│   │       ├── purple-drop.svg
│   │       ├── hero-curve.svg
│   │       ├── pink-line.svg
│   │       ├── pink-triangle.svg
│   │       ├── orange-triangle.svg
│   │       ├── service-curve.svg
│   │       └── newsletter-lines.svg
│   │
│   ├── components/
│   │   │
│   │   ├── common/
│   │   │   ├── Container.jsx
│   │   │   ├── SectionTitle.jsx
│   │   │   ├── CircleImage.jsx
│   │   │   └── DecorativeShape.jsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   └── ui/
│   │       ├── ServiceRow.jsx
│   │       ├── TestimonialCard.jsx
│   │       ├── NewsletterForm.jsx
│   │       └── FooterColumn.jsx
│   │
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Vision.jsx
│   │   ├── Collaboration.jsx
│   │   ├── Services.jsx
│   │   ├── Testimonials.jsx
│   │   └── Newsletter.jsx
│   │
│   ├── data/
│   │   ├── heroPeople.js
│   │   ├── services.js
│   │   ├── testimonials.js
│   │   ├── footerLinks.js
│   │   └── navigation.js
│   │
│   ├── utils/
│   │   └── constants.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

---

## Architecture Overview

The application follows a component-based frontend architecture.

The codebase is divided into:

- Assets
- Common components
- Layout components
- UI components
- Page sections
- Static data
- Utility files

This separation keeps the application organized and makes individual sections easier to understand and maintain.

---

## Application Flow

```text
main.jsx
   │
   ▼
App.jsx
   │
   ├── Header
   │
   ├── Hero
   │
   ├── Vision
   │
   ├── Collaboration
   │
   ├── Services
   │
   ├── Testimonials
   │
   ├── Newsletter
   │
   └── Footer
```

The `App.jsx` file acts as the main page composition layer.

Each major section of the landing page is implemented as an independent React component.

---

## Page Sections

### Header

The header contains the brand identity and navigation elements.

The component is maintained separately as a global layout component.

```text
src/components/layout/Header.jsx
```

---

### Hero Section

The Hero section introduces the main visual identity of the webpage.

It contains:

- Large editorial heading
- Highlighted typography
- Supporting description
- Circular people images
- Purple organic decorative shape
- Curved decorative elements

The circular people images are rendered using reusable components and data stored separately from the UI.

```text
src/sections/Hero.jsx
```

Hero image data is maintained inside:

```text
src/data/heroPeople.js
```

---

### Vision Section

The Vision section presents the primary message:

> Tomorrow should be better than today

The section contains:

- Section heading
- Supporting content
- Circular team image
- Decorative geometric elements

```text
src/sections/Vision.jsx
```

---

### Collaboration Section

The Collaboration section presents information about how the organization helps customers progress.

The section contains:

- Circular image composition
- Section heading
- Supporting description
- Decorative triangle elements

```text
src/sections/Collaboration.jsx
```

---

### Services Section

The Services section presents the services offered by the organization.

Repeated service items are rendered using a reusable `ServiceRow` component.

```text
src/components/ui/ServiceRow.jsx
```

Service data is stored separately:

```text
src/data/services.js
```

The service list is dynamically rendered using JavaScript's `map()` method.

This reduces duplicated JSX and improves component reusability.

---

### Testimonials Section

The Testimonials section displays customer feedback.

The section contains:

- Customer avatars
- Active testimonial content
- Customer information
- Previous navigation control
- Next navigation control

React state is used to manage the currently active testimonial.

Testimonial data is stored inside:

```text
src/data/testimonials.js
```

The testimonial card is implemented as a reusable component:

```text
src/components/ui/TestimonialCard.jsx
```

---

### Newsletter Section

The Newsletter section allows users to enter their email address and interact with the subscription form.

The section contains:

- Newsletter heading
- Email input
- Subscribe button
- Decorative purple shape
- Decorative line elements

The form is implemented using a reusable component:

```text
src/components/ui/NewsletterForm.jsx
```

Native email validation is used to validate the email field.

---

### Footer

The Footer contains grouped navigation links.

Repeated footer groups are rendered using a reusable `FooterColumn` component.

```text
src/components/ui/FooterColumn.jsx
```

Footer data is maintained inside:

```text
src/data/footerLinks.js
```

---

## Component Architecture

Components are separated based on their responsibility.

### Common Components

Common components are reusable elements that may be used across multiple page sections.

```text
src/components/common/
```

#### Container

Provides a consistent maximum page width and responsive horizontal spacing.

#### SectionTitle

Provides reusable section heading behavior.

#### CircleImage

Provides a reusable circular image container.

It is used for:

- Hero people
- Team images
- Customer avatars

#### DecorativeShape

Provides a reusable wrapper for decorative SVG assets.

---

### Layout Components

Layout components represent global structural elements.

```text
src/components/layout/
```

These include:

- Header
- Footer

---

### UI Components

UI components represent repeated interface patterns.

```text
src/components/ui/
```

These include:

- ServiceRow
- TestimonialCard
- NewsletterForm
- FooterColumn

---

## Data-Driven Rendering

Repeated UI content is stored separately from React components.

The data directory contains:

```text
src/data/
```

### heroPeople.js

Contains information about the circular images displayed in the Hero section.

### services.js

Contains service information displayed in the Services section.

### testimonials.js

Contains customer testimonial information.

### footerLinks.js

Contains footer navigation groups and links.

### navigation.js

Contains header navigation information.

React components use the `map()` method to dynamically render repeated UI elements.

Example:

```jsx
{services.map((service) => (
  <ServiceRow
    key={service.id}
    number={service.number}
    title={service.title}
  />
))}
```

This approach reduces duplicated JSX and keeps components easier to maintain.

---

## Styling Approach

Tailwind CSS v4 is used as the primary styling solution.

Component styling is implemented directly using Tailwind utility classes.

Example:

```jsx
<section className="relative overflow-hidden py-20 md:py-28 lg:py-36">
  <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
    {/* Section content */}
  </div>
</section>
```

Tailwind CSS provides utilities for:

- Layout
- Spacing
- Typography
- Colors
- Responsive design
- Positioning
- Transitions
- Hover states
- Transforms

The use of Tailwind reduces the need for large component-specific CSS files while maintaining consistent styling throughout the application.

---

## Global Styles

Global styling is maintained inside:

```text
src/index.css
```

The file contains:

- Tailwind CSS import
- Font definitions
- Global CSS variables
- Base body styles
- Selection styles
- Global accessibility utilities

Example structure:

```css
@import "tailwindcss";

@font-face {
  font-family: "PrimaryFont";
  src: url("/fonts/primary-font.woff2") format("woff2");
  font-weight: 100 900;
  font-display: swap;
}

:root {
  --color-purple: #a342f4;
  --color-coral: #ff6478;
  --color-mint: #dff5e7;
  --color-text-primary: #111111;
  --color-text-secondary: #5f5f5f;
}

html {
  scroll-behavior: smooth;
}

body {
  min-width: 320px;
  min-height: 100vh;
  margin: 0;
  font-family: "PrimaryFont", sans-serif;
  color: var(--color-text-primary);
  background: #ffffff;
  -webkit-font-smoothing: antialiased;
}

button,
a {
  transition:
    color 200ms ease,
    background-color 200ms ease,
    border-color 200ms ease,
    opacity 200ms ease,
    transform 200ms ease;
}

button {
  cursor: pointer;
}

img {
  display: block;
  max-width: 100%;
}
```

Exact colors and font values are based on the provided Figma design.

---

## Tailwind Design System

Repeated design values are maintained consistently throughout the application.

Custom Tailwind values can be used where exact Figma dimensions are required.

Example:

```jsx
<h1 className="text-[42px] leading-[0.95] tracking-[-0.04em] md:text-[64px] lg:text-[82px]">
  The thinkers and doers were changing the status Quo with
</h1>
```

Arbitrary Tailwind values are used when necessary to closely match exact Figma measurements.

Examples include:

```text
text-[82px]
leading-[0.95]
tracking-[-0.04em]
max-w-[1280px]
w-[286px]
h-[286px]
top-[112px]
left-[8%]
```

Arbitrary values are used selectively for Figma-specific dimensions.

Standard Tailwind utilities are preferred for general spacing and layout.

---

## Responsive Design

The application is designed for multiple viewport sizes.

The primary responsive layouts include:

- Mobile
- Tablet
- Laptop
- Desktop

Tailwind responsive variants are used to adapt the layout.

```text
sm:
md:
lg:
xl:
2xl:
```

Example:

```jsx
<div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
  {/* Content */}
</div>
```

Typography is also adjusted responsively:

```jsx
<h2 className="text-4xl leading-none md:text-5xl lg:text-6xl">
  Tomorrow should be better than today
</h2>
```

---

## Responsive Image Composition

The original Figma design contains multiple floating and circular image elements.

On desktop layouts, controlled absolute positioning is used to closely reproduce the Figma composition.

Example:

```jsx
<div className="relative h-[320px]">
  <CircleImage className="absolute left-[2%] top-[100px]" />
  <CircleImage className="absolute left-[18%] top-[40px]" />
  <CircleImage className="absolute left-[38%] top-[120px]" />
</div>
```

On smaller devices, floating elements are reorganized into responsive layouts.

Example:

```jsx
<div className="flex flex-wrap justify-center gap-3 md:relative md:h-[320px]">
  {/* Circular images */}
</div>
```

This prevents desktop absolute positioning from causing layout overflow on mobile devices.

---

## Interactions

Basic interactions are implemented where appropriate.

### Hover States

Interactive elements include hover feedback.

Example:

```jsx
<button className="transition-transform duration-300 hover:-translate-y-1">
  Subscribe
</button>
```

Circular images may use subtle scale transitions:

```jsx
<div className="overflow-hidden rounded-full">
  <img
    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
    src={image}
    alt={alt}
  />
</div>
```

---

## Testimonial Interaction

The testimonial section uses React's `useState` hook to control the active testimonial.

Users can navigate through testimonials using previous and next controls.

The navigation logic supports circular navigation.

After the final testimonial, the next action displays the first testimonial.

Similarly, navigating backward from the first testimonial displays the final testimonial.

---

## Newsletter Form

The newsletter form uses controlled React state.

The implementation includes:

- Email input
- Email state management
- Native email validation
- Required field validation
- Form submission handling

No backend service is required for this frontend assignment.

---

## Animations

Animations are intentionally kept subtle and meaningful.

The application may include:

- Heading entrance transitions
- Image hover scaling
- Button hover movement
- Decorative element floating effects
- Testimonial content transitions

Animations are implemented using Tailwind transitions and CSS keyframes where required.

Heavy animation libraries are intentionally avoided to keep the project lightweight.

---

## Asset Management

Assets are organized based on their purpose.

```text
src/assets/
├── images/
├── icons/
└── decorative/
```

Images are grouped according to the page section where they are used.

Example:

```text
images/
├── hero/
├── vision/
├── collaboration/
└── testimonials/
```

Decorative Figma assets are maintained separately inside:

```text
src/assets/decorative/
```

This includes:

- Organic shapes
- Curved lines
- Triangles
- Decorative SVG elements

SVG assets exported directly from Figma are preferred for decorative elements where possible.

---

## Image Optimization

Images are optimized before being added to the project.

Where appropriate, WebP format is used to reduce image size while maintaining visual quality.

Image optimization practices include:

- Using correctly sized assets
- Avoiding unnecessarily large image dimensions
- Using WebP where appropriate
- Providing descriptive `alt` attributes
- Maintaining correct image aspect ratios

---

## Accessibility

Basic accessibility practices are followed throughout the application.

These include:

- Semantic HTML elements
- Appropriate heading hierarchy
- Descriptive image alternative text
- Accessible form labels
- Button `aria-label` attributes where necessary
- Keyboard-accessible interactive elements
- Native form validation

Example:

```jsx
<button
  type="button"
  aria-label="Next testimonial"
  onClick={handleNext}
>
  <img src={arrowRight} alt="" />
</button>
```

---

## Performance Considerations

The application follows basic frontend performance practices.

These include:

- Minimal external dependencies
- Optimized image assets
- Vite production optimization
- Data-driven component rendering
- Lightweight CSS transitions
- Reusable React components
- Organized asset imports

Heavy animation and state management libraries are avoided because they are not required for the scope of this application.

---

## Getting Started

### Clone the Repository

```bash
git clone <repository-url>
```

### Navigate to the Project Directory

```bash
cd figma-react-assignment
```

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

The local development URL will be displayed in the terminal by Vite.

---

## Available Scripts

### Start Development Server

```bash
npm run dev
```

Runs the application in development mode.

### Create Production Build

```bash
npm run build
```

Creates an optimized production build.

### Preview Production Build

```bash
npm run preview
```

Runs the production build locally for testing.

### Run ESLint

```bash
npm run lint
```

Checks the project for JavaScript and React code quality issues.

---

## Production Build

Before deployment, create a production build:

```bash
npm run build
```

The optimized production files are generated inside the `dist` directory.

The production build should complete without errors before deployment.

---

## Deployment

The application is deployed using Vercel.

The GitHub repository is connected to Vercel for deployment.

The deployment process includes:

1. Push the project to GitHub.
2. Import the GitHub repository into Vercel.
3. Select the Vite framework configuration.
4. Run the production build.
5. Deploy the generated application.

The production application is available through the Vercel deployment URL.

---

## Code Quality

The project follows modern frontend development practices.

These include:

- Component-based architecture
- Reusable React components
- Separation of concerns
- Data-driven UI rendering
- Semantic HTML
- Responsive design
- Organized asset management
- Consistent naming conventions
- Minimal dependencies
- Accessible interactive elements

---

## Design Accuracy

The implementation focuses on reproducing the provided Figma design as closely as possible.

Special attention is given to:

- Typography
- Font sizes
- Font weights
- Line heights
- Letter spacing
- Colors
- Section spacing
- Container widths
- Circular image sizes
- Image positioning
- Decorative shapes
- Alignment
- Responsive behavior

Exact Figma measurements are used where necessary through Tailwind CSS arbitrary values.

---

## Future Improvements

Possible future improvements include:

- Scroll-based reveal animations
- Advanced testimonial transitions
- Newsletter API integration
- Additional accessibility testing
- Further asset optimization
- Automated visual regression testing

---

## Author

**Rajat Kumar**

Frontend / Full Stack Developer

---

## Assignment Purpose

This project was developed as part of a frontend internship assignment to demonstrate React development skills, responsive UI implementation, component reusability, frontend architecture, attention to design detail, and the ability to translate a Figma design into a functional web application.