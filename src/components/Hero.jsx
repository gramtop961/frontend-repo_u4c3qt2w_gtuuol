export default function Hero({ onPrimary }) {
  return (
    <section className="relative bg-gradient-to-br from-sky-50 via-white to-emerald-50">
      <div className="max-w-[1200px] mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-tight">
            Nurturing Curiosity, Inspiring Excellence
          </h1>
          <p className="mt-4 text-slate-700 text-lg">
            At SpringDale School, we blend rigorous academics with values-based education to help every learner grow with confidence, compassion, and creativity.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={onPrimary}
              className="px-5 py-3 rounded-md bg-sky-600 text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              Apply Now
            </button>
            <a
              href="#admissions"
              className="px-5 py-3 rounded-md border border-slate-200 text-slate-800 hover:bg-slate-50"
            >
              Download Brochure
            </a>
          </div>
        </div>
        <div className="aspect-[4/3] bg-slate-100 rounded-lg overflow-hidden shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop"
            alt="SpringDale campus"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
