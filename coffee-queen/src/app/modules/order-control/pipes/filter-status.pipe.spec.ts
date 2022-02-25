import { FilterStatusPipe } from './filter-status.pipe';
const dataOrder = [{
  "id": 1,
  "userName": "Maria",
  "client": "Juanita",
  "products": [
    {
      "id": 2,
      "name": "Café con leche",
      "price": 15,
      "image": "../../assets/images/cafe_leche.png",
      "type": "cafes",
      "dateEntry": "21/01/2022 09:24:00",
      "qty": 2,
      "subTotal": 30
    }
  ],
  "total": 30,
  "totalQty": 2,
  "numberTable": "1",
  "status": "delivered",
  "dateEntry": "Sun Feb 20 2022 17:59:36 GMT-0500 (hora estándar de Colombia)",
  "dateDelivering": "Sun Feb 20 2022 18:00:27 GMT-0500 (hora estándar de Colombia)",
  "dateDone": "Sun Feb 20 2022 18:01:14 GMT-0500 (hora estándar de Colombia)",
  "timeResult": "00:00:47",
  "dateProcessed": "Sun Feb 20 2022 18:01:50 GMT-0500 (hora estándar de Colombia)",
  "dateCanceled": "",
  "additional": ""
}];

describe('FilterStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterStatusPipe();
    expect(pipe).toBeTruthy();
  });

  it('Should be return the status filter', () => {
    const pipe = new FilterStatusPipe();

    const result = pipe.transform(dataOrder,'delivered')
    expect(result).toEqual(dataOrder);
  });

});
