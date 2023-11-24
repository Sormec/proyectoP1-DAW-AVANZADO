import { Injectable } from '@angular/core';
import { SharedService } from '../shared.service';

@Injectable({
  providedIn: 'root'
})
export class DataGraficaService {
  constructor (){}
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
  //arreglo con los datos que va a usar la grafica
  //NO ESTA LEYENDO BIEN LA GRAFICA
  private data = [
    {
      name: this.getCandidatos[0].Presidente,
      value: this.getCandidatos[0].N_votos
    },
    {
      name: this.getCandidatos[1].Presidente,
      value: this.getCandidatos[1].N_votos
    },
    {
      name: this.getCandidatos[2].Presidente,
      value: this.getCandidatos[2].N_votos
    },
    {
      name: this.getCandidatos[3].Presidente,
      value: this.getCandidatos[3].N_votos
    },
    {
      name: this.getCandidatos[4].Presidente,
      value: this.getCandidatos[4].N_votos
    },
    {
      name: this.getCandidatos[5].Presidente,
      value: this.getCandidatos[5].N_votos
    },
    {
      name: this.getCandidatos[6].Presidente,
      value: this.getCandidatos[6].N_votos
    },
    {
      name: this.getCandidatos[7].Presidente,
      value: this.getCandidatos[7].N_votos
    },
  ]

  candidatosGrafica() {
    return this.data;
  }
  //cada voto equivale a 10
  setVoto(opcion: number){
    switch (opcion) {
      case 0:
        this.DATAcandidatos[0].N_votos = this.getCandidatos[0].N_votos + 10;
        console.log(this.DATAcandidatos[0].N_votos);
        break;
      case 1:
        this.DATAcandidatos[1].N_votos = this.getCandidatos[1].N_votos + 10;
        console.log(this.DATAcandidatos[1].N_votos);
        break;
      case 2:
        this.DATAcandidatos[2].N_votos = this.getCandidatos[2].N_votos + 10;
        console.log(this.DATAcandidatos[2].N_votos);
        break;
      case 3:
        this.DATAcandidatos[3].N_votos = this.getCandidatos[3].N_votos + 10;
        console.log(this.DATAcandidatos[3].N_votos);
        break;
      case 4:
        this.DATAcandidatos[4].N_votos = this.getCandidatos[4].N_votos + 10;
        console.log(this.DATAcandidatos[4].N_votos);
        break;
      case 5:
        this.DATAcandidatos[5].N_votos = this.getCandidatos[5].N_votos + 10;
        console.log(this.DATAcandidatos[5].N_votos);
        break;
      case 6:
        this.DATAcandidatos[6].N_votos = this.getCandidatos[6].N_votos + 10;
        console.log(this.DATAcandidatos[6].N_votos);
        break;
      case 7:
        this.DATAcandidatos[7].N_votos = this.getCandidatos[7].N_votos + 10;
        console.log(this.DATAcandidatos[7].N_votos);
        break;
      default:
        console.log('ERROR: En función set (setVoto)');
        break;
    }
  }
  get getCandidatos(){
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
