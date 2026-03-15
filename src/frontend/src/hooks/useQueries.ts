import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Category, Product } from "../backend.d";
import { useActor } from "./useActor";

export function useGetAllProducts() {
  const { actor, isFetching } = useActor();
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllProducts();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetProductById(id: bigint | null) {
  const { actor, isFetching } = useActor();
  return useQuery<Product>({
    queryKey: ["product", id?.toString()],
    queryFn: async () => {
      if (!actor || id === null) throw new Error("No actor or id");
      return actor.getProductById(id);
    },
    enabled: !!actor && !isFetching && id !== null,
  });
}

export function useGetProductsByCategory(category: Category | null) {
  const { actor, isFetching } = useActor();
  return useQuery<Product[]>({
    queryKey: ["products", "category", category],
    queryFn: async () => {
      if (!actor || category === null) return [];
      return actor.getProductsByCategory(category);
    },
    enabled: !!actor && !isFetching && category !== null,
  });
}

export function useSubmitOrderInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      customerName,
      phoneWhatsapp,
      productId,
      message,
    }: {
      customerName: string;
      phoneWhatsapp: string;
      productId: bigint;
      message: string;
    }) => {
      if (!actor) throw new Error("No actor available");
      return actor.submitOrderInquiry(
        customerName,
        phoneWhatsapp,
        productId,
        message,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
}
