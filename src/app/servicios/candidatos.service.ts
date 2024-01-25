import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CandidatoInterface } from '../interfaces/CandidatoInterface';

@Injectable({
  providedIn: 'root'
})
export class CandidatosService {
  baseUrlGetCandidatos: string = 'https://localhost:7271/api/Candidato/GetCandidatoAll';
  baseUrlGetGafica: string = 'https://localhost:7271/api/Candidato/GetDataGrafica';
  baseUrlSetVoto: string = 'https://localhost:7271/api/Candidato/SetCandidato';
  constructor(private http: HttpClient) { }
  
  getCandidatos(candidatos: CandidatoInterface){
    let auth_token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Const_type': 'application/json',
      'Authorization': `bearer ${auth_token}`//se ingresa el token en el cuerpo de la consulta
    })
    return this.http.post(this.baseUrlGetCandidatos, candidatos, {headers: header});
  }

  getGrafica(candidatos: CandidatoInterface){
    let auth_token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Const_type': 'application/json',
      'Authorization': `bearer ${auth_token}`//se ingresa el token en el cuerpo de la consulta
    })
    return this.http.post(this.baseUrlGetGafica, candidatos, {headers: header});
  }

  setVoto(candidatos: CandidatoInterface){
    let auth_token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Const_type': 'application/json',
      'Authorization': `bearer ${auth_token}`//se ingresa el token en el cuerpo de la consulta
    })
    return this.http.post(this.baseUrlSetVoto, candidatos, {headers: header});
  }
}
