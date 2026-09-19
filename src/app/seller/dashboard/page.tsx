import { DollarSign, Eye, ShoppingCart, TrendingUp } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-extrabold text-stone-900">Welcome back, Rohan</h1>
        <p className="text-stone-500 mt-1">Here is what is happening with your shop today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
          <div className="flex items-center gap-3 text-stone-500 mb-2 font-medium text-sm">
            <DollarSign className="w-4 h-4 text-violet-600" /> Total Revenue
          </div>
          <div className="text-3xl font-extrabold text-stone-900">₹45,200</div>
          <p className="text-xs text-violet-600 mt-2 flex items-center font-bold">
            <TrendingUp className="w-3 h-3 mr-1" /> +12% this week
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
          <div className="flex items-center gap-3 text-stone-500 mb-2 font-medium text-sm">
            <Eye className="w-4 h-4 text-blue-600" /> Shop Views
          </div>
          <div className="text-3xl font-extrabold text-stone-900">1,204</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
          <div className="flex items-center gap-3 text-stone-500 mb-2 font-medium text-sm">
            <ShoppingCart className="w-4 h-4 text-amber-600" /> Orders
          </div>
          <div className="text-3xl font-extrabold text-stone-900">18</div>
        </div>
        <div className="bg-violet-700 p-6 rounded-2xl shadow-sm text-white">
          <div className="text-violet-100 mb-2 font-medium text-sm">Platform Fee Saved vs Etsy</div>
          <div className="text-3xl font-extrabold">₹6,800</div>
          <p className="text-xs text-violet-200 mt-2 font-medium">Because we only charge 8% flat.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6">
        <h2 className="text-lg font-bold text-stone-900 mb-4">Recent Orders</h2>
        <table className="w-full text-left text-sm">
          <thead className="border-b border-stone-200 text-stone-500">
            <tr>
              <th className="pb-3 font-medium">Order ID</th>
              <th className="pb-3 font-medium">Item</th>
              <th className="pb-3 font-medium">Date</th>
              <th className="pb-3 font-medium">Amount</th>
              <th className="pb-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="py-4 font-medium text-stone-900">#ORD-092</td>
              <td className="py-4 text-stone-600">Block Printed Kurta</td>
              <td className="py-4 text-stone-500">Today, 2:40 PM</td>
              <td className="py-4 font-medium text-stone-900">₹2,400</td>
              <td className="py-4"><span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-md text-xs font-bold">Unfulfilled</span></td>
            </tr>
            <tr>
              <td className="py-4 font-medium text-stone-900">#ORD-091</td>
              <td className="py-4 text-stone-600">Indigo Table Runner</td>
              <td className="py-4 text-stone-500">Yesterday</td>
              <td className="py-4 font-medium text-stone-900">₹1,800</td>
              <td className="py-4"><span className="bg-violet-100 text-violet-800 px-2 py-1 rounded-md text-xs font-bold">Shipped</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
