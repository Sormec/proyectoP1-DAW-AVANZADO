import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { MatButtonModule } from '@angular/material/button';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatTable} from '@angular/material/table';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';

export interface PeriodicElement {
  nombre: string;
  position: number;
  cedula: number;
  provincia: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nombre: 'Alejandro Montalvan', cedula: 405678912, provincia: 'Pichincha'},
  {position: 2, nombre: 'Mario Mendoza', cedula: 123456977, provincia: 'Loja'},
  {position: 3, nombre: 'Julio Matovelle', cedula: 175456321, provincia: 'Orellana'},
  {position: 4, nombre: 'Esteban Borja', cedula: 157987235, provincia: 'Galapagos'},
  {position: 5, nombre: 'Julieta Venegas', cedula: 164789654, provincia: 'El Oro'},
  {position: 6, nombre: 'Aly Montero', cedula: 203654784, provincia: 'Bolivar'},
];

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css'],
})

export class PaginaInicialComponent {
  constructor(private router: Router, private sharedService: SharedService){};

  displayedColumns: string[] = ['position', 'nombre', 'cedula', 'provincia'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  //metodo para filtrar
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  //metodo para redirigir al modulo para votar
  goVotar(){
    this.sharedService.updateModulo(true);
    this.router.navigate(['/modulo-votacion']);
  }
}
