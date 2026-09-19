import { ShoppingBag, ShieldCheck, Globe, Star, ShoppingCart } from "lucide-react";
import { db } from "@/lib/db";
import { Search, MapPin, Star, ShieldCheck, ArrowRight } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function Home() {
  // Fetch active listings for the homepage
  const result = await db.execute("SELECT * FROM listings WHERE status = 'active' ORDER BY created_at DESC LIMIT 6");
  const trendingListings = result.rows;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "KalaMarket",
            "url": "https://market.listingguard.store",
            "logo": "https://market.listingguard.store/icon.png",
            "description": "The anti-dropshipping marketplace for verified artisans. Buy authentic handmade goods directly from the maker.",
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "ansu.purohit.consulting@gmail.com",
              "contactType": "customer support"
            },
            "sameAs": []
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "KalaMarket",
            "url": "https://market.listingguard.store",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://market.listingguard.store/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    <div className="min-h-screen bg-[#faf9f5] text-stone-900 font-sans">
      {/* Navbar */}
      <header className="border-b border-stone-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <ShoppingBag className="w-6 h-6 text-violet-700" />
            <span className="text-xl font-bold tracking-tight text-stone-800">
              Kala<span className="text-violet-700">Market</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            <a href="/demo-shop" className="hover:text-violet-700 transition">Shop Authentic</a>
            <a href="/about" className="hover:text-violet-700 transition">Our Mission</a>
            <a href="/legal" className="hover:text-violet-700 transition">Trust & Safety</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="/seller/dashboard" className="text-sm font-semibold text-stone-600 hover:text-stone-900 transition">Sign In</a>
            <a href="/seller/onboarding" className="bg-violet-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-sm hover:bg-violet-800 transition">
              Open a Shop
            </a>
          </div>
        </div>
      </header>

      {/* Category Sub-Nav (Etsy Competitor Feature) */}
      <div className="bg-white border-b border-stone-200 shadow-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center justify-center gap-8 py-3 text-sm font-bold text-stone-600">
            <li className="hover:text-violet-700 cursor-pointer transition border-b-2 border-transparent hover:border-violet-700 pb-1">Hand-Block Textiles</li>
            <li className="hover:text-violet-700 cursor-pointer transition border-b-2 border-transparent hover:border-violet-700 pb-1">Organic Jewelry</li>
            <li className="hover:text-violet-700 cursor-pointer transition border-b-2 border-transparent hover:border-violet-700 pb-1">Custom Furniture</li>
            <li className="hover:text-violet-700 cursor-pointer transition border-b-2 border-transparent hover:border-violet-700 pb-1">Digital Planners</li>
            <li className="hover:text-violet-700 cursor-pointer transition border-b-2 border-transparent hover:border-violet-700 pb-1">Resin Miniatures</li>
          </ul>
        </div>
      </div>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-violet-100">
            <ShieldCheck className="w-4 h-4" />
            100% Verified Indian Artisans
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-stone-900 mb-6 leading-tight">
            Authentic Handicrafts. <br />
            <span className="text-violet-700 italic font-serif">Direct from the Maker.</span>
          </h1>
          <p className="text-lg text-stone-600 mb-10 leading-relaxed">
            No dropshippers. No hidden fees. Just beautiful, handcrafted textiles, jewelry, and art sourced directly from verified cooperatives in India.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/demo-shop" className="w-full sm:w-auto bg-violet-700 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-violet-900/20 hover:bg-violet-800 transition transform hover:-translate-y-0.5 text-center">
              Explore Collections
            </a>
            <a href="/seller/onboarding" className="w-full sm:w-auto bg-white border-2 border-stone-200 text-stone-700 px-8 py-4 rounded-full font-bold hover:border-stone-300 hover:bg-stone-50 transition text-center">
              Sell with Us (8% Flat)
            </a>
          </div>
        </div>

        {/* Trending Originals Section */}
        <div className="mb-24">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-extrabold text-stone-900">Trending Originals</h2>
              <p className="text-stone-500 mt-2">Recently listed items, backed by Process Proof.</p>
            </div>
            <a href="/demo-shop" className="text-violet-700 font-bold hover:underline hidden sm:block">View all →</a>
          </div>

          {trendingListings.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-stone-200 shadow-sm">
              <p className="text-stone-500 font-medium">No active listings in the database yet. Create one in the Seller Dashboard!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {trendingListings.map((item: any) => (
                <a href={`/demo-shop`} key={item.id} className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 group block">
                  <div className="aspect-square bg-stone-100 relative overflow-hidden">
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur text-stone-800 px-3 py-1 rounded-full text-xs font-bold shadow-sm z-10 flex items-center gap-1 border border-stone-100">
                      <ShieldCheck className="w-3 h-3 text-violet-600" /> Process Proof
                    </div>
                    <img src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=600&auto=format&fit=crop" alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-stone-900 text-lg mb-1 truncate group-hover:text-violet-700 transition">{item.title}</h3>
                    <p className="text-sm text-stone-500 mb-4 line-clamp-2">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-black text-xl text-stone-900">₹{(item.price / 100).toLocaleString()}</span>
                      <span className="text-violet-700 font-bold text-sm bg-violet-50 px-3 py-1.5 rounded-lg flex items-center gap-1">
                        <ShoppingCart className="w-4 h-4" /> Buy
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm text-center">
            <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Star className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Process Proof</h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              Every seller must upload work-in-progress photos. You always know you're buying true handmade goods.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm text-center">
            <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Fair Global Shipping</h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              We negotiate bulk shipping rates with international carriers so you don't pay more for shipping than the item itself.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm text-center">
            <div className="w-12 h-12 bg-violet-100 text-violet-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Fair Trade Promise</h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              We charge sellers 0% listing fees and a flat 8% transaction fee. Artisans keep exactly what they earn.
            </p>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
