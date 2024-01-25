import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CandidatosService } from '../servicios/candidatos.service';
import { CandidatoInterface } from '../interfaces/CandidatoInterface';

@Component({
  selector: 'app-modulo-votar',
  templateUrl: './modulo-votar.component.html',
  styleUrls: ['./modulo-votar.component.css']
})
export class ModuloVotarComponent implements OnInit{
  constructor(private sharedService: SharedService,
    private candidatoService: CandidatosService, private router: Router){}
  opcionSeleccionada: number = 9;
  contador: number = 0;
  listaCandidatos: any[] = [];
  isVotar: boolean = true;

  ngOnInit(): void {
    this.mostrarCadidatoTodos();
    this.sharedService.isVotar$.subscribe(isVotar =>{
      this.isVotar = isVotar;
    })
  }
  //solo para 'CONSULTA_CANDIDATO_ALL'
  CandidatoConsultar = new FormGroup({
    Transaccion: new FormControl()
  })
  //solo para 'CONTAR_VOTO'
  CandidatoVotar = new FormGroup({
    Id: new FormControl(),
    Transaccion: new FormControl()
  })
    
  mostrarCadidatoTodos(){
    this.CandidatoConsultar.value.Transaccion = 'CONSULTA_CANDIDATO_ALL';
    //envia la transaccion para que la BD le responda
    this.candidatoService.getCandidatos(this.CandidatoConsultar.value as CandidatoInterface).subscribe((data:any) =>{
      //se muestra la respuesta en la pag
      console.log(data);
      this.listaCandidatos = data;
    },
    (errorData) => (
      alert("Usuario NO autorizado"),
      this.sharedService.updateInicio(),
      this.router.navigate(['/Inicio'])
    ))
  }
  
  voto(){
    //VALIDAR EL VOTO ASI: LA VARIABLE CONTADOR QUE SEA EN UNA CLASE SERVICE PARA QUE SOLO SE PUEDA VOTAR UNA VEZ 
    if (this.contador == 0) {
      switch (this.opcionSeleccionada) {
        case 0:
          this.CandidatoVotar.value.Id = 1;
          break;
        case 1:
          this.CandidatoVotar.value.Id = 2;
          break;
        case 2:
          this.CandidatoVotar.value.Id = 3;
          break;
         case 3:
          this.CandidatoVotar.value.Id = 4;
          break;
        case 4:
          this.CandidatoVotar.value.Id = 5;
          break;
        case 5:
          this.CandidatoVotar.value.Id = 6;
          break;
        case 6:
          this.CandidatoVotar.value.Id = 7;
          break;
        case 7:
          this.CandidatoVotar.value.Id = 8;
          break; 
        default:
          alert('Por favor, selecciona una opción primero.');
          break;
      }
      this.CandidatoVotar.value.Transaccion = 'CONTAR_VOTO';
      //envia la transaccion para que la BD le responda
      this.candidatoService.setVoto(this.CandidatoVotar.value as CandidatoInterface).subscribe((data:any) =>{
        console.log(data);
        alert (data[0].leyenda);
        this.sharedService.updateInicio(),
        this.router.navigate(['/Inicio'])
      },
      (errorData) => (
        alert("Usuario NO autorizado"),
        this.sharedService.updateInicio(),
        this.router.navigate(['/Inicio'])
      ))
      this.contador++;
    } else{
      alert('El usuario solo tiene Un voto valido por inicio de sesión.');
    }
    
    this.opcionSeleccionada = 9;
  }
  //cuando se da click acciona el efecto CSS y se tiene conteo de quien es el candidato seleccionado
  seleccionarOpcion(opcion: number){
    this.opcionSeleccionada = opcion;
  }
}
