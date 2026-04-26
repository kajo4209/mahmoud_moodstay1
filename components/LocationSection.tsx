"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Car, Clock } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { useInView } from "@/hooks/useInView";

export default function LocationSection() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ threshold: 0.1 });

  const infoCards = [
    {
      icon: Car,
      title: "90 دقيقة",
      desc: "من القاهرة",
    },
    {
      icon: Clock,
      title: "الكيلو 142",
      desc: "الساحل الشمالي",
    },
    {
      icon: Navigation,
      title: "GPS",
      desc: "موقع دقيق",
    },
  ];

  return (
    <section id="location" ref={ref} className="py-24 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            <MapPin className="w-4 h-4" />
            موقع مميز
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("location.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("location.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-dark-100"
          >
            <div className="aspect-[16/10] lg:aspect-auto lg:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.1234567890123!2d29.7!3d30.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDU0JzAwLjAiTiAyOcKwNDInMDAuMCJF!5e0!3m2!1sen!2seg!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(20%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="dark:invert-[0.85]"
                title="Moodstay Location"
              />
            </div>

            {/* Map Overlay Card */}
            <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-72 bg-white/95 dark:bg-dark/95 backdrop-blur-xl rounded-2xl p-5 shadow-xl border border-gray-100 dark:border-dark-100">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">
                    قرية غزالة الوادي
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    الساحل الشمالي - الكيلو 142
                    <br />
                    طريق الإسكندرية - مرسى مطروح
                  </p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=30.9,29.7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full mt-4 px-4 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary-600 transition-colors"
              >
                <Navigation className="w-4 h-4" />
                فتح في خرائط Google
              </a>
            </div>
          </motion.div>

          {/* Info Cards */}
          <div className="flex flex-col gap-4">
            {infoCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex-1 flex items-center gap-4 p-6 rounded-3xl bg-gray-50 dark:bg-dark-50 border border-gray-100 dark:border-dark-100 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <card.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {card.title}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Directions CTA */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-6 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
            >
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                هل تحتاج مساعدة في الوصول؟
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                تواصل معنا عبر الواتساب وسنرسل لك الإرشادات التفصيلية
              </p>
              <a
                href="https://wa.me/201201543050"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-600 transition-colors"
              >
                <Navigation className="w-4 h-4" />
                تواصل معنا
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
