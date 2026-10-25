import React, { useState } from 'react';
import { X, ExternalLink, Calendar, MapPin, Video, CheckCircle2, Clock, ShieldCheck, ArrowRight, AlertCircle } from 'lucide-react';
import { LIVE_SITE_DATA } from '../data/liveSiteData';
import { sendWeb3Form } from '../lib/sendForm';

interface LiveBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LiveBookingModal: React.FC<LiveBookingModalProps> = ({ isOpen, onClose }) => {
  const [mode, setMode] = useState<'calendar' | 'form' | 'options'>('options');
  const [appointmentType, setAppointmentType] = useState<'cabinet' | 'visio'>('cabinet');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const [botcheck, setBotcheck] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedDetails, setSubmittedDetails] = useState<{ appointmentType: string; date: string } | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    if (!name || !email || !phone || !date) {
      return;
    }

    setIsSubmitting(true);
    const result = await sendWeb3Form({
      subject: 'Demande de rendez-vous via le site',
      replyto: email,
      'Type de rendez-vous': appointmentType === 'cabinet' ? 'Au cabinet (Etterbeek)' : 'Visioconférence',
      'Nom et Prénom': name,
      'E-mail': email,
      'Téléphone': phone,
      'Date souhaitée': date,
      'Objet du rendez-vous': message || 'Non spécifié',
      'Tarif indicatif': '125 € TTC (première consultation)',
      botcheck,
    });
    setIsSubmitting(false);

    if (result.success) {
      setSubmittedDetails({ appointmentType, date });
      setSubmitted(true);
      setName('');
      setEmail('');
      setPhone('');
      setDate('');
      setMessage('');
      setBotcheck(false);
    } else {
      setErrorMessage("L'envoi a échoué. Merci de réessayer ou d'écrire directement à p.maistriau@gmail.com.");
    }
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setSubmittedDetails(null);
    setErrorMessage('');
    setMode('options');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm overflow-y-auto">
      <div className={`relative w-full ${mode === 'calendar' ? 'max-w-4xl' : 'max-w-xl'} rounded-2xl bg-[#FAF8F3] p-6 sm:p-8 shadow-2xl border border-[#E2DBD0] text-[#181615] font-serif my-8 transition-all`}>
        
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-900 transition-colors"
          aria-label="Fermer"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-emerald-600" />
            <h3 className="text-2xl font-normal text-[#181615] mb-2">
              Demande enregistrée
            </h3>
            <p className="font-serif text-stone-600 text-sm max-w-md mx-auto mb-6">
              Merci, votre message a bien été envoyé. Le cabinet vous répondra dans les meilleurs délais.
            </p>
            <div className="p-4 rounded-xl bg-white border border-[#E2DBD0] text-left text-xs font-sans max-w-md mx-auto space-y-1 mb-6">
              <div><strong>Mode :</strong> {submittedDetails?.appointmentType === 'cabinet' ? 'Au cabinet (Rue Abbé Cuypers, 3)' : 'Visioconférence'}</div>
              <div><strong>Date souhaitée :</strong> {submittedDetails?.date}</div>
              <div><strong>Tarif forfaitaire :</strong> 125 € TTC (durée non strictement limitée)</div>
            </div>
            <button
              onClick={resetAndClose}
              className="rounded-full bg-[#181615] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F8F5EE] font-sans"
            >
              Fermer
            </button>
          </div>
        ) : mode === 'calendar' ? (
          <div>
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E2DBD0]">
              <div className="flex items-center gap-2 text-[#181615]">
                <Calendar className="h-5 w-5" />
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#181615]">
                  Agenda Google · Prendre Rendez-vous en direct
                </h3>
              </div>
              <a
                href={LIVE_SITE_DATA.contact.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-sans font-semibold text-stone-700 hover:text-stone-950 underline"
              >
                <span>Plein écran</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            <p className="font-serif text-xs text-stone-600 mb-4">
              Choisissez directement votre date et votre plage horaire parmi les créneaux synchronisés de Maître Philippe Maistriau.
            </p>

            {/* Embedded Google Calendar Appointment Scheduler */}
            <div className="relative w-full h-[520px] rounded-xl overflow-hidden border border-[#E2DBD0] bg-white shadow-xs">
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ21yH52q740q5vP7sR69f59f?gv=true"
                style={{ border: 0 }}
                width="100%"
                height="100%"
                title="Agenda Google Rendez-vous"
                onError={() => {
                  // Fallback if iframe blocked by CSP
                }}
              />
              <div className="absolute bottom-3 right-3 bg-white/95 px-3 py-1.5 rounded-lg border border-stone-200 shadow-xs flex items-center gap-2 text-xs font-sans">
                <span>Une question ?</span>
                <a
                  href={LIVE_SITE_DATA.contact.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-stone-900 underline flex items-center gap-1"
                >
                  Ouvrir l'agenda dans un nouvel onglet <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center font-sans text-xs text-stone-500">
              <button
                type="button"
                onClick={() => setMode('options')}
                className="hover:text-stone-900 underline"
              >
                ← Retour
              </button>
              <span>Première consultation forfaitaire : 125 € TTC</span>
            </div>
          </div>
        ) : mode === 'options' ? (
          <div>
            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-wider text-stone-400 font-sans block mb-1">
                Cabinet Maistriau · Etterbeek
              </span>
              <h3 className="text-3xl font-normal text-[#181615]">
                Prendre Rendez-vous
              </h3>
              <p className="font-serif text-sm text-stone-600 mt-2">
                Première consultation forfaitaire à <strong>125 € TTC</strong> (durée non strictement limitée).
              </p>
            </div>

            <div className="space-y-4 mb-6">
              
              {/* Option 1: Official Google Calendar Appointment scheduling */}
              <a
                href={LIVE_SITE_DATA.contact.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 rounded-xl border-2 border-[#181615] bg-white hover:bg-[#F2ECE1] transition-all group shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-[#FAF8F3] border border-[#E2DBD0] shrink-0 text-[#181615]">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div className="text-left">
                      <div className="font-serif text-base sm:text-lg font-bold text-[#181615] flex items-center gap-2">
                        <span>Agenda Google officiel</span>
                        <span className="text-[10px] uppercase font-sans tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                          Temps réel
                        </span>
                      </div>
                      <div className="text-xs text-stone-600 font-sans mt-0.5">
                        Consulter les créneaux disponibles et réserver instantanément
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-stone-400 group-hover:text-stone-900 transition-colors shrink-0 ml-2" />
                </div>
              </a>

              {/* Option 2: Embedded Google Calendar in app */}
              <button
                type="button"
                onClick={() => setMode('calendar')}
                className="w-full p-4 rounded-xl border border-[#D5CDBD] bg-white hover:border-stone-800 hover:bg-[#F9F7F2] transition-colors text-left"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#EFEAE0] text-stone-800">
                      <Calendar className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-serif text-sm font-bold text-[#181615]">
                        Afficher l'agenda Google dans la fenêtre
                      </div>
                      <div className="text-xs text-stone-500 font-sans">
                        Consulter sans quitter le site
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-stone-400" />
                </div>
              </button>

              {/* Option 3: Form request */}
              <button
                type="button"
                onClick={() => setMode('form')}
                className="w-full p-4 rounded-xl border border-[#D5CDBD] bg-white hover:border-stone-800 hover:bg-[#F9F7F2] transition-colors text-left"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#EFEAE0] text-stone-800">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-serif text-sm font-bold text-[#181615]">
                        Remplir une demande par formulaire
                      </div>
                      <div className="text-xs text-stone-500 font-sans">
                        Si vous préférez être recontacté directement
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-stone-400" />
                </div>
              </button>

            </div>

            <div className="pt-4 border-t border-[#EAE4D8] flex items-center justify-between text-xs text-stone-500 font-sans">
              <span>Téléphone : {LIVE_SITE_DATA.contact.phone}</span>
              <span>Rue Abbé Cuypers, 3 · Etterbeek</span>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <button
                onClick={() => setMode('options')}
                className="text-xs text-stone-500 hover:text-stone-900 underline font-sans mb-2 inline-block"
              >
                ← Retour aux options
              </button>
              <h3 className="text-2xl font-normal text-[#181615]">
                Formulaire de rendez-vous
              </h3>
            </div>

            <form onSubmit={handleSubmitForm} className="space-y-4 font-serif">
              
              {/* Honeypot anti-spam */}
              <input
                type="checkbox"
                name="botcheck"
                checked={botcheck}
                onChange={(e) => setBotcheck(e.target.checked)}
                className="hidden"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              {errorMessage && (
                <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2 font-sans">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}
              
              <div className="grid grid-cols-2 gap-3 font-sans">
                <button
                  type="button"
                  onClick={() => setAppointmentType('cabinet')}
                  className={`p-3 rounded-lg border text-left text-xs ${
                    appointmentType === 'cabinet'
                      ? 'border-[#181615] bg-[#F2EDE2] font-bold text-[#181615]'
                      : 'border-[#D5CDBD] bg-white'
                  }`}
                >
                  <MapPin className="h-3.5 w-3.5 mb-1 text-stone-600" />
                  Au cabinet (Etterbeek)
                </button>
                <button
                  type="button"
                  onClick={() => setAppointmentType('visio')}
                  className={`p-3 rounded-lg border text-left text-xs ${
                    appointmentType === 'visio'
                      ? 'border-[#181615] bg-[#F2EDE2] font-bold text-[#181615]'
                      : 'border-[#D5CDBD] bg-white'
                  }`}
                >
                  <Video className="h-3.5 w-3.5 mb-1 text-stone-600" />
                  Visioconférence
                </button>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-600 mb-1 font-sans font-semibold">
                  Nom et Prénom *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-[#D5CDBD] bg-white p-2.5 text-sm font-sans focus:border-stone-900 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-600 mb-1 font-sans font-semibold">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-[#D5CDBD] bg-white p-2.5 text-sm font-sans focus:border-stone-900 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-600 mb-1 font-sans font-semibold">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-lg border border-[#D5CDBD] bg-white p-2.5 text-sm font-sans focus:border-stone-900 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-600 mb-1 font-sans font-semibold">
                  Date souhaitée *
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-lg border border-[#D5CDBD] bg-white p-2.5 text-sm font-sans focus:border-stone-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-600 mb-1 font-sans font-semibold">
                  Objet du rendez-vous
                </label>
                <textarea
                  rows={3}
                  placeholder="Divorce, succession, litige locatif, médiation..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-lg border border-[#D5CDBD] bg-white p-2.5 text-sm font-sans focus:border-stone-900 focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3 font-sans">
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => setMode('options')}
                  className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 disabled:opacity-50"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full bg-[#181615] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F8F5EE] hover:bg-stone-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Envoi en cours…' : 'Confirmer la demande'}
                </button>
              </div>

              <p className="text-center text-xs text-stone-500 font-sans pt-1">
                Les données transmises sont utilisées uniquement pour répondre à votre demande, dans le respect du secret professionnel.
              </p>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
