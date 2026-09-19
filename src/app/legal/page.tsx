import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Policy, Terms & Legal | KalaMarket by ListingGuard",
  description: "Read our Privacy Policy, Terms of Service, Refund Policy, Seller Agreement and IP Policy. KalaMarket is committed to transparency.",
};

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-stone-50 p-8 py-16 font-sans text-stone-900">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-10 shadow-sm border border-stone-200">
        <div className="flex items-center gap-3 mb-8 pb-8 border-b border-stone-200">
          <ShieldCheck className="w-8 h-8 text-violet-700" />
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">Legal & Policies</h1>
            <p className="text-stone-500 text-sm font-medium">Last updated: September 2026</p>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-bold mb-4">1. Privacy Policy & Cookie Usage</h2>
            <p className="text-stone-600 text-sm leading-relaxed mb-4">
              KalaMarket (operated under ListingGuard, accessible at <strong>market.listingguard.store</strong>) collects minimal data required to process orders. We act in accordance with the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed mb-4">
              <strong>Information We Collect:</strong> When you create an account or place an order, we collect your email address and shipping address. We do not collect or store payment card details — all payments are processed securely through our third-party payment processor (Razorpay / Stripe).
            </p>
            <p className="text-stone-600 text-sm leading-relaxed mb-4">
              <strong>Cookies & Third-Party Advertising:</strong> Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to this website and other websites. Google's use of advertising cookies enables it and its partners to serve ads to users based on their visits to our site. Users may opt-out of personalized advertising by visiting <a href="https://myadcenter.google.com/" className="text-violet-600 hover:underline font-medium" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>. You may also visit <a href="https://www.aboutads.info/choices/" className="text-violet-600 hover:underline font-medium" target="_blank" rel="noopener noreferrer">www.aboutads.info</a> to opt out of third-party cookies.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed mb-4">
              <strong>Data Sharing:</strong> We never sell your personal data to any third party. We share data only with: (a) payment processors to complete transactions, (b) shipping partners to deliver your order, and (c) law enforcement when legally required.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">2. Terms of Service</h2>
            <p className="text-stone-600 text-sm leading-relaxed mb-4">
              By accessing or using KalaMarket, you agree to the following terms:
            </p>
            <ul className="list-disc pl-5 text-sm text-stone-600 space-y-2">
              <li>You must be at least 18 years old to use this platform.</li>
              <li>You agree not to use the platform for any unlawful purpose.</li>
              <li>All content you post (listings, images, descriptions) must be your original work or properly licensed.</li>
              <li>We reserve the right to suspend or terminate accounts that violate our policies.</li>
              <li>KalaMarket acts as an intermediary marketplace. We do not manufacture, store, or ship any goods ourselves.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">3. Seller Agreement & Fair Trade Promise</h2>
            <p className="text-stone-600 text-sm leading-relaxed mb-4">
              By selling on KalaMarket, you agree to:
            </p>
            <ul className="list-disc pl-5 text-sm text-stone-600 space-y-2">
              <li>Only list items you made, designed, or ethically sourced. Dropshipping mass-produced goods is strictly banned.</li>
              <li>Pay a flat 8% transaction fee on completed orders. There are no listing fees or hidden offsite-ad fees.</li>
              <li>Provide accurate "Process Proof" imagery for physical goods showing the item being made.</li>
              <li>Declare any AI-assisted design or content creation via the mandatory AI-Use Disclosure.</li>
              <li>Submit valid GSTIN documentation if engaging in inter-state commerce (as required by Indian Law).</li>
              <li>Ship orders within the timeframe committed in your listing or face account penalties.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">4. Refund & Return Policy</h2>
            <p className="text-stone-600 text-sm leading-relaxed mb-4">
              KalaMarket uses an Escrow system. Buyer funds are held securely and are NOT released to the seller until the item is confirmed delivered.
            </p>
            <ul className="list-disc pl-5 text-sm text-stone-600 space-y-2">
              <li><strong>Damaged or Wrong Items:</strong> If you receive a damaged or incorrect item, you may request a full refund within 7 days of delivery by contacting <a href="mailto:ansu.purohit.consulting@gmail.com" className="text-violet-600 hover:underline font-medium">ansu.purohit.consulting@gmail.com</a>.</li>
              <li><strong>Custom Orders:</strong> Custom-made items are non-refundable unless they are materially different from the agreed specifications.</li>
              <li><strong>Digital Products:</strong> Due to the nature of digital downloads, all digital product sales are final and non-refundable.</li>
              <li><strong>Shipping Costs:</strong> If a return is approved, the buyer is responsible for return shipping costs unless the seller is at fault.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">5. Intellectual Property Policy & Takedown Notices</h2>
            <p className="text-stone-600 text-sm leading-relaxed mb-4">
              We respect Intellectual Property rights. If you believe a seller has infringed on your copyright, trademark, or other IP rights, please contact our Nodal Grievance Officer at <a href="mailto:ansu.purohit.consulting@gmail.com" className="text-violet-600 hover:underline font-medium">ansu.purohit.consulting@gmail.com</a>.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed mb-4">
              In accordance with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, we commit to: acknowledging all IP claims within 24 hours and removing infringing content within 72 hours.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">6. Prohibited Items</h2>
            <ul className="list-disc pl-5 text-sm text-stone-600 space-y-2">
              <li>AI-generated art marketed as "handmade" without proper disclosure.</li>
              <li>Weapons, explosives, or any items restricted under Indian law.</li>
              <li>Counterfeit goods or unauthorized replicas of branded products.</li>
              <li>Mass-produced goods sourced from wholesale suppliers (dropshipping).</li>
              <li>Any items that violate intellectual property rights of third parties.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">7. Contact Us</h2>
            <p className="text-stone-600 text-sm leading-relaxed mb-4">
              If you have any questions about these policies, please contact us:
            </p>
            <ul className="text-sm text-stone-600 space-y-2">
              <li><strong>General Support & Business:</strong> <a href="mailto:ansu.purohit.consulting@gmail.com" className="text-violet-600 hover:underline font-medium">ansu.purohit.consulting@gmail.com</a></li>
              <li><strong>Legal & IP Issues:</strong> <a href="mailto:ansu.purohit.consulting@gmail.com" className="text-violet-600 hover:underline font-medium">ansu.purohit.consulting@gmail.com</a></li>
              <li><strong>Website:</strong> <a href="https://market.listingguard.store" className="text-violet-600 hover:underline font-medium">market.listingguard.store</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
