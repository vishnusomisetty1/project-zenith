import Navbar from '@/components/Navbar';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

export default function About() {
  return (
    <main className="bg-[#0A192F] text-[#CCD6F6] font-serif min-h-screen">
      <Navbar />
      <section className="pt-24 px-8 pb-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-[#E5C100] via-[#DBA514] to-[#E5C100] text-transparent bg-clip-text">
            About Us
          </h1>

          {/* Mission Section */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[#E5C100]">Our Mission</h2>
            <p className="text-lg text-[#CCD6F6] leading-relaxed">
              To make technology and CS education accessible to every young
              learner, regardless of background.
            </p>
          </div>

          {/* Vision Section */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[#E5C100]">Our Vision</h2>
            <p className="text-lg text-[#CCD6F6] leading-relaxed">
              To build a future where digital literacy is a universal skill and
              innovation starts early.
            </p>
          </div>

          {/* Why We Started Section */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[#E5C100]">
              Why We Started
            </h2>
            <p className="text-lg text-[#CCD6F6] leading-relaxed">
              Frustrated by the lack of engaging, beginner-friendly tech
              education for younger students, we created Project Zenith to offer
              accessible, age-appropriate, hands-on workshops, led by
              experienced high schoolers.
            </p>
          </div>

          {/* What We've Done Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#E5C100]">
              What We've Done
            </h2>
            <div className="bg-[#112240] rounded-lg p-6 shadow-lg">
              <ul className="space-y-4 text-lg text-[#CCD6F6]">
                <li className="flex items-start">
                  <span className="text-[#E5C100] mr-2">•</span>
                  Our first workshops launch Summer 2025
                </li>
                <li className="flex items-start">
                  <span className="text-[#E5C100] mr-2">•</span>
                  Multiple library partnerships are underway
                </li>
                <li className="flex items-start">
                  <span className="text-[#E5C100] mr-2">•</span>
                  Founders and members bring 1000+ hours of leadership,
                  technical, and community experience
                </li>
                <li className="flex items-start">
                  <span className="text-[#E5C100] mr-2">•</span>
                  Support from volunteers involved in organizations like
                  Heart2Hut, library advisory boards, and national STEM
                  competitions
                </li>
                <li className="flex items-start">
                  <span className="text-[#E5C100] mr-2">•</span>
                  Social presence growing with Instagram and TikTok
                </li>
              </ul>
            </div>
          </div>

          {/* Media Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#E5C100]">Media</h2>
            <div className="bg-[#112240] rounded-lg p-6 shadow-lg">
              <ul className="space-y-4 text-lg text-[#CCD6F6]">
                <li className="flex items-center">
                  <span className="text-[#E5C100] mr-2">•</span>
                  <FaInstagram className="text-[#E5C100] mr-2 text-xl" />
                  Instagram:{' '}
                  <a
                    href="https://instagram.com/project_zenith_org"
                    className="text-[#E5C100] hover:text-[#DBA514] transition-colors ml-1"
                  >
                    @project_zenith_org
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="text-[#E5C100] mr-2">•</span>
                  <FaTiktok className="text-[#E5C100] mr-2 text-xl" />
                  TikTok: <span className="italic ml-1">Coming Soon!</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E5C100] mr-2">•</span>
                  Photo gallery of workshops{' '}
                  <span className="italic">(to be updated)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E5C100] mr-2">•</span>
                  Short recap videos from events{' '}
                  <span className="italic">(coming soon)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Section - Added with smaller text */}
          <div className="space-y-3 pt-8 border-t border-[#E5C100]/20">
            <h2 className="text-xl font-bold text-[#E5C100]">Contact Us</h2>
            <div className="text-base text-[#8892B0] space-y-1">
              <p>
                Email:{' '}
                <a
                  href="mailto:project.zenith.org@gmail.com"
                  className="text-[#CCD6F6] hover:text-[#E5C100] transition-colors"
                >
                  project.zenith.org@gmail.com
                </a>
              </p>
              <p>
                Phone:{' '}
                <a
                  href="tel:732-763-8990"
                  className="text-[#CCD6F6] hover:text-[#E5C100] transition-colors"
                >
                  732-763-8990
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
