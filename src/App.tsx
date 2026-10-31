/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { LiveHeader } from './components/LiveHeader';
import { LiveFooter } from './components/LiveFooter';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';
import { FAQPage } from './components/pages/FAQPage';
import { MentionsLegalesPage } from './components/pages/MentionsLegalesPage';
import { OrientationPage } from './components/pages/OrientationPage';
import { FeesPage } from './components/pages/FeesPage';
import { LiveBookingModal } from './components/LiveBookingModal';
import { ReviewModal } from './components/ReviewModal';
import { LanguageProvider } from './i18n/LanguageContext';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);

  // Sync hash routing if user clicks external anchor or navigates
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (['home', 'about', 'orientation', 'honoraires', 'contact', 'faq', 'mentions'].includes(hash)) {
        setCurrentPage(hash);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#F8F5EE] flex flex-col font-serif text-[#181615] selection:bg-[#181615] selection:text-[#F8F5EE]">
        {/* Header avec esthétique crème */}
        <LiveHeader
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenBooking={() => setBookingModalOpen(true)}
        />

        {/* Pages Content */}
        <main className="flex-1">
          {currentPage === 'home' && (
            <HomePage
              onOpenBooking={() => setBookingModalOpen(true)}
              onOpenReviewModal={() => setReviewModalOpen(true)}
              onNavigate={handleNavigate}
            />
          )}

          {currentPage === 'about' && <AboutPage />}

          {currentPage === 'orientation' && (
            <OrientationPage onOpenBooking={() => setBookingModalOpen(true)} />
          )}

          {currentPage === 'honoraires' && (
            <FeesPage onOpenBooking={() => setBookingModalOpen(true)} />
          )}

          {currentPage === 'contact' && (
            <ContactPage onOpenBooking={() => setBookingModalOpen(true)} />
          )}

          {currentPage === 'faq' && (
            <FAQPage onOpenBooking={() => setBookingModalOpen(true)} />
          )}

          {currentPage === 'mentions' && <MentionsLegalesPage />}
        </main>

        {/* Footer avec mention discrète des partenaires (cognitive-studio.be & Me Ana Ferreira) */}
        <LiveFooter onNavigate={handleNavigate} />

        {/* Booking Modal */}
        <LiveBookingModal
          isOpen={bookingModalOpen}
          onClose={() => setBookingModalOpen(false)}
        />

        {/* Review Modal */}
        <ReviewModal
          isOpen={reviewModalOpen}
          onClose={() => setReviewModalOpen(false)}
        />
      </div>
    </LanguageProvider>
  );
}
