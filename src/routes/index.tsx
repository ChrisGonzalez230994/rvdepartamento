import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import {
  MapPin, Waves, Wifi, Tv, Snowflake, Flame, Users, BedDouble,
  Bath, ChefHat, ShieldCheck, Sparkles, Phone, Mail, MessageCircle,
  ChevronLeft, ChevronRight, X, Star,
} from "lucide-react";

import img1 from "@/assets/apt/apt-1.jpg.asset.json";
import img2 from "@/assets/apt/apt-2.jpg.asset.json";
import img3 from "@/assets/apt/apt-3.jpg.asset.json";
import img4 from "@/assets/apt/apt-4.jpg.asset.json";
import img5 from "@/assets/apt/apt-5.jpg.asset.json";
import img6 from "@/assets/apt/apt-6.jpg.asset.json";
import img7 from "@/assets/apt/apt-7.jpg.asset.json";
import img8 from "@/assets/apt/apt-8.jpg.asset.json";
import img9 from "@/assets/apt/apt-9.jpg.asset.json";
import img10 from "@/assets/apt/apt-10.jpg.asset.json";

const PHONE = "542235908313";
const PHONE_DISPLAY = "+54 223 590 8313";
const EMAIL = "romanvvanesa@gmail.com";
const WHATSAPP_MSG = encodeURIComponent(
  "Hola! Vi el departamento en Loma de Stella Maris y me gustaría consultar disponibilidad."
);

const photos = [
  { src: img6.url, alt: "Living comedor con sillón y mesa" },
  { src: img1.url, alt: "Dormitorio principal con cama matrimonial" },
  { src: img10.url, alt: "Living con decoración moderna" },
  { src: img7.url, alt: "Segundo dormitorio con cama marinera" },
  { src: img3.url, alt: "Cocina totalmente equipada" },
  { src: img5.url, alt: "Detalle de cocina con mesada de granito" },
  { src: img2.url, alt: "Baño boutique con espejo LED" },
  { src: img8.url, alt: "Bacha de apoyo y espejo circular iluminado" },
  { src: img9.url, alt: "Entrada Edificio Astor" },
  { src: img4.url, alt: "Vista a la playa desde la calle Alsina" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Una Experiencia Única — Depto Loma de Stella Maris, Mar del Plata" },
      { name: "description", content: "Alquiler temporario de 3 ambientes en Alsina y la Costa, Mar del Plata. A pasos del Torreón del Monje y Bahía Varese. WiFi 300MB, DVH, aire acondicionado, para 5 personas." },
      { name: "keywords", content: "alquiler temporario Mar del Plata, departamento Stella Maris, Torreón del Monje, Bahía Varese, alquiler frente al mar" },
      { property: "og:title", content: "Una Experiencia Única — Loma de Stella Maris" },
      { property: "og:description", content: "Departamento boutique frente al mar en Mar del Plata. Reservá tu estadía." },
      { property: "og:image", content: photos[0].src },
      { name: "twitter:image", content: photos[0].src },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Apartment",
        name: "Una Experiencia Única — Loma de Stella Maris",
        description: "Departamento de 3 ambientes en Planta Baja, a pasos del Torreón del Monje.",
        numberOfRooms: 3,
        occupancy: { "@type": "QuantitativeValue", maxValue: 5 },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Alsina 2161",
          addressLocality: "Mar del Plata",
          addressRegion: "Buenos Aires",
          addressCountry: "AR",
        },
        telephone: "+" + PHONE,
        image: photos.map((p) => p.src),
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Highlights />
      <Gallery />
      <Spaces />
      <Amenities />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-lg tracking-wide">
          Una Experiencia <span className="text-accent">Única</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#galeria" className="hover:text-foreground transition">Galería</a>
          <a href="#espacios" className="hover:text-foreground transition">Espacios</a>
          <a href="#ubicacion" className="hover:text-foreground transition">Ubicación</a>
          <a href="#contacto" className="hover:text-foreground transition">Contacto</a>
        </nav>
        <a
          href={`https://wa.me/${PHONE}?text=${WHATSAPP_MSG}`}
          target="_blank" rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition"
        >
          <MessageCircle className="w-4 h-4" /> Reservar
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-end pt-16">
      <img
        src={photos[0].src}
        alt="Living del departamento"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
      <div className="relative max-w-6xl mx-auto px-6 pb-16 md:pb-24 text-white w-full">
        <div className="flex items-center gap-2 text-sm mb-4 text-white/80">
          <MapPin className="w-4 h-4 text-accent" />
          Alsina y la Costa · Loma de Stella Maris · Mar del Plata
        </div>
        <h1 className="font-display text-5xl md:text-7xl leading-[1.05] max-w-3xl">
          Una experiencia única<br />
          <span className="text-accent italic font-normal">a pasos del mar.</span>
        </h1>
        <p className="mt-6 max-w-xl text-white/85 text-lg">
          Departamento boutique de 3 ambientes en planta baja, diseñado para el descanso absoluto
          de hasta 5 personas. A metros del Torreón del Monje y las playas de Bahía Varese.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`https://wa.me/${PHONE}?text=${WHATSAPP_MSG}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3 font-medium hover:brightness-95 transition"
          >
            <MessageCircle className="w-5 h-5" /> Consultar por WhatsApp
          </a>
          <a href="#galeria" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 font-medium hover:bg-white/10 transition">
            Ver galería
          </a>
        </div>
        <div className="mt-10 flex items-center gap-6 text-sm text-white/80">
          <div className="flex items-center gap-1.5"><Star className="w-4 h-4 fill-accent text-accent" /> 9,9 / 10</div>
          <div className="flex items-center gap-1.5"><Users className="w-4 h-4" /> Hasta 5 personas</div>
          <div className="flex items-center gap-1.5"><BedDouble className="w-4 h-4" /> 3 ambientes</div>
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  const items = [
    { icon: Waves, label: "A pasos del mar" },
    { icon: Wifi, label: "WiFi 300 MB" },
    { icon: Snowflake, label: "Aire acondicionado" },
    { icon: Flame, label: "Calefacción central" },
    { icon: ShieldCheck, label: "Edificio seguro" },
    { icon: Sparkles, label: "Lavado artesanal" },
  ];
  return (
    <section className="py-16 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-6 gap-6">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center text-center gap-2">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-accent">
              <Icon className="w-5 h-5" />
            </div>
            <span className="text-sm text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Gallery() {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const next = useCallback(() => setIdx((i) => (i + 1) % photos.length), []);
  const prev = useCallback(() => setIdx((i) => (i - 1 + photos.length) % photos.length), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, next, prev]);

  return (
    <section id="galeria" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHead eyebrow="Galería" title="Un recorrido visual" />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {photos.map((p, i) => (
            <button
              key={i}
              onClick={() => { setIdx(i); setOpen(true); }}
              className={`group relative overflow-hidden rounded-lg ${
                i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto md:h-full" : "aspect-square"
              }`}
            >
              <img
                src={p.src} alt={p.alt} loading="lazy"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={prev}
            className="absolute left-2 md:left-6 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <img
            src={photos[idx].src}
            alt={photos[idx].alt}
            className="max-h-[85vh] max-w-[92vw] object-contain"
          />
          <button
            onClick={next}
            className="absolute right-2 md:right-6 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {idx + 1} / {photos.length}
          </div>
        </div>
      )}
    </section>
  );
}

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center">
      <div className="text-xs tracking-[0.25em] uppercase text-accent">{eyebrow}</div>
      <h2 className="mt-3 font-display text-4xl md:text-5xl">{title}</h2>
      <div className="mx-auto mt-5 h-px w-16 bg-accent" />
    </div>
  );
}

function Spaces() {
  const spaces = [
    {
      icon: BedDouble,
      title: "Dormitorio Principal",
      text: "Cama matrimonial con respaldo de diseño y detalles de categoría.",
    },
    {
      icon: Users,
      title: "Segundo Dormitorio",
      text: "Cama individual más una cama extra deslizable tipo marinera.",
    },
    {
      icon: Tv,
      title: "Living",
      text: "Amplio, con cómodo sillón cama de alta calidad y Smart TV 43\".",
    },
    {
      icon: Bath,
      title: "Baño Boutique",
      text: "Bacha de apoyo y espejo circular con iluminación LED táctil.",
    },
    {
      icon: ChefHat,
      title: "Cocina Equipada",
      text: "Totalmente equipada, con cesto automático por sensor de movimiento.",
    },
    {
      icon: Sparkles,
      title: "Patio Interno",
      text: "Dispenser frío/calor, tender de gran capacidad y kit de playa completo.",
    },
  ];
  return (
    <section id="espacios" className="py-24 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHead eyebrow="El Espacio" title="Diseñado para el descanso" />
        <p className="mt-6 text-center max-w-2xl mx-auto text-muted-foreground">
          Ventanales con Doble Vidriado Hermético (DVH), persianas eléctricas de seguridad y cortinas
          blackout aseguran silencio y oscuridad total.
        </p>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaces.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition">
              <div className="w-11 h-11 rounded-lg bg-accent/15 flex items-center justify-center text-accent">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-5 text-xl font-display">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Amenities() {
  const groups = [
    {
      title: "Tecnología y Confort",
      items: [
        "Calefacción central por radiadores",
        "Aire Acondicionado frío/calor",
        "WiFi de alta velocidad (300 MB)",
        "Smart TV 43\" con servicio de Flow",
        "Cesto automático con sensor de movimiento",
      ],
    },
    {
      title: "Servicios Exclusivos",
      items: [
        "Dispenser de agua frío/calor (cortesía)",
        "Kit de Playa: 2 reposeras y sombrilla",
        "Tender de gran capacidad",
        "Blanquería con lavado artesanal propio",
        "Puntaje 9,9 de nuestros huéspedes",
      ],
    },
    {
      title: "Seguridad",
      items: [
        "Edificio con cámaras de seguridad",
        "Rejas reforzadas en el departamento",
        "Persianas eléctricas de seguridad",
        "Planta baja con acceso directo",
      ],
    },
  ];
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHead eyebrow="Equipamiento" title="Todo lo que necesitás" />
        <div className="mt-14 grid md:grid-cols-3 gap-10">
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="font-display text-2xl">{g.title}</h3>
              <div className="mt-3 h-px w-10 bg-accent" />
              <ul className="mt-6 space-y-3">
                {g.items.map((it) => (
                  <li key={it} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Location() {
  const address = "Alsina 2161, Mar del Plata, Buenos Aires, Argentina";
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  return (
    <section id="ubicacion" className="py-24 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHead eyebrow="Ubicación" title="Loma de Stella Maris" />
        <p className="mt-6 text-center max-w-2xl mx-auto text-muted-foreground">
          Edificio Astor · Alsina 2161. Acceso inmediato a la playa sin usar el auto, a pasos del
          Torreón del Monje y Bahía Varese.
        </p>
        <div className="mt-12 rounded-2xl overflow-hidden border border-border shadow-lg">
          <iframe
            title="Mapa ubicación departamento"
            src={mapSrc}
            className="w-full h-[420px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <SectionHead eyebrow="Contacto" title="Reservá tu estadía" />
        <p className="mt-6 text-muted-foreground">
          Escribinos por WhatsApp o email y te respondemos a la brevedad.
        </p>
        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          <a
            href={`https://wa.me/${PHONE}?text=${WHATSAPP_MSG}`}
            target="_blank" rel="noopener noreferrer"
            className="group bg-card border border-border rounded-xl p-6 hover:border-accent transition"
          >
            <MessageCircle className="w-6 h-6 mx-auto text-accent" />
            <div className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div>
            <div className="mt-1 font-medium">{PHONE_DISPLAY}</div>
          </a>
          <a
            href={`tel:+${PHONE}`}
            className="group bg-card border border-border rounded-xl p-6 hover:border-accent transition"
          >
            <Phone className="w-6 h-6 mx-auto text-accent" />
            <div className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">Teléfono</div>
            <div className="mt-1 font-medium">{PHONE_DISPLAY}</div>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="group bg-card border border-border rounded-xl p-6 hover:border-accent transition"
          >
            <Mail className="w-6 h-6 mx-auto text-accent" />
            <div className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">Email</div>
            <div className="mt-1 font-medium break-all text-sm">{EMAIL}</div>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="font-display text-base text-foreground">
          Una Experiencia <span className="text-accent">Única</span>
        </div>
        <div>Alsina 2161 · Loma de Stella Maris · Mar del Plata</div>
        <div>© {new Date().getFullYear()} Todos los derechos reservados</div>
      </div>
    </footer>
  );
}

function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${PHONE}?text=${WHATSAPP_MSG}`}
      target="_blank" rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
}
