import Image from "next/image";

const footerLinks = {
  Producto: [
    { label: "Funcionalidades", href: "#funcionalidades" },
    { label: "Precios", href: "#precios" },
    { label: "Guia de la plataforma", href: "/guia" },
  ],
  Legal: [
    { label: "Privacidad", href: "/privacidad" },
    { label: "Términos", href: "/terminos" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-20 pb-8">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 pb-16 border-b border-white/10">
          <div className="col-span-2">
            <a href="/">
              <Image
                src="/logo-white.png"
                alt="Saru Apps"
                width={500}
                height={115}
                className="h-9 w-auto"
              />
            </a>
            <p className="mt-4 text-sm text-white/60 max-w-xs leading-relaxed">
              La plataforma para crear apps móviles para tiendas Tiendanube. Sin
              código, sin complicaciones.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Saru Apps. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
