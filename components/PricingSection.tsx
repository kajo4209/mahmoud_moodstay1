"use client";

import { motion } from "framer-motion";
import { Calendar, Sun, TrendingDown, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { useInView } from "@/hooks/useInView";

const pricingCards = [
  {
    icon: Calendar,
    title: "pricing.weekend",
    desc: "pricing.weekend_desc",
    price: "3,500 - 5,000",
    period: "ج.م / ليلة",
    highlight: "ويك إند",
    color: "from-violet-500 to-purple-400",
    bgColor: "bg-violet-50 dark:bg-violet-900/10",
    borderColor: "border-violet-200 dark:border-violet-800",
  },
  {
    icon: Sun,
    title: "pricing.season",
    desc: "pricing.season_desc",
    price: "2,800 - 7,000",
    period: "ج.م / ليلة",
    highlight: "الموسم",
    color: "from-amber-500 to-orange-400",
    bgColor: "bg-amber-50 dark:bg-amber-900/10",
    borderColor: "border-amber-200 dark:border-amber-800",
  },
  {
    icon: TrendingDown,
    title: "pricing.long_stay",
    desc: "pricing.long_stay_desc",
    price: "خصم 5%",
    period: "للإقامات +5 ليالٍ",
    highlight: "توفير",
    color: "from-emerald-500 to-teal-400",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/10",
    borderColor: "border-emerald-200 dark:border-emerald-800",
  },
];

export default function PricingSection() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="pricing"
      ref={ref}
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-dark dark:to-dark-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            أسعار مرنة
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("pricing.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("pricing.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative p-8 rounded-3xl border-2 ${card.borderColor} ${card.bgColor} hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2`}
            >
              {/* Highlight Badge */}
              <div
                className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r ${card.color} text-white text-sm font-bold shadow-lg`}
              >
                {card.highlight}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-white dark:bg-dark-50 shadow-lg flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500">
                <card.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-3">
                {t(card.title)}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-8 leading-relaxed">
                {t(card.desc)}
              </p>

              {/* Price */}
              <div className="text-center p-6 rounded-2xl bg-white dark:bg-dark-50 shadow-inner">
                <span className="block text-3xl font-bold text-primary mb-1">
                  {card.price}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {card.period}
                </span>
              </div>

              {/* Decorative */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
