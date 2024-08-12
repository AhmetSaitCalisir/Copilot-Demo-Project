export type { IProduct, IProductCard };

type IProduct = {
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

type IProductCard = {
  thumbnail: string;
  title: string;
  description: string;
  id: number;
};
