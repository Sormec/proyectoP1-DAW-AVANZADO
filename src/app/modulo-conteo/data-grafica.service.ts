import { Injectable } from '@angular/core';
import { SharedService } from '../shared.service';

@Injectable({
  providedIn: 'root'
})
export class DataGraficaService {
  constructor (){ this.actualizarData() }
  //arreglo con todos los datos de la interface Candidado
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
  //metodo que actualiza los datos para que se visualicen los cambios
  actualizarData(){
    this.data = this.DATAcandidatos.map(candidato => ({
      name: candidato.Presidente,
      value: candidato.N_votos
    }));
  }
  //arreglo con los datos que va a usar la grafica
  private data = [
    {
      name: this.DATAcandidatos[0].Presidente,
      value: this.DATAcandidatos[0].N_votos
    },
    {
      name: this.DATAcandidatos[1].Presidente,
      value: this.DATAcandidatos[1].N_votos
    },
    {
      name: this.DATAcandidatos[2].Presidente,
      value: this.DATAcandidatos[2].N_votos
    },
    {
      name: this.DATAcandidatos[3].Presidente,
      value: this.DATAcandidatos[3].N_votos
    },
    {
      name: this.DATAcandidatos[4].Presidente,
      value: this.DATAcandidatos[4].N_votos
    },
    {
      name: this.DATAcandidatos[5].Presidente,
      value: this.DATAcandidatos[5].N_votos
    },
    {
      name: this.DATAcandidatos[6].Presidente,
      value: this.DATAcandidatos[6].N_votos
    },
    {
      name: this.DATAcandidatos[7].Presidente,
      value: this.DATAcandidatos[7].N_votos
    },
  ]
  
  get candidatosGrafica() {
    return this.data;
  }
  //cada voto equivale a 10
  setVoto(opcion: number){
    switch (opcion) {
      case 0:
        this.getCandidatos[0].N_votos = this.getCandidatos[0].N_votos + 10;
        console.log(this.DATAcandidatos[0].N_votos);
        break;
      case 1:
        this.getCandidatos[1].N_votos = this.getCandidatos[1].N_votos + 10;
        console.log(this.DATAcandidatos[1].N_votos);
        break;
      case 2:
        this.getCandidatos[2].N_votos =this.getCandidatos[2].N_votos + 10;
        console.log(this.DATAcandidatos[2].N_votos);
        break;
      case 3:
        this.getCandidatos[3].N_votos = this.getCandidatos[3].N_votos + 10;
        console.log(this.DATAcandidatos[3].N_votos);
        break;
      case 4:
        this.getCandidatos[4].N_votos = this.getCandidatos[4].N_votos + 10;
        console.log(this.DATAcandidatos[4].N_votos);
        break;
      case 5:
        this.getCandidatos[5].N_votos = this.getCandidatos[5].N_votos + 10;
        console.log(this.DATAcandidatos[5].N_votos);
        break;
      case 6:
        this.getCandidatos[6].N_votos = this.getCandidatos[6].N_votos + 10;
        console.log(this.DATAcandidatos[6].N_votos);
        break;
      case 7:
        this.getCandidatos[7].N_votos = this.getCandidatos[7].N_votos + 10;
        console.log(this.DATAcandidatos[7].N_votos);
        break;
      default:
        console.log('ERROR: En función set (setVoto)');
        break; 
    }
    this.actualizarData();
  }

  get getCandidatos(): Candidato[] {
    return this.DATAcandidatos;
  }
}


export interface Candidato {
  ID: number;
  Presidente: string;
  Vicepresidente: string;
  PartidoPolitico: string;
  N_votos: number; 
}
