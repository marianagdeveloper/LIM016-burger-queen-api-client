export interface Product {
  id: number;
  name: string;
  price: number;
  image: any;
  type?: string;
  qty?: number;
  subTotal?: number;
  dateEntry: string;
}
