import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="bg-[#0A192F] text-[#F6F9F8] font-serif">
      <Navbar />
      {/* Hero Section */}
      <section
        className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-8 py-16 sm:py-8 relative"
        style={{
          backgroundImage: 'url(/images/bg2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#E2B148] via-[#E2B148] to-[#E2B148] text-transparent bg-clip-text drop-shadow-[0_2px_2px_rgba(226,177,72,0.3)] font-serif leading-tight">
            Project Zenith
          </h1>

          <p className="text-lg sm:text-xl text-[#F6F9F8] mb-6 font-serif leading-relaxed">
            Igniting Curiosity. Building Skills. Empowering the Next Generation
            of Innovators.
          </p>

          <p className="text-base sm:text-lg text-[#F6F9F8] mb-8 font-serif leading-relaxed">
            Free, student-led workshops in coding, computer science, and digital
            literacy for youth ages 8–16.
          </p>
        </div>
      </section>
    </main>
  );
}
