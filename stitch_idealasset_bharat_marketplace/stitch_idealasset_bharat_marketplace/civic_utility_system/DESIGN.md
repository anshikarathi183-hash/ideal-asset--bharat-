---
name: Civic Utility System
colors:
  surface: '#f8f9ff'
  surface-dim: '#cedbef'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef4ff'
  surface-container: '#e4efff'
  surface-container-high: '#dce9fd'
  surface-container-highest: '#d6e4f7'
  on-surface: '#0f1c2a'
  on-surface-variant: '#584236'
  inverse-surface: '#253140'
  inverse-on-surface: '#e9f1ff'
  outline: '#8c7164'
  outline-variant: '#e0c0b0'
  surface-tint: '#9b4500'
  primary: '#9b4500'
  on-primary: '#ffffff'
  primary-container: '#f97302'
  on-primary-container: '#562300'
  inverse-primary: '#ffb68e'
  secondary: '#0a6d31'
  on-secondary: '#ffffff'
  secondary-container: '#9af4a8'
  on-secondary-container: '#137235'
  tertiary: '#435c9e'
  on-tertiary: '#ffffff'
  tertiary-container: '#8098df'
  on-tertiary-container: '#102e6f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbc9'
  primary-fixed-dim: '#ffb68e'
  on-primary-fixed: '#331200'
  on-primary-fixed-variant: '#763300'
  secondary-fixed: '#9df6ab'
  secondary-fixed-dim: '#82da91'
  on-secondary-fixed: '#00210a'
  on-secondary-fixed-variant: '#005322'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b3c5ff'
  on-tertiary-fixed: '#00184a'
  on-tertiary-fixed-variant: '#2a4385'
  background: '#f8f9ff'
  on-background: '#0f1c2a'
  surface-variant: '#d6e4f7'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  container-margin: 20px
  gutter: 16px
---

## Brand & Style

The design system is engineered for a digital sharing economy that bridges the gap between grassroots community utility and institutional reliability. The aesthetic is a hybrid of **Corporate Modern** and **Tactile Friendly**, prioritizing trust, accessibility, and high-efficiency asset management.

The visual narrative evokes the stability of a civic institution while maintaining the warmth of a community-driven marketplace. It utilizes a structured grid, purposeful whitespace, and soft depth to create an environment where users feel secure transacting high-value assets. The emotional response is one of organized optimism—professional yet approachable.

## Colors

This color palette is designed to balance urgency (Orange), trust (Green), and authority (Navy). 

- **Primary Orange** is reserved for high-intent actions, critical CTAs, and active navigation states.
- **Secondary Green** serves as the "Trust Anchor," used for verification badges, success indicators, and secondary actions related to safety or confirmation.
- **Deep Navy** provides the structural backbone, used for high-level information architecture and primary typography to ensure legibility and weight.
- **Neutral Slate** handles metadata and non-essential UI elements to maintain a clean hierarchy.
- **Gradients** should be used sparingly for brand-specific moments or decorative flourishes in empty states to maintain the "civic" professional feel.

## Typography

The typography system pairs **Plus Jakarta Sans** for headlines to provide a friendly, modern, and slightly rounded character, with **Inter** for body text to ensure maximum utility and readability in data-dense asset listings.

- **Headlines:** Always set in Deep Navy (#0A2A6B) to establish authority.
- **Body Text:** Set in Neutral Slate (#465363) for long-form reading, or Deep Navy for emphasized content.
- **Labels:** Used for chips and status tags, often in uppercase with slight letter spacing to differentiate from actionable text.

## Layout & Spacing

The system uses a **12-column fluid grid** for desktop and a **4-column grid** for mobile. The spacing rhythm is based on an 8px base unit to ensure consistent vertical rhythm across varied asset cards.

- **Margins:** 20px on mobile to provide breathing room for the card-based layout.
- **Section Spacing:** Use the `background_secondary` color to differentiate between header areas and content feeds.
- **Alignment:** Content should predominantly be left-aligned to mimic traditional institutional documents, fostering a sense of order.

## Elevation & Depth

Visual hierarchy is achieved through a **Tonal Layering** system combined with soft, ambient shadows. 

- **Surface Levels:** The primary background is flat. Content sits on "Level 1" cards.
- **Shadows:** Use extra-diffused shadows with a 10% opacity of Deep Navy (e.g., `0px 4px 20px rgba(10, 42, 107, 0.1)`). Shadows should feel like they are lifting the card slightly off the page rather than casting a dark void.
- **Interactive Depth:** On hover or active states, shadows should expand slightly in blur radius, not intensity, to simulate a tactile "lift."

## Shapes

The shape language is defined by **16px (1rem)** corner radii for primary containers, creating a friendly and approachable feel that avoids the "harshness" of industrial apps.

- **Standard Elements:** Buttons and input fields follow the `rounded-lg` (16px) standard.
- **Chips/Status:** Use `rounded-xl` (24px+) to create a pill-shaped appearance for status markers like "Available Now."
- **Icons:** Should feature rounded terminals and consistent stroke weights to match the typeface characteristics.

## Components

### Buttons
- **Primary:** Solid Orange (#F97302) with white text. High-contrast, used for "Book Now" or "Post Asset."
- **Secondary (Trust):** Solid Green (#0C6E32) or Green outline. Used for "Verify Identity," "Message Owner," or "Safety Guidelines."

### Status Chips
- **Available Now:** Green background (low opacity) with Dark Green text.
- **Available Soon:** Orange background (low opacity) with Dark Orange text.
- **Booked:** Slate background with white text.

### Cards
- White background, 16px corner radius, soft Navy-tinted shadow.
- Imagery should be top-aligned with no margin, while text content follows the standard 16px internal padding.

### Navigation
- **Header:** Deep Navy background or white with a location selector featuring the "Pin" icon.
- **Bottom Bar:** Fixed at the bottom of mobile views with clear active states using the Primary Orange color for icons and labels.

### Input Fields
- Subtle gray borders (Neutral Slate at 20% opacity) that transition to Primary Orange on focus. Labels should stay visible (floating label style) to maintain institutional clarity.