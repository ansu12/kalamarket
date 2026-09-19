import { db } from "@/lib/db";
import { AlertTriangle, CheckCircle, XCircle, FileText } from "lucide-react";

export default async function AdminQueue() {
  const result = await db.execute("SELECT * FROM listings WHERE status = 'active' ORDER BY created_at DESC LIMIT 50");
  const listings = result.rows;

  return (
    <div className="min-h-screen bg-stone-50 p-8 font-sans text-stone-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">Trust & Safety Queue</h1>
            <p className="text-stone-500 font-medium">Reviewing listings for IP violations and dropshipping.</p>
          </div>
          <div className="bg-red-50 text-red-700 px-4 py-2 rounded-lg font-bold flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" /> 3 Open IP Reports
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-stone-100 border-b border-stone-200 text-stone-600">
              <tr>
                <th className="p-4 font-bold">Listing ID</th>
                <th className="p-4 font-bold">Seller</th>
                <th className="p-4 font-bold">Title</th>
                <th className="p-4 font-bold">ListingGuard Score</th>
                <th className="p-4 font-bold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {listings.map((l: any) => (
                <tr key={l.id} className="hover:bg-stone-50">
                  <td className="p-4 font-mono text-xs text-stone-500">{l.id}</td>
                  <td className="p-4 font-medium text-violet-700">{l.shop_id}</td>
                  <td className="p-4 font-medium">{l.title}</td>
                  <td className="p-4">
                    <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded font-bold text-xs">Flagged (No WIP Photo)</span>
                  </td>
                  <td className="p-4 flex gap-2">
                    <button className="p-2 text-stone-400 hover:text-violet-600 transition" title="Approve">
                      <CheckCircle className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-stone-400 hover:text-red-600 transition" title="Suspend">
                      <XCircle className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-stone-400 hover:text-blue-600 transition" title="View Evidence">
                      <FileText className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
              {listings.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-stone-500 font-medium">Queue is empty.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
