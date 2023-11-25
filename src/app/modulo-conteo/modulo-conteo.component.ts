import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { DataGraficaService } from './data-grafica.service';

@Component({
  selector: 'app-modulo-conteo',
  templateUrl: './modulo-conteo.component.html',
  styleUrls: ['./modulo-conteo.component.css']
})
export class ModuloConteoComponent {
  view: [number,number] = [700, 500];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  
  constructor(private sharedService: SharedService, private dataService: DataGraficaService) {}
  
  get mostrarDatos() {
    return this.dataService.candidatosGrafica;
  }

  

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  } 
}
