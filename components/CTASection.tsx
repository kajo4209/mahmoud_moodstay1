"use client";

import { motion } from "framer-motion";
import { Calendar, MessageCircle, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { useInView } from "@/hooks/useInView";

export default function CTASection() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section
      id="cta"
      ref={ref}
      className="relative py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-[10%] w-24 h-24 bg-white/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-[15%] w-32 h-32 bg-white/10 rounded-full blur-2xl"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-sm font-semibold mb-8"
          >
            <Sparkles className="w-4 h-4" />
            عروض حصرية
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t("cta.title")}
          </h2>

          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed">
            {t("cta.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#chalets"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-8 py-4 bg-white text-primary rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/25 transition-all duration-300"
            >
              <Calendar className="w-5 h-5" />
              {t("cta.book")}
            </motion.a>

            <motion.a
              href="https://wa.me/201201543050"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-8 py-4 bg-white/20 backdrop-blur-md border-2 border-white/40 text-white rounded-2xl font-bold text-lg hover:bg-white/30 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              {t("cta.whatsapp")}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
