import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { LIVE_SITE_DATA } from '../data/liveSiteData';
import { useLanguage } from '../i18n/LanguageContext';

interface LiveHeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const LiveHeader: React.FC<LiveHeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { id: 'home', label: t.header.nav.home },
    { id: 'about', label: t.header.nav.about },
    { id: 'orientation', label: t.header.nav.orientation },
    { id: 'honoraires', label: t.header.nav.honoraires },
    { id: 'contact', label: t.header.nav.contact },
    { id: 'faq', label: t.header.nav.faq },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F8F5EE]/95 backdrop-blur-md border-b border-[#E2DBD0]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        
        {/* Brand Logo / Wordmark */}
        <button
          onClick={() => onNavigate('home')}
          className="text-left font-serif text-2xl sm:text-3xl font-normal tracking-tight text-[#181615] hover:opacity-85 transition-opacity"
        >
          {LIVE_SITE_DATA.brand}
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-700">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`transition-colors hover:text-[#181615] font-serif text-base tracking-wide ${
                  isActive ? 'text-[#181615] underline underline-offset-8 decoration-[#181615] font-semibold' : ''
                }`}
              >
                {item.label}
              </button>
            );
          })}

          {/* Language Switcher FR | EN */}
          <div className="flex items-center gap-2 text-xs border-l border-[#E2DBD0] pl-4 font-sans font-semibold">
            <Globe className="h-3.5 w-3.5 text-stone-400" />
            <button
              type="button"
              onClick={() => setLanguage('fr')}
              className={`transition-colors text-xs tracking-wider ${
                language === 'fr'
                  ? 'text-[#181615] font-bold underline underline-offset-4 decoration-2 decoration-[#181615]'
                  : 'text-stone-400 hover:text-stone-700'
              }`}
              aria-label="Passer en français"
            >
              FR
            </button>
            <span className="text-stone-300">|</span>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`transition-colors text-xs tracking-wider ${
                language === 'en'
                  ? 'text-[#181615] font-bold underline underline-offset-4 decoration-2 decoration-[#181615]'
                  : 'text-stone-400 hover:text-stone-700'
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>

          {/* Rendez-vous Primary Action */}
          <button
            onClick={onOpenBooking}
            className="rounded-full bg-[#181615] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F8F5EE] transition-all hover:bg-stone-800 active:scale-[0.98] shadow-sm font-sans"
          >
            {t.header.bookingBtn}
          </button>
        </nav>

        {/* Mobile Hamburger & Actions */}
        <div className="flex items-center gap-3 lg:hidden">
          {/* Mobile Language Switcher */}
          <div className="flex items-center gap-1.5 text-xs font-sans font-semibold text-stone-700 mr-1 bg-white/70 px-2.5 py-1 rounded-full border border-[#E2DBD0]">
            <button
              type="button"
              onClick={() => setLanguage('fr')}
              className={language === 'fr' ? 'font-bold text-[#181615] underline decoration-[#181615]' : 'text-stone-400'}
            >
              FR
            </button>
            <span className="text-stone-300">|</span>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={language === 'en' ? 'font-bold text-[#181615] underline decoration-[#181615]' : 'text-stone-400'}
            >
              EN
            </button>
          </div>

          <button
            onClick={onOpenBooking}
            className="rounded-full bg-[#181615] px-3.5 py-1.5 text-xs font-semibold text-[#F8F5EE] uppercase tracking-wider font-sans"
          >
            {t.header.bookingBtnShort}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-stone-700 hover:text-stone-950"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-[#E2DBD0] bg-[#FAF8F3] px-6 py-6 lg:hidden shadow-lg">
          <div className="flex flex-col gap-4 text-lg font-serif">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-1 ${
                  currentPage === item.id ? 'font-bold text-[#181615] underline' : 'text-stone-700'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-4 border-t border-[#E2DBD0] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full rounded-full bg-[#181615] py-3 text-center text-xs font-semibold uppercase tracking-wider text-[#F8F5EE] font-sans"
              >
                {t.header.bookingBtn}
              </button>
              
              {/* Language Switcher inside mobile drawer */}
              <div className="flex items-center justify-center gap-3 text-xs border border-[#E2DBD0] rounded-full py-2 px-4 bg-white font-sans mt-1">
                <Globe className="h-3.5 w-3.5 text-stone-400" />
                <button
                  type="button"
                  onClick={() => setLanguage('fr')}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                    language === 'fr'
                      ? 'bg-[#181615] text-[#F8F5EE]'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Français (FR)
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                    language === 'en'
                      ? 'bg-[#181615] text-[#F8F5EE]'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  English (EN)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
