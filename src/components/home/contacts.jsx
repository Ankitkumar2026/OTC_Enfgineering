export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-blue-700 uppercase tracking-widest font-semibold mb-4">
            Contact
          </p>

          <h2 className="text-4xl font-bold text-slate-900">
            Contact OTC Engineering
          </h2>
        </div>

        <div className="border border-slate-200 rounded-3xl p-10 bg-white shadow-sm">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-slate-300 rounded-2xl px-5 py-4"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="border border-slate-300 rounded-2xl px-5 py-4"
            />
          </div>

          <textarea
            rows={6}
            placeholder="Tell us about your project"
            className="w-full mt-6 border border-slate-300 rounded-2xl px-5 py-4"
          ></textarea>

          <button className="mt-6 bg-blue-900 text-white px-8 py-4 rounded-2xl">
            Send Message
          </button>
        </div>
      </div>
    </section>
  )
}