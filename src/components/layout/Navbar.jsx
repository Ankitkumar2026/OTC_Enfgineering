
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-900">
          OTC Engineering
        </h1>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="bg-blue-900 text-white px-5 py-2 rounded-xl">
          Get Started
        </button>
      </div>
    </header>
  )
}
