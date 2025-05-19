import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="bg-[#0A192F] text-[#CCD6F6] font-serif">
      <Navbar />
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#E5C100] via-[#DBA514] to-[#E5C100] text-transparent bg-clip-text drop-shadow-[0_2px_2px_rgba(229,193,0,0.3)] font-serif">
            Project Zenith
          </h1>

          <p className="text-xl text-[#CCD6F6] mb-6 font-serif">
            Igniting Curiosity. Building Skills. Empowering the Next Generation
            of Innovators.
          </p>

          <p className="text-lg text-[#8892B0] mb-8 font-serif">
            Free, student-led workshops in coding, computer science, and digital
            literacy for youth ages 8–16.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#host"
              className="px-8 py-3 bg-gradient-to-r from-[#E5C100] via-[#DBA514] to-[#E5C100] text-[#0A192F] font-semibold rounded-lg hover:from-[#DBA514] hover:to-[#DBA514] transition-all duration-300 shadow-[0_0_15px_rgba(229,193,0,0.3)] font-serif"
            >
              Host a Workshop
            </a>

            <a
              href="#join"
              className="px-8 py-3 border-2 border-[#E5C100] text-[#E5C100] font-semibold rounded-lg hover:bg-[#E5C100]/10 transition-colors shadow-[0_0_15px_rgba(229,193,0,0.15)] font-serif"
            >
              Join the Team
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
