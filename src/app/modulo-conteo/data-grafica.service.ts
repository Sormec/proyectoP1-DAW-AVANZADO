import { Injectable } from '@angular/core';
import { SharedService } from '../shared.service';

@Injectable({
  providedIn: 'root'
})
export class DataGraficaService {
  constructor (private sharedService: SharedService){}
  private data = [
    {
      "name": this.sharedService.getCandidatos()[0].Presidente,
      "value": this.sharedService.getCandidatos()[0].N_votos
    },
    {
      "name": this.sharedService.getCandidatos()[1].Presidente,
      "value": this.sharedService.getCandidatos()[1].N_votos
    },
    {
      "name": this.sharedService.getCandidatos()[2].Presidente,
      "value": this.sharedService.getCandidatos()[2].N_votos
    },
    {
      "name": this.sharedService.getCandidatos()[3].Presidente,
      "value": this.sharedService.getCandidatos()[3].N_votos
    },
    {
      "name": this.sharedService.getCandidatos()[4].Presidente,
      "value": this.sharedService.getCandidatos()[4].N_votos
    },
    {
      "name": this.sharedService.getCandidatos()[5].Presidente,
      "value": this.sharedService.getCandidatos()[5].N_votos
    },
    {
      "name": this.sharedService.getCandidatos()[6].Presidente,
      "value": this.sharedService.getCandidatos()[6].N_votos
    },
    {
      "name": this.sharedService.getCandidatos()[7].Presidente,
      "value": this.sharedService.getCandidatos()[7].N_votos
    },
  ]

  get candidatosData() {
    return this.data;
  }

  set setVoto(num: number){

  }
}
