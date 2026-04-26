"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, MessageCircle, BadgePercent } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { useInView } from "@/hooks/useInView";

const features = [
  {
    icon: Clock,
    title: "why.fast_booking",
    desc: "why.fast_booking_desc",
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-50 dark:bg-blue-900/10",
  },
  {
    icon: ShieldCheck,
    title: "why.verified",
    desc: "why.verified_desc",
    color: "from-emerald-500 to-teal-400",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/10",
  },
  {
    icon: MessageCircle,
    title: "why.whatsapp",
    desc: "why.whatsapp_desc",
    color: "from-green-500 to-emerald-400",
    bgColor: "bg-green-50 dark:bg-green-900/10",
  },
  {
    icon: BadgePercent,
    title: "why.prices",
    desc: "why.prices_desc",
    color: "from-orange-500 to-amber-400",
    bgColor: "bg-orange-50 dark:bg-orange-900/10",
  },
];

export default function WhySection() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="why" ref={ref} className="py-24 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-sand/20 text-sand-600 dark:text-sand-300 rounded-full text-sm font-semibold mb-4">
            لماذا نحن؟
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("why.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("why.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-gray-50 dark:bg-dark-50 border border-gray-100 dark:border-dark-100 hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
              >
                <feature.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {t(feature.title)}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {t(feature.desc)}
              </p>

              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
