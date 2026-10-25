import React from 'react';
import { Scale, Phone, MapPin, Mail, ShieldCheck } from 'lucide-react';
import { CABINET_INFO } from '../data/legalData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070E18] text-slate-400 text-xs border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Identity & Deontology (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 text-white">
              <Scale className="h-5 w-5 text-amber-500" />
              <span className="font-serif text-lg font-bold tracking-tight">
                Cabinet Philippe Maistriau
              </span>
            </div>
            
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Cabinet d'avocat au Barreau de Bruxelles depuis 1989 et médiateur familial agréé 
              par la Commission Fédérale de Médiation. Une approche humaine, rigoureuse et transparente.
            </p>

            <div className="pt-2 text-[11px] text-slate-400 space-y-1">
              <div>Ordre français des avocats du Barreau de Bruxelles</div>
              <div>Commission Fédérale de Médiation (SPF Justice)</div>
            </div>
          </div>

          {/* Col 2: Navigation Mirror (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-serif text-sm font-bold text-slate-200 uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#accueil" className="hover:text-amber-400 transition-colors">Accueil</a>
              </li>
              <li>
                <a href="#cabinet" className="hover:text-amber-400 transition-colors">Le Cabinet</a>
              </li>
              <li>
                <a href="#expertises" className="hover:text-amber-400 transition-colors">Domaines d'intervention</a>
              </li>
              <li>
                <a href="#mediation" className="hover:text-amber-400 transition-colors">Médiation Familiale</a>
              </li>
              <li>
                <a href="#honoraires" className="hover:text-amber-400 transition-colors">Honoraires</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#acces" className="hover:text-amber-400 transition-colors">Accès & Contact</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Practice Areas (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-serif text-sm font-bold text-slate-200 uppercase tracking-wider">
              Matières traitées
            </div>
            <ul className="space-y-2 text-xs">
              <li>Droit de la famille & Divorce</li>
              <li>Médiation familiale agréée</li>
              <li>Baux d'habitation & loyers impayés</li>
              <li>Droit des successions & héritages</li>
              <li>Circulation routière (Tribunal de Police)</li>
              <li>Responsabilité civile & dommage corporel</li>
            </ul>
          </div>

          {/* Col 4: Contact Coordinates (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-serif text-sm font-bold text-slate-200 uppercase tracking-wider">
              Contact & Cabinet
            </div>
            <div className="space-y-2 text-xs leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{CABINET_INFO.address.street}, {CABINET_INFO.address.postalCode} {CABINET_INFO.address.city}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-amber-500 shrink-0" />
                <a href={`tel:${CABINET_INFO.phones.cabinet.replace(/\s+/g, '')}`} className="hover:text-amber-400">
                  {CABINET_INFO.phones.cabinet}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-amber-500 shrink-0" />
                <a href={`tel:${CABINET_INFO.phones.mobile.replace(/\s+/g, '')}`} className="hover:text-amber-400">
                  {CABINET_INFO.phones.mobile}
                </a>
              </div>
              <div className="pt-2 text-[11px] text-slate-400">
                Consultations sur rendez-vous à Etterbeek (Montgomery).
              </div>
            </div>
          </div>

        </div>

        {/* Legal Regulatory Disclaimers */}
        <div className="py-6 border-b border-slate-800/80 text-[11px] text-slate-400 space-y-2">
          <p>
            <strong>Déontologie & Secret professionnel :</strong> L'exercice de la profession d'avocat est soumis au respect 
            des règles déontologiques édictées par l'Ordre des Barreaux francophones et germanophone de Belgique (AVOCATS.BE) 
            et par le Barreau de Bruxelles. Le secret professionnel absolu protège l'ensemble de vos communications.
          </p>
          <p>
            <strong>Assurance responsabilité professionnelle :</strong> Maître Philippe Maistriau est couvert au titre de la 
            responsabilité civile professionnelle par la police collective souscrite par l'Ordre des Barreaux francophones et germanophone 
            auprès de la compagnie Ethias (Bruxelles).
          </p>
          <p>
            <strong>Aide juridique :</strong> Le cabinet rappelle qu'il n'intervient pas dans le cadre de l'aide juridique de deuxième ligne (système Pro Deo).
          </p>
        </div>

        {/* Bottom Bar: Copyright & Unboxed Metadata */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Cabinet d'Avocat Philippe Maistriau. Tous droits réservés.
          </div>
          <div className="flex items-center gap-4">
            <span>Site officiel : avocat-maistriau.com</span>
            <span aria-hidden="true">·</span>
            <span>Bruxelles, Belgique</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
