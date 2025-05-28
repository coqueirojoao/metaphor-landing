'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

type VideoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
  title?: string;
};

export function VideoModal({ isOpen, onClose, videoId, title }: VideoModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center backdrop-blur-sm px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-black/90 p-3 sm:p-4 md:p-6 rounded-lg w-full max-w-md sm:max-w-lg md:max-w-3xl relative shadow-xl"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-3 text-white text-2xl sm:text-3xl hover:text-red-800 transition"
              aria-label="Close modal"
            >
              ×
            </button>

            {title && (
              <h2 className="text-white text-center mb-4 text-base sm:text-lg md:text-xl font-semibold">
                {title}
              </h2>
            )}

            <div className="aspect-video w-full rounded overflow-hidden">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title || 'Video trailer'}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
