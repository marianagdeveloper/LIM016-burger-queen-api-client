import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/data/services/api/users.service';
import { User } from './user-control.metadata';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-user-control',
  templateUrl: './user-control.component.html',
  styleUrls: ['./user-control.component.scss'],
})
export class UserControlComponent implements OnInit {
  public users!: User[];
  public newUser: User = {
    id: '',
    name: '',
    email: '',
    password: '',
    roles: {
      admin: false,
      cook: false,
      waiter: false,
    },
    avatar: '',
  };

  public arrayRole: string[] = [];
  public nameUser: string = '';
  public emailUser: string = '';
  public optionSelected: string = '';
  public optionSelectedRole: string = '';
  public nameUserUpdate: string = '';
  public emailUserUpdate: string = '';
  public passwordUserUpdate: string = '';
  public passwordUser: string = '';
  public selecte: any;
  public htmlStr: string = '';
  closeResult = '';
  comment = '';
  setcomment = '';
  public UserForm!: FormGroup;
  constructor(
    public userService: UsersService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data: any) => {
      this.users = data;
    });
    this.arrayRole = ['Jefe de cocina', 'Mesero', 'Administrador'];
    this.optionSelected = 'Seleccione Rol';
  }

  capturar(user: any) {
    if (user.roles.admin == true) {
      this.optionSelectedRole = 'Administrador';
    }
    if (user.roles.cook == true) {
      this.optionSelectedRole = 'Jefe de cocina';
    }
    if (user.roles.waiter == true) {
      this.optionSelectedRole = 'Mesero';
    }
    this.nameUserUpdate = user.name;
    this.emailUserUpdate = user.email;
    this.passwordUserUpdate = user.password;
  }
  updateUser(updateUser: any) {
    updateUser.name = this.nameUserUpdate;
    updateUser.email = this.emailUserUpdate;
    updateUser.password = this.passwordUserUpdate;

    switch (this.optionSelectedRole) {
      case 'Jefe de cocina':
        updateUser.roles = { admin: false, waiter: false, cook: true };
        updateUser.avatar = '../../assets/cook-avatar.png';
        break;
      case 'Mesero':
        updateUser.roles = { admin: false, waiter: true, cook: false };
        updateUser.avatar = '../../assets/mesero-avatar.png';
        break;
      case 'Administrador':
        updateUser.roles = { admin: true, waiter: false, cook: false };
        updateUser.avatar = '../../assets/admin-avatar.png';
        break;
    }
    console.log(updateUser);
    this.userService.putUser(updateUser, updateUser.id).subscribe();
  }

  addUser() {
    this.newUser={ id: '',
    name: '',
    email: '',
    password: '',
    roles: {
      admin: false,
      cook: false,
      waiter: false,
    },
    avatar: '',}
    this.newUser.name = this.nameUser;
    this.newUser.email = this.emailUser;
    this.newUser.password = this.passwordUser;
    switch (this.optionSelected) {
      case 'Jefe de cocina':
        this.newUser.roles = { admin: false, waiter: false, cook: true };
        this.newUser.avatar = '../../assets/cook-avatar.png';
        break;
      case 'Mesero':
        this.newUser.roles = { admin: false, waiter: true, cook: false };
        this.newUser.avatar = '../../assets/mesero-avatar.png';
        break;
      case 'Administrador':
        this.newUser.roles = { admin: true, waiter: false, cook: false };
        this.newUser.avatar = '../../assets/admin-avatar.png';
        break;
    }
    this.userService.postUser(this.newUser).subscribe()
    this.users.push(this.newUser);
    this.cleanUserForm();
  }
  deleteUser(idUser: string) {
    this.userService.deleteUser(idUser).subscribe();
    const data = this.users.filter((item: any) => item.id != idUser);
    this.users = data;
  }
  cleanUserForm() {
    this.nameUser = '';
    this.emailUser = '';
    this.passwordUser = '';
    this.optionSelected = 'Seleccione Rol';
  }
  open(content: any) {
    this.modalService
      .open(content, {
        ariaLabelledBy: 'modal-basic-title',
        windowClass: 'custom-class',
        scrollable: true,
        backdrop: false,
        keyboard: false,
      })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
          this.setcomment = this.comment;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
/*   campoEsValido(inputForm: string) {
    return (
      this.UserForm.controls[inputForm].dirty &&
      this.UserForm.hasError('required', inputForm)
    );
  }

  get campoEmail(): { [key: string]: AbstractControl } {
    return this.UserForm.controls;
  }
  limpiar() {
    this.htmlStr = '';
  }
   */

//dentro del ngoninit
/*  this.UserForm = this.formBuilder.group({
      inputEmail: ['', [Validators.required, Validators.email]],
      inputName: ['', Validators.required],
      inputPassword: ['', Validators.required],
      selectRole: ['Seleccione Rol', Validators.required],
    }); */
