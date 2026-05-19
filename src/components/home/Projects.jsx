import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-700 uppercase tracking-widest font-semibold mb-4">
            Projects
          </p>

          <h2 className="text-4xl font-bold text-slate-900">
            Recent Work
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-3xl p-10"
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                {project.title}
              </h3>

              <p className="text-slate-600">
                {project.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
