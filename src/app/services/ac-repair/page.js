import Link from 'next/link';

export const metadata = {
  title: 'AC Repair & Installation Services',
  description: 'Professional AC repair, maintenance, and installation services in Pakistan. Expert technicians, same-day service, 24/7 emergency support for all AC brands.',
};

export default function ACRepairPage() {
  return (
    <>
      <section className="bg-white py-16 border-b border-primary-200">
        <div className="container-lg">
          <p className="section-eyebrow">Services</p>
          <h1 className="font-heading text-5xl md:text-6xl font-semibold text-primary-900 mb-6">AC Repair & Installation</h1>
          <p className="text-lg text-primary-600 max-w-3xl">
            Complete air conditioning solutions including repair, maintenance, installation, and gas refill for all brands. Available 24/7 for emergencies.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-heading text-3xl font-bold text-primary-900 mb-6">Professional AC Services</h2>
              <p className="text-primary-600 leading-relaxed mb-6">
                At M Yar Cool and Clean, we provide comprehensive AC repair and installation services for all types of air conditioning systems. Our certified technicians have extensive experience working with all major brands including Haier, Daikin, Gree, Dawlance, Orient, LG, Samsung, and more.
              </p>
              <p className="text-primary-600 leading-relaxed mb-6">
                Whether your AC needs a simple repair, gas refill, or complete installation, we deliver prompt, professional service with transparent pricing. We understand how crucial a functioning AC is, especially during peak summer months, which is why we offer 24/7 emergency repair services.
              </p>

              <h3 className="font-heading text-xl font-semibold text-primary-900 mt-10 mb-4">Our AC Services Include:</h3>
              <div className="space-y-3">
                {[
                  'AC Repair & Diagnostics - Thorough inspection and repair of all AC issues',
                  'Gas Refill & Charging - Professional refrigerant refill for optimal cooling',
                  'AC Installation - Expert installation of split, window, and central AC units',
                  'Routine Maintenance - Preventive maintenance to extend AC life and efficiency',
                  'Compressor Repair - Specialized compressor diagnostics and repair',
                  'Thermostat & Control Repair - Fixing electronic control issues',
                  'Duct Cleaning & Maintenance - Ducted AC system cleaning and upkeep',
                  'Emergency Repair - 24/7 emergency service for urgent AC breakdowns',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-primary-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-slate-50 border border-primary-200 p-8 mb-8">
                <h3 className="font-heading text-xl font-semibold text-primary-900 mb-4">Brands We Service</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['Haier', 'Daikin', 'Gree', 'Dawlance', 'Orient', 'LG', 'Samsung', 'General', 'Mitsubishi', 'Panasonic', 'Toshiba', 'Kenwood'].map((brand) => (
                    <div key={brand} className="text-sm text-primary-600 bg-white border border-primary-200 px-4 py-2">
                      {brand}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-accent text-white p-8">
                <h3 className="font-heading text-xl font-semibold mb-3">Need Emergency AC Repair?</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  We provide 24/7 emergency AC repair services. Call us now for immediate assistance.
                </p>
                <div className="flex gap-4">
                  <a href="tel:+923056687553" className="bg-white text-accent font-semibold px-6 py-3 text-sm hover:bg-white/90 transition-colors">
                    Call +92 305 6687553
                  </a>
                  <Link href="/contact" className="border border-white text-white font-semibold px-6 py-3 text-sm hover:bg-white/10 transition-colors">
                    Send Message
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-primary-200">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="section-eyebrow justify-center">Get a Quote</p>
            <h2 className="font-heading text-4xl font-bold text-primary-900 mb-4">Inquiry & Request Quote</h2>
            <p className="text-primary-600">Fill in your details below and we'll get back to you with a free quote.</p>
          </div>
          <form
            action="mailto:myarcoolandclean@gmail.com"
            method="POST"
            encType="text/plain"
            className="max-w-2xl mx-auto space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border border-primary-200 bg-white text-sm text-primary-900 outline-none focus:border-accent transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 border border-primary-200 bg-white text-sm text-primary-900 outline-none focus:border-accent transition-colors"
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full px-4 py-3 border border-primary-200 bg-white text-sm text-primary-900 outline-none focus:border-accent transition-colors"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Describe your AC repair needs..."
              required
              className="w-full px-4 py-3 border border-primary-200 bg-white text-sm text-primary-900 outline-none focus:border-accent transition-colors resize-none"
            />
            <button type="submit" className="btn-primary w-full justify-center text-base py-4">Request Quote</button>
          </form>
          <div className="max-w-2xl mx-auto mt-8 text-center">
            <p className="text-sm text-primary-500 mb-4">Or reach us directly:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/923056687553" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold text-sm hover:bg-[#128C7E] transition-colors">
                WhatsApp Inquiry
              </a>
              <a href="tel:+923056687553" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-800 text-primary-800 font-semibold text-sm hover:bg-primary-800 hover:text-white transition-colors">
                Call +92 305 6687553
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold text-sm hover:bg-accent-dark transition-colors">
                Contact Form
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container-lg text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-900 mb-4">Ready to Get Started?</h2>
          <p className="text-primary-600 mb-8">Contact us for a free consultation and quote.</p>
          <Link href="/contact" className="btn-primary">Request Service</Link>
        </div>
      </section>
    </>
  );
}
