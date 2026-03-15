import { Category, type Product } from "../backend.d";

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: BigInt(1),
    name: "Crimson Banarasi Silk Saree",
    description:
      "Handwoven pure Banarasi silk with intricate golden zari work. This exquisite party wear saree features a rich crimson base adorned with traditional motifs and a heavily embroidered pallu. Perfect for weddings and festive celebrations.",
    category: Category.partyWearSaree,
    priceIDR: BigInt(2750000),
    priceUSD: 172,
    imageUrls: [
      "/assets/generated/saree-party-wear.dim_600x800.jpg",
      "/assets/generated/saree-detail-1.dim_600x800.jpg",
    ],
  },
  {
    id: BigInt(2),
    name: "Bollywood Fuchsia Georgette Saree",
    description:
      "Inspired by Bollywood glamour, this vibrant fuchsia georgette saree features heavy sequin embellishments and mirror work. The flowing fabric and ornate design make you feel like a movie star at any event.",
    category: Category.bollywoodSaree,
    priceIDR: BigInt(1850000),
    priceUSD: 116,
    imageUrls: [
      "/assets/generated/saree-bollywood.dim_600x800.jpg",
      "/assets/generated/saree-product-2.dim_600x800.jpg",
    ],
  },
  {
    id: BigInt(3),
    name: "Teal Chiffon Ready-to-Wear Saree",
    description:
      "Pre-stitched and pre-pleated for effortless elegance. This modern teal chiffon saree with golden border comes ready to drape in minutes — perfect for those who love the saree look without the complexity.",
    category: Category.readyToWearSaree,
    priceIDR: BigInt(975000),
    priceUSD: 61,
    imageUrls: [
      "/assets/generated/saree-ready-to-wear.dim_600x800.jpg",
      "/assets/generated/saree-detail-1.dim_600x800.jpg",
    ],
  },
  {
    id: BigInt(4),
    name: "Royal Blue Bridal Lehenga Saree",
    description:
      "Opulent royal blue saree with heavy mirror work and detailed embroidery. This bridal-inspired piece features a dramatic pallu with cascading motifs and a richly decorated border — truly fit for royalty.",
    category: Category.partyWearSaree,
    priceIDR: BigInt(3200000),
    priceUSD: 200,
    imageUrls: [
      "/assets/generated/saree-product-3.dim_600x800.jpg",
      "/assets/generated/saree-party-wear.dim_600x800.jpg",
    ],
  },
  {
    id: BigInt(5),
    name: "Emerald Kanjivaram Silk Saree",
    description:
      "Pure Kanjivaram silk from Tamil Nadu with traditional temple borders and paisley motifs. The emerald green base with contrasting maroon border is a timeless classic, beloved across generations for its durability and sheen.",
    category: Category.bollywoodSaree,
    priceIDR: BigInt(2150000),
    priceUSD: 134,
    imageUrls: [
      "/assets/generated/saree-product-2.dim_600x800.jpg",
      "/assets/generated/saree-detail-1.dim_600x800.jpg",
    ],
  },
  {
    id: BigInt(6),
    name: "Floral Printed Ready-to-Wear Saree",
    description:
      "Contemporary floral printed saree with a modern twist. This ready-to-wear piece combines traditional Indian elegance with modern convenience. Lightweight and breathable, ideal for daily wear and casual occasions.",
    category: Category.readyToWearSaree,
    priceIDR: BigInt(750000),
    priceUSD: 47,
    imageUrls: [
      "/assets/generated/saree-ready-to-wear.dim_600x800.jpg",
      "/assets/generated/saree-bollywood.dim_600x800.jpg",
    ],
  },
];

export function formatIDR(amount: bigint): string {
  const num = Number(amount);
  return `Rp ${num.toLocaleString("id-ID")}`;
}

export function formatUSD(amount: number): string {
  return `$${amount.toFixed(0)} USD`;
}

export function getCategoryLabel(category: Category): string {
  switch (category) {
    case Category.partyWearSaree:
      return "Party Wear Saree";
    case Category.bollywoodSaree:
      return "Bollywood Saree";
    case Category.readyToWearSaree:
      return "Ready-to-Wear Saree";
    default:
      return "Saree";
  }
}

export const CATEGORY_COLORS: Record<Category, string> = {
  [Category.partyWearSaree]: "bg-primary/10 text-primary border-primary/20",
  [Category.bollywoodSaree]:
    "bg-accent/20 text-accent-foreground border-accent/30",
  [Category.readyToWearSaree]:
    "bg-secondary text-secondary-foreground border-border",
};
