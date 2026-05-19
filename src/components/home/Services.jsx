import { services } from '../../data/services'

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-700 uppercase tracking-widest font-semibold mb-4">
            Services
          </p>

          <h2 className="text-4xl font-bold text-slate-900">
            Our Engineering Expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                {service.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
