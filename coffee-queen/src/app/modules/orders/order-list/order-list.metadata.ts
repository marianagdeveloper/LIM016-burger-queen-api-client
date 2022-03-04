import { Products } from 'src/app/shared/components/card/card-product/card-product.metadata';

export interface Order {
  _id: string,
  userId: string;
  client: string;
  products: Products[];
  total: number;
  totalQty: number;
  numberTable: string;
  status: string;
  dateEntry: string;
  dateDelivering: string;
  dateDone: string;
  timeResult: string;
  dateProcessed: string;
  dateCanceled:string;
  additional: string;
}


