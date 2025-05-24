import Navbar from '@/components/Navbar';

export default function Events() {
  return (
    <main className="bg-[#0A192F] text-[#F6F9F8] font-serif min-h-screen">
      <Navbar />
      <section className="pt-32 px-4 sm:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#E2B148] via-[#E2B148] to-[#E2B148] text-transparent bg-clip-text leading-normal">
            Upcoming Events
          </h1>

          <div className="bg-[#112240] rounded-lg p-8 shadow-lg text-center">
            <p className="text-xl text-[#F6F9F8]">
              Event calendar coming soon!
            </p>
            <p className="text-[#F6F9F8]/70 mt-2">
              Check back later for our upcoming workshops and events.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
