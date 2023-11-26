import { SharedService } from '../shared.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
}) 
export class LoginComponent { constructor(public dialog: MatDialog, private sharedService: SharedService, private router: Router){}
  
  openDialog() {
    this.dialog.open(DialogMensajeComponent);
  } 
  //metodo para validar el ingreso del usuario
  login(form: NgForm) {
    let cedula = form.value.cedula;
    let password = form.value.password;
    if (cedula === 2927741249 && password === 'A1234') {
      this.sharedService.updateLogin(false);
      this.sharedService.updateMenu(true);
      this.sharedService.setEmail(form.value.email);
      this.router.navigate(['/Inicio']);
    }
  }
  
  limpiar(form: NgForm){
    form.resetForm();
  }
}

@Component({
  selector: 'dialog-mensaje',
  templateUrl: 'mensaje-generic.html',
})
export class DialogMensajeComponent{}