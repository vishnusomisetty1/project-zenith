import Navbar from '@/components/Navbar';

export default function Programs() {
  return (
    <main className="bg-[#0A192F] text-[#F6F9F8] font-serif min-h-screen">
      <Navbar />
      <section className="pt-32 px-4 sm:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#E2B148] via-[#E2B148] to-[#E2B148] text-transparent bg-clip-text leading-normal">
            Our Programs
          </h1>

          <div className="mb-8 text-lg text-[#F6F9F8]">
            <span className="bg-[#112240] px-3 py-1 rounded-full mr-2">
              All Free
            </span>
            <span className="bg-[#112240] px-3 py-1 rounded-full mr-2">
              Hands-On
            </span>
            <span className="bg-[#112240] px-3 py-1 rounded-full">
              Ages 8–16
            </span>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#E2B148] mb-6 leading-tight">
                Flagship Workshops
              </h2>
              <div className="bg-[#112240] rounded-lg p-6 shadow-lg">
                <ul className="space-y-4 text-lg">
                  <li className="flex items-center justify-between">
                    <div>
                      <span className="text-[#E2B148] mr-2">•</span>
                      Intro to Python{' '}
                      <span className="text-[#F6F9F8]/70">(Ages 8–16)</span>
                    </div>
                    <span className="text-[#E2B148] italic">Coming Soon</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>
                      <span className="text-[#E2B148] mr-2">•</span>
                      Intro to Java{' '}
                      <span className="text-[#F6F9F8]/70">(Ages 10–16)</span>
                    </div>
                    <span className="text-[#E2B148] italic">Coming Soon</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>
                      <span className="text-[#E2B148] mr-2">•</span>
                      Creative Coding with Scratch{' '}
                      <span className="text-[#F6F9F8]/70">(Ages 8–12)</span>
                    </div>
                    <span className="text-[#E2B148] italic">Coming Soon</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>
                      <span className="text-[#E2B148] mr-2">•</span>
                      Digital Safety & Smart Tech Use{' '}
                      <span className="text-[#F6F9F8]/70">(Ages 8–13)</span>
                    </div>
                    <span className="text-[#E2B148] italic">Coming Soon</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>
                      <span className="text-[#E2B148] mr-2">•</span>
                      AI & Ethics for Beginners{' '}
                      <span className="text-[#F6F9F8]/70">(Ages 12–16)</span>
                    </div>
                    <span className="text-[#E2B148] italic">Coming Soon</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>
                      <span className="text-[#E2B148] mr-2">•</span>
                      Logic & Problem Solving Games{' '}
                      <span className="text-[#F6F9F8]/70">(Ages 8–14)</span>
                    </div>
                    <span className="text-[#E2B148] italic">Coming Soon</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#112240] rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-[#E2B148] mb-4 leading-tight">
                Each Workshop Includes:
              </h3>
              <ul className="space-y-2 text-lg">
                <li className="flex items-center">
                  <span className="text-[#E2B148] mr-2">•</span>
                  Presentations
                </li>
                <li className="flex items-center">
                  <span className="text-[#E2B148] mr-2">•</span>
                  Coding Demos
                </li>
                <li className="flex items-center">
                  <span className="text-[#E2B148] mr-2">•</span>
                  Interactive Activities
                </li>
                <li className="flex items-center">
                  <span className="text-[#E2B148] mr-2">•</span>
                  Q&A Sessions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
