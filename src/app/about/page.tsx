import { ShieldCheck, Crosshair, Users, LineChart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 pb-20">
      
      {/* Hero Section */}
      <div className="bg-violet-900 text-white py-20 px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
          We built the marketplace that Etsy refused to build.
        </h1>
        <p className="text-violet-200 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
          KalaMarket (powered by ListingGuard) is the world's first fully transparent, anti-dropshipping marketplace designed exclusively for verified artisans.
        </p>
      </div>

      {/* The Problem & The Solution */}
      <div className="max-w-5xl mx-auto px-8 mt-16 space-y-16">
        
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-4">The Current Industry is Broken</h2>
          <p className="text-stone-600 text-lg leading-relaxed">
            Legacy marketplaces have become flooded with mass-produced, drop-shipped goods. Artisans are forced to pay 20%+ in hidden fees, while buyers are tricked into buying fake "handmade" items. Search algorithms are black-boxes designed to extract ad revenue.
          </p>
        </div>

        {/* Feature Breakdown */}
        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200">
            <div className="w-12 h-12 bg-violet-100 text-violet-700 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">1. 100% Dropshipper Proof</h3>
            <p className="text-stone-600 text-sm leading-relaxed mb-4">
              We mandate "Process Proof" (photos of the item being made) for all physical listings. Furthermore, our backend utilizes proprietary Reverse Image Search. If an image is found on Alibaba or AliExpress, the seller is permanently banned. Buyers can finally trust the "handmade" label again.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200">
            <div className="w-12 h-12 bg-violet-100 text-violet-700 rounded-2xl flex items-center justify-center mb-6">
              <LineChart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">2. Built-in ListingGuard SEO</h3>
            <p className="text-stone-600 text-sm leading-relaxed mb-4">
              Our sellers don't have to guess how to rank. We built the legendary ListingGuard checker directly into the listing editor. Sellers get a real-time, gamified score on their title and tags, guaranteeing SEO optimization before they ever hit publish.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200">
            <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center mb-6">
              <Crosshair className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">3. Transparent Algorithm</h3>
            <p className="text-stone-600 text-sm leading-relaxed mb-4">
              There is no "pay to win" here. We do not sell ads to boost organic rankings. Our Search Algorithm relies entirely on exact-match metrics, shipping speed, and ListingGuard optimization. We even publish a public manifesto explaining exactly how the search engine works.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200">
            <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">4. Escrow & Fair Trade</h3>
            <p className="text-stone-600 text-sm leading-relaxed mb-4">
              We charge a flat 8% fee. Period. No mandatory off-site ads. For buyers, we utilize a secure Escrow system—meaning funds are never released to the seller until the item is successfully shipped, offering absolute peace of mind.
            </p>
          </div>

        </div>

        <div className="bg-violet-50 border border-violet-100 rounded-3xl p-12 text-center mt-12">
          <h2 className="text-2xl font-extrabold text-violet-900 mb-4">Join the Rebellion</h2>
          <p className="text-violet-700 max-w-2xl mx-auto mb-8 font-medium">
            Whether you're an artisan tired of losing your margins, or a buyer tired of mass-produced fakes, KalaMarket is your new home.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/seller/onboarding" className="bg-violet-700 text-white px-8 py-4 rounded-full font-bold hover:bg-violet-800 transition shadow-sm">
              Open a Shop
            </a>
            <a href="/demo-shop" className="bg-white text-violet-900 border border-violet-200 px-8 py-4 rounded-full font-bold hover:bg-violet-50 transition">
              Start Shopping
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
