import React, { useState } from 'react';
import { Calculator, Clock, HelpCircle, CheckCircle2, Shield, ArrowRight } from 'lucide-react';

interface FeeSimulatorProps {
  onOpenBooking: () => void;
}

export const FeeSimulator: React.FC<FeeSimulatorProps> = ({ onOpenBooking }) => {
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
    { label: 'Conseil & Mise en demeure', hours: 2 },
    { label: 'Litige locatif (Bail)', hours: 4 },
    { label: 'Divorce consentement mutuel', hours: 6 },
    { label: 'Procédure Tribunal de la Famille', hours: 10 },
    { label: 'Contentieux successoral complexe', hours: 18 },
  ];

  return (
    <div className="rounded-2xl bg-[#FAF8F3] border border-[#E2DBD0] p-6 sm:p-8 lg:p-10 shadow-sm font-serif">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E2DBD0]">
        <div>
          <div className="flex items-center gap-2 text-stone-600 text-xs font-sans uppercase tracking-wider font-semibold mb-1">
            <Calculator className="h-4 w-4 text-stone-700" />
            <span>Simulateur d'honoraires transparent</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#181615]">
            Simulation du coût horaire
          </h3>
        </div>

        <div className="text-right">
          <span className="text-xs font-sans text-stone-500 block">Tarif de référence</span>
          <span className="font-serif text-lg font-bold text-[#181615]">
            150 € <span className="text-xs font-sans font-normal text-stone-500">HTVA / h + 10% frais admin</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-8">
        
        {/* Left: Interactive Controls */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Preset Buttons */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-stone-600 mb-2 font-sans font-semibold">
              Scénarios types fréquents :
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
                Nombre d'heures estimées :
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
                <span className="text-sm font-sans text-stone-500">heure{hours > 1 ? 's' : ''}</span>
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
              <span>1 heure</span>
              <span>10 heures</span>
              <span>20 heures</span>
              <span>30 heures</span>
              <span>40+ heures</span>
            </div>
          </div>

          {/* Explanatory notes */}
          <div className="space-y-3 text-xs text-stone-600 font-sans leading-relaxed">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-stone-800 shrink-0 mt-0.5" />
              <span>
                <strong>Frais administratifs de 10% :</strong> couvrent l'ouverture du dossier, les correspondances, l'archivage sécurisé et le secrétariat juridique.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-stone-800 shrink-0 mt-0.5" />
              <span>
                <strong>TVA légale de 21% :</strong> applicable en Belgique sur toutes les prestations juridiques d'avocat depuis 2014.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-stone-800 shrink-0 mt-0.5" />
              <span>
                <strong>1ère consultation d'orientation :</strong> reste toujours au tarif forfaitaire unique de <strong>125 € TTC</strong> (non soumise au taux horaire).
              </span>
            </div>
          </div>

        </div>

        {/* Right: Detailed Cost Breakdown Box */}
        <div className="lg:col-span-5 rounded-xl bg-[#181615] text-[#F8F5EE] p-6 sm:p-7 space-y-5 shadow-lg">
          
          <div className="border-b border-stone-800 pb-3">
            <span className="text-[11px] uppercase tracking-wider text-amber-400 font-sans font-semibold block">
              Détail de l'estimation
            </span>
            <div className="font-serif text-lg font-bold text-white">
              Pour {hours} heure{hours > 1 ? 's' : ''} de travail
            </div>
          </div>

          <div className="space-y-3 text-xs sm:text-sm font-sans">
            <div className="flex justify-between text-stone-300">
              <span>Honoraires de base ({hours}h × 150 €) :</span>
              <span className="tabular-nums font-semibold text-white">{baseFees.toFixed(2)} €</span>
            </div>

            <div className="flex justify-between text-stone-300">
              <span>Frais administratifs (+10%) :</span>
              <span className="tabular-nums font-semibold text-white">{adminFees.toFixed(2)} €</span>
            </div>

            <div className="pt-2 border-t border-stone-800 flex justify-between text-stone-200 font-semibold">
              <span>Sous-total HTVA (165 € / h) :</span>
              <span className="tabular-nums text-white">{totalHTVA.toFixed(2)} €</span>
            </div>

            <div className="flex justify-between text-stone-400 text-xs">
              <span>TVA belge (21%) :</span>
              <span className="tabular-nums">{vatAmount.toFixed(2)} €</span>
            </div>

            {/* Total Highlight */}
            <div className="pt-3 border-t border-stone-700 flex items-baseline justify-between text-[#F8F5EE]">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold block text-amber-400">
                  Total estimé TTC :
                </span>
                <span className="text-[10px] text-stone-400 font-normal">
                  (~{(totalTTC / hours).toFixed(2)} € TTC / h)
                </span>
              </div>
              <div className="text-right">
                <span className="font-serif text-3xl font-bold text-white tabular-nums">
                  {totalTTC.toFixed(2)} €
                </span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-stone-800 text-[11px] font-sans text-stone-400 leading-snug">
            Ce simulateur fournit une estimation indicative. Une convention d'honoraires écrite détaillée est systématiquement établie avec vous lors de l'ouverture du dossier.
          </div>

          <button
            onClick={onOpenBooking}
            className="w-full flex items-center justify-center gap-2 rounded-full bg-white text-[#181615] py-3 text-xs font-semibold uppercase tracking-wider font-sans hover:bg-stone-200 transition-colors shadow-md"
          >
            <span>Prendre consultation (125 € TTC)</span>
            <ArrowRight className="h-4 w-4" />
          </button>

        </div>

      </div>

    </div>
  );
};
