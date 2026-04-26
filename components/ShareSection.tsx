"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Share2, Copy, Check, QrCode } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { useInView } from "@/hooks/useInView";

export default function ShareSection() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const siteUrl = "https://moodstay.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(siteUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = siteUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section
      id="share"
      ref={ref}
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-dark-50 dark:to-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            <Share2 className="w-4 h-4" />
            شارك التجربة
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("share.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("share.subtitle")}
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-dark-50 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-dark-100"
          >
            {/* URL Display */}
            <div className="flex items-center gap-3 mb-8 p-4 bg-gray-50 dark:bg-dark rounded-2xl border border-gray-100 dark:border-dark-100">
              <div className="flex-1 truncate text-gray-700 dark:text-gray-300 font-mono text-sm">
                {siteUrl}
              </div>
              <button
                onClick={handleCopy}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  copied
                    ? "bg-emerald-500 text-white"
                    : "bg-primary text-white hover:bg-primary-600"
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    {t("share.copied")}
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    {t("share.copy")}
                  </>
                )}
              </button>
            </div>

            {/* QR Code Toggle */}
            <button
              onClick={() => setShowQR(!showQR)}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gray-100 dark:bg-dark-100 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-dark-200 transition-colors mb-6"
            >
              <QrCode className="w-5 h-5" />
              {showQR ? "إخفاء QR Code" : "عرض QR Code"}
            </button>

            {/* QR Code */}
            {showQR && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="p-6 bg-white rounded-2xl shadow-inner">
                  <svg
                    viewBox="0 0 200 200"
                    className="w-48 h-48"
                  >
                    {/* Simple QR Code Pattern */}
                    <rect fill="white" width="200" height="200" />
                    {/* Position Detection Patterns */}
                    <rect x="10" y="10" width="50" height="50" fill="#0F172A" />
                    <rect x="20" y="20" width="30" height="30" fill="white" />
                    <rect x="25" y="25" width="20" height="20" fill="#0F172A" />

                    <rect x="140" y="10" width="50" height="50" fill="#0F172A" />
                    <rect x="150" y="20" width="30" height="30" fill="white" />
                    <rect x="155" y="25" width="20" height="20" fill="#0F172A" />

                    <rect x="10" y="140" width="50" height="50" fill="#0F172A" />
                    <rect x="20" y="150" width="30" height="30" fill="white" />
                    <rect x="25" y="155" width="20" height="20" fill="#0F172A" />

                    {/* Data modules - pattern */}
                    {Array.from({ length: 25 }, (_, i) =>
                      Array.from({ length: 25 }, (_, j) => {
                        if (
                          (i < 7 && j < 7) ||
                          (i < 7 && j > 17) ||
                          (i > 17 && j < 7)
                        )
                          return null;
                        const seed = (i * 31 + j * 17) % 7;
                        if (seed === 0) {
                          return (
                            <rect
                              key={`${i}-${j}`}
                              x={10 + j * 7.2}
                              y={10 + i * 7.2}
                              width="5"
                              height="5"
                              fill="#0F172A"
                              rx="1"
                            />
                          );
                        }
                        return null;
                      })
                    )}

                    {/* Center Logo area */}
                    <circle cx="100" cy="100" r="18" fill="white" />
                    <circle cx="100" cy="100" r="14" fill="#4FC3F7" />
                    <text
                      x="100"
                      y="105"
                      textAnchor="middle"
                      fill="white"
                      fontSize="10"
                      fontWeight="bold"
                    >
                      M
                    </text>
                  </svg>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  امسح الكود للوصول إلى الموقع مباشرة
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
