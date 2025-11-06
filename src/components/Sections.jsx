import { BookOpen, School, Users, Library, CheckCircle, FileText, Mail, Phone } from 'lucide-react';

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="py-16 md:py-24">
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="max-w-3xl">
        <h2 className="font-serif text-3xl md:text-4xl text-slate-900">{title}</h2>
        {subtitle && <p className="mt-3 text-slate-700">{subtitle}</p>}
      </div>
      <div className="mt-10">
        {children}
      </div>
    </div>
  </section>
);

export function About() {
  return (
    <Section
      id="about"
      title="About SpringDale"
      subtitle="An established institution fostering academic excellence and character for over two decades."
    >
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="prose prose-slate max-w-none">
          <p>
            SpringDale School is recognized for its warm, student-centered approach and strong academic outcomes. Our faculty brings deep subject expertise and a passion for mentoring young minds.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
            {[
              'Holistic curriculum with focus on foundational skills',
              'Technology-enabled classrooms and labs',
              'Value education and community service',
              'Strong parent partnership and transparent communication',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-slate-700">
                <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-3">
            <a href="#academics" className="px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">Read More</a>
            <a href="#admissions" className="px-4 py-2 rounded-md border border-slate-200 hover:bg-slate-50">Visit Campus</a>
          </div>
        </div>
        <div className="aspect-[4/3] bg-slate-100 rounded-lg overflow-hidden shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1596495578065-8ae9ea0a8a2a?q=80&w=1600&auto=format&fit=crop"
            alt="School building"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Section>
  );
}

export function Academics() {
  const stages = [
    {
      title: 'Pre-Primary',
      icon: School,
      img: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1600&auto=format&fit=crop',
      text: 'Play-based learning that nurtures curiosity, language, and social-emotional growth in a safe, joyful environment.'
    },
    {
      title: 'Primary',
      icon: BookOpen,
      img: 'https://images.unsplash.com/photo-1523246199204-592f4b76c15f?q=80&w=1600&auto=format&fit=crop',
      text: 'Core literacy, numeracy, and scientific thinking with experiential projects and strong foundational skills.'
    },
    {
      title: 'Higher Secondary',
      icon: Library,
      img: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop',
      text: 'Advanced subjects, competitive exam support, and career guidance to shape future-ready graduates.'
    },
  ];

  return (
    <Section
      id="academics"
      title="Academics"
      subtitle="A progressive, structured pathway from early years to higher secondary."
    >
      <div className="grid md:grid-cols-3 gap-8">
        {stages.map(({ title, icon: Icon, img, text }) => (
          <div key={title} className="border border-slate-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow">
            <div className="aspect-[4/3] bg-slate-100">
              <img src={img} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2">
                <Icon className="w-5 h-5 text-sky-600" />
                <h3 className="font-serif text-xl text-slate-900">{title}</h3>
              </div>
              <p className="mt-2 text-slate-700 text-sm">{text}</p>
              <div className="mt-4 flex gap-2">
                <a href="#" className="text-sky-700 hover:underline">Read More</a>
                <span className="text-slate-300">•</span>
                <a href="#admissions" className="text-emerald-700 hover:underline">Apply Now</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Facilities() {
  const items = [
    {
      title: 'STEM & Computer Labs',
      img: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Library & Reading Rooms',
      img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Sports & Playgrounds',
      img: 'https://images.unsplash.com/photo-1521417531039-75e91486cc70?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Art, Music & Theatre',
      img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
    },
  ];

  return (
    <Section
      id="facilities"
      title="Facilities"
      subtitle="Thoughtfully designed spaces that support academic and co-curricular excellence."
    >
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((it) => (
          <div key={it.title} className="rounded-lg overflow-hidden border border-slate-200 bg-white">
            <div className="aspect-video bg-slate-100">
              <img src={it.img} alt={it.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-slate-900">{it.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Faculty() {
  const team = [
    {
      name: 'Dr. Ananya Mehta',
      role: 'Principal',
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Rahul Verma',
      role: 'Head of Mathematics',
      img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Neha Kapoor',
      role: 'English Literature',
      img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop',
    },
    {
      name: 'Vikas Sharma',
      role: 'Physics Faculty',
      img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <Section
      id="faculty"
      title="Our Faculty"
      subtitle="A dedicated team committed to nurturing every learner's potential."
    >
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {team.map((t) => (
          <div key={t.name} className="border border-slate-200 rounded-lg overflow-hidden bg-white text-center">
            <div className="aspect-[3/4] bg-slate-100">
              <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-slate-900">{t.name}</h3>
              <p className="text-sm text-slate-600">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Admissions() {
  return (
    <Section
      id="admissions"
      title="Admissions"
      subtitle="Transparent, parent-friendly admissions with clear timelines and support."
    >
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="border border-slate-200 rounded-lg p-6 bg-white">
          <h3 className="font-serif text-xl text-slate-900">How to Apply</h3>
          <ol className="mt-4 space-y-3 list-decimal list-inside text-slate-700">
            <li>Fill the enquiry form with basic details</li>
            <li>Join a campus tour or virtual orientation</li>
            <li>Submit the application with required documents</li>
            <li>Attend interaction/assessment (as applicable)</li>
          </ol>
          <div className="mt-6 flex gap-3">
            <a href="#enquiry" className="px-4 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700">Apply Now</a>
            <a href="#" className="px-4 py-2 rounded-md border border-slate-200 hover:bg-slate-50 flex items-center gap-2"><FileText className="w-4 h-4"/> Download Brochure</a>
          </div>
        </div>
        <div className="aspect-[4/3] bg-slate-100 rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop"
            alt="Admissions"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Section>
  );
}

export function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1521417531039-75e91486cc70?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1596495578065-8ae9ea0a8a2a?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  ];
  return (
    <Section id="gallery" title="Gallery" subtitle="Snapshots from life at SpringDale.">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <div key={i} className="aspect-[4/3] overflow-hidden rounded-lg">
            <img src={src} alt={`Gallery ${i+1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </Section>
  );
}

export function EnquiryForm() {
  return (
    <Section id="enquiry" title="Enquiry Form" subtitle="We’re here to help. Share your details and our team will get back to you.">
      <form className="max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-slate-600">Parent/Guardian Name</label>
          <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm text-slate-600">Email</label>
          <input type="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-sm text-slate-600">Phone</label>
          <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" placeholder="+91-" />
        </div>
        <div>
          <label className="block text-sm text-slate-600">Applying For</label>
          <select className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2">
            <option>Pre-Primary</option>
            <option>Primary</option>
            <option>Higher Secondary</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm text-slate-600">Message</label>
          <textarea rows="4" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Tell us how we can help" />
        </div>
        <div className="md:col-span-2">
          <button className="w-full md:w-auto px-5 py-3 rounded-md bg-emerald-600 text-white hover:bg-emerald-700">Submit Enquiry</button>
        </div>
      </form>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" title="Contact Us" subtitle="Reach out to our admissions office or administration.">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="border border-slate-200 rounded-lg p-6 bg-white">
          <h3 className="font-medium text-slate-900">Admissions Office</h3>
          <p className="mt-2 text-sm text-slate-700">Mon–Fri, 9:00 AM – 5:00 PM</p>
          <div className="mt-4 space-y-2 text-slate-700 text-sm">
            <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-sky-600"/> admissions@springdale.edu</p>
            <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-emerald-600"/> +91 98765 43210</p>
          </div>
        </div>
        <div className="border border-slate-200 rounded-lg p-6 bg-white">
          <h3 className="font-medium text-slate-900">Address</h3>
          <p className="mt-2 text-sm text-slate-700">
            SpringDale School, Greenwood Avenue,<br/> Sector 12, New Town, Bengaluru 560001
          </p>
        </div>
        <div className="aspect-[4/3] bg-slate-100 rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1600&auto=format&fit=crop"
            alt="Map location"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-[1200px] mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-serif text-xl">SpringDale School</h4>
          <p className="mt-2 text-sm text-slate-400">A warm, future-ready school where every child thrives.</p>
        </div>
        <div>
          <h5 className="font-medium">Quick Links</h5>
          <ul className="mt-3 space-y-2 text-sm">
            {['Home','About Us','Academics','Facilities','Admissions','Gallery','Enquiry','Contact'].map((l)=> (
              <li key={l}><a href="#" className="hover:text-white">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-medium">Contact</h5>
          <ul className="mt-3 space-y-2 text-sm">
            <li>admissions@springdale.edu</li>
            <li>+91 98765 43210</li>
            <li>Greenwood Avenue, Sector 12, Bengaluru</li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium">Follow</h5>
          <div className="mt-3 flex gap-3">
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">f</a>
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">ig</a>
            <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">x</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 py-4 text-xs text-slate-400">© {new Date().getFullYear()} SpringDale School. All rights reserved.</div>
      </div>
    </footer>
  );
}
