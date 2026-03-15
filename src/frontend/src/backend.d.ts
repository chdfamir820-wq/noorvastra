import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface Product {
    id: bigint;
    imageUrls: Array<string>;
    name: string;
    description: string;
    category: Category;
    priceIDR: bigint;
    priceUSD: number;
}
export interface OrderInquiry {
    customerName: string;
    phoneWhatsapp: string;
    productId: bigint;
    message: string;
    timestamp: Time;
}
export enum Category {
    bollywoodSaree = "bollywoodSaree",
    partyWearSaree = "partyWearSaree",
    readyToWearSaree = "readyToWearSaree"
}
export interface backendInterface {
    getAllOrders(): Promise<Array<OrderInquiry>>;
    getAllProducts(): Promise<Array<Product>>;
    getProductById(id: bigint): Promise<Product>;
    getProductsByCategory(category: Category): Promise<Array<Product>>;
    submitOrderInquiry(customerName: string, phoneWhatsapp: string, productId: bigint, message: string): Promise<void>;
}
