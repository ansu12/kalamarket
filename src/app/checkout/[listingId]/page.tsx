import { db } from "@/lib/db";
import { ShieldCheck, Lock, ArrowRight } from "lucide-react";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function CheckoutPage({ params }: { params: Promise<{ listingId: string }> }) {
  const { listingId } = await params;
  // Fetch listing details
  const result = await db.execute({
    sql: "SELECT * FROM listings WHERE id = ?",
    args: [listingId]
  });

  const listing = result.rows[0] as any;
  if (!listing) return <div>Listing not found</div>;

  return (
    <div className="min-h-screen bg-stone-100 flex items-center justify-center p-4 font-sans">
      <div className="bg-white max-w-4xl w-full rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Order Summary (Left side) */}
        <div className="w-full md:w-5/12 bg-stone-50 p-8 border-r border-stone-200">
          <h2 className="text-xl font-extrabold text-stone-900 mb-6">Order Summary</h2>
          
          <div className="flex gap-4 mb-6 pb-6 border-b border-stone-200">
            <div className="w-20 h-20 bg-stone-200 rounded-xl overflow-hidden shrink-0">
               <img src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=200&auto=format&fit=crop" alt="Product" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="font-bold text-stone-900 leading-tight">{listing.title}</h3>
              <p className="text-sm text-stone-500 mt-1">From: Jaipur Textiles Co.</p>
              <div className="text-lg font-extrabold text-stone-900 mt-2">₹{(listing.price / 100).toLocaleString()}</div>
            </div>
          </div>

          <div className="space-y-3 text-sm font-medium text-stone-600 mb-6 pb-6 border-b border-stone-200">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{(listing.price / 100).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Fair Global Shipping</span>
              <span className="text-violet-700">Free</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-bold text-stone-900">Total</span>
            <span className="font-black text-3xl text-stone-900">₹{(listing.price / 100).toLocaleString()}</span>
          </div>

          <div className="mt-8 bg-violet-50 border border-violet-200 rounded-xl p-4 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
            <div className="text-xs text-violet-900 font-medium leading-relaxed space-y-2">
              <p><strong>Fair Trade Promise:</strong> You are buying directly from the artisan. No dropshippers. No hidden marketplace fees.</p>
              <p><strong>ListingGuard Escrow:</strong> Your funds are securely held in Escrow and will NOT be released to the seller until the item is successfully delivered.</p>
            </div>
          </div>
        </div>

        {/* Payment Form (Right side) */}
        <div className="w-full md:w-7/12 p-8 lg:p-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-extrabold text-stone-900">Checkout</h2>
            <Lock className="w-5 h-5 text-stone-400" />
          </div>

          <form action={async () => {
            "use server";
            // Simulate Razorpay/Stripe Processing
            const orderId = `ord_${Date.now()}`;
            await db.execute({
              sql: `INSERT INTO orders (id, buyer_id, shop_id, listing_id, amount, status) VALUES (?, ?, ?, ?, ?, ?)`,
              args: [orderId, "buyer_123", listing.shop_id, listing.id, listing.price, 'paid']
            });
            redirect(`/checkout/success?order=${orderId}`);
          }}>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Email Address</label>
                <input type="email" required placeholder="you@example.com" className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500" />
              </div>

              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Shipping Address</label>
                <textarea rows={3} required placeholder="123 Main St..." className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500"></textarea>
              </div>

              <div className="pt-4">
                <p className="text-xs text-stone-500 mb-4 font-medium text-center">
                  This is a secure, 256-bit encrypted checkout. (MVP Mock Payment)
                </p>
                <button type="submit" className="w-full bg-stone-900 text-white rounded-xl py-4 font-bold text-lg hover:bg-violet-700 transition flex items-center justify-center gap-2">
                  Pay ₹{(listing.price / 100).toLocaleString()} Securely <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
