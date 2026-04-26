"use client";

import { motion } from "framer-motion";
import { Search, CalendarCheck, CheckCircle2, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { useInView } from "@/hooks/useInView";

const steps = [
  {
    icon: Search,
    title: "how.step1",
    desc: "how.step1_desc",
    step: "01",
    color: "bg-blue-500",
  },
  {
    icon: CalendarCheck,
    title: "how.step2",
    desc: "how.step2_desc",
    step: "02",
    color: "bg-primary",
  },
  {
    icon: CheckCircle2,
    title: "how.step3",
    desc: "how.step3_desc",
    step: "03",
    color: "bg-emerald-500",
  },
];

export default function HowItWorks() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="how-it-works" ref={ref} className="py-24 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-sand/20 text-sand-600 dark:text-sand-300 rounded-full text-sm font-semibold mb-4">
            سهل وسريع
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("how.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("how.subtitle")}
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-blue-200 via-primary/30 to-emerald-200 dark:from-blue-900 dark:via-primary/20 dark:to-emerald-900" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="group relative bg-gray-50 dark:bg-dark-50 rounded-3xl p-8 border border-gray-100 dark:border-dark-100 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5">
                  {/* Step Number */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 lg:left-auto lg:right-8 lg:translate-x-0">
                    <div
                      className={`w-12 h-12 ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {step.step}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 rounded-3xl bg-white dark:bg-dark shadow-lg flex items-center justify-center mb-6 mx-auto mt-4 group-hover:shadow-xl transition-shadow duration-300">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-4">
                    {t(step.title)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                    {t(step.desc)}
                  </p>
                </div>

                {/* Arrow - Mobile */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-4 lg:hidden">
                    <ArrowLeft className="w-6 h-6 text-primary animate-bounce" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
