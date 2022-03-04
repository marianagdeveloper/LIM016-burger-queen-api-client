import { of } from 'rxjs';

import { OrdersService } from './orders.service';

describe('(3) Test of Service OrdersService', () => {
  let serviceGet: OrdersService;
  let httpClientSpyGet: { get: jasmine.Spy };
  let servicePost: OrdersService;
  let httpClientSpyPost: { post: jasmine.Spy };
  let servicePut: OrdersService;
  let httpClientSpyPut: { put: jasmine.Spy };

  beforeEach(() => {
    httpClientSpyGet = jasmine.createSpyObj('HttpClient', ['get']);
    serviceGet = new OrdersService(httpClientSpyGet as any);
    httpClientSpyPost = jasmine.createSpyObj('HttpClient', ['post']);
    servicePost = new OrdersService(httpClientSpyPost as any);
    httpClientSpyPut = jasmine.createSpyObj('HttpClient', ['put']);
    servicePut = new OrdersService(httpClientSpyPut as any);
  });

  it('Should be created service', () => {
    expect(serviceGet).toBeTruthy();
  });

  it('Should be get orders', (done: DoneFn) => {

    const mockOrderResult =
      {
        "_id": "6",
        "userId": "Manuel Guerrero",
        "client": "Mauricio",
        "products": [{
          "qty": 1,
          "subTotal": 12,
          "product": {
            "_id": "4",
            "name": "Jugo de frutas natural",
            "price": 12,
            "image": "../../assets/images/Jugo de frutas natural.png",
            "type": "juices",
            "dateEntry": "21/01/2022 09:24:00",
          }
        }

        ],
        "total": 12,
        "totalQty": 1,
        "numberTable": "2",
        "status": "canceled",
        "dateEntry": "Wed Feb 23 2022 11:14:36 GMT-0500 (hora estándar de Perú)",
        "dateDelivering": "Wed Feb 23 2022 11:14:46 GMT-0500 (hora estándar de Perú)",
        "dateDone": "",
        "timeResult": "",
        "dateProcessed": "",
        "dateCanceled": "Wed Feb 23 2022 11:19:41 GMT-0500 (hora estándar de Perú)",
        "additional": ""
    };
    httpClientSpyGet.get.and.returnValue(of(mockOrderResult));
    serviceGet.getOrder().subscribe((res: any) => {
      expect(res).toEqual(mockOrderResult);
    });
    done();
  });

  it('Should be create orders', (done: DoneFn) => {
    const mockOrderResult =
      {
        "_id": "6",
        "userId": "Manuel Guerrero",
        "client": "Mauricio",
        "products": [{
          "qty": 1,
          "subTotal": 12,
          "product": {
            "_id": "4",
            "name": "Jugo de frutas natural",
            "price": 12,
            "image": "../../assets/images/Jugo de frutas natural.png",
            "type": "juices",
            "dateEntry": "21/01/2022 09:24:00",
          }
        }],
        "total": 12,
        "totalQty": 1,
        "numberTable": "2",
        "status": "pending",
        "dateEntry": "Wed Feb 23 2022 11:14:36 GMT-0500 (hora estándar de Perú)",
        "dateDelivering": "Wed Feb 23 2022 11:14:46 GMT-0500 (hora estándar de Perú)",
        "dateDone": "",
        "timeResult": "",
        "dateProcessed": "",
        "dateCanceled": "Wed Feb 23 2022 11:19:41 GMT-0500 (hora estándar de Perú)",
        "additional": ""
    };
    httpClientSpyPost.post.and.returnValue(of(mockOrderResult));
    servicePost.postOrder(mockOrderResult).subscribe((res: any) => {
      expect(res).toEqual(mockOrderResult);
    });
    done();
  });

  it('Should be change status of orders', (done: DoneFn) => {
    const mockOrderStatus =
    {
      "_id": "6",
      "userId": "Manuel Guerrero",
      "client": "Mauricio",
      "products": [{
        "qty": 1,
        "subTotal": 12,
        "product": {
          "_id": "4",
          "name": "Jugo de frutas natural",
          "price": 12,
          "image": "../../assets/images/Jugo de frutas natural.png",
          "type": "juices",
          "dateEntry": "21/01/2022 09:24:00",
        }
      }],
      "total": 12,
      "totalQty": 1,
      "numberTable": "2",
      "status": "pending",
      "dateEntry": "Wed Feb 23 2022 11:14:36 GMT-0500 (hora estándar de Perú)",
      "dateDelivering": "Wed Feb 23 2022 11:14:46 GMT-0500 (hora estándar de Perú)",
      "dateDone": "",
      "timeResult": "",
      "dateProcessed": "",
      "dateCanceled": "Wed Feb 23 2022 11:19:41 GMT-0500 (hora estándar de Perú)",
      "additional": ""
  };
    const mockOrderStatusResult =
      {
        "_id": "6",
        "userId": "Manuel Guerrero",
        "client": "Mauricio",
        "products": [{
          "qty": 1,
          "subTotal": 12,
          "product": {
            "_id": "4",
            "name": "Jugo de frutas natural",
            "price": 12,
            "image": "../../assets/images/Jugo de frutas natural.png",
            "type": "juices",
            "dateEntry": "21/01/2022 09:24:00",
          }
        }

        ],
        "total": 12,
        "totalQty": 1,
        "numberTable": "2",
        "status": "canceled",
        "dateEntry": "Wed Feb 23 2022 11:14:36 GMT-0500 (hora estándar de Perú)",
        "dateDelivering": "Wed Feb 23 2022 11:14:46 GMT-0500 (hora estándar de Perú)",
        "dateDone": "",
        "timeResult": "",
        "dateProcessed": "",
        "dateCanceled": "Wed Feb 23 2022 11:19:41 GMT-0500 (hora estándar de Perú)",
        "additional": ""
    };
    httpClientSpyPut.put.and.returnValue(of(mockOrderStatusResult));
    servicePut.putOrder(mockOrderStatus, mockOrderStatus._id).subscribe((res: any) => {
      expect(res).toEqual(mockOrderStatusResult);
    });
    done();
  });
});
