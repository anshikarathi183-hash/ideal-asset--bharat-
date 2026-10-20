---
name: Bharat Asset Modern
colors:
  surface: '#fcf9f5'
  surface-dim: '#dcdad6'
  surface-bright: '#fcf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ef'
  surface-container: '#f0edea'
  surface-container-high: '#ebe8e4'
  surface-container-highest: '#e5e2de'
  on-surface: '#1c1c1a'
  on-surface-variant: '#574237'
  inverse-surface: '#31302e'
  inverse-on-surface: '#f3f0ec'
  outline: '#8b7265'
  outline-variant: '#dec0b1'
  surface-tint: '#9a4600'
  primary: '#9a4600'
  on-primary: '#ffffff'
  primary-container: '#f47920'
  on-primary-container: '#572400'
  inverse-primary: '#ffb68d'
  secondary: '#1961a1'
  on-secondary: '#ffffff'
  secondary-container: '#81b9ff'
  on-secondary-container: '#004980'
  tertiary: '#186d15'
  on-tertiary: '#ffffff'
  tertiary-container: '#5bae4f'
  on-tertiary-container: '#003d02'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbc9'
  primary-fixed-dim: '#ffb68d'
  on-primary-fixed: '#321200'
  on-primary-fixed-variant: '#763300'
  secondary-fixed: '#d2e4ff'
  secondary-fixed-dim: '#a1c9ff'
  on-secondary-fixed: '#001c37'
  on-secondary-fixed-variant: '#004880'
  tertiary-fixed: '#a0f88e'
  tertiary-fixed-dim: '#85db75'
  on-tertiary-fixed: '#002201'
  on-tertiary-fixed-variant: '#005304'
  background: '#fcf9f5'
  on-background: '#1c1c1a'
  surface-variant: '#e5e2de'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max-width: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is anchored in a **Corporate / Modern** aesthetic that emphasizes institutional trust and technological efficiency. It bridges the gap between traditional asset management and the modern sharing economy. 

The visual narrative is built on the triad of growth (green), energy (orange), and stability (navy). It utilizes generous whitespace and structured layouts to convey a sense of organization and reliability. The style avoids excessive ornamentation, favoring clean lines and functional clarity to ensure the platform feels accessible to both government entities and private small businesses.

**Target Audience:**
- Government & Community Organizations
- Educational Institutions (Schools & Colleges)
- NGOs and Small Businesses

**Emotional Response:**
- Reliable and secure
- Modern and forward-thinking
- Efficient and organized
- Community-centric

## Colors

This design system utilizes a high-visibility palette inspired by the national identity and the core logo.

- **Primary (Orange):** Used for primary actions, highlights, and icons related to energy and movement.
- **Secondary (Navy):** Used for primary typography, headers, and elements requiring a sense of authority and permanence.
- **Tertiary (Green):** Used for success states, growth indicators, and sustainability-focused messaging.
- **Neutral:** A deep charcoal-navy is used for body text to maintain high legibility without the harshness of pure black.

The color mode is strictly **light**, utilizing a clean white background to maintain a professional, paper-like quality that aligns with official documentation and institutional trust.

## Typography

**Plus Jakarta Sans** is the exclusive typeface for the design system. Its modern, geometric construction provides excellent legibility in data-heavy environments while maintaining a friendly, contemporary character.

- **Headlines:** Use Bold (700) or Semi-Bold (600) weights. Secondary Navy is the preferred color for headings to establish clear hierarchy.
- **Body:** Use Regular (400) weight. Optimized line heights (1.5x) ensure long-form content is easy to digest.
- **Labels:** Use Semi-Bold (600) with slight tracking increases for metadata and small UI triggers.
- **Scaling:** For mobile devices, the headline-xl should scale down to headline-lg-mobile to prevent awkward text wrapping.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a base-8 spacing scale. This ensures mathematical harmony between all UI elements.

- **Grid System:** A 12-column grid for desktop, 8-column for tablet, and 4-column for mobile.
- **Margins:** 40px on desktop to provide "breathing room" for professional content; 16px on mobile to maximize screen real estate.
- **Rhythm:** Vertical spacing between sections should use the `stack-lg` (32px) or larger multiples of 8px to maintain a structured, editorial feel.
- **Safe Areas:** Content should be contained within a maximum width of 1280px to ensure readability on ultra-wide monitors.

## Elevation & Depth

This design system uses **Tonal Layers** and **Low-Contrast Outlines** to define hierarchy, avoiding heavy drop shadows to maintain a clean, modern aesthetic.

- **Surfaces:** Use subtle shifts in background color (White to Off-White/Light Gray) to separate content blocks.
- **Borders:** Define containers using 1px solid strokes in a light gray (#E0E0E0).
- **Shadows:** When necessary for floating elements (like modals or dropdowns), use a "Soft Ambient" shadow: `0px 4px 20px rgba(0, 0, 0, 0.05)`.
- **Active States:** Elevation is conveyed through color shifts rather than physical "lift." For example, a card might transition from a light gray border to a primary orange border on hover.

## Shapes

The shape language is defined as **Rounded (8px)**, reflecting the "ROUND_EIGHT" requirement. This strikes a balance between the precision of a professional tool and the approachability of a community platform.

- **Standard Radius:** 8px (0.5rem) for buttons, input fields, and small cards.
- **Large Radius:** 16px (1rem) for main content containers and featured sections.
- **Full Radius:** Used only for status tags (pills) and circular icon containers.
- **Consistency:** All interactive elements must share the same corner radius to maintain visual unity.

## Components

- **Buttons:** Primary buttons use a solid Orange fill with White text. Secondary buttons use a Navy outline with Navy text. All buttons have 8px rounded corners and a minimum height of 48px for touch accessibility.
- **Input Fields:** Use a 1px Light Gray border, 8px radius, and 16px horizontal padding. Active states should use the Secondary Navy color for the border.
- **Cards:** Cards should have a white background, an 8px radius, and a subtle 1px border. Use the Green accent color for "available" status indicators within cards.
- **Chips / Tags:** Small, pill-shaped indicators with 12px font size. Use low-saturation background tints of Primary, Secondary, or Tertiary colors with high-saturation text for high legibility.
- **Progress Indicators:** Use the Green (Tertiary) color for "Completed" or "Asset Utilized" states, and Orange for "In Progress."
- **Lists:** Clean, border-bottom separated lists with generous 16px vertical padding per item to ensure readability in data-heavy views.