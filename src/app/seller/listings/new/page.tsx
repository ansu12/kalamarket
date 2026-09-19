"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Image as ImageIcon, Camera, ShieldCheck } from "lucide-react";

export default function NewListingPage() {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [isPublishing, setIsPublishing] = useState(false);
  const [success, setSuccess] = useState(false);

  // Live ListingGuard Heuristics (MVP version)
  const score = 100 - 
    (title.length < 20 ? 15 : 0) - 
    (title === title.toUpperCase() && title.length > 0 ? 20 : 0) -
    (tags.split(",").length < 5 ? 15 : 0);

  const handlePublish = async () => {
    setIsPublishing(true);
    try {
      const res = await fetch("/api/listings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description: desc,
          price: parseInt(price) * 100, // store in paisa/cents
          tags: tags.split(",").map(t => t.trim()).filter(Boolean),
          is_digital: false
        })
      });
      if (res.ok) {
        setSuccess(true);
        setTitle(""); setTags(""); setDesc(""); setPrice("");
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (err) {
      console.error(err);
    }
    setIsPublishing(false);
  };

  return (
    <div className="max-w-6xl mx-auto flex gap-8 items-start animate-in slide-in-from-bottom-4 duration-500">
      
      {/* Editor Form */}
      <div className="flex-1 bg-white border border-stone-200 rounded-3xl p-8 shadow-sm">
        <h1 className="text-2xl font-extrabold text-stone-900 mb-6">Create New Listing</h1>
        
        {success && (
          <div className="mb-6 p-4 bg-violet-50 border border-violet-200 text-violet-800 rounded-xl font-bold flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" /> Listing saved securely to database!
          </div>
        )}

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-stone-700 mb-2">Listing Title</label>
            <input 
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Hand-Block Printed Cotton Kurta, Indigo Blue"
              className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-bold text-stone-700 mb-2">Price (₹)</label>
              <input 
                type="number" 
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="e.g. 1500"
                className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-stone-700 mb-2">Photos & Process Proof</label>
            <div className="border-2 border-dashed border-stone-300 rounded-xl p-8 text-center bg-stone-50 hover:bg-stone-100 transition cursor-pointer">
              <ImageIcon className="w-8 h-8 text-stone-400 mx-auto mb-3" />
              <p className="text-sm font-medium text-stone-700">Drag and drop photos here</p>
              <p className="text-xs text-stone-500 mt-1">Must include at least 1 "work in progress" photo</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-stone-700 mb-2">Search Tags</label>
            <input 
              type="text" 
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="e.g. cotton kurta, hand block print, summer wear"
              className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition"
            />
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 flex items-start gap-3">
            <input type="checkbox" id="ai-disclosure" className="mt-1 w-4 h-4 text-violet-600 rounded border-stone-300 focus:ring-violet-500" />
            <div>
              <label htmlFor="ai-disclosure" className="text-sm font-bold text-stone-800 cursor-pointer">AI-Use Disclosure (Mandatory if applicable)</label>
              <p className="text-xs text-stone-500 mt-1">Check this box if any part of your design, pattern, or listing description was generated using Artificial Intelligence. We embrace modern tools, but require 100% transparency for buyers.</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-stone-700 mb-2">Description</label>
            <textarea 
              rows={4}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition"
            ></textarea>
          </div>

          <div className="pt-4 border-t border-stone-200">
            <div className="bg-stone-900 text-white p-4 rounded-xl mb-6 flex gap-3 text-sm font-medium">
              <ShieldCheck className="w-5 h-5 text-violet-400 shrink-0" />
              <p>
                <strong>Security Notice:</strong> All images are automatically scanned using our proprietary Reverse Image Search. If these images are found on Alibaba, AliExpress, or Temu, your shop will be permanently banned to protect the integrity of the marketplace.
              </p>
            </div>
            <div className="flex justify-end gap-3">
              <button className="px-6 py-3 font-bold text-stone-600 hover:bg-stone-100 rounded-xl transition">Save Draft</button>
              <button 
                onClick={handlePublish}
                disabled={isPublishing || !title || !price}
                className="px-6 py-3 font-bold bg-violet-700 text-white rounded-xl shadow-sm hover:bg-violet-800 transition disabled:opacity-50"
              >
                {isPublishing ? "Publishing..." : "Publish Listing"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ListingGuard Sidebar */}
      <div className="w-80 shrink-0 sticky top-24">
        <div className="bg-stone-900 rounded-3xl p-6 text-white shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-violet-500/20 rounded-full flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-violet-400" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg">ListingGuard</h3>
              <p className="text-xs text-stone-400 font-medium">Live Quality Checker</p>
            </div>
          </div>

          <div className="flex items-end gap-2 mb-8 border-b border-stone-800 pb-6">
            <span className={`text-5xl font-black ${score >= 90 ? 'text-violet-400' : score >= 70 ? 'text-amber-400' : 'text-red-400'}`}>
              {score}
            </span>
            <span className="text-stone-400 font-medium mb-1">/ 100</span>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              {title.length >= 20 ? <CheckCircle2 className="w-5 h-5 text-violet-400 shrink-0" /> : <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />}
              <p className="text-sm font-medium text-stone-300">
                {title.length >= 20 ? "Title length is optimal" : "Title is too short. Aim for 20+ chars."}
              </p>
            </div>
            <div className="flex items-start gap-3">
              {tags.split(",").filter(t=>t.trim()).length >= 5 ? <CheckCircle2 className="w-5 h-5 text-violet-400 shrink-0" /> : <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />}
              <p className="text-sm font-medium text-stone-300">
                {tags.split(",").filter(t=>t.trim()).length >= 5 ? "Good amount of tags used" : "Add at least 5 tags for better search ranking."}
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Camera className="w-5 h-5 text-amber-400 shrink-0" />
              <p className="text-sm font-medium text-stone-300">
                Missing "Process Proof" photo showing the item being made.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
