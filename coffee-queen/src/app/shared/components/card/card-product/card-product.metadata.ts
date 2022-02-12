export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
  qty: number;
  subTotal?: number;
  dateEntry: string;
}
