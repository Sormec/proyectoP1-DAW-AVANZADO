import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    constructor () {}
    private isLoggedIn = new BehaviorSubject<boolean>(false);
    isLoggedIn$ = this.isLoggedIn.asObservable();
    public userEmail:string ='';
    
    private isModulo = new BehaviorSubject<boolean>(false);
    isModulo$ = this.isModulo.asObservable();
    
    updateHeader(isLoggedInVariable : boolean){
        this.isLoggedIn.next(isLoggedInVariable);
    }
    //para actualizar el header con el modulo de votacion
    updateModulo(isModuloVar : boolean){
        this.isModulo.next(isModuloVar);
    }
    //Actualizar el login
    updateLogin(isLoggedInVariable : boolean){
        this.isLoggedIn.next(isLoggedInVariable);
    }
    //para actualizar el header y volver a estado inicial
    logout() { this.updateHeader(false); }
    gomenu() { this.updateModulo(false); }
    //set y get del email
    setEmail(email:string){
        this.userEmail = email;
    }
    getEmail(){
        return this.userEmail;
    }
}