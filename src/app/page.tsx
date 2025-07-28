'use client';

import React, { useState, useEffect } from 'react';

// Helper component for SVG icons for better readability
const Icon = ({ path, className = 'w-6 h-6' }: { path: string; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.title = 'VŠE PRO STAVBY s.r.o. | Moderní stavby a rekonstrukce';

    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#38b2ac" /><stop offset="100%" stop-color="#4299e1" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#g)" /></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = faviconUrl;
  }, []);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: '#sluzby', label: 'Služby' },
    { href: '#projekty', label: 'Projekty' },
    { href: '#o-nas', label: 'O nás' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  const services = [
    {
      icon: <Icon path="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />,
      title: 'Projekční práce',
      description: 'Zpracujeme pro vás kompletní projektovou dokumentaci pro všechny typy staveb.',
    },
    {
      icon: <Icon path="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
      title: 'Stavební povolení',
      description: 'Zajistíme veškerou administrativu a komunikaci s úřady pro hladké získání povolení.',
    },
    {
      icon: <Icon path="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />,
      title: 'Stavby na klíč',
      description: 'Realizujeme kompletní stavby od základů až po finální úpravy, připravené k nastěhování.',
    },
    {
      icon: <Icon path="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.472-2.472a3.375 3.375 0 00-4.773-4.773L6.75 10.5M11.42 15.17L6.75 10.5m4.67 4.67L6.75 10.5" />,
      title: 'Rekonstrukce',
      description: 'Modernizujeme a opravujeme byty, domy i komerční objekty s důrazem na kvalitu.',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" /><path d="M12 12l8 -4.5" /><path d="M12 12l0 9" /><path d="M12 12l-8 -4.5" /><path d="M8.225 10.15l-3.225 1.85" /><path d="M12 21l3.35 -1.9" /></svg>,
        title: 'Zemní a výkopové práce',
        description: 'Provádíme veškeré zemní práce, výkopy pro základy, inženýrské sítě a terénní úpravy.',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3l8 4.5v9l-8 4.5l-8 -4.5v-9l8 -4.5" /><path d="M12 12l8 -4.5" /><path d="M12 12v9" /><path d="M12 12l-8 -4.5" /></svg>,
        title: 'Základové desky',
        description: 'Specializujeme se na precizní realizaci základových desek pro rodinné domy i větší stavby.',
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2 text-xl font-bold text-gray-800">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            <span className="hidden sm:inline">VŠE PRO STAVBY</span>
            <span className="sm:hidden">VPS</span>
          </a>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-600 hover:text-teal-500 transition-colors duration-300 font-medium">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-teal-500 focus:outline-none">
              {isMenuOpen ? 
                <Icon path="M6 18L18 6M6 6l12 12" className="w-7 h-7" /> :
                <Icon path="M4 6h16M4 12h16m-7 6h7" className="w-7 h-7" />                 
              }
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="flex flex-col items-center space-y-4 py-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={toggleMenu} className="text-gray-600 hover:text-teal-500 transition-colors duration-300 font-medium text-lg">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative h-[60vh] md:h-[80vh] bg-cover bg-center text-white" style={{ backgroundImage: "url('/images/project-tanvald-finished-house.jpg')" }}>
          <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
          <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">Stavíme a rekonstruujeme s vášní a precizností</h1>
            <p className="text-lg md:text-2xl mb-8 max-w-3xl animate-fade-in-up">Váš spolehlivý partner pro stavby a rekonstrukce. Garantujeme kvalitu, termíny a rozpočet.</p>
            <a href="#kontakt" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 animate-fade-in-up">Nezávazná poptávka</a>
          </div>
        </section>

        {/* Services Section */}
        <section id="sluzby" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Naše Služby</h2>
              <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Nabízíme komplexní řešení pro vaši stavbu od A do Z.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-start">
                  <div className="bg-teal-100 text-teal-600 p-3 rounded-full mb-4">
                    {service.icon} 
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 flex-grow">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="o-nas" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Kdo jsme a proč si vybrat nás?</h2>
              <p className="mt-4 text-lg text-gray-600">Jsme stavební firma s více než 10 lety zkušeností na trhu. Naší filozofií je individuální přístup, vysoká kvalita odvedené práce a absolutní spolehlivost.</p>
              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                   <Icon path="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className="w-7 h-7 text-teal-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg">Kvalita a zkušenosti</h4>
                    <p className="text-gray-600">Využíváme moderní postupy a kvalitní materiály. Náš tým tvoří zkušení profesionálové.</p>
                  </div>
                </div>
                 <div className="flex items-start">
                    <Icon path="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" className="w-7 h-7 text-teal-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg">Dodržování termínů a rozpočtu</h4>
                    <p className="text-gray-600">Zakládáme si na precizním plánování, které nám umožňuje dodržet smluvené termíny i ceny.</p>
                  </div>
                </div>
                <div className="flex items-start">
                   <Icon path="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9 9.563A4.502 4.502 0 0012 11.25a4.502 4.502 0 003-1.688" className="w-7 h-7 text-teal-500 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg">Férové jednání</h4>
                    <p className="text-gray-600">Transparentní komunikace a partnerský přístup je základem naší spolupráce s klienty.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img src="/images/project-rdpo-modern-house.jpg" alt="Moderní rodinný dům" className="rounded-lg shadow-xl w-full h-auto object-cover" />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projekty" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Naše Realizace</h2>
              <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Prohlédněte si ukázky našich dokončených projektů, které mluví za nás.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group overflow-hidden rounded-lg shadow-lg">
                 <img src="/images/project-tanvald-finished-house.jpg" alt="Dokončený dům v Tanvaldu" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="group overflow-hidden rounded-lg shadow-lg">
                 <img src="/images/project-rdpo-modern-house.jpg" alt="Moderní dům RDPO" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontakt" className="py-16 md:py-24 bg-gray-800 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Máte zájem o naše služby?</h2>
            <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">Kontaktujte nás pro nezávaznou konzultaci a cenovou nabídku. Těšíme se na spolupráci.</p>
            <div className="mt-12 max-w-lg mx-auto bg-gray-700 p-8 rounded-lg shadow-xl text-left space-y-6">
                <div className="flex items-center">
                  <Icon path="M2.25 21h19.5m-18-18h18a2.25 2.25 0 012.25 2.25v13.5A2.25 2.25 0 0121.75 21H2.25A2.25 2.25 0 010 18.75V4.5A2.25 2.25 0 012.25 3z" className="w-6 h-6 mr-4 text-teal-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Adresa a sídlo</h4>
                    <p className="text-gray-300">VŠE PRO STAVBY s.r.o., Vesecko 492, 511 01 Turnov</p>
                  </div>
                </div>
                 <div className="flex items-center">
                    <Icon path="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.211-.998-.582-1.35L18.75 15.75M2.25 6.75L5.25 9.75M2.25 6.75h4.5v4.5L2.25 6.75z" className="w-6 h-6 mr-4 text-teal-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Telefon</h4>
                    <a href="tel:+420774429277" className="text-gray-300 hover:text-teal-400 transition-colors">+420 774 429 277</a>
                  </div>
                </div>
                <div className="flex items-center">
                    <Icon path="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" className="w-6 h-6 mr-4 text-teal-400 flex-shrink-0" />
                    <div>
                    <h4 className="font-semibold">E-mail</h4>
                    <a href="mailto:info@vseprostavby.cz" className="text-gray-300 hover:text-teal-400 transition-colors">info@vseprostavby.cz</a>
                  </div>
                </div>
                 <div className="flex items-center">
                    <Icon path="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25a2.25 2.25 0 002.25-2.25v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25v2.25A2.25 2.25 0 006 20.25z" className="w-6 h-6 mr-4 text-teal-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Firemní údaje</h4>
                    <p className="text-gray-300">IČO: 05443933, DIČ: CZ05443933</p>
                  </div>
                </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 ">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} VŠE PRO STAVBY s.r.o. Všechna práva vyhrazena.</p>
          <p className="text-gray-400 text-sm">
            Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 transition-colors font-semibold">DigitalFusion</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
