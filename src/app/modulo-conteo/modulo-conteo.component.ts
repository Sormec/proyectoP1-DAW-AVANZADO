import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormControl, FormGroup } from '@angular/forms';
import { CandidatosService } from '../servicios/candidatos.service';
import { CandidatoInterface } from '../interfaces/CandidatoInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modulo-conteo',
  templateUrl: './modulo-conteo.component.html',
  styleUrls: ['./modulo-conteo.component.css']
})
export class ModuloConteoComponent implements OnInit {
  view: [number,number] = [1000, 500];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  
  constructor(private candidatoService: CandidatosService, private sharedService: SharedService, private router: Router) {}
  
  listaCandidatos: any[] = [];

  CandidatoConsultar = new FormGroup({
    Transaccion: new FormControl()
  });

  ngOnInit(): void {
    this.obtenerGrafica();
  }

  get mostrarDatos() {
    return this.listaCandidatos;
    //return this.dataService.candidatosGrafica;
  }

  
  
  obtenerGrafica(){
    this.CandidatoConsultar.value.Transaccion = 'CONSULTA_CANDIDATO_GRAFICA';
    //envia la transaccion para que la BD le responda
    this.candidatoService.getGrafica(this.CandidatoConsultar.value as CandidatoInterface).subscribe((data:any) =>{
      //se muestra la respuesta en la pag
      this.listaCandidatos =  data;
      console.log(this.listaCandidatos);
    },
    (errorData) => (
      alert("Usuario NO autorizado"),
      this.sharedService.updateLogin(false),
      this.sharedService.updateVotar(false),
      this.sharedService.updateConteo(false),
      this.sharedService.updateMenu(true),
      this.router.navigate(['/Inicio'])
    ))
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
