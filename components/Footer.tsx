"use client";

import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Instagram,
  Facebook,
  Twitter,
  MapPin,
  Mail,
  Heart,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/moodstay",
      label: "Instagram",
    },
    {
      icon: Facebook,
      href: "https://facebook.com/moodstay",
      label: "Facebook",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/moodstay",
      label: "Twitter",
    },
  ];

  const whatsappNumbers = [
    { number: "01201543050", label: "حجز واستفسارات" },
    { number: "01060742957", label: "دعم العملاء" },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <circle cx="20" cy="14" r="8" fill="#FCD34D" />
                  <path
                    d="M8 28 Q14 20 20 28 Q26 20 32 28"
                    fill="none"
                    stroke="#4FC3F7"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 32 Q16 26 20 32 Q24 26 28 32"
                    fill="none"
                    stroke="#4FC3F7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                  <path
                    d="M16 36 Q18 32 20 36 Q22 32 24 36"
                    fill="none"
                    stroke="#4FC3F7"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.4"
                  />
                  <path
                    d="M6 18 L10 14 L14 18 L10 22 Z"
                    fill="#10B981"
                    opacity="0.8"
                  />
                  <path
                    d="M26 16 L30 12 L34 16 L30 20 Z"
                    fill="#10B981"
                    opacity="0.6"
                  />
                </svg>
              </div>
              <span className="text-2xl font-bold">Moodstay</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 text-sm">
              منصتك المثالية لحجز الشاليهات الفاخرة في قرية غزالة الوادي بالساحل
              الشمالي. نقدم لك تجربة حجز سهلة وآمنة بأفضل الأسعار.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {[
                { label: "الرئيسية", href: "#hero" },
                { label: "الشاليهات", href: "#chalets" },
                { label: "التسعير", href: "#pricing" },
                { label: "كيف يعمل", href: "#how-it-works" },
                { label: "آراء العملاء", href: "#reviews" },
                { label: "الموقع", href: "#location" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">تواصل معنا</h4>
            <ul className="space-y-4">
              {whatsappNumbers.map((wa) => (
                <li key={wa.number}>
                  <a
                    href={`https://wa.me/2${wa.number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-white text-sm font-medium">
                        {wa.number}
                      </span>
                      <span className="text-xs text-gray-500">{wa.label}</span>
                    </div>
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3 text-gray-400">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">
                  قرية غزالة الوادي - الساحل الشمالي الكيلو 142
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">info@moodstay.com</span>
              </li>
            </ul>
          </div>

          {/* WhatsApp CTA */}
          <div>
            <h4 className="text-lg font-bold mb-6">احجز الآن</h4>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              هل لديك استفسار أو ترغب في حجز شاليه؟ تواصل معنا مباشرة عبر
              الواتساب وسنرد عليك في أقرب وقت.
            </p>
            <a
              href="https://wa.me/201201543050"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-emerald-500 text-white rounded-2xl font-bold hover:bg-emerald-600 transition-all duration-300 shadow-lg shadow-emerald-500/25"
            >
              <MessageCircle className="w-5 h-5" />
              تواصل عبر واتساب
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm flex items-center gap-1">
              © {currentYear} Moodstay. جميع الحقوق محفوظة. صُنع بـ
              <Heart className="w-3 h-3 text-red-500 fill-red-500" />
              في مصر
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-primary transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                الشروط والأحكام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
