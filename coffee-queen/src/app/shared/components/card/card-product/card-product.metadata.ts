export interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  type: string;
  dateEntry: string;
  messageCard?: string;
  qty?: number;
  subTotal?: number;
}

export interface Products {
  qty: number;
  subTotal: number;
  product: Product;
}
