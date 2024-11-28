import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { MatButtonModule } from '@angular/material/button';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatTable} from '@angular/material/table';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';
import { DataGraficaService } from '../modulo-conteo/data-grafica.service';



@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css'],
})

export class PaginaInicialComponent {
  constructor(private router: Router, private sharedService: SharedService, private dataService: DataGraficaService){};
  
  mostrar(){
    return this.dataService.candidatosGrafica;
  }
  //metodo para redirigir al modulo para votar
  goVotar(){
    this.sharedService.updateMenu(false);
    this.sharedService.updateLogin(false);
    this.sharedService.updateConteo(false);
    this.sharedService.updateVotar(true);
    this.router.navigate(['/modulo-votacion']);
  }
  //metodo para redirigir al modulo de Conteo
  goConteo(){
    this.sharedService.updateMenu(false);
    this.sharedService.updateVotar(false);
    this.sharedService.updateLogin(false);
    this.sharedService.updateConteo(true);
    this.router.navigate(['/modulo-conteo']);
  }
}