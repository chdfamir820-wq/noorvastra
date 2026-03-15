import { Button } from "@/components/ui/button";
import {
  Clock,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Package,
  Truck,
} from "lucide-react";
import { motion } from "motion/react";
import { SiTiktok } from "react-icons/si";

const CONTACT_METHODS = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 6202819125",
    href: "https://wa.me/916202819125",
    description: "Chat with us directly — fastest response!",
    color: "bg-[#25D366]",
    ocid: "contact.whatsapp_button",
    isExternal: true,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@offical_suraj005",
    href: "https://instagram.com/offical_suraj005",
    description: "Follow us for new arrivals & promotions",
    color: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400",
    ocid: "contact.instagram_link",
    isExternal: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "sareeindonesia@gmail.com",
    href: "mailto:sareeindonesia@gmail.com",
    description: "Send us a message anytime",
    color: "saree-gradient",
    ocid: "contact.email_link",
    isExternal: false,
  },
];

const SOCIAL_LINKS = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/916202819125",
    color: "bg-[#25D366] hover:bg-[#22c55e]",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/offical_suraj005",
    color:
      "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 hover:opacity-90",
  },
  {
    icon: SiTiktok,
    label: "TikTok",
    href: "https://tiktok.com/@sareeindonesia",
    color: "bg-black hover:bg-gray-800",
  },
];

const SHIPPING_STEPS = [
  {
    icon: Package,
    step: "1",
    title: "Order Placed",
    desc: "You place your order via WhatsApp or our form",
  },
  {
    icon: Clock,
    step: "2",
    title: "Processing (2–3 days)",
    desc: "We confirm and prepare your saree for shipment",
  },
  {
    icon: Truck,
    step: "3",
    title: "Shipped from India",
    desc: "Sent via trusted international courier with tracking",
  },
  {
    icon: MapPin,
    step: "4",
    title: "Delivered to Indonesia",
    desc: "Arrives at your address within 7–14 business days",
  },
];

export default function ContactPage() {
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
              Get in Touch
            </p>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
              Contact Us
            </h1>
            <p className="font-serif-elegant text-white/80 text-lg max-w-lg mx-auto">
              We're here to help you find your perfect saree. Reach out anytime!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-24 container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="font-body text-xs tracking-[0.2em] uppercase text-gold font-medium ornament-line mb-2">
            Reach Us
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            How to Contact Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {CONTACT_METHODS.map((method, i) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.isExternal ? "_blank" : undefined}
              rel={method.isExternal ? "noopener noreferrer" : undefined}
              data-ocid={method.ocid}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center text-center p-6 bg-card border border-border rounded-xl shadow-xs hover:shadow-saree transition-all group"
            >
              <div
                className={`w-14 h-14 ${method.color} rounded-full flex items-center justify-center mb-4 shadow-saree group-hover:scale-110 transition-transform`}
              >
                <method.icon size={24} className="text-white" />
              </div>
              <h3 className="font-display text-foreground text-base font-semibold mb-1">
                {method.label}
              </h3>
              <p className="font-body text-primary text-sm font-medium mb-1">
                {method.value}
              </p>
              <p className="font-body text-muted-foreground text-xs">
                {method.description}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Social Media Quick Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <p className="font-body text-sm text-muted-foreground mb-4">
            Follow us on social media
          </p>
          <div className="flex items-center justify-center gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} text-white p-3 rounded-full transition-all hover:scale-110 shadow-saree`}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA - WhatsApp */}
      <section className="py-14 bg-secondary/40 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-lg mx-auto">
              <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-4 shadow-saree">
                <MessageCircle size={28} className="text-white" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                Ready to Order?
              </h2>
              <p className="font-serif-elegant text-muted-foreground text-base leading-relaxed mb-6">
                The fastest way to order is directly via WhatsApp. Chat with us,
                tell us what you like, and we'll guide you to the perfect saree.
              </p>
              <a
                href="https://wa.me/916202819125"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  data-ocid="contact.whatsapp_button"
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#22c55e] text-white font-body font-semibold tracking-wide border-0 shadow-saree transition-colors"
                >
                  <MessageCircle size={18} className="mr-2" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Shipping Info */}
      <section className="py-16 md:py-24 container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="font-body text-xs tracking-[0.2em] uppercase text-gold font-medium ornament-line mb-2">
            Delivery
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Shipping Information
          </h2>
          <p className="font-body text-muted-foreground text-sm mt-3">
            From India to your door in Indonesia
          </p>
        </motion.div>

        {/* Shipping Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] h-0.5 bg-border" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-4">
            {SHIPPING_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative z-10 w-20 h-20 saree-gradient rounded-full flex flex-col items-center justify-center mb-4 shadow-saree">
                  <step.icon size={22} className="text-white" />
                  <span className="font-body text-white/80 text-[10px] font-bold mt-0.5">
                    Step {step.step}
                  </span>
                </div>
                <h3 className="font-display text-foreground text-sm font-semibold mb-1 leading-tight">
                  {step.title}
                </h3>
                <p className="font-body text-muted-foreground text-xs leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Shipping details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 max-w-2xl mx-auto bg-card border border-border rounded-2xl p-6 shadow-xs"
        >
          <h3 className="font-display text-foreground text-lg font-semibold mb-4">
            Shipping Details
          </h3>
          <div className="space-y-3 font-body text-sm">
            <div className="flex gap-3">
              <span className="w-5 h-5 saree-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-[10px] font-bold">✓</span>
              </span>
              <div>
                <span className="font-medium text-foreground">
                  Processing time:
                </span>
                <span className="text-muted-foreground ml-1">
                  2–3 business days after payment confirmation
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="w-5 h-5 saree-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-[10px] font-bold">✓</span>
              </span>
              <div>
                <span className="font-medium text-foreground">
                  Delivery time:
                </span>
                <span className="text-muted-foreground ml-1">
                  7–14 business days to all Indonesian cities
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="w-5 h-5 saree-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-[10px] font-bold">✓</span>
              </span>
              <div>
                <span className="font-medium text-foreground">Courier:</span>
                <span className="text-muted-foreground ml-1">
                  International courier with full tracking
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="w-5 h-5 saree-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-[10px] font-bold">✓</span>
              </span>
              <div>
                <span className="font-medium text-foreground">Coverage:</span>
                <span className="text-muted-foreground ml-1">
                  All provinces across Indonesia
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="w-5 h-5 saree-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-[10px] font-bold">✓</span>
              </span>
              <div>
                <span className="font-medium text-foreground">Packaging:</span>
                <span className="text-muted-foreground ml-1">
                  Secure, protective packaging to prevent damage
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
