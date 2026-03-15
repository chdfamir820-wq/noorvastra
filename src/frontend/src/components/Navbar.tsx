import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { Gem, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const NAV_LINKS = [
  { to: "/", label: "Home", ocid: "nav.home_link" },
  { to: "/products", label: "Products", ocid: "nav.products_link" },
  { to: "/about", label: "About", ocid: "nav.about_link" },
  { to: "/contact", label: "Contact", ocid: "nav.contact_link" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-md border-b border-border shadow-xs">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="flex items-center justify-center w-9 h-9 saree-gradient rounded-full shadow-saree">
              <Gem className="w-4.5 h-4.5 text-white" size={18} />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold leading-none text-foreground tracking-wide">
                Saree Indonesia
              </span>
              <span className="font-body text-[10px] text-gold tracking-[0.15em] uppercase leading-none">
                Indian Elegance
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.to === "/"
                  ? currentPath === "/"
                  : currentPath.startsWith(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid={link.ocid}
                  className={`relative px-4 py-2 font-body text-sm font-medium tracking-wide transition-colors
                    ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                    />
                  )}
                </Link>
              );
            })}
            <Link to="/products">
              <Button
                size="sm"
                className="ml-4 saree-gradient text-white font-body font-medium tracking-wide hover:opacity-90 transition-opacity border-0"
              >
                Shop Now
              </Button>
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border bg-card overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.to === "/"
                    ? currentPath === "/"
                    : currentPath.startsWith(link.to);
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    data-ocid={link.ocid}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-lg font-body text-sm font-medium tracking-wide transition-colors
                      ${isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link to="/products" onClick={() => setMobileOpen(false)}>
                <Button className="mt-2 w-full saree-gradient text-white font-body font-medium tracking-wide border-0">
                  Shop Now
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
