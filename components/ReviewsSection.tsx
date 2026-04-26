"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { useInView } from "@/hooks/useInView";

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
  chalet: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "أحمد محمد",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
    text: "تجربة رائعة! الشاليه كان نظيفًا وفاخرًا والإطلالة على البحر كانت ساحرة. فريق Moodstay محترف جداً والتواصل كان سريع عبر الواتساب. سأحجز مرة أخرى بالتأكيد!",
    date: "أغسطس 2025",
    chalet: "فيلا البحر الأزرق",
  },
  {
    id: 2,
    name: "سارة عبدالله",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    rating: 5,
    text: "أفضل تجربة حجز شاليه مررت بها. الأسعار شفافة والخدمة ممتازة. العائلة استمتعت كثيراً بالإقامة. شكراً لفريق Moodstay على الاهتمام بكل التفاصيل.",
    date: "يوليو 2025",
    chalet: "شاليه الغروب الذهبي",
  },
  {
    id: 3,
    name: "محمد علي",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    rating: 4,
    text: "حجزت لمدة أسبوع وكان كل شيء ممتاز. الموقع قريب من الشاطئ والقرية هادئة وجميلة. أنصح الجميع بتجربة Moodstay لحجز الشاليهات في الساحل.",
    date: "يونيو 2025",
    chalet: "فيلا النخيل",
  },
  {
    id: 4,
    name: "نورا حسن",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 5,
    text: "إجازة لا تُنسى! الشاليه مجهز بأحدث الأجهزة والديكور راقي جداً. الدعم عبر الواتساب كان سريع الاستجابة. أنصح بشدة بحجز فيلا المرجان.",
    date: "سبتمبر 2025",
    chalet: "فيلا المرجان",
  },
  {
    id: 5,
    name: "خالد محمود",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 5,
    text: "تعامل احترافي من البداية للنهاية. الحجز كان سهل وسريع والتأكيد جاء فوراً. الشاليه أفضل مما توقعت. شكراً لفريق Moodstay على التميز.",
    date: "أغسطس 2025",
    chalet: "شاليه الواحة",
  },
  {
    id: 6,
    name: "ليلى أحمد",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    rating: 4,
    text: "أجواء رائعة وهدوء تام. الشاليه مريح ومناسب للعائلات. الأسعار معقولة مقارنة بالجودة المقدمة. سأعود بالتأكيد في الموسم القادم.",
    date: "يوليو 2025",
    chalet: "شاليه اللؤلؤة",
  },
];

function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white dark:bg-dark-50 rounded-3xl p-6 border border-gray-100 dark:border-dark-100 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
        <Quote className="w-5 h-5 text-primary" />
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < review.rating
                ? "text-yellow-500 fill-yellow-500"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Text */}
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-sm">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Chalet Badge */}
      <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
        {review.chalet}
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-dark-100">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
          loading="lazy"
        />
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white text-sm">
            {review.name}
          </h4>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {review.date}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ReviewsSection() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="reviews"
      ref={ref}
      className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-dark dark:to-dark-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            تقييمات حقيقية
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("reviews.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("reviews.subtitle")}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 mb-16"
        >
          <div className="text-center">
            <span className="block text-4xl font-bold text-primary">4.8</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              متوسط التقييم
            </span>
          </div>
          <div className="w-px h-12 bg-gray-200 dark:bg-dark-100" />
          <div className="text-center">
            <span className="block text-4xl font-bold text-primary">+200</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              تقييم إيجابي
            </span>
          </div>
          <div className="w-px h-12 bg-gray-200 dark:bg-dark-100" />
          <div className="text-center">
            <span className="block text-4xl font-bold text-primary">98%</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              نسبة الرضا
            </span>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
