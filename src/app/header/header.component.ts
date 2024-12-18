import { Component, OnInit} from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isLoggedIn: boolean = true;
  isMenu: boolean = false;
  isVotar: boolean = false;
  isConteo: boolean = false;
  email: string = '';



  constructor(private sharedService:SharedService, private router:Router){}

  ngOnInit(){
    this.sharedService.isLoggedIn$.subscribe(isLoggedIn =>{
      this.isLoggedIn = isLoggedIn;
      this.email = this.sharedService.getEmail();
    })
    
    this.sharedService.isMenu$.subscribe(isMenu =>{
      this.isMenu = isMenu;
    })

    this.sharedService.isVotar$.subscribe(isVotar =>{
      this.isVotar = isVotar;
    })
    
    this.sharedService.isConteo$.subscribe(isConteo =>{
      this.isConteo = isConteo;
    })
    
  }

  logOut(){
    this.sharedService.updateMenu(false);
    this.sharedService.updateVotar(false);
    this.sharedService.updateConteo(false);
    this.sharedService.updateLogin(true);
    this.router.navigate(['']);
  }
  goMenu(){
    this.sharedService.updateLogin(false);
    this.sharedService.updateVotar(false);
    this.sharedService.updateConteo(false);
    this.sharedService.updateMenu(true);
    this.router.navigate(['/Inicio']);
  }
  goVotar(){
    this.sharedService.updateConteo(false);
    this.sharedService.updateMenu(false);
    this.sharedService.updateLogin(false);
    this.sharedService.updateVotar(true);
    this.router.navigate(['/modulo-votacion']);
  }
  goConteo(){
    this.sharedService.updateLogin(false);
    this.sharedService.updateMenu(false);
    this.sharedService.updateVotar(false);
    this.sharedService.updateConteo(true);
    this.router.navigate(['/modulo-conteo']);
  }

}
