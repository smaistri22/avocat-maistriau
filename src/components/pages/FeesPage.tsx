import React from 'react';
import { FeesSection } from '../FeesSection';

interface FeesPageProps {
  onOpenBooking: () => void;
}

export const FeesPage: React.FC<FeesPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="bg-[#F8F5EE] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 mb-6">
        <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#181615] mb-3">
          Transparence des Honoraires
        </h1>
        <p className="font-serif text-base sm:text-lg text-stone-600 max-w-2xl">
          Une grille tarifaire prévisible et transparente dès le premier rendez-vous, sans mauvaise surprise.
        </p>
      </div>

      <FeesSection onOpenBooking={onOpenBooking} />
    </div>
  );
};
