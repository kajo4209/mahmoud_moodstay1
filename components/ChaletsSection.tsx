"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Star,
  BedDouble,
  Waves,
  ArrowRight,
  Eye,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { useInView } from "@/hooks/useInView";

interface Chalet {
  id: number;
  name: string;
  nameEn: string;
  price: number;
  rooms: number;
  rating: number;
  reviews: number;
  seaView: boolean;
  image: string;
  featured?: boolean;
}

const chalets: Chalet[] = [
  {
    id: 1,
    name: "فيلا البحر الأزرق",
    nameEn: "Blue Sea Villa",
    price: 3500,
    rooms: 4,
    rating: 4.9,
    reviews: 28,
    seaView: true,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    featured: true,
  },
  {
    id: 2,
    name: "شاليه الغروب الذهبي",
    nameEn: "Golden Sunset Chalet",
    price: 2800,
    rooms: 3,
    rating: 4.8,
    reviews: 42,
    seaView: true,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    featured: true,
  },
  {
    id: 3,
    name: "فيلا النخيل",
    nameEn: "Palm Villa",
    price: 4200,
    rooms: 5,
    rating: 5.0,
    reviews: 15,
    seaView: true,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    id: 4,
    name: "شاليه الواحة",
    nameEn: "Oasis Chalet",
    price: 2200,
    rooms: 2,
    rating: 4.7,
    reviews: 56,
    seaView: false,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    id: 5,
    name: "فيلا المرجان",
    nameEn: "Coral Villa",
    price: 5000,
    rooms: 6,
    rating: 4.9,
    reviews: 22,
    seaView: true,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    featured: true,
  },
  {
    id: 6,
    name: "شاليه اللؤلؤة",
    nameEn: "Pearl Chalet",
    price: 1800,
    rooms: 2,
    rating: 4.6,
    reviews: 38,
    seaView: true,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
  },
];

function ChaletCard({ chalet, index }: { chalet: Chalet; index: number }) {
  const [liked, setLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { lang, t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white dark:bg-dark-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-dark-100"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 dark:bg-dark-100 animate-pulse" />
        )}
        <img
          src={chalet.image}
          alt={lang === "ar" ? chalet.name : chalet.nameEn}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {chalet.featured && (
            <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full shadow-lg">
              مميز
            </span>
          )}
          {chalet.seaView && (
            <span className="flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold rounded-full shadow-lg">
              <Waves className="w-3 h-3" />
              {t("featured.sea_view")}
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:scale-110 transition-all duration-300"
        >
          <Heart
            className={`w-5 h-5 transition-colors duration-300 ${
              liked ? "text-red-500 fill-red-500" : "text-gray-600"
            }`}
          />
        </button>

        {/* Price Overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-xl text-gray-900 font-bold text-lg shadow-lg">
            {chalet.price.toLocaleString()} ج.م
            <span className="text-sm font-normal text-gray-500 mr-1">
              {t("featured.per_night")}
            </span>
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            {lang === "ar" ? chalet.name : chalet.nameEn}
          </h3>
          <div className="flex items-center gap-1 px-2 py-1 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-bold text-yellow-700 dark:text-yellow-400">
              {chalet.rating}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <span className="flex items-center gap-1">
            <BedDouble className="w-4 h-4" />
            {chalet.rooms} {t("featured.rooms")}
          </span>
          <span>({chalet.reviews} تقييم)</span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-dark-100">
          <div>
            <span className="text-2xl font-bold text-primary">
              {chalet.price.toLocaleString()}
            </span>
            <span className="text-sm text-gray-500 mr-1">
              {t("featured.per_night")}
            </span>
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-primary/10 text-primary rounded-xl font-semibold text-sm hover:bg-primary hover:text-white transition-all duration-300 group/btn">
            <Eye className="w-4 h-4" />
            {t("featured.details")}
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-[-4px] transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ChaletsSection() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="chalets"
      ref={ref}
      className="py-24 bg-gray-50 dark:bg-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            الشاليهات الفاخرة
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("featured.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("featured.subtitle")}
          </p>
        </motion.div>

        {/* Chalets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chalets.map((chalet, index) => (
            <ChaletCard key={chalet.id} chalet={chalet} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
