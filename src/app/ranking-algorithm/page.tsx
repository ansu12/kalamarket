import { Search, CheckCircle2, XCircle } from "lucide-react";

export default function RankingAlgorithmPage() {
  return (
    <div className="min-h-screen bg-stone-50 p-8 py-16 font-sans text-stone-900">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-10 shadow-sm border border-stone-200">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Search className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">How Our Search Ranking Works</h1>
          <p className="text-stone-500 text-lg">We believe in 100% transparency. No hidden pay-to-win mechanics. Here is exactly how we decide what buyers see first.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-violet-50 rounded-2xl p-6 border border-violet-100">
            <h3 className="text-violet-900 font-extrabold text-lg mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-violet-600" /> What Boosts Your Rank
            </h3>
            <ul className="space-y-3 text-sm text-violet-800 font-medium">
              <li className="flex items-start gap-2"><span className="text-violet-500">•</span> Exact title and tag matches to the buyer's query.</li>
              <li className="flex items-start gap-2"><span className="text-violet-500">•</span> A high ListingGuard Score (minimum 5 tags, good title length).</li>
              <li className="flex items-start gap-2"><span className="text-violet-500">•</span> Providing clear "Process Proof" photos of your craft.</li>
              <li className="flex items-start gap-2"><span className="text-violet-500">•</span> Recent shop activity and fast message response times.</li>
            </ul>
          </div>

          <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
            <h3 className="text-red-900 font-extrabold text-lg mb-4 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-600" /> What We NEVER Use
            </h3>
            <ul className="space-y-3 text-sm text-red-800 font-medium">
              <li className="flex items-start gap-2"><span className="text-red-500">•</span> <strong>Pay-to-Win Ads:</strong> We do not allow sellers to pay to outrank organic search results.</li>
              <li className="flex items-start gap-2"><span className="text-red-500">•</span> <strong>Hidden Offsite Tax:</strong> We do not secretly boost sellers who opt-into high-fee offsite ads (because we don't have them).</li>
              <li className="flex items-start gap-2"><span className="text-red-500">•</span> <strong>Forced Free Shipping:</strong> We do not penalize you for charging fair shipping prices.</li>
            </ul>
          </div>
        </div>

        <div className="bg-stone-900 text-white rounded-2xl p-8 text-center">
          <h3 className="font-extrabold text-xl mb-2">Our Promise to Artisans</h3>
          <p className="text-stone-400 text-sm max-w-xl mx-auto">
            You spend hours making your craft. You shouldn't have to spend hours guessing how a black-box algorithm works. We will publicly announce and document every single change we make to our search engine.
          </p>
        </div>

      </div>
    </div>
  );
}
