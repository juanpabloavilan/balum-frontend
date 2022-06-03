import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Donacion } from '../Donacion';
import { DonacionGeneric } from '../DonacionGeneric';

@Injectable({
  providedIn: 'root'
})
export class DonacionService {
  apiURL = "/api/balum/webresources/donar";

  constructor(private http: HttpClient) { }

  getAllDonaciones() {
    const path =  `${this.apiURL}/getAllDonaciones/`
    return this.http.get<Donacion []>(path)
  }

  registrarDonacion(donacion : DonacionGeneric){
    const url=`${this.apiURL}/donarDinero`
    let res = this.http.post<Donacion>(url, donacion)
    return res
  }

  obtenerPerfilDeDonacion(idDonacion : number){
    const url=`${this.apiURL}/obtenerPerfilDonacion/${idDonacion}`
    const res = this.http.get<Donacion>(url)
    return res
  }


}
