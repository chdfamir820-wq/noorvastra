import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Globe,
  ShieldCheck,
  ShoppingBag,
  Star,
} from "lucide-react";
import { motion } from "motion/react";

const CATEGORIES = [
  {
    title: "Party Wear Saree",
    subtitle: "Embroidered & Zari Work",
    image: "/assets/generated/saree-party-wear.dim_600x800.jpg",
    href: "/products?category=partyWearSaree",
    badge: "Bestseller",
    ocid: "category.item.1",
  },
  {
    title: "Bollywood Saree",
    subtitle: "Glam & Statement Styles",
    image: "/assets/generated/saree-bollywood.dim_600x800.jpg",
    href: "/products?category=bollywoodSaree",
    badge: "New Arrivals",
    ocid: "category.item.2",
  },
  {
    title: "Ready-to-Wear Saree",
    subtitle: "Pre-stitched & Easy Drape",
    image: "/assets/generated/saree-ready-to-wear.dim_600x800.jpg",
    href: "/products?category=readyToWearSaree",
    badge: "Easy Wear",
    ocid: "category.item.3",
  },
];

const TRUST_ITEMS = [
  {
    icon: Globe,
    title: "Worldwide Shipping",
    description: "Delivered reliably across Indonesia and beyond",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    description: "Safe & trusted payment methods available",
  },
  {
    icon: ShoppingBag,
    title: "Easy Order",
    description: "Order simply via WhatsApp — no complicated process",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <main>
      {/* ====================================================
          HERO SECTION
          ==================================================== */}
      <section className="relative overflow-hidden min-h-[560px] md:min-h-[620px] flex items-center">
        <img
          src="/assets/generated/hero-banner.dim_1200x600.jpg"
          alt="Beautiful Indian Sarees"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-20 md:py-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="max-w-xl"
          >
            <motion.div variants={fadeInUp} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-1.5 font-body text-xs tracking-[0.2em] uppercase text-gold font-medium mb-4">
                <Star size={12} className="fill-current" />
                Premium Indian Sarees
                <Star size={12} className="fill-current" />
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4"
            >
              Beautiful Indian Sarees{" "}
              <span className="text-gold">Available in Indonesia</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="font-serif-elegant text-white/85 text-lg md:text-xl leading-relaxed mb-8"
            >
              Premium quality sarees delivered to your doorstep in Indonesia.
              Authentic craftsmanship from India, curated for you.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <Link to="/products">
                <Button
                  data-ocid="hero.primary_button"
                  size="lg"
                  className="gold-gradient text-foreground font-body font-semibold tracking-wide hover:opacity-90 transition-opacity border-0 shadow-gold"
                >
                  Shop Now
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 text-white border-white/30 hover:bg-white/20 font-body tracking-wide backdrop-blur-sm"
                >
                  Our Story
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ====================================================
          CATEGORIES SECTION
          ==================================================== */}
      <section className="py-16 md:py-24 container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-body text-xs tracking-[0.2em] uppercase text-gold font-medium mb-2 ornament-line">
            Collections
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Shop by Category
          </h2>
          <p className="font-serif-elegant text-muted-foreground text-lg mt-3 max-w-md mx-auto">
            Discover our curated collections for every occasion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={cat.href}
                data-ocid={cat.ocid}
                className="group block relative overflow-hidden rounded-xl shadow-saree card-hover"
              >
                <div className="aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="gold-gradient text-foreground font-body text-xs font-semibold border-0">
                    {cat.badge}
                  </Badge>
                </div>

                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-body text-white/70 text-xs tracking-wider uppercase mb-1">
                    {cat.subtitle}
                  </p>
                  <h3 className="font-display text-white text-xl font-bold leading-tight mb-3">
                    {cat.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 font-body text-sm text-gold font-medium group-hover:gap-3 transition-all">
                    View Collection
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====================================================
          TRUST SECTION
          ==================================================== */}
      <section className="py-14 md:py-20 bg-secondary/50 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="font-body text-xs tracking-[0.2em] uppercase text-gold font-medium ornament-line">
              Why Choose Us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {TRUST_ITEMS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border shadow-xs"
              >
                <div className="w-14 h-14 saree-gradient rounded-full flex items-center justify-center mb-4 shadow-saree">
                  <item.icon size={24} className="text-white" />
                </div>
                <h3 className="font-display text-foreground text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================
          CTA BANNER
          ==================================================== */}
      <section className="py-16 md:py-24 container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="saree-gradient rounded-2xl overflow-hidden relative"
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 p-8 md:p-12">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to find your perfect saree?
              </h2>
              <p className="font-serif-elegant text-white/80 text-lg">
                Browse our full collection and order via WhatsApp
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Link to="/products">
                <Button
                  size="lg"
                  className="gold-gradient text-foreground font-body font-semibold border-0 shadow-gold hover:opacity-90 transition-opacity"
                >
                  Browse Products
                </Button>
              </Link>
              <a
                href="https://wa.me/916202819125"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/15 text-white border-white/30 hover:bg-white/25 font-body backdrop-blur-sm"
                >
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
