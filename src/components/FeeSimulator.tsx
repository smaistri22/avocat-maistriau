import React, { useState } from 'react';
import { Calculator, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface FeeSimulatorProps {
  onOpenBooking: () => void;
}

export const FeeSimulator: React.FC<FeeSimulatorProps> = ({ onOpenBooking }) => {
  const { language, t } = useLanguage();
  const [hours, setHours] = useState<number>(4);

  const BASE_RATE_HTVA = 150; // 150 € HTVA / heure
  const ADMIN_FEE_PERCENT = 0.10; // 10% de frais administratifs
  const VAT_RATE = 0.21; // 21% TVA belge

  const baseFees = hours * BASE_RATE_HTVA;
  const adminFees = baseFees * ADMIN_FEE_PERCENT;
  const totalHTVA = baseFees + adminFees;
  const vatAmount = totalHTVA * VAT_RATE;
  const totalTTC = totalHTVA + vatAmount;

  const presets = [
    { label: t.simulator.presets.advice, hours: 2 },
    { label: t.simulator.presets.bail, hours: 4 },
    { label: t.simulator.presets.divorceConsent, hours: 6 },
    { label: t.simulator.presets.familyCourt, hours: 10 },
    { label: t.simulator.presets.inheritance, hours: 18 },
  ];

  const formatEuro = (amount: number) => {
    return language === 'en'
      ? `€ ${amount.toFixed(2)}`
      : `${amount.toFixed(2)} €`;
  };

  return (
    <div className="rounded-2xl bg-[#FAF8F3] border border-[#E2DBD0] p-6 sm:p-8 lg:p-10 shadow-sm font-serif">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E2DBD0]">
        <div>
          <div className="flex items-center gap-2 text-stone-600 text-xs font-sans uppercase tracking-wider font-semibold mb-1">
            <Calculator className="h-4 w-4 text-stone-700" />
            <span>{t.simulator.badge}</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#181615]">
            {t.simulator.title}
          </h3>
        </div>

        <div className="text-right">
          <span className="text-xs font-sans text-stone-500 block">{t.simulator.referenceRateLabel}</span>
          <span className="font-serif text-lg font-bold text-[#181615]">
            {t.simulator.referenceRateValue}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-8">
        
        {/* Left: Interactive Controls */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Preset Buttons */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-stone-600 mb-2 font-sans font-semibold">
              {t.simulator.presetsLabel}
            </label>
            <div className="flex flex-wrap gap-2">
              {presets.map((p) => (
                <button
                  key={p.label}
                  type="button"
                  onClick={() => setHours(p.hours)}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-sans transition-all ${
                    hours === p.hours
                      ? 'bg-[#181615] border-[#181615] text-[#F8F5EE] font-semibold'
                      : 'bg-white border-[#D5CDBD] text-stone-700 hover:border-stone-800'
                  }`}
                >
                  {p.label} ({p.hours}h)
                </button>
              ))}
            </div>
          </div>

          {/* Slider and Input */}
          <div className="bg-white p-5 rounded-xl border border-[#E2DBD0] space-y-4">
            <div className="flex items-center justify-between">
              <label htmlFor="hours-slider" className="text-sm font-semibold text-[#181615] font-sans">
                {t.simulator.hoursLabel}
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="1"
                  max="60"
                  value={hours}
                  onChange={(e) => setHours(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 rounded-md border border-[#D5CDBD] text-center p-1.5 font-sans font-bold text-base text-[#181615] focus:outline-none focus:border-stone-900"
                />
                <span className="text-sm font-sans text-stone-500">
                  {hours > 1 ? t.simulator.hoursUnit : t.simulator.hourUnit}
                </span>
              </div>
            </div>

            <input
              id="hours-slider"
              type="range"
              min="1"
              max="40"
              value={hours}
              onChange={(e) => setHours(parseInt(e.target.value))}
              className="w-full accent-[#181615] cursor-pointer"
            />

            <div className="flex justify-between text-[11px] font-sans text-stone-400">
              <span>{t.simulator.hoursScale1}</span>
              <span>{t.simulator.hoursScale10}</span>
              <span>{t.simulator.hoursScale20}</span>
              <span>{t.simulator.hoursScale30}</span>
              <span>{t.simulator.hoursScale40}</span>
            </div>
          </div>

          {/* Explanatory notes */}
          <div className="space-y-3 text-xs text-stone-600 font-sans leading-relaxed">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-stone-800 shrink-0 mt-0.5" />
              <span>{t.simulator.notes.admin}</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-stone-800 shrink-0 mt-0.5" />
              <span>{t.simulator.notes.vat}</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-stone-800 shrink-0 mt-0.5" />
              <span>{t.simulator.notes.firstConsult}</span>
            </div>
          </div>

        </div>

        {/* Right: Detailed Cost Breakdown Box */}
        <div className="lg:col-span-5 rounded-xl bg-[#181615] text-[#F8F5EE] p-6 sm:p-7 space-y-5 shadow-lg">
          
          <div className="border-b border-stone-800 pb-3">
            <span className="text-[11px] uppercase tracking-wider text-amber-400 font-sans font-semibold block">
              {t.simulator.breakdownTitle}
            </span>
            <div className="font-serif text-lg font-bold text-white">
              {t.simulator.breakdownFor
                .replace('{hours}', hours.toString())
                .replace('{s}', hours > 1 ? (language === 'fr' ? 's' : 's') : '')}
            </div>
          </div>

          <div className="space-y-3 text-xs sm:text-sm font-sans">
            <div className="flex justify-between text-stone-300">
              <span>{t.simulator.baseFeesLabel.replace('{hours}', hours.toString())}</span>
              <span className="tabular-nums font-semibold text-white">{formatEuro(baseFees)}</span>
            </div>

            <div className="flex justify-between text-stone-300">
              <span>{t.simulator.adminFeesLabel}</span>
              <span className="tabular-nums font-semibold text-white">{formatEuro(adminFees)}</span>
            </div>

            <div className="pt-2 border-t border-stone-800 flex justify-between text-stone-200 font-semibold">
              <span>{t.simulator.subtotalLabel}</span>
              <span className="tabular-nums text-white">{formatEuro(totalHTVA)}</span>
            </div>

            <div className="flex justify-between text-stone-400 text-xs">
              <span>{t.simulator.vatLabel}</span>
              <span className="tabular-nums">{formatEuro(vatAmount)}</span>
            </div>

            {/* Total Highlight */}
            <div className="pt-3 border-t border-stone-700 flex items-baseline justify-between text-[#F8F5EE]">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold block text-amber-400">
                  {t.simulator.totalLabel}
                </span>
                <span className="text-[10px] text-stone-400 font-normal">
                  {t.simulator.approxHourlyLabel.replace('{rate}', (totalTTC / hours).toFixed(2))}
                </span>
              </div>
              <div className="text-right">
                <span className="font-serif text-3xl font-bold text-white tabular-nums">
                  {formatEuro(totalTTC)}
                </span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-stone-800 text-[11px] font-sans text-stone-400 leading-snug">
            {t.simulator.disclaimer}
          </div>

          <button
            onClick={onOpenBooking}
            className="w-full flex items-center justify-center gap-2 rounded-full bg-white text-[#181615] py-3 text-xs font-semibold uppercase tracking-wider font-sans hover:bg-stone-200 transition-colors shadow-md"
          >
            <span>{t.simulator.bookBtn}</span>
            <ArrowRight className="h-4 w-4" />
          </button>

        </div>

      </div>

    </div>
  );
};
