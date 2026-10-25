import React from 'react';
import { MapPin, Phone, Mail, Clock, Train, Car, Navigation, ExternalLink } from 'lucide-react';
import { CABINET_INFO } from '../data/legalData';

export const AccessLocation: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${CABINET_INFO.address.street}, ${CABINET_INFO.address.postalCode} ${CABINET_INFO.address.city}`
  )}`;

  return (
    <section id="acces" className="py-20 lg:py-28 bg-white border-b border-stone-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#B58D3D] mb-3">
            Cabinet Principal · Etterbeek (Bruxelles)
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1523] mb-6 [text-wrap:balance]">
            Situation & Accès au cabinet.
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Idéalement implanté à Etterbeek sur le prestigieux <strong>Boulevard Saint-Michel</strong>, 
            à deux pas du rond-point Montgomery, le cabinet est facilement accessible en transports en commun 
            (métro, tram, bus) ainsi qu'en voiture depuis le ring et le centre de Bruxelles.
          </p>
        </div>

        {/* 2-Column Split: Detailed Coordinates vs Visual Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Coordinates & Transit Details */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Primary Coordinates Box */}
            <div className="rounded-2xl bg-[#FBFBFA] border border-stone-200 p-8">
              <h3 className="font-serif text-xl font-bold text-[#0B1523] mb-6 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-amber-700" />
                <span>Coordonnées directes</span>
              </h3>

              <div className="space-y-4 text-sm text-slate-700">
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Adresse</div>
                  <div className="font-semibold text-slate-900 text-base">{CABINET_INFO.address.street}</div>
                  <div>{CABINET_INFO.address.postalCode} {CABINET_INFO.address.city}</div>
                  <div className="text-xs text-amber-800 font-medium">{CABINET_INFO.address.neighborhood}</div>
                </div>

                <div className="pt-2 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Téléphone fixe</div>
                    <a
                      href={`tel:${CABINET_INFO.phones.cabinet.replace(/\s+/g, '')}`}
                      className="font-semibold text-slate-900 hover:text-amber-700 transition-colors"
                    >
                      {CABINET_INFO.phones.cabinet}
                    </a>
                  </div>

                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Mobile & Urgences</div>
                    <a
                      href={`tel:${CABINET_INFO.phones.mobile.replace(/\s+/g, '')}`}
                      className="font-semibold text-slate-900 hover:text-amber-700 transition-colors"
                    >
                      {CABINET_INFO.phones.mobile}
                    </a>
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-200">
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Heures de consultation</div>
                  <div className="text-slate-800 font-medium">{CABINET_INFO.hours}</div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200 flex flex-wrap gap-3">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-md bg-[#0B1523] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-slate-800 transition-colors"
                >
                  <Navigation className="h-3.5 w-3.5 text-amber-400" />
                  <span>Ouvrir dans Google Maps</span>
                  <ExternalLink className="h-3 w-3 ml-0.5 opacity-70" />
                </a>

                <a
                  href={`tel:${CABINET_INFO.phones.cabinet.replace(/\s+/g, '')}`}
                  className="flex items-center gap-1.5 rounded-md border border-stone-300 bg-white px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-800 hover:border-amber-600 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-amber-700" />
                  <span>Appeler</span>
                </a>
              </div>
            </div>

            {/* Public Transit Breakdown */}
            <div className="rounded-2xl bg-[#FBFBFA] border border-stone-200 p-8 space-y-4">
              <h3 className="font-serif text-lg font-bold text-[#0B1523] flex items-center gap-2">
                <Train className="h-5 w-5 text-amber-700" />
                <span>Transports en commun & Accès</span>
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="font-bold text-amber-800 shrink-0 w-16">Métro :</div>
                  <div>Lignes 1 et 5 (Stations <strong>Montgomery</strong> ou <strong>Boileau</strong>, à 3 min à pied).</div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="font-bold text-amber-800 shrink-0 w-16">Tram :</div>
                  <div>Lignes 7, 25, 39 et 44 (Arrêts Montgomery ou Boileau).</div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="font-bold text-amber-800 shrink-0 w-16">Bus :</div>
                  <div>Ligne STIB 36 (Arrêt Saint-Michel / Boileau).</div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="font-bold text-amber-800 shrink-0 w-16">Voiture :</div>
                  <div>Stationnement aisé sur le Boulevard Saint-Michel (disque/horodateur) ou Parking souterrain Montgomery.</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Stylized Interactive Vector Map Graphic of Etterbeek/Montgomery */}
          <div className="lg:col-span-6 rounded-2xl bg-[#0B1523] border border-slate-800 p-8 text-white flex flex-col justify-between shadow-lg relative overflow-hidden">
            
            {/* Ambient Map Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 relative z-10">
              <div>
                <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold">Plan d'accès</div>
                <div className="font-serif text-lg font-bold text-white">Quartier Montgomery · Etterbeek</div>
              </div>
              <span className="text-xs text-slate-400">1040 Bruxelles</span>
            </div>

            {/* Stylized Visual Street Map */}
            <div className="my-8 relative h-72 rounded-xl bg-[#09101B] border border-slate-800 overflow-hidden flex items-center justify-center p-6">
              
              {/* Grid Roads */}
              <svg className="w-full h-full opacity-80" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background area tints */}
                <rect width="500" height="300" fill="#09101B" />
                
                {/* Secondary streets */}
                <path d="M0 60 H500" stroke="#1E293B" strokeWidth="6" />
                <path d="M0 240 H500" stroke="#1E293B" strokeWidth="6" />
                <path d="M120 0 V300" stroke="#1E293B" strokeWidth="6" />
                <path d="M380 0 V300" stroke="#1E293B" strokeWidth="6" />

                {/* Major Arteries: Bd Saint-Michel (Vertical angled) & Av de Tervueren / Montgomery */}
                {/* Montgomery Roundabout */}
                <circle cx="250" cy="70" r="46" fill="#0F172A" stroke="#334155" strokeWidth="10" />
                <circle cx="250" cy="70" r="28" fill="#1E293B" />
                <text x="250" y="74" fill="#94A3B8" fontSize="10" textAnchor="middle" fontWeight="bold">MONTGOMERY</text>

                {/* Boulevard Saint-Michel */}
                <path d="M250 116 V300" stroke="#334155" strokeWidth="18" />
                <path d="M250 116 V300" stroke="#475569" strokeWidth="2" strokeDasharray="6 6" />

                {/* Avenue de Tervueren */}
                <path d="M0 70 H204" stroke="#334155" strokeWidth="16" />
                <path d="M296 70 H500" stroke="#334155" strokeWidth="16" />

                {/* Station Boileau */}
                <rect x="230" y="250" width="40" height="24" rx="4" fill="#1E293B" stroke="#64748B" strokeWidth="2" />
                <text x="250" y="265" fill="#E2E8F0" fontSize="9" textAnchor="middle" fontWeight="bold">Boileau M</text>

                {/* Cabinet Maistriau Marker at Bd Saint-Michel 11 */}
                <g transform="translate(250, 175)">
                  {/* Pulse ring */}
                  <circle cx="0" cy="0" r="22" fill="#B58D3D" fillOpacity="0.2" />
                  <circle cx="0" cy="0" r="14" fill="#B58D3D" stroke="#FFFFFF" strokeWidth="2" />
                  <circle cx="0" cy="0" r="5" fill="#0B1523" />
                </g>

                {/* Callout Label */}
                <rect x="272" y="152" width="180" height="46" rx="6" fill="#0F1E33" stroke="#B58D3D" strokeWidth="1.5" />
                <text x="282" y="170" fill="#F8FAFC" fontSize="11" fontWeight="bold">Cabinet Me Maistriau</text>
                <text x="282" y="186" fill="#FBBF24" fontSize="10">Boulevard Saint-Michel, 11</text>
              </svg>

              {/* Station Indicators */}
              <div className="absolute bottom-3 left-3 bg-[#0B1523]/90 px-3 py-1.5 rounded border border-slate-700 text-[11px] text-slate-300">
                Métro 1 & 5 · Montgomery / Boileau
              </div>
            </div>

            {/* Bottom info */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400">
              <span>Etterbeek · Région Bruxelles-Capitale</span>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1"
              >
                <span>Calculer l'itinéraire</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
