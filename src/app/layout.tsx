import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "KalaMarket | Verified Artisan Marketplace — Powered by ListingGuard",
    template: "%s | KalaMarket",
  },
  description: "The anti-dropshipping marketplace. Buy authentic, verified handmade goods directly from artisans. 0% listing fees, 8% flat transaction fee, Process Proof verification.",
  keywords: ["handmade marketplace", "artisan marketplace", "indian handicrafts", "buy handmade", "verified artisans", "anti dropshipping", "etsy alternative", "fair trade marketplace", "handcrafted goods", "block print textiles"],
  authors: [{ name: "KalaMarket by ListingGuard" }],
  creator: "ListingGuard",
  metadataBase: new URL("https://market.listingguard.store"),
  openGraph: {
    title: "KalaMarket | Verified Artisan Marketplace",
    description: "The anti-dropshipping marketplace. Buy authentic, verified handmade goods directly from artisans who make them.",
    url: "https://market.listingguard.store",
    siteName: "KalaMarket",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KalaMarket | Verified Artisan Marketplace",
    description: "The anti-dropshipping marketplace. Buy authentic, verified handmade goods directly from artisans.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // TODO: Replace with your real Google Search Console verification code
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="KalaMarket by ListingGuard" />
        <link rel="canonical" href="https://market.listingguard.store" />
        {/* TODO: Replace ca-pub-0000000000000000 with your actual Google AdSense Publisher ID */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-0000000000000000" crossOrigin="anonymous"></script>
      </head>
      <body className="min-h-full flex flex-col bg-stone-50">
        <div className="flex-1">
          {children}
        </div>
        
        {/* Global Footer */}
        <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-2 mb-4">
                Kala<span className="text-violet-500">Market</span>
              </span>
              <p className="text-sm">The world's first fully transparent, anti-dropshipping marketplace for verified artisans.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Transparency</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="hover:text-violet-400 transition">Our Mission & Platform</a></li>
                <li><a href="/ranking-algorithm" className="hover:text-violet-400 transition">How Search Works</a></li>
                <li><a href="/legal" className="hover:text-violet-400 transition">Fair Trade Promise</a></li>
                <li><a href="/demo-shop" className="hover:text-violet-400 transition">Demo Shop</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Sellers</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/seller/onboarding" className="hover:text-violet-400 transition">Apply to Sell</a></li>
                <li><a href="/seller/dashboard" className="hover:text-violet-400 transition">Seller Studio</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Security & Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/legal" className="hover:text-violet-400 transition">Policies & Legal</a></li>
                <li><a href="/admin" className="hover:text-violet-400 transition">Trust & Safety Queue</a></li>
                <li><a href="mailto:ansu.purohit.consulting@gmail.com" className="hover:text-violet-400 transition">Contact Support</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-8 border-t border-stone-800 text-xs text-stone-500 flex flex-col sm:flex-row justify-between gap-4">
            <p>© 2026 KalaMarket (by ListingGuard). All rights reserved.</p>
            <div className="flex gap-4">
              <a href="/legal" className="hover:text-violet-400 transition">Privacy Policy</a>
              <a href="/legal" className="hover:text-violet-400 transition">Terms of Service</a>
              <a href="/legal" className="hover:text-violet-400 transition">Refund Policy</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
