import React from 'react';
import { CheckCircle, Info } from 'lucide-react';
import { FeeSimulator } from './FeeSimulator';
import { useLanguage } from '../i18n/LanguageContext';

interface FeesSectionProps {
  onOpenBooking: () => void;
}

export const FeesSection: React.FC<FeesSectionProps> = ({ onOpenBooking }) => {
  const { t } = useLanguage();

  return (
    <section id="honoraires" className="py-12 lg:py-16 bg-[#F8F5EE] border-b border-[#E2DBD0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#B58D3D] mb-3 font-sans">
            {t.fees.sectionBadge}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#181615] mb-4 [text-wrap:balance]">
            {t.fees.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-serif">
            {t.fees.sectionIntro}
          </p>
        </div>

        {/* 3 Main Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14 font-serif">
          
          {/* Card 1: 1ère Consultation Forfaitaire */}
          <div className="relative rounded-2xl bg-[#FAF8F3] border-2 border-stone-800 p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-2 font-sans">
                {t.fees.card1.category}
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#181615] mb-2">
                {t.fees.card1.title}
              </h3>
              
              <div className="my-6">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-[#181615] tabular-nums">
                  {t.fees.card1.amount}
                </span>
                <span className="text-xs text-stone-500 ml-2 font-sans">{t.fees.card1.subAmount}</span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-stone-800 shrink-0 mt-0.5" />
                  <span>{t.fees.card1.p1}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-stone-800 shrink-0 mt-0.5" />
                  <span>{t.fees.card1.p2}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-stone-800 shrink-0 mt-0.5" />
                  <span>{t.fees.card1.p3}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-stone-800 shrink-0 mt-0.5" />
                  <span>{t.fees.card1.p4}</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="mt-8 w-full rounded-full bg-[#181615] py-3 text-center text-xs font-semibold uppercase tracking-wider text-[#F8F5EE] transition-all hover:bg-stone-800 font-sans"
            >
              {t.fees.card1.btn}
            </button>
          </div>

          {/* Card 2: Suivi au taux horaire */}
          <div className="rounded-2xl bg-[#FAF8F3] border border-[#E2DBD0] p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2 font-sans">
                {t.fees.card2.category}
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#181615] mb-2">
                {t.fees.card2.title}
              </h3>
              
              <div className="my-6">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-[#181615] tabular-nums">
                  {t.fees.card2.amount}
                </span>
                <span className="text-xs text-stone-500 ml-2 font-sans">{t.fees.card2.subAmount}</span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-stone-800 shrink-0 mt-0.5" />
                  <span>{t.fees.card2.p1}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-stone-800 shrink-0 mt-0.5" />
                  <span>{t.fees.card2.p2}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-stone-800 shrink-0 mt-0.5" />
                  <span>{t.fees.card2.p3}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-stone-800 shrink-0 mt-0.5" />
                  <span>{t.fees.card2.p4}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#EAE4D8] text-xs text-stone-500 font-sans">
              {t.fees.card2.footerNote}
            </div>
          </div>

          {/* Card 3: Protection Juridique */}
          <div className="rounded-2xl bg-[#FAF8F3] border border-[#E2DBD0] p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2 font-sans">
                {t.fees.card3.category}
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#181615] mb-2">
                {t.fees.card3.title}
              </h3>
              
              <div className="my-6">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-emerald-800 tabular-nums">
                  {t.fees.card3.amount}
                </span>
                <span className="text-xs text-stone-500 ml-2 font-sans">{t.fees.card3.subAmount}</span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-stone-700 leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>{t.fees.card3.p1}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>{t.fees.card3.p2}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>{t.fees.card3.p3}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>{t.fees.card3.p4}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#EAE4D8] text-xs text-stone-500 font-sans">
              {t.fees.card3.footerNote}
            </div>
          </div>

        </div>

        {/* Interactive Fee Simulator */}
        <div className="mb-14">
          <FeeSimulator onOpenBooking={onOpenBooking} />
        </div>

        {/* Legal Disclaimer: Non-participation in Pro Deo */}
        <div className="rounded-xl bg-[#FAF8F3] border border-[#E2DBD0] p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-5">
          <div className="p-3 rounded-lg bg-[#EFEAE0] text-stone-800 shrink-0">
            <Info className="h-6 w-6" />
          </div>
          <div className="font-serif">
            <h4 className="text-lg font-bold text-[#181615] mb-1">
              {t.fees.proDeo.title}
            </h4>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {t.fees.proDeo.text}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
