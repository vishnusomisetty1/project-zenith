import Navbar from '@/components/Navbar';

export default function Events() {
  return (
    <main className="bg-[#0A192F] text-[#CCD6F6] font-serif min-h-screen">
      <Navbar />
      <section className="pt-24 px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#E5C100] via-[#DBA514] to-[#E5C100] text-transparent bg-clip-text">
            Upcoming Events
          </h1>

          <div className="bg-[#112240] rounded-lg p-8 shadow-lg text-center">
            <p className="text-xl text-[#CCD6F6]">
              Event calendar coming soon!
            </p>
            <p className="text-[#8892B0] mt-2">
              Check back later for our upcoming workshops and events.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
