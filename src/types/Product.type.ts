export type { Product };
type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  availabilityStatus: string;
  images: string[];
  shippingInformation: string;
  thumbnail: string;
  brand: string;
  warrantyInformation: string;
};
