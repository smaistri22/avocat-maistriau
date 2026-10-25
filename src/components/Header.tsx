import React, { useState } from 'react';
import { Phone, MapPin, Clock, Menu, X, ChevronRight } from 'lucide-react';
import { CABINET_INFO } from '../data/legalData';

interface HeaderProps {
  onOpenBooking: (subject?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0B1523] text-slate-100 shadow-md">
      {/* Top micro contact bar */}
      <div className="border-b border-slate-800/80 bg-[#070e18] px-4 py-2 text-xs text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-y-1">
          <div className="flex flex-wrap items-center gap-4 text-[13px]">
            <a
              href={`tel:${CABINET_INFO.phones.cabinet.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 transition-colors hover:text-amber-400"
            >
              <Phone className="h-3.5 w-3.5 text-amber-500" />
              <span>{CABINET_INFO.phones.cabinet}</span>
            </a>
            <span className="hidden text-slate-600 sm:inline">·</span>
            <span className="hidden items-center gap-1.5 sm:flex">
              <MapPin className="h-3.5 w-3.5 text-amber-500" />
              <span>{CABINET_INFO.address.street}, {CABINET_INFO.address.postalCode} Etterbeek</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span className="hidden md:inline">Barreau de Bruxelles depuis 1989</span>
            <span className="hidden md:inline text-slate-600">·</span>
            <span className="flex items-center gap-1.5 text-amber-400/90 font-medium">
              <Clock className="h-3 w-3" />
              <span>Consultation sur rendez-vous</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Top Bar adhering strictly to Top Bar Contract: 3 zones, gap-8 */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-3.5 sm:px-6">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#accueil"
          className="group flex flex-col text-left whitespace-nowrap shrink-0 transition-opacity hover:opacity-90"
        >
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
            Cabinet Philippe Maistriau
          </span>
          <span className="text-[11px] uppercase tracking-wider text-amber-400/90 font-medium font-sans">
            Avocat au Barreau de Bruxelles & Médiateur Agréé
          </span>
        </a>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-200">
          <a
            href="#cabinet"
            className="whitespace-nowrap shrink-0 transition-colors hover:text-amber-400"
          >
            Le Cabinet
          </a>
          <a
            href="#expertises"
            className="whitespace-nowrap shrink-0 transition-colors hover:text-amber-400"
          >
            Domaines d'intervention
          </a>
          <a
            href="#mediation"
            className="whitespace-nowrap shrink-0 transition-colors hover:text-amber-400"
          >
            Médiation Familiale
          </a>
          <a
            href="#honoraires"
            className="whitespace-nowrap shrink-0 transition-colors hover:text-amber-400"
          >
            Honoraires
          </a>
          <a
            href="#faq"
            className="whitespace-nowrap shrink-0 transition-colors hover:text-amber-400"
          >
            FAQ
          </a>
          <a
            href="#acces"
            className="whitespace-nowrap shrink-0 transition-colors hover:text-amber-400"
          >
            Accès & Contact
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenBooking()}
            className="flex items-center gap-2 rounded-md bg-[#B58D3D] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 transition-all hover:bg-[#C89F4E] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 active:scale-[0.98] whitespace-nowrap shrink-0"
          >
            <span>Prendre RDV</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => onOpenBooking()}
            className="rounded bg-[#B58D3D] px-2.5 py-1.5 text-xs font-semibold text-slate-950 whitespace-nowrap"
          >
            RDV (125 €)
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-300 hover:text-white"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-800 bg-[#0E1A2B] px-4 py-5 lg:hidden">
          <div className="flex flex-col gap-3 text-sm font-medium text-slate-200">
            <a
              href="#cabinet"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400"
            >
              Le Cabinet
            </a>
            <a
              href="#expertises"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400"
            >
              Domaines d'intervention
            </a>
            <a
              href="#mediation"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400"
            >
              Médiation Familiale
            </a>
            <a
              href="#honoraires"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400"
            >
              Honoraires & Transparence
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400"
            >
              Questions fréquentes (FAQ)
            </a>
            <a
              href="#acces"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400"
            >
              Accès & Contact
            </a>

            <div className="mt-4 border-t border-slate-800 pt-4 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full rounded bg-[#B58D3D] py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-slate-950 hover:bg-[#C89F4E]"
              >
                Prendre une consultation (125 € TTC)
              </button>
              <a
                href={`tel:${CABINET_INFO.phones.cabinet.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 rounded border border-slate-700 py-2 text-xs text-slate-300"
              >
                <Phone className="h-3.5 w-3.5 text-amber-400" />
                <span>Appeler le {CABINET_INFO.phones.cabinet}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
