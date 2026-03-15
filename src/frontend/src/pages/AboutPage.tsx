import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, Gem, Heart, Star, Truck } from "lucide-react";
import { motion } from "motion/react";

const STORY_POINTS = [
  {
    icon: Gem,
    title: "Authentic Indian Craftsmanship",
    description:
      "Every saree in our collection is carefully sourced directly from skilled weavers and artisans across India — from the silk looms of Varanasi to the cotton fields of West Bengal.",
  },
  {
    icon: Star,
    title: "Premium Quality, Always",
    description:
      "We personally curate each piece before it reaches you. Only sarees that meet our high standards for fabric, craftsmanship, and finish make it into our collection.",
  },
  {
    icon: Truck,
    title: "Reliable Shipping to Indonesia",
    description:
      "We partner with trusted international couriers to deliver your saree safely to every corner of Indonesia — from Jakarta to Papua.",
  },
  {
    icon: Heart,
    title: "Born from Passion",
    description:
      "Our founder's love for Indian traditional clothing sparked this mission: to make beautiful, authentic sarees accessible to everyone in Indonesia.",
  },
];

const WHY_US = [
  "Directly sourced from Indian artisans",
  "100% authentic fabrics — silk, georgette, chiffon, cotton",
  "Competitive pricing with no hidden costs",
  "Fast, tracked international shipping",
  "Responsive WhatsApp support",
  "Easy returns & honest descriptions",
];

export default function AboutPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="saree-gradient py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-body text-xs tracking-[0.2em] uppercase text-gold font-medium mb-2">
              Our Story
            </p>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
              About Saree Indonesia
            </h1>
            <p className="font-serif-elegant text-white/80 text-lg max-w-lg mx-auto">
              Bringing the timeless elegance of Indian traditional clothing to
              Indonesia
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-xs tracking-[0.2em] uppercase text-gold font-medium mb-3 ornament-line">
              Who We Are
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-5 leading-tight">
              A Bridge Between Indian Heritage and Indonesian Style
            </h2>
            <div className="font-serif-elegant text-muted-foreground text-base leading-relaxed space-y-4">
              <p>
                Saree Indonesia was founded with a simple but powerful vision:
                to make the breathtaking beauty of authentic Indian sarees
                accessible to every woman in Indonesia.
              </p>
              <p>
                We travel directly to India's finest weaving centers — Varanasi,
                Surat, Kanchipuram, and Kolkata — to bring you sarees that carry
                centuries of artisanal tradition. Each piece tells a story of
                skilled hands, meticulous craft, and cultural heritage.
              </p>
              <p>
                Whether you're attending a wedding, a corporate event, or simply
                want to embrace the elegance of Indian fashion in your daily
                life, we have the perfect saree for you.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="rounded-xl overflow-hidden aspect-square bg-muted shadow-saree">
                  <img
                    src="/assets/generated/saree-party-wear.dim_600x800.jpg"
                    alt="Party wear saree"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden aspect-[3/4] bg-muted shadow-saree">
                  <img
                    src="/assets/generated/saree-ready-to-wear.dim_600x800.jpg"
                    alt="Ready-to-wear saree"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-3 mt-6">
                <div className="rounded-xl overflow-hidden aspect-[3/4] bg-muted shadow-saree">
                  <img
                    src="/assets/generated/saree-bollywood.dim_600x800.jpg"
                    alt="Bollywood saree"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden aspect-square bg-muted shadow-saree">
                  <img
                    src="/assets/generated/saree-detail-1.dim_600x800.jpg"
                    alt="Saree detail"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-saree-lg">
              <p className="font-display text-primary text-2xl font-bold leading-none">
                500+
              </p>
              <p className="font-body text-muted-foreground text-xs mt-1">
                Happy Customers
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-secondary/40 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="font-body text-xs tracking-[0.2em] uppercase text-gold font-medium ornament-line mb-2">
              Our Values
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              What Drives Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STORY_POINTS.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 saree-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-saree">
                  <point.icon size={20} className="text-white" />
                </div>
                <h3 className="font-display text-foreground text-base font-semibold mb-2 leading-tight">
                  {point.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-body text-xs tracking-[0.2em] uppercase text-gold font-medium mb-3 ornament-line">
              Why Us
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">
              The Saree Indonesia Difference
            </h2>
            <ul className="space-y-3">
              {WHY_US.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-primary mt-0.5 flex-shrink-0"
                  />
                  <span className="font-body text-muted-foreground text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex gap-3">
              <Link to="/products">
                <Button className="saree-gradient text-white font-body font-medium border-0 hover:opacity-90">
                  Shop Collection
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="font-body border-border hover:border-primary/30"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden shadow-saree-lg aspect-[4/3] bg-muted"
          >
            <img
              src="/assets/generated/hero-banner.dim_1200x600.jpg"
              alt="Our saree collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 saree-gradient opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="font-display text-white text-4xl font-bold mb-1">
                  100%
                </p>
                <p className="font-body text-white/90 text-sm tracking-wider uppercase">
                  Authentic Indian Sarees
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
