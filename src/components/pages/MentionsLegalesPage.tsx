import React from 'react';
import { LIVE_SITE_DATA } from '../../data/liveSiteData';

export const MentionsLegalesPage: React.FC = () => {
  return (
    <div className="bg-[#F8F5EE] py-16 sm:py-24 border-b border-[#E2DBD0]">
      <div className="mx-auto max-w-4xl px-6 sm:px-8 font-serif text-stone-800 space-y-10">
        
        <div className="border-b border-[#E2DBD0] pb-6">
          <h1 className="text-3xl sm:text-4xl font-normal text-[#181615] mb-2">
            Mentions légales
          </h1>
          <p className="text-xs text-stone-500 font-sans uppercase tracking-wider">
            Cabinet de Maître Philippe Maistriau · Avocat au Barreau de Bruxelles
          </p>
        </div>

        {/* Identité */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-[#181615]">
            Identité de l’entreprise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm bg-[#FAF8F3] p-6 rounded-xl border border-[#E2DBD0]">
            <div>
              <span className="text-stone-500 text-xs block font-sans">Nom de l'avocat</span>
              <strong>{LIVE_SITE_DATA.contact.lawyer}</strong>
            </div>
            <div>
              <span className="text-stone-500 text-xs block font-sans">Numéro d'identification TVA</span>
              <strong>{LIVE_SITE_DATA.contact.vat}</strong>
            </div>
            <div>
              <span className="text-stone-500 text-xs block font-sans">Adresse du cabinet</span>
              <strong>{LIVE_SITE_DATA.contact.addressLine}, {LIVE_SITE_DATA.contact.postalCodeCity}</strong>
            </div>
            <div>
              <span className="text-stone-500 text-xs block font-sans">Téléphone & Email</span>
              <strong>{LIVE_SITE_DATA.contact.phone}</strong>
              <div className="text-xs text-stone-600 font-sans">{LIVE_SITE_DATA.contact.email}</div>
            </div>
          </div>
        </div>

        {/* Propriété Intellectuelle */}
        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-stone-700">
          <h2 className="text-xl font-bold text-[#181615]">
            Propriété intellectuelle
          </h2>
          <p>
            La structure générale du site ainsi que les textes, graphiques, images, sons et vidéos la composant, 
            sont la propriété exclusive du cabinet de Maître Philippe MAISTRIAU ou de ses partenaires. 
            Toute représentation et/ou reproduction et/ou exploitation partielle ou totale de ce site, par quelque procédé que ce soit, 
            sans l'autorisation préalable et par écrit de Maître Philippe MAISTRIAU est strictement interdite et serait susceptible de constituer 
            une contrefaçon au sens du Code de droit économique belge.
          </p>
        </div>

        {/* Clause de non-responsabilité */}
        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-stone-700">
          <h2 className="text-xl font-bold text-[#181615]">
            Clause de non-responsabilité
          </h2>
          <p>
            Les informations contenues sur le site ont un caractère strictement informatif et général. 
            Elles ne prétendent pas à l'exhaustivité et ne constituent en aucun cas un avis juridique, une consultation ou une sollicitation personnalisée. 
            La lecture de ces informations ne crée pas de relation avocat-client entre l'utilisateur et le cabinet de Maître Philippe MAISTRIAU.
          </p>
          <p>
            Bien que le cabinet s'efforce de fournir des informations précises et à jour, l'actualité juridique et législative (notamment en droit de la famille et droit du bail) est en constante évolution. 
            En conséquence, Maître Philippe MAISTRIAU ne peut garantir l'exactitude, la précision ou la mise à jour des informations diffusées sur ce site au moment où l'utilisateur en prend connaissance.
          </p>
        </div>

        {/* RGPD */}
        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-stone-700">
          <h2 className="text-xl font-bold text-[#181615]">
            Traitement des données personnelles (RGPD)
          </h2>
          <p>
            Le cabinet de Maître Philippe MAISTRIAU attache une importance capitale à la protection de votre vie privée et de vos données personnelles. 
            Cette politique vise à vous informer de la manière dont nous collectons et traitons vos données, conformément au Règlement Général sur la Protection des Données (RGPD) et à la législation belge.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><strong>Responsable du traitement :</strong> Maître Philippe MAISTRIAU, Rue Abbé Cuypers 3 à 1040 Etterbeek, Belgique (p.maistriau@gmail.com).</li>
            <li><strong>Finalités :</strong> Gestion des demandes de rendez-vous et de contact, traitement de votre dossier juridique, facturation et respect des obligations légales.</li>
            <li><strong>Secret Professionnel :</strong> En tant qu'avocat, Maître Philippe MAISTRIAU est tenu au secret professionnel le plus strict. Vos données ne sont jamais vendues ni cédées à des tiers.</li>
            <li><strong>Vos droits :</strong> Droit d'accès, de rectification, d'effacement et de limitation sur simple demande écrite.</li>
          </ul>
        </div>

      </div>
    </div>
  );
};
