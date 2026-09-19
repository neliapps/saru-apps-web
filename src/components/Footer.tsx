import Image from "next/image";

const footerLinks = {
  Producto: [
    { label: "Editor Drag & Drop", href: "/producto/editor" },
    { label: "App Nativa", href: "/producto/app-nativa" },
    { label: "Notificaciones Push", href: "/producto/notificaciones-push" },
    { label: "Engagement y Ventas", href: "/producto/engagement" },
    { label: "Sincronizacion", href: "/producto/sincronizacion" },
    { label: "Analytics", href: "/producto/analytics" },
  ],
  Empresa: [
    { label: "Precios", href: "/precios" },
    { label: "Sectores", href: "/sectores" },
    { label: "Partners", href: "/partners" },
  ],
  Recursos: [
    { label: "Guia de la plataforma", href: "/guia" },
    { label: "Preguntas frecuentes", href: "/faq" },
    { label: "Blog", href: "/blog" },
  ],
  Legal: [
    { label: "Privacidad", href: "/privacidad" },
    { label: "Terminos", href: "/terminos" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#d2d2d7] pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 pb-12">
          {/* Logo + description */}
          <div className="col-span-2">
            <a href="/">
              <Image
                src="/logo.png"
                alt="Saru Apps"
                width={500}
                height={115}
                className="h-8 w-auto"
              />
            </a>
            <p className="mt-4 text-[13px] text-[#5e5e5e] max-w-xs leading-relaxed">
              La plataforma para crear apps moviles para tiendas Tiendanube. Sin
              codigo, sin complicaciones.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[13px] font-semibold text-[#171717] mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13px] text-[#5e5e5e] hover:text-[#171717] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-[#d2d2d7] pt-6">
          <p className="text-[12px] text-[#6e6e73]">
            &copy; {new Date().getFullYear()} Saru Apps. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
