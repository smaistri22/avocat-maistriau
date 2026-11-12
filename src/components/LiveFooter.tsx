import React from 'react';
import footerLogo from '../assets/live/asset_1.jpg';
import { LIVE_SITE_DATA } from '../data/liveSiteData';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface LiveFooterProps {
  onNavigate: (page: string) => void;
}

export const LiveFooter: React.FC<LiveFooterProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#242120] text-[#E5E0D6] pt-14 pb-12 text-sm border-t border-stone-800">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-stone-700/60 items-start">
          
          {/* Logo / Badge (3 cols) */}
          <div className="md:col-span-3 flex items-start">
            <div className="overflow-hidden rounded-xl bg-stone-900 border border-stone-700 max-w-[130px] shadow-md">
              <img
                src={footerLogo}
                alt="Cabinet Maistriau"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="md:col-span-3 space-y-1.5 text-xs sm:text-sm font-serif">
            <div className="text-white font-semibold">{LIVE_SITE_DATA.contact.addressLine}</div>
            <div>{LIVE_SITE_DATA.contact.postalCodeCity}</div>
            <div className="pt-1.5">
              <a
                href={`mailto:${LIVE_SITE_DATA.contact.email}`}
                className="text-[#E5E0D6] hover:text-white underline underline-offset-4 transition-colors"
              >
                {LIVE_SITE_DATA.contact.email}
              </a>
            </div>
            <div>
              <a
                href={`tel:${LIVE_SITE_DATA.contact.phone.replace(/\s+/g, '')}`}
                className="text-[#E5E0D6] hover:text-white transition-colors"
              >
                {LIVE_SITE_DATA.contact.phone}
              </a>
            </div>
            <div className="text-[11px] text-stone-400 font-sans pt-1">
              TVA : {LIVE_SITE_DATA.contact.vat}
            </div>
          </div>

          {/* Horaires d'ouverture (3 cols) */}
          <div className="md:col-span-3 space-y-1.5 text-xs sm:text-sm font-serif">
            <h4 className="font-serif text-base font-bold text-white mb-2">
              {t.footer.openingHoursTitle}
            </h4>
            <div>{t.footer.days}</div>
            <div className="text-stone-300">{t.footer.morning}</div>
            <div className="text-stone-300">{t.footer.afternoon}</div>
          </div>

          {/* Réseaux sociaux & Accès rapide (3 cols) */}
          <div className="md:col-span-3 space-y-2 text-xs sm:text-sm font-serif">
            <h4 className="font-serif text-base font-bold text-white mb-2">
              {t.footer.followUsTitle}
            </h4>
            <div className="flex gap-4 text-xs font-serif">
              {LIVE_SITE_DATA.contact.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E5E0D6] hover:text-white underline underline-offset-4 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 text-xs text-stone-400 font-serif">
              {t.footer.subtext}
            </div>
          </div>

        </div>

        {/* Discreet Partners Mention en bas de page */}
        <div className="py-4 border-b border-stone-800/70 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-400 font-serif">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-stone-500 font-sans uppercase text-[11px] tracking-wider">{t.footer.partnersLabel}</span>
            <a
              href="https://cognitive-studio.be"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-300 hover:text-white underline underline-offset-2 flex items-center gap-1 transition-colors"
            >
              <span>cognitive-studio.be</span>
              <ExternalLink className="h-3 w-3 opacity-60" />
            </a>
            <span className="text-stone-600">·</span>
            <a
              href="https://www.avocate-anaferreira.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-300 hover:text-white underline underline-offset-2 flex items-center gap-1 transition-colors"
            >
              <span>Me Ana Ferreira (avocate-anaferreira.com)</span>
              <ExternalLink className="h-3 w-3 opacity-60" />
            </a>
          </div>

          <div className="text-[11px] text-stone-500 font-sans">
            Bruxelles · Etterbeek
          </div>
        </div>

        {/* Bottom row: Mentions Légales & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-serif text-stone-400">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('mentions')}
              className="hover:text-white underline underline-offset-4 transition-colors text-xs"
            >
              {t.footer.legalNoticeLink}
            </button>
            <span>·</span>
            <button
              onClick={() => onNavigate('honoraires')}
              className="hover:text-white underline underline-offset-4 transition-colors text-xs"
            >
              {t.footer.feeTransparencyLink}
            </button>
          </div>
          <div>
            {t.footer.copyright}
          </div>
        </div>

      </div>
    </footer>
  );
};
