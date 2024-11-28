import { SharedService } from '../shared.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { UsuarioInterface } from '../interfaces/UsuarioInterface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
}) 
export class LoginComponent {
  constructor(private service: AuthService, public dialog: MatDialog, private sharedService: SharedService, private router: Router){}

  usuarioLogin = new FormGroup({
    Cedula: new FormControl('',Validators.required),   
    Password: new FormControl('',Validators.required),
    Transaccion: new FormControl()
  }) 
  tmpCedula: any;
  //metodo para validar el ingreso del usuario
  login(form: NgForm) {
    this.usuarioLogin.value.Transaccion ='CONSULTA_USUARIO_LOGIN';
    this.usuarioLogin.value.Cedula = form.value.Cedula;
    this.usuarioLogin.value.Password = form.value.Password;
    console.log(this.usuarioLogin.value.Cedula);
    this.tmpCedula = this.usuarioLogin.value.Cedula;
    //envia los datos al API como si fuera 'UsuarioInterface'
    this.service.login(this.usuarioLogin.value as UsuarioInterface).subscribe((data:any)=>{
      console.log(data);//imprime el token por consola
      if (data !== null){//si las credenciales son correctas no devolvera null
        localStorage.setItem('userName',this.tmpCedula);
        localStorage.setItem('token_value',data);
        this.sharedService.updateLogin(false);
        this.sharedService.updateMenu(true);
        this.router.navigate(['/Inicio']);
      }else{//si las credenciales son incorrectas devolvera null
        alert("Usuario o Contraseña invalidos");
        this.sharedService.updateMenu(false);
        this.sharedService.updateVotar(false);
        this.sharedService.updateConteo(false);
        this.sharedService.updateLogin(true);
        this.limpiar(form);
        this.router.navigate([''])
      }
    },
    (errorData) => (
     console.log('ERROR CON LA BD: ' + errorData) 
    ))
  }
  
  limpiar(form: NgForm){
    form.resetForm();
  }
}