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
    
    candidatos: Candidato[] = DATAcandidatos;
    /* setVoto(id:number){
        switch (id) {
            case 1:
              this.candidatos[0].N_votos++;
              break;
             case 2:
              this.candidatos[1].N_votos++;
              break;
            case 3:
              this.candidatos[2].N_votos++;
              break;
            case 4:
              this.candidatos[3].N_votos++;
              break;
            case 5:
              this.candidatos[4].N_votos++;
              break;
            case 6:
              this.candidatos[5].N_votos++;
              break;
            case 7:
              this.candidatos[6].N_votos++;
              break;
            case 8:
              this.candidatos[7].N_votos++;
              break;
            default:
              console.log('ERROR: En función "setVotar"');
              break;
          }

    } */
    getCandidatos(): Candidato[] {
        return this.candidatos;
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
const DATAcandidatos: Candidato[] = [
    {ID: 1, Presidente: "Yaku Pérez", Vicepresidente: "Nory Pinela", PartidoPolitico: "Claro que se puede", N_votos: 5},
    {ID: 2, Presidente: "Daniel Noboa", Vicepresidente: "Verónica Abad", PartidoPolitico: "ADN", N_votos: 5},
    {ID: 3, Presidente: "Luisa Gonzáles", Vicepresidente: "Andrés Arauz", PartidoPolitico: "RC", N_votos: 5},
    {ID: 4, Presidente: "Jan Topic", Vicepresidente: "Diana Jácome", PartidoPolitico: "Por un país sin miedo", N_votos: 5},
    {ID: 5, Presidente: "Otto Sonnenholzner", Vicepresidente: "Érika Paredes", PartidoPolitico: "SUMA y Avanza", N_votos: 5},
    {ID: 6, Presidente: "Bolívar Armijos", Vicepresidente: "Linda Romero", PartidoPolitico: "Amigo", N_votos: 5},
    {ID: 7, Presidente: "Fernando Villavivencio", Vicepresidente: "Andrea Gonzáles", PartidoPolitico: "Construye", N_votos: 5},
    {ID: 8, Presidente: "Xavier Hervas", Vicepresidente: "Luz Marina Vega", PartidoPolitico: "RETO", N_votos: 5},
];