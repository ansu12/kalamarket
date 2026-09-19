import { db } from "@/lib/db";
import { Download, Lock, FileArchive } from "lucide-react";

export default async function DownloadPage({ params }: { params: Promise<{ orderId: string }> }) {
  const { orderId } = await params;
  // Verify order exists and is paid
  const result = await db.execute({
    sql: "SELECT * FROM orders WHERE id = ? AND status = 'paid'",
    args: [orderId]
  });

  const order = result.rows[0];

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-100 text-stone-900">
        <div className="text-center p-8 bg-white rounded-3xl shadow-sm">
          <Lock className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h1 className="text-xl font-bold">Secure Link Expired or Invalid</h1>
          <p className="text-stone-500 mt-2">This digital download link is not active.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf9f5] flex items-center justify-center p-4">
      <div className="bg-white max-w-lg w-full rounded-3xl shadow-sm border border-stone-200 p-10 text-center">
        <div className="w-20 h-20 bg-violet-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <FileArchive className="w-10 h-10 text-violet-600" />
        </div>
        <h1 className="text-2xl font-extrabold text-stone-900 mb-2">Your Digital Files are Ready</h1>
        <p className="text-stone-500 font-medium mb-8">
          Order #{orderId}
        </p>
        
        <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 flex items-center justify-between mb-8 text-left">
          <div>
            <p className="font-bold text-stone-900">Handmade_Pattern_V2.pdf</p>
            <p className="text-xs text-stone-500">14.2 MB • Securely hosted on Cloudflare R2</p>
          </div>
          <button className="bg-violet-700 text-white p-3 rounded-xl hover:bg-violet-800 transition">
            <Download className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-stone-400 font-medium flex items-center justify-center gap-1">
          <Lock className="w-3 h-3" /> Link expires in 24 hours for security.
        </p>
      </div>
    </div>
  );
}
