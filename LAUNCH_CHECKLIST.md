# MVP Launch Checklist

## Pre-Launch (Technical)
- [ ] Connect D1 Database in Cloudflare dashboard
- [ ] Connect R2 Bucket for image storage
- [ ] Swap mocked Razorpay/Stripe APIs with official SDKs
- [ ] Finalize Next.js Server Actions for authentication
- [ ] Run Lighthouse Audit (Target: 90+ Mobile)

## Pre-Launch (Legal & Compliance)
- [ ] Hire CA to verify GST/TCS setup for Indian split payouts
- [ ] Draft & publish Privacy Policy
- [ ] Draft & publish Seller Agreement (Fair Trade terms)
- [ ] Publish IT Act Takedown email (Grievance Officer)

## Go-Live
- [ ] Deploy to Cloudflare Pages (via `npx wrangler pages deploy`)
- [ ] Map custom domain (e.g. `kalamarket.in`)
- [ ] Run script to delete all seed/test data from DB
- [ ] Launch to initial 10 artisan cooperatives
