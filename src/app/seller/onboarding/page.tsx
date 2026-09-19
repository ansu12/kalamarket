import { ShieldCheck, UserCheck, CreditCard, ArrowRight } from "lucide-react";

export default function SellerOnboardingPage() {
  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4 font-sans text-stone-900">
      <div className="bg-white max-w-3xl w-full rounded-3xl shadow-xl border border-stone-200 overflow-hidden">
        
        <div className="bg-violet-700 p-8 text-center text-white">
          <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-violet-300" />
          <h1 className="text-3xl font-extrabold mb-2">Welcome to KalaMarket</h1>
          <p className="text-violet-100 font-medium">Complete your Artisan Verification to open your shop.</p>
        </div>

        <div className="p-10 space-y-8">
          
          <div className="flex gap-4 items-start p-4 bg-stone-50 rounded-2xl border border-stone-200">
            <div className="w-10 h-10 bg-violet-100 text-violet-700 rounded-full flex items-center justify-center shrink-0 font-bold">1</div>
            <div>
              <h3 className="font-bold text-lg mb-1">Identity Verification</h3>
              <p className="text-sm text-stone-500 mb-3">Upload your government ID and a photo of your workspace.</p>
              <button className="text-sm bg-white border border-stone-300 px-4 py-2 rounded-lg font-bold hover:bg-stone-100 transition flex items-center gap-2">
                <UserCheck className="w-4 h-4" /> Start ID Verification
              </button>
            </div>
          </div>

          <div className="flex gap-4 items-start p-4 bg-stone-50 rounded-2xl border border-stone-200 opacity-50 grayscale pointer-events-none">
            <div className="w-10 h-10 bg-stone-200 text-stone-500 rounded-full flex items-center justify-center shrink-0 font-bold">2</div>
            <div>
              <h3 className="font-bold text-lg mb-1">Bank & Tax Details (India)</h3>
              <p className="text-sm text-stone-500 mb-3">Connect your bank account via Razorpay Route and provide GSTIN (if applicable).</p>
              <button className="text-sm bg-white border border-stone-300 px-4 py-2 rounded-lg font-bold flex items-center gap-2">
                <CreditCard className="w-4 h-4" /> Connect Bank
              </button>
            </div>
          </div>

          <div className="flex gap-4 items-start p-4 bg-stone-50 rounded-2xl border border-stone-200 opacity-50 grayscale pointer-events-none">
            <div className="w-10 h-10 bg-stone-200 text-stone-500 rounded-full flex items-center justify-center shrink-0 font-bold">3</div>
            <div>
              <h3 className="font-bold text-lg mb-1">Sign Seller Agreement</h3>
              <p className="text-sm text-stone-500">Agree to our strict anti-dropshipping rules and 8% flat fee.</p>
            </div>
          </div>

          <div className="pt-6 border-t border-stone-200 flex justify-end">
            <a href="/seller/dashboard" className="bg-violet-700 text-white px-8 py-3 rounded-xl font-bold hover:bg-violet-800 transition flex items-center gap-2 shadow-sm">
              Continue to Dashboard <ArrowRight className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
