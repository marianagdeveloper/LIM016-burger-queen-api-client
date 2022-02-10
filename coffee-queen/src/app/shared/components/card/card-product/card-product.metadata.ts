export interface ICardProduct {
   id: number;
  name: string;
  price: number;
  image: string;
  type: string;
  qty: number;
  subTotal?: number;
  dateEntry: string;
}
