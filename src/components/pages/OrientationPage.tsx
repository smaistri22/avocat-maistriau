import React from 'react';
import { OrientationTool } from '../OrientationTool';

interface OrientationPageProps {
  onOpenBooking: (subject?: string) => void;
}

export const OrientationPage: React.FC<OrientationPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="bg-[#F8F5EE] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 mb-6">
        <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#181615] mb-3">
          Outil d'Orientation en 3 clics
        </h1>
        <p className="font-serif text-base sm:text-lg text-stone-600 max-w-2xl">
          Évaluez en quelques secondes la voie la plus appropriée entre médiation amiable et procédure judiciaire.
        </p>
      </div>

      <OrientationTool onOpenBooking={onOpenBooking} />
    </div>
  );
};
