import { Component } from '@angular/core';

interface DatosIngreso {
  correo: string,
  contrasenia: string,
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  usuario: DatosIngreso = {
    correo: "",
    contrasenia: "",
  }

  ingresar(){
    console.log( this.usuario );
  }

}
