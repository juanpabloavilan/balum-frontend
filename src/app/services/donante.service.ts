import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Donante } from '../Donante';

@Injectable({
  providedIn: 'root'
})
export class DonanteService {
  apiURL="/api/balum/webresources/donante"

  constructor(private http:HttpClient) { }

  getAllDonantes(): Observable<Donante[]>{
    const path = `${this.apiURL}/getAllDonantes/`
    return this.http.get<Donante[]>(path)
  }

  registrarDonante(donante : Donante){
    const url=`${this.apiURL}/registrarPerfilDonante`
    let res = this.http.post<Donante>(url, donante)
    return res
  }

  actualizarPerfilDonante(donante : Donante){
    const url=`${this.apiURL}/actualizarPerfilDonante`
    const res = this.http.put<Donante>(url, donante)
    return res
  }

  obtenerPerfilDeDonante(idDonante : number){
    const url=`${this.apiURL}/obtenerPerfilDonante/${idDonante}`
    const res = this.http.get<Donante>(url)
    return res
  }


}
