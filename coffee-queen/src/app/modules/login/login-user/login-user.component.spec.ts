import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginUserComponent } from './login-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';



describe('(1) Test of component LoginUserComponent', () => {
  let component: LoginUserComponent;
  let fixture: ComponentFixture<LoginUserComponent>;

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
  });


  it('If exist LoginUserComponent', () => {
    expect(component).toBeTruthy();
  });

  it('If LoginForm is invalid', () => {
    const email = component.loginForm.controls['email']
    email.setValue('maria@gmail.com')
    expect(component.loginForm.invalid).toBeTrue();
  });

  it('If LoginForm is valid', () => {
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
    const btnElement = fixture.debugElement.query(By.css('button'))

    // disable
    btnElement.nativeElement.disabled = false
    // click
    btnElement.nativeElement.click()

    const testData = {user:1}

    expect(component.isCheck).toEqual(testData);
  });

//   it('should test if submit button is enabled when the form is valid',() => {
//     fixture.detectChanges();
//     fixture.whenStable().then( () => {
//       component.loginForm.controls['email'].setValue("test@test.com");
//       component.loginForm.controls['password'].setValue("123456789");
//     })
//    expect(submitEl.nativeElement.disabled).toBeFalsy();
// });
});
