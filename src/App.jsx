import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { About, Academics, Facilities, Faculty, Admissions, Gallery, EnquiryForm, Contact, Footer } from './components/Sections';

export default function App() {
  const [page, setPage] = useState('Home');

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleNavigate = (key) => {
    setPage(key);
    // Map keys to sections
    if (key === 'Home') window.scrollTo({ top: 0, behavior: 'smooth' });
    else if (key === 'About') scrollTo('about');
    else if (key === 'Academics') scrollTo('academics');
    else if (key.startsWith('Academics:')) scrollTo('academics');
    else if (key === 'Facilities') scrollTo('facilities');
    else if (key === 'Faculty') scrollTo('faculty');
    else if (key === 'Admissions') scrollTo('admissions');
    else if (key === 'Gallery') scrollTo('gallery');
    else if (key === 'Enquiry') scrollTo('enquiry');
    else if (key === 'Contact') scrollTo('contact');
  };

  return (
    <div className="min-h-screen font-sans">
      <style>{`
        :root { --school-sky: #0ea5e9; --school-green: #10b981; }
        .font-serif { font-family: 'Playfair Display', ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif; }
        .font-sans { font-family: 'Lato', 'Open Sans', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; }
      `}</style>
      <Navbar currentPage={page} onNavigate={handleNavigate} />
      <main>
        <Hero onPrimary={() => handleNavigate('Admissions')} />
        <About />
        <Academics />
        <Facilities />
        <Faculty />
        <Admissions />
        <Gallery />
        <EnquiryForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
