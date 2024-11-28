import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SharedService{
    private isLoggedIn = new BehaviorSubject<boolean>(true);
    isLoggedIn$ = this.isLoggedIn.asObservable();
    public userEmail:string ='';
    
    private isMenu = new BehaviorSubject<boolean>(false);
    isMenu$ = this.isMenu.asObservable();
    
    private isVotar = new BehaviorSubject<boolean>(false);
    isVotar$ = this.isVotar.asObservable();
    
    private isConteo = new BehaviorSubject<boolean>(false);
    isConteo$ = this.isConteo.asObservable();
    
    //actualiza el texto de inicio del header
    updateLogin(isLoggedInVariable : boolean){
        this.isLoggedIn.next(isLoggedInVariable);
    }
    //actualiza el header con el modulo de votacion
    updateVotar(isVotarVar : boolean){
        this.isVotar.next(isVotarVar);
    }
    
    updateMenu(isMenuVar : boolean){
        this.isMenu.next(isMenuVar);
    }
    
    updateConteo(isConteoVar : boolean) {
        this.isConteo.next(isConteoVar);
    }
    //set y get del email
    setEmail(email:string){
        this.userEmail = email;
    }
    getEmail(){
        return this.userEmail;
    }
    //actualizar variables para la pag de Inicio
    updateInicio(){
        this.updateLogin(false);
        this.updateVotar(false);
        this.updateConteo(false);
        this.updateMenu(true);
    }
    
}

