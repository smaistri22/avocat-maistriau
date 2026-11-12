import React, { useState } from 'react';
import { X, ExternalLink, Calendar, MapPin, Video, CheckCircle2, Clock, ArrowRight, AlertCircle } from 'lucide-react';
import { LIVE_SITE_DATA } from '../data/liveSiteData';
import { sendWeb3Form } from '../lib/sendForm';
import { useLanguage } from '../i18n/LanguageContext';

interface LiveBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LiveBookingModal: React.FC<LiveBookingModalProps> = ({ isOpen, onClose }) => {
  const { language, t } = useLanguage();
  const [mode, setMode] = useState<'calendar' | 'form'>('calendar');
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
      subject: language === 'en' ? 'Appointment request via website' : 'Demande de rendez-vous via le site',
      replyto: email,
      'Type de rendez-vous': appointmentType === 'cabinet' ? 'Au cabinet (Etterbeek)' : 'Visioconférence',
      'Nom et Prénom': name,
      'E-mail': email,
      'Téléphone': phone,
      'Date souhaitée': date,
      'Objet du rendez-vous': message || (language === 'en' ? 'Not specified' : 'Non spécifié'),
      'Tarif indicatif': language === 'en' ? '€ 125 incl. VAT (initial consultation)' : '125 € TTC (première consultation)',
      'Langue': language === 'en' ? 'EN' : 'FR',
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
      setErrorMessage(t.bookingModal.errorMsg);
    }
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setSubmittedDetails(null);
    setErrorMessage('');
    setMode('calendar');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm overflow-y-auto">
      <div className={`relative w-full ${mode === 'calendar' ? 'max-w-4xl' : 'max-w-xl'} rounded-2xl bg-[#FAF8F3] p-6 sm:p-8 shadow-2xl border border-[#E2DBD0] text-[#181615] font-serif my-8 transition-all`}>
        
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-900 transition-colors"
          aria-label={t.bookingModal.closeBtn}
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-emerald-600" />
            <h3 className="text-2xl font-normal text-[#181615] mb-2">
              {t.bookingModal.successTitle}
            </h3>
            <p className="font-serif text-stone-600 text-sm max-w-md mx-auto mb-6">
              {t.bookingModal.successMsg}
            </p>
            <div className="p-4 rounded-xl bg-white border border-[#E2DBD0] text-left text-xs font-sans max-w-md mx-auto space-y-1 mb-6">
              <div>
                <strong>{t.bookingModal.modeLabel} </strong> 
                {submittedDetails?.appointmentType === 'cabinet' ? t.bookingModal.cabinetLabel : t.bookingModal.visioLabel}
              </div>
              <div>
                <strong>{t.bookingModal.requestedDateLabel} </strong> 
                {submittedDetails?.date}
              </div>
              <div>
                <strong>{t.bookingModal.flatFeeLabel} </strong> 
                {t.bookingModal.flatFeeDetail}
              </div>
            </div>
            <button
              onClick={resetAndClose}
              className="rounded-full bg-[#181615] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F8F5EE] font-sans"
            >
              {t.bookingModal.closeBtn}
            </button>
          </div>
        ) : mode === 'calendar' ? (
          <div>
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E2DBD0]">
              <div className="flex items-center gap-2 text-[#181615]">
                <Calendar className="h-5 w-5" />
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#181615]">
                  {t.bookingModal.calendarHeader}
                </h3>
              </div>
              <a
                href="https://calendar.app.google/17xcthXGg4aFYQ838"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-stone-700 hover:text-stone-950 underline"
              >
                <span>{t.bookingModal.openCalendarBtn}</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            <p className="font-serif text-xs sm:text-sm text-stone-600 mb-4">
              {t.bookingModal.calendarDesc}
            </p>

            {/* Embedded Google Calendar Appointment Scheduler */}
            <div className="relative w-full h-[700px] rounded-xl overflow-hidden bg-white shadow-xs">
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2UU8__szgPeKs_8OTQlr8-Lm7EYijqfFDZD1x2ONI15G6d0QdzK-v9AGCVuNwzf1UrPq2QpFxY?gv=true"
                style={{ border: 0 }}
                width="100%"
                height="100%"
                title={t.bookingModal.calendarHeader}
                className="w-full h-full border-0"
              />
            </div>

            {/* Bouton de secours sous l'iframe */}
            <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#E2DBD0] font-sans">
              <a
                href="https://calendar.app.google/17xcthXGg4aFYQ838"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#181615] px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#F8F5EE] transition-all hover:bg-stone-800 active:scale-95 shadow-xs w-full sm:w-auto"
              >
                <span>{t.bookingModal.openCalendarBtn}</span>
                <ExternalLink className="h-4 w-4 opacity-80" />
              </a>

              <div className="flex items-center gap-4 text-xs text-stone-600">
                <button
                  type="button"
                  onClick={() => setMode('form')}
                  className="hover:text-stone-950 underline transition-colors"
                >
                  {t.bookingModal.option3Title}
                </button>
                <span>·</span>
                <span className="italic">{t.bookingModal.feeNotice}</span>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <button
                type="button"
                onClick={() => setMode('calendar')}
                className="text-xs text-stone-500 hover:text-stone-950 underline font-sans mb-2 inline-flex items-center gap-1"
              >
                ← {t.bookingModal.openCalendarBtn}
              </button>
              <h3 className="text-2xl font-normal text-[#181615]">
                {t.bookingModal.formHeader}
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
                  {t.bookingModal.cabinetChoice}
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
                  {t.bookingModal.visioChoice}
                </button>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-600 mb-1 font-sans font-semibold">
                  {t.bookingModal.fullName}
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
                    {t.bookingModal.email}
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
                    {t.bookingModal.phone}
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
                  {t.bookingModal.date}
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
                  {t.bookingModal.purpose}
                </label>
                <textarea
                  rows={3}
                  placeholder={t.bookingModal.purposePlaceholder}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-lg border border-[#D5CDBD] bg-white p-2.5 text-sm font-sans focus:border-stone-900 focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3 font-sans">
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => setMode('calendar')}
                  className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-950 disabled:opacity-50"
                >
                  {t.bookingModal.cancelBtn}
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full bg-[#181615] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F8F5EE] hover:bg-stone-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t.bookingModal.submittingBtn : t.bookingModal.submitBtn}
                </button>
              </div>

              <p className="text-center text-xs text-stone-500 font-sans pt-1">
                {t.bookingModal.gdpr}
              </p>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
