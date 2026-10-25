import React, { useState } from 'react';
import portraitImg from '../../assets/live/me_maistriau.jpg';
import { LIVE_SITE_DATA } from '../../data/liveSiteData';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { sendWeb3Form } from '../../lib/sendForm';

export const AboutPage: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [botcheck, setBotcheck] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    if (!email || !message || !firstName || !lastName) {
      return;
    }

    setIsSubmitting(true);
    const result = await sendWeb3Form({
      subject: 'Nouveau message via le site – À propos',
      replyto: email,
      'Prénom': firstName,
      'Nom': lastName,
      'E-mail': email,
      'Message': message,
      botcheck,
    });
    setIsSubmitting(false);

    if (result.success) {
      setSent(true);
      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');
      setBotcheck(false);
    } else {
      setErrorMessage("L'envoi a échoué. Merci de réessayer ou d'écrire directement à p.maistriau@gmail.com.");
    }
  };

  return (
    <div className="bg-[#F8F5EE]">
      {/* Section 1: Qui est Me Maistriau ? */}
      <section className="py-16 sm:py-24 border-b border-[#E2DBD0]">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Text */}
            <div className="lg:col-span-7 space-y-6 text-[#181615]">
              <h1 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#181615] mb-6">
                {LIVE_SITE_DATA.about.title}
              </h1>

              <div className="space-y-5 font-serif text-base sm:text-lg text-stone-800 leading-relaxed">
                {LIVE_SITE_DATA.about.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Right Column: Authentic Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm overflow-hidden rounded-2xl shadow-xl border border-[#E2DBD0] bg-[#FAF8F3]">
                <img
                  src={portraitImg}
                  alt="Maître Philippe Maistriau"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Formulaire "Nous contacter" */}
      <section className="py-16 sm:py-24 bg-[#F2EDE2] border-b border-[#E2DBD0]">
        <div className="mx-auto max-w-3xl px-6 sm:px-8 text-center">
          
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#181615] mb-4">
            {LIVE_SITE_DATA.about.contactSection.title}
          </h2>
          
          <p className="font-serif text-base sm:text-lg text-stone-600 mb-10 max-w-xl mx-auto leading-relaxed">
            {LIVE_SITE_DATA.about.contactSection.desc}
          </p>

          {sent ? (
            <div className="p-8 rounded-2xl bg-[#FAF8F3] border border-[#E2DBD0] shadow-sm text-center">
              <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-emerald-700" />
              <h3 className="font-serif text-2xl font-bold text-[#181615] mb-2">
                Message envoyé
              </h3>
              <p className="font-serif text-stone-600 mb-6">
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
            <form onSubmit={handleSubmit} className="rounded-2xl bg-[#FAF8F3] p-8 sm:p-10 border border-[#E2DBD0] shadow-sm text-left space-y-6">
              
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
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-serif text-xs uppercase tracking-wider text-stone-600 mb-1.5 font-sans font-semibold">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full rounded-lg border border-[#D5CDBD] bg-white p-3 text-sm font-sans focus:border-stone-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-serif text-xs uppercase tracking-wider text-stone-600 mb-1.5 font-sans font-semibold">
                    Nom *
                  </label>
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full rounded-lg border border-[#D5CDBD] bg-white p-3 text-sm font-sans focus:border-stone-900 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-serif text-xs uppercase tracking-wider text-stone-600 mb-1.5 font-sans font-semibold">
                  E-mail *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-[#D5CDBD] bg-white p-3 text-sm font-sans focus:border-stone-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-serif text-xs uppercase tracking-wider text-stone-600 mb-1.5 font-sans font-semibold">
                  Message *
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-lg border border-[#D5CDBD] bg-white p-3 text-sm font-sans focus:border-stone-900 focus:outline-none resize-none"
                />
              </div>

              <div className="text-center pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full bg-[#181615] px-8 py-3 text-xs font-semibold uppercase tracking-wider text-[#F8F5EE] transition-all hover:bg-stone-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Envoi en cours…' : 'Envoyer'}
                </button>
              </div>

              <p className="text-center text-xs text-stone-500 font-sans pt-1">
                Les données transmises sont utilisées uniquement pour répondre à votre demande, dans le respect du secret professionnel.
              </p>

            </form>
          )}

        </div>
      </section>
    </div>
  );
};
