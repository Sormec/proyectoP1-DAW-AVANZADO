import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { UsuarioInterface } from '../interfaces/UsuarioInterface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = 'http://localhost:4033/api/Usuario/GetLogin';
  constructor(private http: HttpClient) { }

  login (user: UsuarioInterface){
    return this.http.post(this.baseUrl, user);
  }
}
