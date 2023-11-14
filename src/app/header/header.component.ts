import { Component, OnInit} from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isLoggedIn: boolean = false;
  isModulo: boolean = false;
  email: string = '';
  constructor(private sharedService:SharedService, private router:Router){}

  ngOnInit(){
    this.sharedService.isLoggedIn$.subscribe(isLoggedIn =>{
      this.isLoggedIn = isLoggedIn;
      /* hasta aquí me quede: ¿Como logro que siempre que regrese al menu, cambie de header? */

      this.email = this.sharedService.getEmail();
    })
    this.sharedService.isModulo$.subscribe(isModulo =>{
      this.isModulo = isModulo;
    })
  }

  logOut(){
    this.router.navigate(['']);
    this.sharedService.logout();
  }
  goMenu(){
    this.router.navigate(['/Inicio']);
    this.sharedService.gomenu();
  }
}
