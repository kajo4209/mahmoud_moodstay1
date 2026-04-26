"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Sun,
  Moon,
  Globe,
  Phone,
  Home,
  Building2,
  Tag,
  HelpCircle,
  Star,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#hero", label: t("nav.home"), icon: Home },
    { href: "#chalets", label: t("nav.chalets"), icon: Building2 },
    { href: "#pricing", label: t("nav.pricing"), icon: Tag },
    { href: "#how-it-works", label: t("nav.how_it_works"), icon: HelpCircle },
    { href: "#reviews", label: t("nav.reviews"), icon: Star },
    { href: "#location", label: t("nav.location"), icon: MapPin },
    { href: "#cta", label: t("nav.contact"), icon: MessageCircle },
  ];

  const toggleLang = () => {
    const newLang = lang === "ar" ? "en" : "ar";
    setLang(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 dark:bg-dark/80 backdrop-blur-xl shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <circle
                  cx="20"
                  cy="14"
                  r="8"
                  fill="#FCD34D"
                  className="animate-pulse-slow"
                />
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
            <span
              className={`text-2xl font-bold tracking-tight transition-colors ${
                scrolled
                  ? "text-gray-900 dark:text-white"
                  : "text-white"
              }`}
            >
              Moodstay
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary ${
                  scrolled
                    ? "text-gray-700 dark:text-gray-300"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className={`p-2.5 rounded-xl transition-all duration-300 hover:bg-primary/10 hover:text-primary ${
                scrolled
                  ? "text-gray-700 dark:text-gray-300"
                  : "text-white/90"
              }`}
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5" />
            </button>

            {/* Dark Mode Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`p-2.5 rounded-xl transition-all duration-300 hover:bg-primary/10 hover:text-primary ${
                  scrolled
                    ? "text-gray-700 dark:text-gray-300"
                    : "text-white/90"
                }`}
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            )}

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/201201543050"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                scrolled
                  ? "bg-primary text-white hover:bg-primary-600 shadow-lg shadow-primary/25"
                  : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${
                scrolled
                  ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 dark:bg-dark/95 backdrop-blur-xl border-t border-gray-100 dark:border-dark-100 shadow-2xl"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  <link.icon className="w-5 h-5" />
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-4 border-t border-gray-100 dark:border-dark-100">
                <a
                  href="https://wa.me/201201543050"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-600 transition-all duration-300 shadow-lg shadow-primary/25"
                >
                  <Phone className="w-5 h-5" />
                  {t("cta.whatsapp")}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
