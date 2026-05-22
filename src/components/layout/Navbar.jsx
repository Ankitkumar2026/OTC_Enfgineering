
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
   
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-900">
          OTC Engineering India 
        </h1>
        <nav className="hidden md:flex ml-85 gap-12 text-m font-medium text-slate-500 [&>a]:hover:text-slate-900 [&>a]:transition-colors [&>a]:duration-300">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#team">Team</a>
          
        </nav>

        {/* <button className="bg-blue-900 text-white px-5 py-2 rounded-xl"> */}
        <button className="bg-blue-900 text-white px-5 py-2 rounded-xl hover:bg-blue-950 hover:text-slate-100 transition-all duration-300">
          <a href="#contact">Contact Us</a>
        </button>
      </div>
    </header>
  )
}
