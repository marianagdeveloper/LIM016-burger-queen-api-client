import { Product } from '../../../shared/components/card/card-product/card-product.metadata';

export interface Order {
  _id: string;
  userId?: string;
  client: string;
  products: ProductsOrders[];
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
export interface ProductsOrders {
      qty: number,
      subTotal: number,
      productId: Product
}

//
export interface OrderRecive {
  _id: string;
  userId: string;
  client: string;
  products: ProductsOrdersRecive[];
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
export interface ProductsOrdersRecive {
    qty: number,
    subTotal: number,
    product: ProductRecive
}

export interface ProductRecive {
  _id: string,
  name: string,
  price: number,
  image: string,
  type: string,
  dateEntry: string,
  messageCard?: string
}

//
export interface OrderPrueba {
  _id: string;
  userId: string;
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
  dateCanceled:string;
  additional: string;
}
