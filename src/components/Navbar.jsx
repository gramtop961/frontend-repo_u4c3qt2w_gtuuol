import { useState } from 'react';
import { Menu, X, GraduationCap, ChevronDown } from 'lucide-react';

const pages = [
  { key: 'Home', label: 'Home' },
  { key: 'About', label: 'About Us' },
  { key: 'Academics', label: 'Academics' },
  { key: 'Facilities', label: 'Facilities' },
  { key: 'Faculty', label: 'Faculty' },
  { key: 'Admissions', label: 'Admissions' },
  { key: 'Gallery', label: 'Gallery' },
  { key: 'Enquiry', label: 'Enquiry Form' },
  { key: 'Contact', label: 'Contact' },
];

export default function Navbar({ currentPage, onNavigate }) {
  const [open, setOpen] = useState(false);
  const [showAcademics, setShowAcademics] = useState(false);

  const handleNav = (key) => {
    onNavigate(key);
    setOpen(false);
    setShowAcademics(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => handleNav('Home')}
            className="flex items-center gap-2 text-sky-700 hover:text-sky-800"
          >
            <GraduationCap className="w-7 h-7" />
            <span className="font-serif text-xl font-semibold">SpringDale School</span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {pages.map((p) => (
              <button
                key={p.key}
                onClick={() => handleNav(p.key)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === p.key
                    ? 'text-sky-800 bg-sky-50'
                    : 'text-slate-700 hover:text-sky-800 hover:bg-slate-50'
                }`}
              >
                {p.label}
              </button>
            ))}
            <div className="relative">
              <button
                onClick={() => setShowAcademics((s) => !s)}
                className="ml-1 px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-sky-800 hover:bg-slate-50 flex items-center gap-1"
              >
                Streams <ChevronDown className="w-4 h-4" />
              </button>
              {showAcademics && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-md shadow-lg p-2">
                  {['Pre-Primary', 'Primary', 'Higher Secondary'].map((s) => (
                    <button
                      key={s}
                      onClick={() => handleNav(`Academics:${s}`)}
                      className="w-full text-left px-3 py-2 rounded hover:bg-slate-50 text-slate-700"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden p-2 rounded hover:bg-slate-50"
            aria-label="Toggle Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 border-t border-slate-100">
            <div className="flex flex-col gap-1 pt-3">
              {pages.map((p) => (
                <button
                  key={p.key}
                  onClick={() => handleNav(p.key)}
                  className={`px-3 py-2 rounded-md text-left text-sm font-medium ${
                    currentPage === p.key
                      ? 'text-sky-800 bg-sky-50'
                      : 'text-slate-700 hover:text-sky-800 hover:bg-slate-50'
                  }`}
                >
                  {p.label}
                </button>
              ))}
              <div className="pt-2">
                <div className="px-3 text-xs uppercase tracking-wide text-slate-500">Streams</div>
                {['Pre-Primary', 'Primary', 'Higher Secondary'].map((s) => (
                  <button
                    key={s}
                    onClick={() => handleNav(`Academics:${s}`)}
                    className="w-full text-left px-3 py-2 rounded hover:bg-slate-50 text-slate-700"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
