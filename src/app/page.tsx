import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="bg-[#0A192F] text-[#CCD6F6] font-serif">
      <Navbar />
      {/* Hero Section */}
      <section
        className="min-h-screen flex flex-col items-center justify-center text-center p-8 relative"
        style={{
          backgroundImage: 'url(/images/Background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="max-w-4xl mx-auto relative z-10">
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
        </div>
      </section>
    </main>
  );
}
