import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SharedService{
    private isLoggedIn = new BehaviorSubject<boolean>(false);
    isLoggedIn$ = this.isLoggedIn.asObservable();
    public userEmail:string ='';
    
    private isModulo = new BehaviorSubject<boolean>(false);
    isModulo$ = this.isModulo.asObservable();
    
    private DATAcandidatos: Candidato[] = [
      {ID: 1, Presidente: "Yaku Pérez", Vicepresidente: "Nory Pinela", PartidoPolitico: "Claro que se puede", N_votos: 5},
      {ID: 2, Presidente: "Daniel Noboa", Vicepresidente: "Verónica Abad", PartidoPolitico: "ADN", N_votos: 5},
      {ID: 3, Presidente: "Luisa Gonzáles", Vicepresidente: "Andrés Arauz", PartidoPolitico: "RC", N_votos: 5},
      {ID: 4, Presidente: "Jan Topic", Vicepresidente: "Diana Jácome", PartidoPolitico: "Por un país sin miedo", N_votos: 5},
      {ID: 5, Presidente: "Otto Sonnenholzner", Vicepresidente: "Érika Paredes", PartidoPolitico: "SUMA y Avanza", N_votos: 5},
      {ID: 6, Presidente: "Bolívar Armijos", Vicepresidente: "Linda Romero", PartidoPolitico: "Amigo", N_votos: 5},
      {ID: 7, Presidente: "Fernando Villavivencio", Vicepresidente: "Andrea Gonzáles", PartidoPolitico: "Construye", N_votos: 5},
      {ID: 8, Presidente: "Xavier Hervas", Vicepresidente: "Luz Marina Vega", PartidoPolitico: "RETO", N_votos: 5},
    ];
    
    setVoto(id:number){
      switch (id) {
        case 1:
          this.DATAcandidatos[0].N_votos++;
          break;
        case 2:
          this.DATAcandidatos[1].N_votos++;
          break;
        case 3:
          this.DATAcandidatos[2].N_votos++;
          break;
        case 4:
          this.DATAcandidatos[3].N_votos++;
          break;
        case 5:
          this.DATAcandidatos[4].N_votos++;
          break;
        case 6:
          this.DATAcandidatos[5].N_votos++;
          break;
        case 7:
          this.DATAcandidatos[6].N_votos++;
          break;
        case 8:
          this.DATAcandidatos[7].N_votos++;
          break;
        default:
          console.log('ERROR: En función "setVotar"');
          break;
      }
    } 
    getCandidatos(): Candidato[] {
        return this.DATAcandidatos;
    }

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

export interface Candidato {
    ID: number;
    Presidente: string;
    Vicepresidente: string;
    PartidoPolitico: string;
    N_votos: number; 
}
