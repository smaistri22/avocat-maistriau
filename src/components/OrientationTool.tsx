import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface OrientationToolProps {
  onOpenBooking: (subject?: string) => void;
}

export const OrientationTool: React.FC<OrientationToolProps> = ({ onOpenBooking }) => {
  const { t } = useLanguage();
  const [matter, setMatter] = useState<string>('divorce');
  const [dialogueState, setDialogueState] = useState<string>('possible');
  const [hasInsurance, setHasInsurance] = useState<string>('unsure');

  const getRecommendation = () => {
    if (matter === 'divorce') {
      if (dialogueState === 'possible') {
        return {
          ...t.orientation.recommendations.divorceAmiable,
          bookingSubject: 'mediation',
        };
      } else {
        return {
          ...t.orientation.recommendations.divorceContentieux,
          bookingSubject: 'famille',
        };
      }
    }

    if (matter === 'bail') {
      return {
        ...t.orientation.recommendations.bail,
        bookingSubject: 'baux',
      };
    }

    if (matter === 'roulage') {
      return {
        ...t.orientation.recommendations.roulage,
        bookingSubject: 'roulage',
      };
    }

    // Successions
    return {
      ...t.orientation.recommendations.successions,
      bookingSubject: 'successions',
    };
  };

  const recommendation = getRecommendation();

  return (
    <section className="py-12 lg:py-16 bg-[#F8F5EE] border-b border-[#E2DBD0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#B58D3D] mb-3 font-sans">
            {t.orientation.sectionBadge}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-[#181615] mb-4 [text-wrap:balance]">
            {t.orientation.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-serif">
            {t.orientation.sectionDesc}
          </p>
        </div>

        {/* Diagnostic Interactive Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Input Selection Form */}
          <div className="lg:col-span-5 rounded-2xl bg-[#FAF8F3] border border-[#E2DBD0] p-6 sm:p-8 space-y-6">
            
            {/* Step 1: Matter */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 font-sans">
                {t.orientation.step1Title}
              </label>
              <div className="space-y-1.5 font-sans">
                {[
                  { id: 'divorce', label: t.orientation.matters.divorce },
                  { id: 'bail', label: t.orientation.matters.bail },
                  { id: 'roulage', label: t.orientation.matters.roulage },
                  { id: 'successions', label: t.orientation.matters.successions },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setMatter(item.id)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm font-medium transition-all ${
                      matter === item.id
                        ? 'bg-[#181615] border-[#181615] text-[#F8F5EE] shadow-sm'
                        : 'bg-white border-[#D5CDBD] text-stone-700 hover:border-stone-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Dialogue State */}
            {matter === 'divorce' && (
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 font-sans">
                  {t.orientation.step2Title}
                </label>
                <div className="grid grid-cols-2 gap-2 font-sans">
                  <button
                    type="button"
                    onClick={() => setDialogueState('possible')}
                    className={`px-3 py-2.5 rounded-lg border text-xs text-center font-medium transition-all ${
                      dialogueState === 'possible'
                        ? 'bg-[#181615] border-[#181615] text-[#F8F5EE] shadow-sm'
                        : 'bg-white border-[#D5CDBD] text-stone-700 hover:border-stone-800'
                    }`}
                  >
                    {t.orientation.dialoguePossible}
                  </button>
                  <button
                    type="button"
                    onClick={() => setDialogueState('rompu')}
                    className={`px-3 py-2.5 rounded-lg border text-xs text-center font-medium transition-all ${
                      dialogueState === 'rompu'
                        ? 'bg-[#181615] border-[#181615] text-[#F8F5EE] shadow-sm'
                        : 'bg-white border-[#D5CDBD] text-stone-700 hover:border-stone-800'
                    }`}
                  >
                    {t.orientation.dialogueBroken}
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Insurance */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 font-sans">
                {matter === 'divorce' ? t.orientation.step3Title : t.orientation.step3TitleShort}
              </label>
              <div className="grid grid-cols-3 gap-2 font-sans">
                {[
                  { id: 'yes', label: t.orientation.insuranceYes },
                  { id: 'unsure', label: t.orientation.insuranceUnsure },
                  { id: 'no', label: t.orientation.insuranceNo },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setHasInsurance(item.id)}
                    className={`px-3 py-2 rounded-lg border text-xs text-center font-medium transition-all ${
                      hasInsurance === item.id
                        ? 'bg-[#181615] border-[#181615] text-[#F8F5EE] shadow-sm'
                        : 'bg-white border-[#D5CDBD] text-stone-700 hover:border-stone-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-[11px] text-stone-500 pt-2 border-t border-[#E2DBD0] font-sans">
              {t.orientation.disclaimer}
            </div>

          </div>

          {/* Right: Recommendation Outcome Box */}
          <div className="lg:col-span-7 rounded-2xl bg-gradient-to-br from-[#181615] to-[#252220] text-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold font-sans">
                  {t.orientation.recommendedBadge}
                </span>
                <span className="text-xs px-2.5 py-1 rounded bg-stone-800 text-stone-300 font-medium font-sans">
                  {recommendation.path}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white mt-5 mb-3">
                {recommendation.title}
              </h3>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6 font-serif">
                {recommendation.desc}
              </p>

              <div className="space-y-3 mb-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-stone-400 font-sans">
                  {t.orientation.priorityStepsLabel}
                </div>
                {recommendation.steps.map((st, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-200 font-serif">
                    <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{st}</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-lg bg-black/40 border border-stone-800 text-xs text-amber-300/90 leading-relaxed font-sans">
                <strong>{t.orientation.feesLabel}</strong> {recommendation.feeNote}
              </div>
            </div>

            {/* Bottom Button */}
            <div className="mt-8 pt-6 border-t border-stone-800 flex flex-wrap items-center justify-between gap-4 font-sans">
              <span className="text-xs text-stone-400">
                {t.orientation.consultBasisLabel}
              </span>
              <button
                onClick={() => onOpenBooking(recommendation.bookingSubject)}
                className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-stone-900 hover:bg-stone-200 transition-all shadow-md"
              >
                <span>{t.orientation.bookConsultationBtn}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
