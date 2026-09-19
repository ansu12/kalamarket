# KalaMarket MVP
The anti-Etsy marketplace for verified artisans.

## Setup Instructions
1. `npm install`
2. `node scripts/init-db.mjs` (Initializes local SQLite db)
3. `npm run dev`

## Core Differentiators Implemented
- **ListingGuard:** Live listing validation inside `/seller/listings/new`
- **Fair Trade Checkout:** Flat 8% fees and transparent buyer mock-checkout (`/checkout/[id]`)
- **Trust & Safety:** Admin moderation queue (`/admin`) and secure digital downloads (`/downloads/[id]`)
