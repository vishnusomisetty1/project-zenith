import Navbar from '@/components/Navbar';

export default function Events() {
  return (
    <main className="bg-[#0A192F] text-[#CCD6F6] font-serif min-h-screen">
      <Navbar />
      <section className="pt-24 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#E5C100] via-[#DBA514] to-[#E5C100] text-transparent bg-clip-text">
            Upcoming Events
          </h1>
        </div>
      </section>
    </main>
  );
}
