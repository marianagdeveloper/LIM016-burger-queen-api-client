export interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  type: string;
  qty: number;
  subTotal: number;
  dateEntry: string;
  messageCard?: string;
}
