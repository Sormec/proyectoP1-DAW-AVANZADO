import { Component } from '@angular/core';
import { Candidato, SharedService } from '../shared.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-modulo-votar',
  templateUrl: './modulo-votar.component.html',
  styleUrls: ['./modulo-votar.component.css']
})
export class ModuloVotarComponent {
  constructor(private sharedService: SharedService, private router: Router){}
  opcionSeleccionada: number = 0;
  puntos: number = 0; // almacena los puntos
  contador: number = 0;
  listaCandidatos: Candidato[] = [];
  // Acceder a los datos de los candidatos desde el servicio
  ngOnInit(): void {
    this.listaCandidatos = this.sharedService.getCandidatos();
  }
  //Contar 5 votos adicionales para que cuenten más en la tabla
  //hacer regresar a la pag principal
  voto(){
    /* if (this.opcionSeleccionada !== 0) {
      this.puntos++;
    } else {
      alert('Por favor, selecciona una opción primero.');
    } */
    //Solo puede ingresar si tiene menos de 3 intentos
    if (this.contador <= 2) {
      switch (this.opcionSeleccionada) {
        case 1:
          //HAY QUE MANDAR ESTA SELECCIÓN a los datos visualizados
          this.puntos++;
          this.sharedService.candidatos[0].N_votos++;
          console.log(this.sharedService.getCandidatos()[0].N_votos);
          break;
        case 2:
          this.puntos++;
          this.sharedService.candidatos[1].N_votos++;
          console.log(this.sharedService.getCandidatos()[1].N_votos);
          break;
        case 3:
          this.puntos++;
          this.sharedService.candidatos[2].N_votos++;
          console.log(this.sharedService.getCandidatos()[2].N_votos);
          break;
        case 4:
          this.puntos++;
          this.sharedService.candidatos[3].N_votos++;
          console.log(this.sharedService.getCandidatos()[3].N_votos);
          break;
        case 5:
          this.puntos++;
          this.sharedService.candidatos[4].N_votos++;
          break;
        case 6:
          this.puntos++;
          this.sharedService.candidatos[5].N_votos++;
          break;
        case 7:
          this.puntos++;
          this.sharedService.candidatos[6].N_votos++;
          break;
        case 8:
          this.puntos++;
          this.sharedService.candidatos[7].N_votos++;
          break;
        default:
          alert('Por favor, selecciona una opción primero.');
          break;
      }
    }else{
      alert('El usuario solo tiene 3 votos validos por inicio de sesión.');
    }
    this.contador++;
    this.opcionSeleccionada = 0;
  }
  //cuando se da click acciona el efecto CSS y se tiene conteo de quien es el candidato seleccionado
  seleccionarOpcion(opcion: number){
    this.opcionSeleccionada = opcion;
  }
}
