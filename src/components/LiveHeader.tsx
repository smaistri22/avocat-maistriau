import React, { useState } from 'react';
import { Menu, X, Globe, Calendar, Compass } from 'lucide-react';
import { LIVE_SITE_DATA } from '../data/liveSiteData';

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

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À propos' },
    { id: 'orientation', label: 'Orientation (3 clics)' },
    { id: 'honoraires', label: 'Honoraires' },
    { id: 'contact', label: 'Contact' },
    { id: 'faq', label: 'FAQ' },
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

          {/* Language Indicator */}
          <div className="flex items-center gap-1.5 text-xs text-stone-500 border-l border-[#E2DBD0] pl-4">
            <Globe className="h-3.5 w-3.5 text-stone-400" />
            <span className="font-serif text-sm">Français</span>
          </div>

          {/* Rendez-vous Primary Action */}
          <button
            onClick={onOpenBooking}
            className="rounded-full bg-[#181615] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F8F5EE] transition-all hover:bg-stone-800 active:scale-[0.98] shadow-sm"
          >
            Rendez-vous
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={onOpenBooking}
            className="rounded-full bg-[#181615] px-3.5 py-1.5 text-xs font-semibold text-[#F8F5EE] uppercase tracking-wider"
          >
            RDV
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
                className="w-full rounded-full bg-[#181615] py-3 text-center text-xs font-semibold uppercase tracking-wider text-[#F8F5EE]"
              >
                Prendre Rendez-vous
              </button>
              <div className="flex items-center justify-center gap-1.5 text-xs text-stone-500 py-1">
                <Globe className="h-3.5 w-3.5" />
                <span>Français</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
