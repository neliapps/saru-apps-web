"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  MousePointerClick,
  Smartphone,
  Bell,
  Heart,
  ShoppingBag,
  BarChart3,
  BookOpen,
  HelpCircle,
  FileText,
} from "lucide-react";
import Image from "next/image";
import { useDictionary } from "@/i18n/DictionaryProvider";
import { defaultLocale } from "@/i18n/config";

type DropdownItem = {
  label: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

type NavItem = {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
};

export function Navbar() {
  const { dict, locale, localePath } = useDictionary();
  const t = dict.navbar;
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  // Build switch-locale URL
  const targetLocale = locale === "es" ? "pt" : "es";
  const pathWithoutLocale = pathname.replace(/^\/(es|pt)/, "") || "/";
  const switchUrl =
    targetLocale === defaultLocale
      ? pathWithoutLocale
      : `/${targetLocale}${pathWithoutLocale}`;

  const navItems: NavItem[] = [
    {
      label: t.producto,
      href: localePath("/producto"),
      dropdown: [
        { label: t.editor, description: t.editorDesc, href: localePath("/producto/editor"), icon: MousePointerClick },
        { label: t.appNativa, description: t.appNativaDesc, href: localePath("/producto/app-nativa"), icon: Smartphone },
        { label: t.push, description: t.pushDesc, href: localePath("/producto/notificaciones-push"), icon: Bell },
        { label: t.engagement, description: t.engagementDesc, href: localePath("/producto/engagement"), icon: Heart },
        { label: t.sincronizacion, description: t.sincronizacionDesc, href: localePath("/producto/sincronizacion"), icon: ShoppingBag },
        { label: t.analytics, description: t.analyticsDesc, href: localePath("/producto/analytics"), icon: BarChart3 },
      ],
    },
    { label: t.sectores, href: localePath("/sectores") },
    { label: t.precios, href: localePath("/precios") },
    {
      label: t.recursos,
      href: "#",
      dropdown: [
        { label: t.guia, description: t.guiaDesc, href: localePath("/guia"), icon: BookOpen },
        { label: t.faq, description: t.faqDesc, href: localePath("/faq"), icon: HelpCircle },
        { label: t.blog, description: t.blogDesc, href: localePath("/blog"), icon: FileText },
      ],
    },
    { label: t.partners, href: localePath("/partners") },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white border-b border-gray-200 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            : "bg-white"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-[72px] flex items-center justify-between">
          <a href={localePath("/")} className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="Saru Apps"
              width={500}
              height={115}
              className="h-9 w-auto"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.dropdown && handleMouseEnter(item.label)
                }
                onMouseLeave={() => item.dropdown && handleMouseLeave()}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (item.href === "#") e.preventDefault();
                  }}
                  className={`flex items-center gap-1 px-4 py-2 text-[15px] font-medium transition-colors duration-200 rounded-lg ${
                    activeDropdown === item.label
                      ? "text-gray-950 bg-gray-50"
                      : "text-gray-600 hover:text-gray-950 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </a>

                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[340px] bg-white rounded-2xl border border-gray-200 shadow-xl shadow-gray-200/50 p-2 z-50"
                    >
                      {item.dropdown.map((sub) => (
                        <a
                          key={sub.href}
                          href={sub.href}
                          className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 group"
                        >
                          <div className="w-9 h-9 rounded-lg bg-gray-100 group-hover:bg-gray-950 flex items-center justify-center shrink-0 transition-colors duration-300">
                            <sub.icon className="w-[18px] h-[18px] text-gray-500 group-hover:text-white transition-colors duration-300" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {sub.label}
                            </p>
                            <p className="text-xs text-gray-500 mt-0.5">
                              {sub.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={switchUrl}
              className="text-[13px] font-medium text-gray-500 hover:text-gray-950 transition-colors duration-300 px-2 py-1 rounded border border-gray-200"
            >
              {locale === "es" ? "PT" : "ES"}
            </a>
            <a
              href="https://calendly.com/saruapps/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-medium text-gray-600 hover:text-gray-950 transition-colors duration-300 px-4 py-2"
            >
              {t.agendarDemo}
            </a>
            <a
              href="https://app.saruapps.com/register"
              className="text-[15px] font-medium text-white bg-gray-950 hover:bg-gray-800 px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gray-950/20"
            >
              {t.comenzarGratis}
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-900"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white pt-[72px] overflow-y-auto"
          >
            <nav className="flex flex-col px-6 py-6 gap-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileExpanded(
                            mobileExpanded === item.label ? null : item.label
                          )
                        }
                        className="w-full flex items-center justify-between text-lg font-medium text-gray-900 py-3 border-b border-gray-100"
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                            mobileExpanded === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="py-2 pl-2 space-y-0.5">
                              {item.dropdown.map((sub) => (
                                <a
                                  key={sub.href}
                                  href={sub.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="flex items-center gap-3 py-2.5 px-2 rounded-lg hover:bg-gray-50"
                                >
                                  <sub.icon className="w-4 h-4 text-gray-500 shrink-0" />
                                  <div>
                                    <span className="text-[15px] text-gray-700 font-medium">
                                      {sub.label}
                                    </span>
                                    <p className="text-xs text-gray-500">
                                      {sub.description}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-lg font-medium text-gray-900 py-3 border-b border-gray-100"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-3 mt-6">
                <a
                  href={switchUrl}
                  className="text-center text-base font-medium text-gray-500 py-2 border border-gray-200 rounded-lg"
                >
                  {locale === "es" ? "Português (BR)" : "Español"}
                </a>
                <a
                  href="https://calendly.com/saruapps/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-base font-medium text-gray-600 py-3"
                >
                  {t.agendarDemo}
                </a>
                <a
                  href="https://app.saruapps.com/register"
                  className="text-center text-base font-medium text-white bg-gray-950 py-3.5 rounded-full"
                >
                  {t.comenzarGratis}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
