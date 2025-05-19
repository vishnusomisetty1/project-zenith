export default function Navbar() {
  return (
    <nav className="fixed w-full bg-[#0A192F]/90 backdrop-blur-sm border-b border-[#E5C100]/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-[#E5C100] font-serif font-bold text-xl leading-relaxed"
            >
              Project Zenith
            </a>
          </div>

          <div className="hidden sm:block">
            <div className="flex items-center space-x-8">
              <a
                href="/"
                className="text-[#CCD6F6] hover:text-[#E5C100] font-serif transition-colors leading-relaxed py-2"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-[#CCD6F6] hover:text-[#E5C100] font-serif transition-colors leading-relaxed py-2"
              >
                About Us
              </a>
              <a
                href="/programs"
                className="text-[#CCD6F6] hover:text-[#E5C100] font-serif transition-colors leading-relaxed py-2"
              >
                Programs
              </a>
              <a
                href="/events"
                className="text-[#CCD6F6] hover:text-[#E5C100] font-serif transition-colors leading-relaxed py-2"
              >
                Upcoming Events
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
