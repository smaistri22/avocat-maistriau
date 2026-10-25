import React, { useState } from 'react';
import contactImg from '../../assets/live/contact_img.png';
import { LIVE_SITE_DATA } from '../../data/liveSiteData';
import { AlertTriangle, CheckCircle2, Calendar, Phone, Mail, MapPin } from 'lucide-react';
import { sendWeb3Form } from '../../lib/sendForm';

interface ContactPageProps {
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Droit de la famille');
  const [message, setMessage] = useState('');
  const [botcheck, setBotcheck] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    if (!name || !email || !phone || !message) {
      return;
    }

    setIsSubmitting(true);
    const result = await sendWeb3Form({
      subject: `Nouveau message via le site – Contact (${subject})`,
      replyto: email,
      'Nom complet': name,
      'E-mail': email,
      'Téléphone': phone,
      'Matière concernée': subject,
      'Message': message,
      botcheck,
    });
    setIsSubmitting(false);

    if (result.success) {
      setSent(true);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setBotcheck(false);
    } else {
      setErrorMessage("L'envoi a échoué. Merci de réessayer ou d'écrire directement à p.maistriau@gmail.com.");
    }
  };

  return (
    <div className="bg-[#F8F5EE] py-16 sm:py-24 border-b border-[#E2DBD0]">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        
        {/* Page Title */}
        <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#181615] mb-8 text-center sm:text-left">
          {LIVE_SITE_DATA.contactPage.title}
        </h1>

        {/* Warning Banner matching exact text from live site */}
        <div className="mb-12 rounded-xl border border-amber-300/80 bg-[#FFFBEB] p-5 sm:p-6 text-xs sm:text-sm text-stone-800 space-y-1.5 font-serif shadow-xs">
          <div className="flex items-start gap-2.5">
            <AlertTriangle className="h-4 w-4 text-amber-800 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-stone-900">
                {LIVE_SITE_DATA.contactPage.warningFr}
              </p>
              <p className="text-stone-600 italic">
                {LIVE_SITE_DATA.contactPage.warningEn}
              </p>
            </div>
          </div>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Headline, text, illustration & booking CTA */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal leading-snug text-[#181615]">
              {LIVE_SITE_DATA.contactPage.headline}
            </h2>

            <p className="font-serif text-base text-stone-700 leading-relaxed">
              {LIVE_SITE_DATA.contactPage.subtext}
            </p>

            {/* Illustration from live site */}
            <div className="overflow-hidden rounded-2xl border border-[#E2DBD0] bg-[#FAF8F3] shadow-sm max-w-md">
              <img
                src={contactImg}
                alt="Illustration juridique"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={LIVE_SITE_DATA.contact.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-[#181615] px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#F8F5EE] transition-all hover:bg-stone-800 active:scale-95 shadow-md font-sans"
              >
                <Calendar className="h-4 w-4" />
                <span>Réserver via Google Agenda</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="flex items-center gap-1.5 rounded-full border border-stone-400 bg-white px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-stone-800 transition-all hover:border-stone-900 active:scale-95 shadow-xs font-sans"
              >
                <span>Options de rendez-vous</span>
              </button>
            </div>

            {/* Direct Coordinates */}
            <div className="pt-6 border-t border-[#E2DBD0] text-xs sm:text-sm font-serif space-y-2 text-stone-700">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-stone-500" />
                <span>{LIVE_SITE_DATA.contact.addressLine}, {LIVE_SITE_DATA.contact.postalCodeCity}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-stone-500" />
                <a href={`mailto:${LIVE_SITE_DATA.contact.email}`} className="underline">
                  {LIVE_SITE_DATA.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-stone-500" />
                <a href={`tel:${LIVE_SITE_DATA.contact.phone.replace(/\s+/g, '')}`}>
                  {LIVE_SITE_DATA.contact.phone}
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-[#E2DBD0] bg-[#FAF8F3] p-8 sm:p-10 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-[#181615] mb-6">
                Envoyer un message
              </h3>

              {sent ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-emerald-700" />
                  <h4 className="font-serif text-xl font-bold text-[#181615] mb-2">
                    Message envoyé
                  </h4>
                  <p className="font-serif text-stone-600 text-sm mb-6">
                    Merci, votre message a bien été envoyé. Le cabinet vous répondra dans les meilleurs délais.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="text-xs uppercase tracking-wider text-stone-600 hover:text-stone-900 underline font-sans"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-serif">
                  
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
                    <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-600 mb-1 font-sans font-semibold">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Votre nom et prénom"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-lg border border-[#D5CDBD] bg-white p-2.5 text-sm font-sans focus:border-stone-900 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-600 mb-1 font-sans font-semibold">
                      Adresse e-mail *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="votre.email@exemple.be"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg border border-[#D5CDBD] bg-white p-2.5 text-sm font-sans focus:border-stone-900 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-600 mb-1 font-sans font-semibold">
                      Numéro de téléphone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+32 ..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-lg border border-[#D5CDBD] bg-white p-2.5 text-sm font-sans focus:border-stone-900 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-600 mb-1 font-sans font-semibold">
                      Matière concernée
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full rounded-lg border border-[#D5CDBD] bg-white p-2.5 text-sm font-sans focus:border-stone-900 focus:outline-none"
                    >
                      <option value="Droit de la famille">Droit de la Famille & Divorce</option>
                      <option value="Médiation familiale">Médiation Familiale Agréée</option>
                      <option value="Baux et Immobilier">Baux à Loyer & Conflit Immobilier</option>
                      <option value="Successions">Règlement de Succession</option>
                      <option value="Autre">Autre demande</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-600 mb-1 font-sans font-semibold">
                      Votre message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Veuillez décrire succinctement votre litige..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full rounded-lg border border-[#D5CDBD] bg-white p-2.5 text-sm font-sans focus:border-stone-900 focus:outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-full bg-[#181615] py-3 text-xs font-semibold uppercase tracking-wider text-[#F8F5EE] hover:bg-stone-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-sans"
                    >
                      {isSubmitting ? 'Envoi en cours…' : 'Transmettre le formulaire'}
                    </button>
                  </div>

                  <p className="text-center text-xs text-stone-500 font-sans pt-1">
                    Les données transmises sont utilisées uniquement pour répondre à votre demande, dans le respect du secret professionnel.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
