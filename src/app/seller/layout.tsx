import { LayoutDashboard, Package, ShoppingBag, Settings, LogOut } from "lucide-react";

export default function SellerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-stone-50 text-stone-900 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-stone-200 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-stone-200">
          <span className="text-xl font-bold tracking-tight">Seller <span className="text-violet-700">Studio</span></span>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          <a href="/seller/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-violet-50 text-violet-800 font-medium">
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </a>
          <a href="/seller/listings/new" className="flex items-center gap-3 px-3 py-2 rounded-lg text-stone-600 hover:bg-stone-100 font-medium transition">
            <Package className="w-5 h-5" /> Listings
          </a>
          <a href="/seller/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg text-stone-600 hover:bg-stone-100 font-medium transition">
            <ShoppingBag className="w-5 h-5" /> Orders
          </a>
          <a href="/seller/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg text-stone-600 hover:bg-stone-100 font-medium transition">
            <Settings className="w-5 h-5" /> Settings
          </a>
        </nav>
        <div className="p-4 border-t border-stone-200">
          <button className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-stone-600 hover:bg-red-50 hover:text-red-600 font-medium transition">
            <LogOut className="w-5 h-5" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="h-16 bg-white border-b border-stone-200 flex items-center justify-between px-8">
          <h2 className="font-semibold text-stone-800">Jaipur Textiles Co.</h2>
          <div className="flex gap-4">
            <a href="/seller/listings/new" className="bg-violet-700 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-violet-800 transition">
              + New Listing
            </a>
          </div>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
