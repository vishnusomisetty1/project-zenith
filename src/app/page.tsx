export default function Home() {
  return (
    <main className="bg-[#0A192F] text-[#CCD6F6] font-serif">
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

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-[#8892B0] text-[#8892B0] font-semibold rounded-lg hover:bg-[#8892B0]/10 transition-colors font-serif"
            >
              Follow Us on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-8" id="about">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#FFD700] text-transparent bg-clip-text">
            About Us
          </h2>

          <div className="grid gap-8">
            <div>
              <h3 className="text-xl font-semibold text-[#FFD700] mb-2">
                Our Mission
              </h3>
              <p className="text-[#8892B0]">
                To make technology and CS education accessible to every young
                learner, regardless of background.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#FFD700] mb-2">
                Our Vision
              </h3>
              <p className="text-[#8892B0]">
                To build a future where digital literacy is a universal skill
                and innovation starts early.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#FFD700] mb-2">
                Why We Started
              </h3>
              <p className="text-[#8892B0]">
                Frustrated by the lack of engaging, beginner-friendly tech
                education for younger students, we created Project Zenith to
                offer accessible, age-appropriate, hands-on workshops, led by
                experienced high schoolers.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-[#112240] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-[#FFD700] mb-4">
              What We've Done
            </h3>
            <ul className="text-[#8892B0] space-y-2">
              <li>• Our first workshops launch Summer 2025</li>
              <li>• Multiple library partnerships are underway</li>
              <li>
                • Founders and members bring 1000+ hours of leadership,
                technical, and community experience
              </li>
              <li>
                • Support from volunteers involved in organizations like
                Heart2Hut, library advisory boards, and national STEM
                competitions
              </li>
              <li>• Social presence growing with Instagram and TikTok</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
