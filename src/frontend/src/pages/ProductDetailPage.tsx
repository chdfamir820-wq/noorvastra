import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Package,
  Send,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import type { Product } from "../backend.d";
import { useGetProductById } from "../hooks/useQueries";
import { useSubmitOrderInquiry } from "../hooks/useQueries";
import {
  CATEGORY_COLORS,
  SAMPLE_PRODUCTS,
  formatIDR,
  formatUSD,
  getCategoryLabel,
} from "../utils/sampleData";

function ProductDetailContent({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(0);
  const [orderName, setOrderName] = useState("");
  const [orderPhone, setOrderPhone] = useState("");
  const [orderMessage, setOrderMessage] = useState("");
  const { mutateAsync: submitOrder, isPending } = useSubmitOrderInquiry();

  const images =
    product.imageUrls?.length > 0
      ? product.imageUrls
      : ["/assets/generated/saree-party-wear.dim_600x800.jpg"];

  const categoryLabel = getCategoryLabel(product.category);
  const categoryClass =
    CATEGORY_COLORS[product.category] || "bg-muted text-muted-foreground";

  const whatsappText = encodeURIComponent(
    `Hi, I want to order: ${product.name}\nPrice: ${formatIDR(product.priceIDR)}`,
  );
  const whatsappUrl = `https://wa.me/916202819125?text=${whatsappText}`;

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderName.trim() || !orderPhone.trim()) {
      toast.error("Please fill in your name and WhatsApp number.");
      return;
    }
    try {
      await submitOrder({
        customerName: orderName.trim(),
        phoneWhatsapp: orderPhone.trim(),
        productId: product.id,
        message: orderMessage.trim() || `I want to order: ${product.name}`,
      });
      toast.success(
        "Order inquiry sent! We'll contact you shortly via WhatsApp.",
      );
      setOrderName("");
      setOrderPhone("");
      setOrderMessage("");
    } catch {
      toast.error("Failed to submit inquiry. Please try WhatsApp directly.");
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
      <Link
        to="/products"
        className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft size={16} />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* ---- Image Gallery ---- */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Main image */}
          <div className="relative rounded-2xl overflow-hidden bg-muted aspect-[3/4] shadow-saree-lg">
            <img
              src={images[activeImage]}
              alt={`${product.name} - view ${activeImage + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Navigation arrows */}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() =>
                    setActiveImage(
                      (prev) => (prev - 1 + images.length) % images.length,
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveImage((prev) => (prev + 1) % images.length)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex gap-2 mt-3">
              {images.map((img, i) => (
                <button
                  // biome-ignore lint/suspicious/noArrayIndexKey: image order is stable
                  key={i}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  className={`relative rounded-lg overflow-hidden flex-shrink-0 w-16 h-20 border-2 transition-all
                    ${activeImage === i ? "border-primary shadow-saree" : "border-transparent opacity-60 hover:opacity-100"}`}
                >
                  <img
                    src={img}
                    alt={`thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* ---- Product Info ---- */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col"
        >
          <div className="mb-3">
            <Badge className={`${categoryClass} font-body text-xs border`}>
              {categoryLabel}
            </Badge>
          </div>

          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground leading-tight mb-4">
            {product.name}
          </h1>

          {/* Price */}
          <div className="flex items-end gap-4 mb-5 pb-5 border-b border-border">
            <div>
              <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1">
                Price
              </p>
              <p className="font-display text-3xl font-bold text-primary">
                {formatIDR(product.priceIDR)}
              </p>
              <p className="font-body text-muted-foreground text-sm mt-1">
                {formatUSD(product.priceUSD)}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h2 className="font-display text-foreground text-base font-semibold mb-2">
              Description
            </h2>
            <p className="font-serif-elegant text-muted-foreground text-base leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Shipping note */}
          <div className="flex items-start gap-3 p-4 bg-secondary/60 rounded-xl border border-border mb-6">
            <Package size={18} className="text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-body text-foreground text-sm font-medium">
                Free Shipping to Indonesia
              </p>
              <p className="font-body text-muted-foreground text-xs mt-0.5">
                Orders processed in 2–3 days · Delivery 7–14 days
              </p>
            </div>
          </div>

          {/* WhatsApp Order Button */}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button
              data-ocid="product.whatsapp_button"
              size="lg"
              className="w-full bg-[#25D366] hover:bg-[#22c55e] text-white font-body font-semibold tracking-wide border-0 mb-3 transition-colors"
            >
              <MessageCircle size={18} className="mr-2" />
              Order via WhatsApp
            </Button>
          </a>

          {/* Order Inquiry Form */}
          <div className="mt-6 p-5 bg-card border border-border rounded-xl">
            <h2 className="font-display text-foreground text-lg font-semibold mb-1">
              Send Order Inquiry
            </h2>
            <p className="font-body text-muted-foreground text-sm mb-4">
              Fill the form and we'll contact you via WhatsApp
            </p>

            <form onSubmit={handleSubmitOrder} className="space-y-4">
              <div>
                <Label
                  htmlFor="order-name"
                  className="font-body text-sm font-medium"
                >
                  Your Name *
                </Label>
                <Input
                  id="order-name"
                  data-ocid="order.input"
                  placeholder="Enter your full name"
                  value={orderName}
                  onChange={(e) => setOrderName(e.target.value)}
                  className="mt-1.5 font-body border-border focus-visible:ring-primary/30"
                  required
                />
              </div>

              <div>
                <Label
                  htmlFor="order-phone"
                  className="font-body text-sm font-medium"
                >
                  WhatsApp Number *
                </Label>
                <Input
                  id="order-phone"
                  data-ocid="order.input"
                  placeholder="e.g. 08123456789"
                  value={orderPhone}
                  onChange={(e) => setOrderPhone(e.target.value)}
                  className="mt-1.5 font-body border-border focus-visible:ring-primary/30"
                  required
                />
              </div>

              <div>
                <Label
                  htmlFor="order-message"
                  className="font-body text-sm font-medium"
                >
                  Message (Optional)
                </Label>
                <Textarea
                  id="order-message"
                  data-ocid="order.textarea"
                  placeholder="Any specific requests or questions?"
                  value={orderMessage}
                  onChange={(e) => setOrderMessage(e.target.value)}
                  rows={3}
                  className="mt-1.5 font-body border-border focus-visible:ring-primary/30 resize-none"
                />
              </div>

              <Button
                type="submit"
                data-ocid="order.submit_button"
                disabled={isPending}
                className="w-full saree-gradient text-white font-body font-semibold tracking-wide border-0 hover:opacity-90 transition-opacity"
              >
                {isPending ? (
                  <>
                    <span className="mr-2 h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin inline-block" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} className="mr-2" />
                    Submit Inquiry
                  </>
                )}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ProductDetailSkeleton() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
      <Skeleton className="h-5 w-32 mb-8" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <Skeleton className="aspect-[3/4] w-full rounded-2xl" />
        </div>
        <div className="space-y-4">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-10 w-1/2" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-12 w-full mt-4" />
        </div>
      </div>
    </div>
  );
}

export default function ProductDetailPage() {
  const { id } = useParams({ from: "/products/$id" });
  const productId = BigInt(id);
  const { data: product, isLoading, isError } = useGetProductById(productId);

  // Fallback to sample data
  const fallbackProduct = SAMPLE_PRODUCTS.find((p) => p.id === productId);
  const displayProduct = product || fallbackProduct;

  if (isLoading && !fallbackProduct) {
    return (
      <main data-ocid="product.loading_state">
        <ProductDetailSkeleton />
      </main>
    );
  }

  if (isLoading) {
    return (
      <main data-ocid="product.loading_state">
        <ProductDetailSkeleton />
      </main>
    );
  }

  if ((isError || !displayProduct) && !fallbackProduct) {
    return (
      <main>
        <div
          className="container mx-auto px-4 sm:px-6 py-16 text-center"
          data-ocid="product.error_state"
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">
            Product not found
          </h2>
          <p className="font-body text-muted-foreground mb-6">
            This product may no longer be available.
          </p>
          <Link to="/products">
            <Button className="saree-gradient text-white border-0">
              Browse All Products
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  if (!displayProduct) {
    return (
      <main>
        <div
          className="container mx-auto px-4 sm:px-6 py-16 text-center"
          data-ocid="product.error_state"
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">
            Product not found
          </h2>
          <Link to="/products">
            <Button className="saree-gradient text-white border-0">
              Back to Products
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <ProductDetailContent product={displayProduct} />
    </main>
  );
}
