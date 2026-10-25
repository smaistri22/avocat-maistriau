import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Video, CheckCircle2, AlertCircle, FileText, Phone, Mail } from 'lucide-react';
import { CABINET_INFO, PRACTICE_AREAS } from '../data/legalData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialSubject,
}) => {
  const [appointmentType, setAppointmentType] = useState<'cabinet' | 'visio'>('cabinet');
  const [selectedSubject, setSelectedSubject] = useState<string>(initialSubject || 'famille');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredSlot, setPreferredSlot] = useState<'matin' | 'apres-midi'>('matin');
  const [message, setMessage] = useState('');
  const [acknowledgedProDeo, setAcknowledgedProDeo] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim() || !email.trim() || !phone.trim() || !preferredDate) {
      setErrorMessage('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    if (!acknowledgedProDeo) {
      setErrorMessage("Veuillez confirmer que vous avez bien pris note que le cabinet n'intervient pas dans le cadre du Pro Deo.");
      return;
    }

    // Generate reference number
    const ref = `MAIS-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setReferenceNumber(ref);
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-2xl bg-white border border-stone-200 shadow-2xl my-8 overflow-hidden text-slate-800">
        
        {/* Header */}
        <div className="bg-[#0B1523] px-6 py-5 text-white flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold">
              Demande de consultation
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold">
              Cabinet Philippe Maistriau
            </h3>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Fermer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        {submitted ? (
          <div className="p-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
              <CheckCircle2 className="h-10 w-10" />
            </div>

            <h4 className="font-serif text-2xl font-bold text-[#0B1523] mb-2">
              Demande de consultation enregistrée
            </h4>
            <p className="text-sm text-slate-600 mb-6 max-w-md mx-auto">
              Votre demande a bien été transmise à Maître Philippe Maistriau. 
              Vous recevrez une confirmation sous 24 heures ouvrées.
            </p>

            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-left max-w-md mx-auto mb-6 text-xs sm:text-sm space-y-2">
              <div className="flex justify-between pb-2 border-b border-stone-200">
                <span className="text-slate-500">Numéro de dossier :</span>
                <span className="font-mono font-bold text-slate-900">{referenceNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Mode :</span>
                <span className="font-semibold text-slate-800">
                  {appointmentType === 'cabinet' ? 'En cabinet (Bd Saint-Michel 11)' : 'Visioconférence'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Date souhaitée :</span>
                <span className="font-semibold text-slate-800">
                  {preferredDate} ({preferredSlot === 'matin' ? 'Matinée 9h-12h' : 'Après-midi 14h-18h'})
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Montant forfaitaire :</span>
                <span className="font-bold text-amber-800">{CABINET_INFO.consultationFee.amountTTC} TTC</span>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-amber-50 text-amber-900 text-xs text-left max-w-md mx-auto mb-6 leading-relaxed">
              <strong>Conseil pratique :</strong> Pensez à rassembler l'ensemble de vos pièces justificatives (contrats, courriers, assignations, jugements antérieurs) afin d'optimiser l'analyse de votre situation lors du rendez-vous.
            </div>

            <button
              onClick={handleResetAndClose}
              className="rounded-md bg-[#0B1523] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-slate-800"
            >
              Fermer la fenêtre
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            
            {/* Consultation Fee Pill Alert */}
            <div className="p-3.5 rounded-lg bg-stone-100 border border-stone-200 flex items-center justify-between text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-amber-700 shrink-0" />
                <span>Première consultation d'orientation approfondie :</span>
              </div>
              <span className="font-serif font-bold text-base text-[#0B1523] tabular-nums">
                125 € TTC
              </span>
            </div>

            {errorMessage && (
              <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Mode: Cabinet vs Visio */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                Lieu ou mode de consultation
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setAppointmentType('cabinet')}
                  className={`p-3 rounded-xl border text-left flex items-start gap-3 transition-all ${
                    appointmentType === 'cabinet'
                      ? 'bg-stone-50 border-[#0B1523] ring-1 ring-[#0B1523]'
                      : 'border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  <MapPin className={`h-4 w-4 mt-0.5 ${appointmentType === 'cabinet' ? 'text-amber-700' : 'text-slate-400'}`} />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Au Cabinet</div>
                    <div className="text-[11px] text-slate-500">Bd Saint-Michel 11, Etterbeek</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setAppointmentType('visio')}
                  className={`p-3 rounded-xl border text-left flex items-start gap-3 transition-all ${
                    appointmentType === 'visio'
                      ? 'bg-stone-50 border-[#0B1523] ring-1 ring-[#0B1523]'
                      : 'border-stone-200 hover:bg-stone-50'
                  }`}
                >
                  <Video className={`h-4 w-4 mt-0.5 ${appointmentType === 'visio' ? 'text-amber-700' : 'text-slate-400'}`} />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Visioconférence</div>
                    <div className="text-[11px] text-slate-500">Lien sécurisé (Teams / Meet)</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Practice Area Subject */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                Domaine juridique concerné
              </label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full rounded-lg border border-stone-300 p-2.5 text-xs sm:text-sm bg-white text-slate-800 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600"
              >
                {PRACTICE_AREAS.map((area) => (
                  <option key={area.id} value={area.id}>
                    {area.number}. {area.title}
                  </option>
                ))}
                <option value="autre">Autre litige civil ou conseil général</option>
              </select>
            </div>

            {/* Date & Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                  Date souhaitée *
                </label>
                <input
                  type="date"
                  required
                  value={preferredDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full rounded-lg border border-stone-300 p-2.5 text-xs sm:text-sm bg-white text-slate-800 focus:border-amber-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                  Créneau horaire préférentiel
                </label>
                <select
                  value={preferredSlot}
                  onChange={(e) => setPreferredSlot(e.target.value as 'matin' | 'apres-midi')}
                  className="w-full rounded-lg border border-stone-300 p-2.5 text-xs sm:text-sm bg-white text-slate-800 focus:border-amber-600 focus:outline-none"
                >
                  <option value="matin">Matinée (09h00 - 12h30)</option>
                  <option value="apres-midi">Après-midi (14h00 - 18h30)</option>
                </select>
              </div>
            </div>

            {/* Identity info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-1">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                  Nom & Prénom *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex : Marie Dupont"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full rounded-lg border border-stone-300 p-2 text-xs sm:text-sm bg-white text-slate-800 focus:border-amber-600 focus:outline-none"
                />
              </div>

              <div className="sm:col-span-1">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+32 ..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-lg border border-stone-300 p-2 text-xs sm:text-sm bg-white text-slate-800 focus:border-amber-600 focus:outline-none"
                />
              </div>

              <div className="sm:col-span-1">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="nom@exemple.be"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-stone-300 p-2 text-xs sm:text-sm bg-white text-slate-800 focus:border-amber-600 focus:outline-none"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1">
                Résumé succinct de votre situation ou questions (facultatif)
              </label>
              <textarea
                rows={3}
                placeholder="Décrivez brièvement la nature de votre litige ou les démarches déjà engagées..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-lg border border-stone-300 p-2.5 text-xs sm:text-sm bg-white text-slate-800 focus:border-amber-600 focus:outline-none resize-none"
              />
            </div>

            {/* Checkbox: Pro Deo acknowledgment */}
            <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200">
              <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-700 leading-snug">
                <input
                  type="checkbox"
                  required
                  checked={acknowledgedProDeo}
                  onChange={(e) => setAcknowledgedProDeo(e.target.checked)}
                  className="mt-0.5 rounded border-stone-300 text-amber-700 focus:ring-amber-600"
                />
                <span>
                  Je confirme avoir pris connaissance que le cabinet de Maître Philippe Maistriau 
                  <strong> n'intervient pas sous le régime de l'aide juridique (Pro Deo)</strong> et que le premier rendez-vous fait l'objet d'un forfait de 125 € TTC.
                </span>
              </label>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="rounded-md border border-stone-300 px-4 py-2.5 text-xs font-semibold text-slate-600 hover:bg-stone-100"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="rounded-md bg-[#B58D3D] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 hover:bg-[#C89F4E] transition-all shadow-md"
              >
                Confirmer la demande
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
