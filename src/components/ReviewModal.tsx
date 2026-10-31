import React from 'react';
import { X, ExternalLink, Star } from 'lucide-react';
import { LIVE_SITE_DATA } from '../data/liveSiteData';
import { useLanguage } from '../i18n/LanguageContext';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl bg-[#FAF8F3] p-6 sm:p-8 shadow-2xl border border-[#E2DBD0] text-[#181615] font-serif">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-900 transition-colors"
          aria-label={t.reviewModal.closeBtn}
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-6">
          <span className="text-xs uppercase tracking-wider text-stone-400 font-sans block mb-1">
            {t.reviewModal.tag}
          </span>
          <h3 className="text-2xl sm:text-3xl font-normal text-[#181615]">
            {t.reviewModal.title}
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 font-sans leading-relaxed">
            {t.reviewModal.desc}
          </p>
        </div>

        <div className="p-5 rounded-xl bg-white border border-[#E2DBD0] mb-6 space-y-3 font-sans">
          <div className="flex items-center gap-1 text-stone-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-stone-400 text-stone-400" />
            ))}
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            {t.reviewModal.boxText}
          </p>
        </div>

        <div className="space-y-3 font-sans">
          <a
            href={LIVE_SITE_DATA.googleWriteReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 rounded-full bg-[#181615] text-[#F8F5EE] py-3 text-xs font-semibold uppercase tracking-wider hover:bg-stone-800 transition-colors shadow-sm"
          >
            <span>{t.reviewModal.leaveReviewBtn}</span>
            <ExternalLink className="h-3.5 w-3.5 opacity-80" />
          </a>

          <a
            href={LIVE_SITE_DATA.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 rounded-full border border-stone-400 bg-white text-stone-800 py-3 text-xs font-semibold uppercase tracking-wider hover:border-stone-900 transition-colors shadow-xs"
          >
            <span>{t.reviewModal.viewReviewsBtn}</span>
            <ExternalLink className="h-3.5 w-3.5 opacity-60" />
          </a>
        </div>

        <div className="mt-6 pt-4 border-t border-[#EAE4D8] text-center">
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-sans text-stone-500 hover:text-stone-900 transition-colors"
          >
            {t.reviewModal.closeBtn}
          </button>
        </div>

      </div>
    </div>
  );
};
