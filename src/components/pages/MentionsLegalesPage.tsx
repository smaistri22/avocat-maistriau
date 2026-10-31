import React from 'react';
import { LIVE_SITE_DATA } from '../../data/liveSiteData';
import { useLanguage } from '../../i18n/LanguageContext';

export const MentionsLegalesPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-[#F8F5EE] py-16 sm:py-24 border-b border-[#E2DBD0]">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 font-serif text-stone-800 space-y-10">
        
        <div className="border-b border-[#E2DBD0] pb-6">
          <h1 className="text-3xl sm:text-4xl font-normal text-[#181615] mb-2">
            {t.mentions.title}
          </h1>
          <p className="text-xs text-stone-500 font-sans uppercase tracking-wider">
            {t.mentions.subtitle}
          </p>
        </div>

        {/* Identité */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-[#181615]">
            {t.mentions.companyTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm bg-[#FAF8F3] p-6 rounded-xl border border-[#E2DBD0]">
            <div>
              <span className="text-stone-500 text-xs block font-sans">{t.mentions.lawyerNameLabel}</span>
              <strong>{LIVE_SITE_DATA.contact.lawyer}</strong>
            </div>
            <div>
              <span className="text-stone-500 text-xs block font-sans">{t.mentions.vatLabel}</span>
              <strong>{LIVE_SITE_DATA.contact.vat}</strong>
            </div>
            <div>
              <span className="text-stone-500 text-xs block font-sans">{t.mentions.addressLabel}</span>
              <strong>{LIVE_SITE_DATA.contact.addressLine}, {LIVE_SITE_DATA.contact.postalCodeCity}</strong>
            </div>
            <div>
              <span className="text-stone-500 text-xs block font-sans">{t.mentions.phoneEmailLabel}</span>
              <strong>{LIVE_SITE_DATA.contact.phone}</strong>
              <div className="text-xs text-stone-600 font-sans">{LIVE_SITE_DATA.contact.email}</div>
            </div>
          </div>
        </div>

        {/* Propriété Intellectuelle */}
        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-stone-700">
          <h2 className="text-xl font-bold text-[#181615]">
            {t.mentions.ipTitle}
          </h2>
          <p>
            {t.mentions.ipText}
          </p>
        </div>

        {/* Clause de non-responsabilité */}
        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-stone-700">
          <h2 className="text-xl font-bold text-[#181615]">
            {t.mentions.disclaimerTitle}
          </h2>
          <p>
            {t.mentions.disclaimerP1}
          </p>
          <p>
            {t.mentions.disclaimerP2}
          </p>
        </div>

        {/* RGPD */}
        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-stone-700">
          <h2 className="text-xl font-bold text-[#181615]">
            {t.mentions.gdprTitle}
          </h2>
          <p>
            {t.mentions.gdprP1}
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>{t.mentions.gdprItems.controller}</li>
            <li>{t.mentions.gdprItems.purposes}</li>
            <li>{t.mentions.gdprItems.secrecy}</li>
            <li>{t.mentions.gdprItems.rights}</li>
          </ul>
        </div>

      </div>
    </div>
  );
};
