export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold">OTC Engineering</h2>

          <p className="text-slate-300 mt-4 leading-7">
            Software • Embedded • IoT • Infrastructure
          </p>

          <p className="text-slate-400 mt-3 text-xl">
            Building modern engineering solutions with innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

          <div className="flex flex-col gap-3 text-slate-300">
            <a href="#about" className="hover:text-white transition-colors duration-300">
              About
            </a>

            <a href="#services" className="hover:text-white transition-colors duration-300">
              Services
            </a>

            <a href="#projects" className="hover:text-white transition-colors duration-300">
              Projects
            </a>

            <a href="#team" className="hover:text-white transition-colors duration-300">
              Team
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>

          <p className="text-slate-300 leading-7">
             Address : 2119,Tower-1,DLF Corporate Greens,Sector-74A,Gurugram,Haryana-122004
          </p>

          <p className="text-slate-300 mt-2">
            info@otcengineering.com
          </p>

          <p className="text-slate-300 mt-2">
            +91 98765 43210
          </p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-slate-800 mt-10 pt-6 text-center text-slate-400 text-sm">
        © 2026 OTC Engineering. All rights reserved.
      </div>
    </footer>
  )
}