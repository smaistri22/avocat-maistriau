import React, { useState } from 'react';
import portraitImg from '../../assets/live/me_maistriau.jpg';
import { LIVE_SITE_DATA } from '../../data/liveSiteData';
import { CheckCircle2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && message) {
      setSent(true);
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
              <p className="font-serif text-stone-600">
                Merci ! Votre message a bien été transmis. Nous vous recontacterons dans les plus brefs délais.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-2xl bg-[#FAF8F3] p-8 sm:p-10 border border-[#E2DBD0] shadow-sm text-left space-y-6">
              
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
                  className="rounded-full bg-[#181615] px-8 py-3 text-xs font-semibold uppercase tracking-wider text-[#F8F5EE] transition-all hover:bg-stone-800"
                >
                  Envoyer
                </button>
              </div>

            </form>
          )}

        </div>
      </section>
    </div>
  );
};
