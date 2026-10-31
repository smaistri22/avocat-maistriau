import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, MessageSquareQuote, ExternalLink } from 'lucide-react';
import heroImg from '../../assets/live/hero_img.webp';
import { LIVE_SITE_DATA, Testimonial } from '../../data/liveSiteData';
import { OrientationTool } from '../OrientationTool';
import { FeesSection } from '../FeesSection';
import { useLanguage } from '../../i18n/LanguageContext';

interface HomePageProps {
  onOpenBooking: () => void;
  onOpenReviewModal: () => void;
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenBooking,
  onOpenReviewModal,
  onNavigate,
}) => {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [filterTag, setFilterTag] = useState<string>('all');
  const { t } = useLanguage();

  const allReviews: Testimonial[] = LIVE_SITE_DATA.reviews;

  const filteredReviews = filterTag === 'all'
    ? allReviews
    : allReviews.filter((r) => r.tag?.toLowerCase().includes(filterTag.toLowerCase()));

  const handlePrev = () => {
    setActiveReviewIndex((prev) => (prev === 0 ? filteredReviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveReviewIndex((prev) => (prev === filteredReviews.length - 1 ? 0 : prev + 1));
  };

  const currentReview = filteredReviews[activeReviewIndex] || allReviews[0];

  return (
    <div className="flex flex-col bg-[#F8F5EE]">
      {/* Hero Section matching exact live site */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden bg-neutral-900 text-white">
        {/* Full-bleed background image with subtle darkening overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Cabinet Avocat Maistriau"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/45 backdrop-brightness-95" />
        </div>

        {/* Hero Content centered */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.18] tracking-tight text-white max-w-4xl mx-auto drop-shadow-sm [text-wrap:balance]">
            {t.home.heroHeadline}
          </h1>

          <div className="mt-8 flex justify-center gap-4 flex-wrap font-sans">
            <button
              onClick={onOpenBooking}
              className="rounded-full bg-white/95 px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-neutral-900 transition-all hover:bg-white hover:shadow-xl active:scale-95"
            >
              {t.home.bookAppointment}
            </button>
            <button
              onClick={() => onNavigate('orientation')}
              className="rounded-full bg-white/10 backdrop-blur-md border border-white/30 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-white transition-all hover:bg-white/20 active:scale-95"
            >
              {t.home.orientationBtn}
            </button>
          </div>
        </div>
      </section>

      {/* Témoignages de clients */}
      <section id="avis" className="py-20 lg:py-24 bg-[#F8F5EE] border-b border-[#E2DBD0]">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 text-center">
          
          {/* Section Header */}
          <div className="mb-8">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#181615] mb-2">
              {t.home.testimonialsTitle}
            </h2>
            <p className="font-serif text-sm sm:text-base text-stone-600 max-w-lg mx-auto">
              {t.home.testimonialsSubtitle}
            </p>
          </div>

          {/* Encart discret : Fiche Google */}
          <div className="mb-10 max-w-2xl mx-auto rounded-xl bg-[#FAF8F3] border border-[#E2DBD0] p-6 shadow-xs text-center font-serif">
            <p className="text-base text-stone-800 mb-4">
              {t.home.googleBoxText}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 font-sans">
              <a
                href={LIVE_SITE_DATA.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-stone-400 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-stone-800 hover:border-stone-900 transition-colors shadow-xs"
              >
                <span>{t.home.viewGoogleReviews}</span>
                <ExternalLink className="h-3.5 w-3.5 opacity-60" />
              </a>

              <a
                href={LIVE_SITE_DATA.googleWriteReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#181615] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F8F5EE] hover:bg-stone-800 transition-colors shadow-xs"
              >
                <span>{t.home.leaveGoogleReview}</span>
                <ExternalLink className="h-3.5 w-3.5 opacity-80" />
              </a>
            </div>
          </div>

          {/* Testimonial Display Carousel Card (Client quotes remain in original language) */}
          <div className="relative mx-auto max-w-3xl rounded-2xl bg-[#FAF8F3] p-8 sm:p-12 shadow-sm border border-[#E2DBD0] mb-8 transition-all">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#EAE4D8] text-xs font-sans text-stone-500">
              <div className="flex items-center gap-2">
                <span className="font-bold text-stone-900 font-serif text-sm">{currentReview.author}</span>
                {currentReview.tag && (
                  <>
                    <span>·</span>
                    <span className="italic text-stone-600">{currentReview.tag}</span>
                  </>
                )}
              </div>

              {/* 5 étoiles neutres (non dorées façon Google) */}
              <div className="flex items-center gap-1 text-stone-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-stone-400 text-stone-400" />
                ))}
              </div>
            </div>

            <MessageSquareQuote className="mx-auto mb-4 h-8 w-8 text-stone-300" />
            
            <p className="font-serif text-lg sm:text-xl md:text-2xl italic leading-relaxed text-stone-800 min-h-[120px] flex items-center justify-center">
              "{currentReview.text}"
            </p>

            {/* Pagination Controls */}
            <div className="mt-8 flex items-center justify-between border-t border-[#EAE4D8] pt-6 font-sans">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full text-stone-500 hover:text-stone-950 hover:bg-[#EFEAE0] transition-colors"
                aria-label={t.home.prevReviewAria}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2">
                {filteredReviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveReviewIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === activeReviewIndex ? 'w-6 bg-[#181615]' : 'w-2 bg-stone-300 hover:bg-stone-400'
                    }`}
                    aria-label={`${t.home.goToReviewAria} ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-2 rounded-full text-stone-500 hover:text-stone-950 hover:bg-[#EFEAE0] transition-colors"
                aria-label={t.home.nextReviewAria}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* All Testimonials Grid (sober cards with neutral stars) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-10 font-serif">
            {allReviews.slice(0, 4).map((r) => (
              <div
                key={r.id}
                className="rounded-xl bg-[#FAF8F3] p-6 border border-[#E2DBD0] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs font-sans">
                    <span className="font-semibold text-stone-900 font-serif text-sm">{r.author}</span>
                    {/* 5 étoiles neutres */}
                    <div className="flex items-center gap-1 text-stone-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-stone-400 text-stone-400" />
                      ))}
                    </div>
                  </div>

                  <p className="font-serif text-sm sm:text-base italic text-stone-800 leading-relaxed">
                    "{r.text}"
                  </p>
                </div>

                {r.tag && (
                  <div className="mt-4 pt-3 border-t border-[#EAE4D8] text-xs text-stone-500 font-sans italic">
                    {t.home.areaLabel} {r.tag}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Action Buttons towards Google */}
          <div className="flex flex-wrap items-center justify-center gap-3 font-sans">
            <a
              href={LIVE_SITE_DATA.googleWriteReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#181615] px-7 py-3 text-xs font-semibold uppercase tracking-wider text-[#F8F5EE] transition-all hover:bg-stone-800 active:scale-95 shadow-xs"
            >
              <span>{t.home.leaveGoogleReview}</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-80" />
            </a>

            <a
              href={LIVE_SITE_DATA.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-stone-400 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-wider text-stone-800 transition-all hover:border-stone-900 active:scale-95 shadow-xs"
            >
              <span>{t.home.viewGoogleReviews}</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-60" />
            </a>
          </div>

        </div>
      </section>

      {/* Embedded 3-click Orientation Tool on Homepage */}
      <OrientationTool onOpenBooking={() => onOpenBooking()} />

      {/* Embedded Fee Transparency Section on Homepage */}
      <FeesSection onOpenBooking={() => onOpenBooking()} />
    </div>
  );
};
