import { Product } from '../../../shared/components/card/card-product/card-product.metadata';

export interface Order {
  id: number;
  userName: string;
  client: string;
  products: Product[];
  total: number;
  totalQty: number;
  numberTable: string;
  status: string;
  dateEntry: any;
  dateDelivering: any;
  dateDone: any;
  timeResult: any;
  dateProcessed: any;
  additional: string;
}
