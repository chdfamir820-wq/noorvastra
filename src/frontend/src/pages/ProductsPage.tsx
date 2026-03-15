import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Link, useNavigate, useSearch } from "@tanstack/react-router";
import { Search, SlidersHorizontal } from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { Category, type Product } from "../backend.d";
import { useGetAllProducts } from "../hooks/useQueries";
import {
  CATEGORY_COLORS,
  SAMPLE_PRODUCTS,
  formatIDR,
  formatUSD,
  getCategoryLabel,
} from "../utils/sampleData";

const FILTER_TABS = [
  { label: "All", value: "all" },
  { label: "Party Wear", value: Category.partyWearSaree },
  { label: "Bollywood", value: Category.bollywoodSaree },
  { label: "Ready-to-Wear", value: Category.readyToWearSaree },
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  const navigate = useNavigate();
  const imageUrl =
    product.imageUrls?.[0] ||
    "/assets/generated/saree-party-wear.dim_600x800.jpg";
  const categoryLabel = getCategoryLabel(product.category);
  const categoryClass =
    CATEGORY_COLORS[product.category] || "bg-muted text-muted-foreground";

  const handleViewDetails = () => {
    navigate({ to: "/products/$id", params: { id: product.id.toString() } });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
      data-ocid={`product.item.${index + 1}`}
      className="group bg-card border border-border rounded-xl overflow-hidden shadow-xs card-hover"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-3 left-3">
          <Badge className={`${categoryClass} font-body text-xs border`}>
            {categoryLabel}
          </Badge>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-display text-foreground text-base font-semibold leading-tight mb-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="font-body text-muted-foreground text-xs leading-relaxed mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-end justify-between gap-2 mb-4">
          <div>
            <p className="font-display text-primary text-lg font-bold leading-none">
              {formatIDR(product.priceIDR)}
            </p>
            <p className="font-body text-muted-foreground text-xs mt-1">
              {formatUSD(product.priceUSD)}
            </p>
          </div>
        </div>

        <Button
          onClick={handleViewDetails}
          className="w-full saree-gradient text-white font-body text-sm tracking-wide border-0 hover:opacity-90 transition-opacity"
        >
          View Details
        </Button>
      </div>
    </motion.article>
  );
}

function ProductSkeleton() {
  return (
    <div
      className="bg-card border border-border rounded-xl overflow-hidden"
      data-ocid="product.loading_state"
    >
      <Skeleton className="aspect-[3/4] w-full" />
      <div className="p-4 space-y-3">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-2/3" />
        <Skeleton className="h-6 w-1/2 mt-2" />
        <Skeleton className="h-9 w-full mt-2" />
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const searchParams = useSearch({ from: "/products" });
  const categoryParam = (searchParams as Record<string, string>).category as
    | Category
    | undefined;
  const [activeFilter, setActiveFilter] = useState<string>(
    categoryParam || "all",
  );
  const [searchQuery, setSearchQuery] = useState("");

  const { data: backendProducts, isLoading, isError } = useGetAllProducts();
  const products =
    backendProducts && backendProducts.length > 0
      ? backendProducts
      : SAMPLE_PRODUCTS;

  const filtered = useMemo(() => {
    let result = products;
    if (activeFilter !== "all") {
      result = result.filter((p) => p.category === activeFilter);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q),
      );
    }
    return result;
  }, [products, activeFilter, searchQuery]);

  return (
    <main className="min-h-screen">
      {/* Page Header */}
      <section className="saree-gradient py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-body text-xs tracking-[0.2em] uppercase text-gold font-medium mb-2">
              Our Collection
            </p>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
              All Sarees
            </h1>
            <p className="font-serif-elegant text-white/80 text-lg max-w-md mx-auto">
              Discover our handpicked collection of authentic Indian sarees
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {FILTER_TABS.map((tab) => (
              <button
                type="button"
                key={tab.value}
                data-ocid="products.tab"
                onClick={() => setActiveFilter(tab.value)}
                className={`px-4 py-2 rounded-full font-body text-sm font-medium transition-all border
                  ${
                    activeFilter === tab.value
                      ? "saree-gradient text-white border-transparent shadow-saree"
                      : "bg-card text-muted-foreground border-border hover:border-primary/30 hover:text-foreground"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-60">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              data-ocid="products.search_input"
              placeholder="Search sarees..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 font-body text-sm bg-card border-border focus-visible:ring-primary/30"
            />
          </div>
        </div>

        {/* Results count */}
        {!isLoading && (
          <div className="flex items-center gap-2 mb-6">
            <SlidersHorizontal size={14} className="text-muted-foreground" />
            <p className="font-body text-sm text-muted-foreground">
              {filtered.length} {filtered.length === 1 ? "saree" : "sarees"}{" "}
              found
            </p>
          </div>
        )}

        {/* Loading skeleton */}
        {isLoading && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {["s1", "s2", "s3", "s4", "s5", "s6"].map((k) => (
              <ProductSkeleton key={k} />
            ))}
          </div>
        )}

        {/* Error state */}
        {isError && !isLoading && (
          <div data-ocid="products.error_state" className="text-center py-10">
            <p className="font-body text-muted-foreground">
              Could not load products. Showing sample collection.
            </p>
          </div>
        )}

        {/* Products grid */}
        {!isLoading && filtered.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {filtered.map((product, i) => (
              <ProductCard
                key={product.id.toString()}
                product={product}
                index={i}
              />
            ))}
          </div>
        )}

        {/* Empty state */}
        {!isLoading && filtered.length === 0 && (
          <div data-ocid="products.empty_state" className="text-center py-16">
            <div className="w-16 h-16 saree-gradient rounded-full flex items-center justify-center mx-auto mb-4 opacity-50">
              <Search size={24} className="text-white" />
            </div>
            <h3 className="font-display text-foreground text-xl font-semibold mb-2">
              No sarees found
            </h3>
            <p className="font-body text-muted-foreground text-sm mb-6">
              Try adjusting your search or filter.
            </p>
            <Button
              onClick={() => {
                setActiveFilter("all");
                setSearchQuery("");
              }}
              variant="outline"
              className="font-body border-primary/30 text-primary hover:bg-primary/5"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
