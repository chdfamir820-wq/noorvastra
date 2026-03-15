import { Link } from "@tanstack/react-router";
import { Gem, Heart, Instagram, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-9 h-9 gold-gradient rounded-full">
                <Gem size={18} className="text-white" />
              </div>
              <div>
                <p className="font-display text-lg font-bold leading-none text-white">
                  Saree Indonesia
                </p>
                <p className="font-body text-[10px] text-gold tracking-[0.15em] uppercase leading-none mt-0.5">
                  Indian Elegance
                </p>
              </div>
            </div>
            <p className="font-serif-elegant text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              Bringing the finest Indian sarees directly to Indonesia. Authentic
              craftsmanship, premium quality, delivered to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-white text-base font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                { to: "/", label: "Home" },
                { to: "/products", label: "All Products" },
                {
                  to: "/products?category=partyWearSaree",
                  label: "Party Wear",
                },
                {
                  to: "/products?category=bollywoodSaree",
                  label: "Bollywood Saree",
                },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="font-body text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-white text-base font-semibold mb-4">
              Get in Touch
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/916202819125"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body text-sm text-primary-foreground/70 hover:text-gold transition-colors"
              >
                <MessageCircle size={16} />
                <span>+91 6202819125</span>
              </a>
              <a
                href="https://instagram.com/offical_suraj005"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body text-sm text-primary-foreground/70 hover:text-gold transition-colors"
              >
                <Instagram size={16} />
                <span>@offical_suraj005</span>
              </a>
              <a
                href="mailto:sareeindonesia@gmail.com"
                className="flex items-center gap-3 font-body text-sm text-primary-foreground/70 hover:text-gold transition-colors"
              >
                <Mail size={16} />
                <span>sareeindonesia@gmail.com</span>
              </a>
            </div>

            <div className="mt-6 p-3 rounded-lg bg-white/5 border border-white/10">
              <p className="font-body text-xs text-primary-foreground/60 leading-relaxed">
                🚚 Orders shipped within 2–3 days
                <br />📦 Delivery 7–14 days to Indonesia
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-primary-foreground/50 text-center sm:text-left">
            © {year} Saree Indonesia. All rights reserved.
          </p>
          <p className="font-body text-xs text-primary-foreground/50 flex items-center gap-1">
            Built with{" "}
            <Heart size={12} className="text-rose-400 fill-rose-400" /> using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
