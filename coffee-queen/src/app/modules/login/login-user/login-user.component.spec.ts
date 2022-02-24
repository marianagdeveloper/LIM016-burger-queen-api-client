import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginUserComponent } from './login-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { UsersService } from 'src/app/data/services/api/users.service';
import { of } from 'rxjs';



describe('(1) Test of component LoginUserComponent', () => {
  let component: LoginUserComponent;
  let fixture: ComponentFixture<LoginUserComponent>;
  let serviceGet: UsersService;
  let httpClientSpyGet: { get: jasmine.Spy };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ LoginUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpClientSpyGet = jasmine.createSpyObj('HttpClient', ['get']);
    serviceGet = new UsersService(httpClientSpyGet as any);
  });


  it('If exist LoginUserComponent', () => {
    expect(component).toBeTruthy();
  });

  it('If LoginForm is invalid', () => {
    const email = component.loginForm.controls['email']
    email.setValue('maria@gmail.com')
    expect(component.loginForm.invalid).toBeTrue();
  });

  it('If LoginForm is Valid', () => {
    const email = component.loginForm.controls['email']
    email.setValue('maria@gmail.com')
    const password = component.loginForm.controls['password']
    password.setValue('maria')
    expect(component.loginForm.invalid).toBeFalse();
  });

  it('If button in LoginForm is click', () => {
    const email = component.loginForm.controls['email']
    email.setValue('maria@gmail.com')
    const password = component.loginForm.controls['password']
    password.setValue('maria')
    const btnElement = fixture.debugElement.query(By.css('button.btnLogin'))
    // disable
    btnElement.nativeElement.disabled = false
    // click
    btnElement.nativeElement.click()
    const testData = { user: 'checked'}
    expect(component.isCheck).toEqual(testData);
  });

  it('If button in LoginForm is not click for disable', () => {
    const email = component.loginForm.controls['email']
    email.setValue('maria@gmail.com')
    const password = component.loginForm.controls['password']
    password.setValue('maria')
    const btnElement = fixture.debugElement.query(By.css('button.btnLogin'))
    // click
    btnElement.nativeElement.click()
    const testData = undefined
    expect(component.isCheck).toEqual(testData);
  });

  // it('Should be get user ', (done: DoneFn) => {
  //   const email = component.loginForm.controls['email']
  //   email.setValue('ruben@gmail.com')
  //   const password = component.loginForm.controls['password']
  //   password.setValue('ruben')
  //   const btnElement = fixture.debugElement.query(By.css('button.btnLogin'))
  //   // disable
  //   btnElement.nativeElement.disabled = false
  //   // click
  //   btnElement.nativeElement.click()
  //   //user
  //   const mockUserResult = { id: 'Ic2O4Ip', name: 'ruben',  email: 'ruben@gmail.com',  password: 'ruben', roles: { admin: true, waiter: false, cook: false },};

  //   httpClientSpyGet.get.and.returnValue(of(mockUserResult));

  //   console.log(' component.getUserCredentials():',  component.getUserCredentials());


  //   component.getUserCredentials().subscribe(
  //     (res:any)=> console.log('ressssss:', res)

  //   );


  //   // component.userService.getAllUsers().subscribe((res: any) => {
  //   //   console.log('component.isGetUser:', component.isGetUser);
  //   //   console.log('res', res);

  //   //   expect(res).toEqual(mockUserResult);
  //   // });
  //   done()
  // });
});
