import Int "mo:core/Int";
import List "mo:core/List";
import Nat "mo:core/Nat";
import Time "mo:core/Time";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Float "mo:core/Float";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";

actor {
  type Category = {
    #partyWearSaree;
    #bollywoodSaree;
    #readyToWearSaree;
  };

  type Product = {
    id : Nat;
    name : Text;
    category : Category;
    description : Text;
    priceIDR : Nat;
    priceUSD : Float;
    imageUrls : [Text];
  };

  type OrderInquiry = {
    customerName : Text;
    phoneWhatsapp : Text;
    productId : Nat;
    message : Text;
    timestamp : Time.Time;
  };

  module Product {
    public func compare(product1 : Product, product2 : Product) : Order.Order {
      Nat.compare(product1.id, product2.id);
    };
  };

  var nextProductId = 1;
  let products = Map.empty<Nat, Product>();
  let orders = List.empty<OrderInquiry>();

  func addProduct(name : Text, category : Category, description : Text, priceIDR : Nat, priceUSD : Float, imageUrls : [Text]) {
    let product : Product = {
      id = nextProductId;
      name;
      category;
      description;
      priceIDR;
      priceUSD;
      imageUrls;
    };
    products.add(nextProductId, product);
    nextProductId += 1;
  };

  // Pre-load sample products
  addProduct(
    "Red Silk Party Saree",
    #partyWearSaree,
    "Elegant red silk saree perfect for parties.",
    500000,
    35.0,
    ["https://example.com/image1.jpg"]
  );

  addProduct(
    "Blue Bollywood Saree",
    #bollywoodSaree,
    "Stylish blue saree inspired by Bollywood fashion.",
    600000,
    42.0,
    ["https://example.com/image2.jpg"]
  );

  addProduct(
    "Green Ready-to-Wear Saree",
    #readyToWearSaree,
    "Convenient ready-to-wear green saree.",
    550000,
    38.5,
    ["https://example.com/image3.jpg"]
  );

  addProduct(
    "Golden Party Saree",
    #partyWearSaree,
    "Shimmering golden saree for special occasions.",
    750000,
    52.5,
    ["https://example.com/image4.jpg"]
  );

  addProduct(
    "Pink Bollywood Saree",
    #bollywoodSaree,
    "Vibrant pink saree with Bollywood flair.",
    650000,
    45.5,
    ["https://example.com/image5.jpg"]
  );

  addProduct(
    "Purple Ready-to-Wear Saree",
    #readyToWearSaree,
    "Beautiful purple ready-to-wear saree.",
    580000,
    40.6,
    ["https://example.com/image6.jpg"]
  );

  public query ({ caller }) func getAllProducts() : async [Product] {
    products.values().toArray().sort();
  };

  public query ({ caller }) func getProductById(id : Nat) : async Product {
    switch (products.get(id)) {
      case (null) { Runtime.trap("Product not found") };
      case (?product) { product };
    };
  };

  public query ({ caller }) func getProductsByCategory(category : Category) : async [Product] {
    products.values().toArray().filter(func(product) { product.category == category });
  };

  public shared ({ caller }) func submitOrderInquiry(customerName : Text, phoneWhatsapp : Text, productId : Nat, message : Text) : async () {
    switch (products.get(productId)) {
      case (null) { Runtime.trap("Product not found") };
      case (?_) {
        let order : OrderInquiry = {
          customerName;
          phoneWhatsapp;
          productId;
          message;
          timestamp = Time.now();
        };
        orders.add(order);
      };
    };
  };

  public query ({ caller }) func getAllOrders() : async [OrderInquiry] {
    orders.toArray();
  };
};
