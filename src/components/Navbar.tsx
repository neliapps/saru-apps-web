"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

const navItems: NavItem[] = [
  {
    label: "Producto",
    href: "/producto",
    dropdown: [
      {
        label: "Editor Drag & Drop",
        description: "Diseña cada pantalla de tu app sin codigo",
        href: "/producto/editor",
        icon: MousePointerClick,
      },
      {
        label: "App Nativa iOS & Android",
        description: "Publica en App Store y Google Play",
        href: "/producto/app-nativa",
        icon: Smartphone,
      },
      {
        label: "Notificaciones Push",
        description: "Envia mensajes directos a tus clientes",
        href: "/producto/notificaciones-push",
        icon: Bell,
      },
      {
        label: "Engagement y Ventas",
        description: "Herramientas para convertir y retener",
        href: "/producto/engagement",
        icon: Heart,
      },
      {
        label: "Sincronizacion Tiendanube",
        description: "Productos y pedidos siempre actualizados",
        href: "/producto/sincronizacion",
        icon: ShoppingBag,
      },
      {
        label: "Analytics",
        description: "Metricas en tiempo real de tu app",
        href: "/producto/analytics",
        icon: BarChart3,
      },
    ],
  },
  { label: "Sectores", href: "/sectores" },
  { label: "Precios", href: "/precios" },
  {
    label: "Recursos",
    href: "#",
    dropdown: [
      {
        label: "Guia de la plataforma",
        description: "Todo sobre Saru Apps paso a paso",
        href: "/guia",
        icon: BookOpen,
      },
      {
        label: "Preguntas frecuentes",
        description: "Respuestas a las dudas mas comunes",
        href: "/faq",
        icon: HelpCircle,
      },
      {
        label: "Blog",
        description: "Articulos, guias y novedades",
        href: "/blog",
        icon: FileText,
      },
    ],
  },
  { label: "Partners", href: "/partners" },
];

export function Navbar() {
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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-[border-color] duration-300 ${
          scrolled ? "border-b border-[#d2d2d7]" : "border-b border-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="Saru Apps"
              width={500}
              height={115}
              className="h-8 w-auto"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
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
                  className={`flex items-center gap-1 text-[15px] font-normal transition-colors duration-200 ${
                    activeDropdown === item.label
                      ? "text-[#171717]"
                      : "text-[#5e5e5e] hover:text-[#171717]"
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

                {/* Desktop Dropdown */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[320px] bg-white rounded-lg border border-[#171717] p-2 z-50"
                    >
                      {item.dropdown.map((sub) => (
                        <a
                          key={sub.href}
                          href={sub.href}
                          className="flex items-start gap-3 px-3 py-3 rounded-md hover:bg-[#f5f5f5] transition-colors duration-200 group"
                        >
                          <sub.icon className="w-[18px] h-[18px] text-[#171717] shrink-0 mt-0.5" />
                          <div>
                            <p className="text-[14px] font-medium text-[#171717]">
                              {sub.label}
                            </p>
                            <p className="text-[12px] text-[#5e5e5e] mt-0.5">
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
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="https://calendly.com/saruapps/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-normal text-[#5e5e5e] hover:text-[#171717] transition-colors duration-200"
            >
              Agendar demo
            </a>
            <a
              href="https://app.saruapps.com/register"
              className="text-[15px] font-medium text-white bg-[#3b82f6] hover:bg-[#2563eb] px-5 py-2.5 rounded-full transition-colors duration-200"
            >
              Comenzar gratis
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-[#171717]"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
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
                        className="w-full flex items-center justify-between text-[17px] font-normal text-[#171717] py-3 border-b border-[#d2d2d7]"
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-5 h-5 text-[#5e5e5e] transition-transform duration-200 ${
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
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="py-2 pl-2 space-y-1">
                              {item.dropdown.map((sub) => (
                                <a
                                  key={sub.href}
                                  href={sub.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="flex items-center gap-3 py-2.5 px-2 rounded-md"
                                >
                                  <sub.icon className="w-4 h-4 text-[#171717] shrink-0" />
                                  <div>
                                    <span className="text-[15px] text-[#171717] font-medium">
                                      {sub.label}
                                    </span>
                                    <p className="text-[12px] text-[#5e5e5e]">
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
                      className="block text-[17px] font-normal text-[#171717] py-3 border-b border-[#d2d2d7]"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-3 mt-8">
                <a
                  href="https://calendly.com/saruapps/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-[15px] font-normal text-[#5e5e5e] py-3"
                >
                  Agendar demo
                </a>
                <a
                  href="https://app.saruapps.com/register"
                  className="text-center text-[15px] font-medium text-white bg-[#3b82f6] py-3.5 rounded-full"
                >
                  Comenzar gratis
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
