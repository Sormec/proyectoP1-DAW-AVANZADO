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
  /* isVotar: boolean = true; */
  isVotar: boolean = true;
  
  ngOnInit(): void {
    this.listaCandidatos = this.dataService.getCandidatos;

    this.sharedService.isVotar$.subscribe(isVotar =>{
      this.isVotar = isVotar;
    })
  }
  
  voto(){
    //Solo puede ingresar si tiene menos de 3 intentos
    if (this.contador <= 2) {
      switch (this.opcionSeleccionada) {
        case 0:
          this.puntos++;
          this.dataService.setVoto(0);
          break;
        case 1:
          this.puntos++;
          this.dataService.setVoto(1);
          break;
        case 2:
          this.puntos++;
          this.dataService.setVoto(2);
          break;
         case 3:
          this.puntos++;
          this.dataService.setVoto(3);
          break;
        case 4:
          this.puntos++;
          this.dataService.setVoto(4);
          break;
        case 5:
          this.puntos++;
          this.dataService.setVoto(5);
          break;
        case 6:
          this.puntos++;
          this.dataService.setVoto(6);
          break;
        case 7:
          this.puntos++;
          this.dataService.setVoto(7);
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
