export default async function SuccessPage({ searchParams }: { searchParams: Promise<{ order: string }> }) {
  const { order } = await searchParams;
  return (
    <div className="min-h-screen bg-[#faf9f5] flex items-center justify-center p-4">
      <div className="bg-white max-w-md w-full rounded-3xl shadow-sm border border-stone-200 p-10 text-center animate-in zoom-in duration-500">
        <div className="w-20 h-20 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">🎉</span>
        </div>
        <h1 className="text-2xl font-extrabold text-stone-900 mb-2">Order Confirmed!</h1>
        <p className="text-stone-500 font-medium mb-6">
          Thank you for supporting an independent artisan. Your order <span className="font-bold text-stone-900">#{order}</span> is being processed.
        </p>
        <a href="/" className="inline-block bg-stone-900 text-white font-bold py-3 px-6 rounded-xl hover:bg-violet-700 transition">
          Return Home
        </a>
      </div>
    </div>
  );
}
