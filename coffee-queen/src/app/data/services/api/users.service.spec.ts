import { of } from 'rxjs';

import { UsersService } from './users.service';

describe('(2) Test of Service UsersService', () => {
  let service: UsersService;
  let servicePut: UsersService;
  let serviceDelete: UsersService;
  let serviceGet: UsersService;
  let httpClientSpy: { post: jasmine.Spy };
  let httpClientSpyPut: { put: jasmine.Spy };
  let httpClientSpyDelete: { delete: jasmine.Spy };
  let httpClientSpyGet: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    httpClientSpyPut = jasmine.createSpyObj('HttpClient', ['put']);
    httpClientSpyDelete = jasmine.createSpyObj('HttpClient', ['delete']);
    httpClientSpyGet = jasmine.createSpyObj('HttpClient', ['get']);
    service = new UsersService(httpClientSpy as any);
    servicePut = new UsersService(httpClientSpyPut as any);
    serviceDelete = new UsersService(httpClientSpyDelete as any);
    serviceGet = new UsersService(httpClientSpyGet as any);
  });

  it('Should be created service', () => {
    expect(service).toBeTruthy();
  });

  it('Should be created new user', (done: DoneFn) => {
    const mockUserCredentials = {
      id: '',
      name: 'ruben',
      email: 'ruben@gmail.com',
      password: 'ruben',
      roles: { admin: true, waiter: false, cook: false },
    };
    const mockUserResult = {
      id: 'Ic2O4Ip',
      name: 'ruben',
      email: 'ruben@gmail.com',
      password: 'ruben',
      roles: { admin: true, waiter: false, cook: false },
    };
    httpClientSpy.post.and.returnValue(of(mockUserResult));
    service.postUser(mockUserCredentials).subscribe((res: any) => {
      expect(res).toEqual(mockUserResult);
    });
    done();
  });

  it('Should be edit user', (done: DoneFn) => {
    const mockUserCredentials = {
      id: 'Ic2O4Ip',
      name: 'ruben',
      email: 'ruben@gmail.com',
      password: 'ruben',
      roles: { admin: true, waiter: false, cook: false },
    };
    const mockUserResult = {
      id: 'Ic2O4Ip',
      name: 'ruben',
      email: 'ruben@gmail.com',
      password: 'ruben',
      roles: { admin: true, waiter: false, cook: false },
    };
    httpClientSpyPut.put.and.returnValue(of(mockUserResult));
    servicePut.putUser(mockUserCredentials, mockUserCredentials.id).subscribe((res: any) => {
      expect(res).toEqual(mockUserResult);
    });
    done();
  });

  it('Should be delete user', (done: DoneFn) => {
    const mockUserCredentials = 'Ic2O4Ip';
    const mockUserResult = { };
    httpClientSpyDelete.delete.and.returnValue(of(mockUserResult));
    serviceDelete.deleteUser(mockUserCredentials).subscribe((res: any) => {
      expect(res).toEqual(mockUserResult);
    });
    done();
  });

  it('Should be get users', (done: DoneFn) => {

    const mockUserResult = {
      id: 'Ic2O4Ip',
      name: 'ruben',
      email: 'ruben@gmail.com',
      password: 'ruben',
      roles: { admin: true, waiter: false, cook: false },
    };
    httpClientSpyGet.get.and.returnValue(of(mockUserResult));
    serviceGet.getAllUsers().subscribe((res: any) => {
      expect(res).toEqual(mockUserResult);
    });
    done();
  });
});
