import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { DataGraficaService } from '../modulo-conteo/data-grafica.service';

@Component({
  selector: 'app-modulo-votar',
  templateUrl: './modulo-votar.component.html',
  styleUrls: ['./modulo-votar.component.css']
})
export class ModuloVotarComponent {
  constructor(private sharedService: SharedService, private dataService: DataGraficaService){}
  opcionSeleccionada: number = 9;
  puntos: number = 0; // almacena los puntos
  contador: number = 0;
  listaCandidatos: any[] = [];
  
  ngOnInit(): void {
    this.listaCandidatos = this.dataService.getCandidatos;
  }
  
  voto(){
    //Solo puede ingresar si tiene menos de 3 intentos
    if (this.contador <= 2) {
      switch (this.opcionSeleccionada) {
        case 0:
          this.puntos++;
          this.dataService.setVoto(0);
          console.log(this.dataService.getCandidatos[0].N_votos);
          break;
        case 1:
          this.puntos++;
          this.dataService.setVoto(1);
          console.log(this.dataService.getCandidatos[1].N_votos);
          break;
        case 2:
          this.puntos++;
          this.dataService.setVoto(2);
          console.log(this.dataService.getCandidatos[2].N_votos);
          break;
         case 3:
          this.puntos++;
          this.dataService.setVoto(3);
          console.log(this.dataService.getCandidatos[3].N_votos);
          break;
        case 4:
          this.puntos++;
          this.dataService.setVoto(4);
          console.log(this.dataService.getCandidatos[4].N_votos);
          break;
        case 5:
          this.puntos++;
          this.dataService.setVoto(5);
          console.log(this.dataService.getCandidatos[5].N_votos);
          break;
        case 6:
          this.puntos++;
          this.dataService.setVoto(6);
          console.log(this.dataService.getCandidatos[6].N_votos);
          break;
        case 7:
          this.puntos++;
          this.dataService.setVoto(7);
          console.log(this.dataService.getCandidatos[7].N_votos);
          break; 
        default:
          alert('Por favor, selecciona una opción primero.');
          break;
      }
    }else{
      alert('El usuario solo tiene 3 votos validos por inicio de sesión.');
    }
    this.contador++;
    this.opcionSeleccionada = 9;
  }
  //cuando se da click acciona el efecto CSS y se tiene conteo de quien es el candidato seleccionado
  seleccionarOpcion(opcion: number){
    this.opcionSeleccionada = opcion;
  }
}
