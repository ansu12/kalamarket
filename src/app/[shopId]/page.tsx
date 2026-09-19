import { db } from "@/lib/db";
import { ShieldCheck, MapPin, Star, ShoppingCart } from "lucide-react";

async function getShopListings(shopId: string) {
  // In a real app, query by shop_id. For MVP demo, just get all listings.
  const result = await db.execute("SELECT * FROM listings ORDER BY created_at DESC");
  return result.rows;
}

export const dynamic = "force-dynamic";

export default async function ShopProfilePage({ params }: { params: Promise<{ shopId: string }> }) {
  const { shopId } = await params;
  const listings = await getShopListings(shopId);

  return (
    <div className="min-h-screen bg-[#faf9f5] text-stone-900 font-sans pb-24">
      {/* Shop Header Banner */}
      <div className="h-64 bg-stone-200 overflow-hidden relative">
        <img 
          src="https://images.unsplash.com/photo-1605816988081-061099bc3234?q=80&w=2000&auto=format&fit=crop" 
          alt="Jaipur block printing" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/20"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-200 flex flex-col md:flex-row items-center md:items-end gap-6 mb-12">
          <div className="w-32 h-32 bg-stone-100 rounded-full border-4 border-white shadow-md overflow-hidden shrink-0">
            <img src="https://images.unsplash.com/photo-1596468453472-3538439df61f?q=80&w=300&auto=format&fit=crop" alt="Shop Owner" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <h1 className="text-3xl font-extrabold text-stone-900">Jaipur Textiles Co.</h1>
              <ShieldCheck className="w-6 h-6 text-violet-600" />
            </div>
            <p className="text-stone-500 font-medium flex items-center justify-center md:justify-start gap-1">
              <MapPin className="w-4 h-4" /> Rajasthan, India
            </p>
            <p className="text-stone-600 mt-3 max-w-2xl leading-relaxed">
              We are a collective of 12 artisan families specializing in traditional hand-block printing and indigo dyeing. Every piece is made entirely by hand using organic dyes.
            </p>
          </div>
          <div className="flex flex-col gap-2 shrink-0">
            <button className="bg-violet-700 text-white px-6 py-3 rounded-full font-bold shadow-sm hover:bg-violet-800 transition w-full text-center">
              Request Custom Order
            </button>
            <div className="text-center text-sm font-bold text-stone-600 flex items-center justify-center gap-1">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" /> 4.9 (128 reviews)
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-extrabold text-stone-900 mb-6">Original Listings</h2>
        
        {listings.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-stone-200 shadow-sm">
            <p className="text-stone-500 font-medium text-lg">No listings yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((item: any) => (
              <div key={item.id} className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition group cursor-pointer">
                <div className="aspect-square bg-stone-100 relative overflow-hidden">
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-stone-800 px-3 py-1 rounded-full text-xs font-bold shadow-sm z-10 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-violet-600" /> Process Proof
                  </div>
                  <img src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=600&auto=format&fit=crop" alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-stone-900 text-lg mb-1 truncate">{item.title}</h3>
                  <p className="text-sm text-stone-500 mb-4 line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-xl text-stone-900">₹{(item.price / 100).toLocaleString()}</span>
                    <a href={`/checkout/${item.id}`} className="bg-stone-900 text-white p-3 rounded-full hover:bg-violet-700 transition shadow-sm inline-flex items-center justify-center">
                      <ShoppingCart className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
