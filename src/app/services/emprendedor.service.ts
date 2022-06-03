import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Emprendedor } from '../Emprendedor';


const HttpOptions={
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true'
  })
  
}

@Injectable({
  providedIn: 'root'
})
export class EmprendedorService {
  apiURL="/api/balum/webresources/emprendedor"
  constructor(private http:HttpClient) { }

  getEmprendedores(): Observable<Emprendedor[]>{
    const url=`${this.apiURL}/getAllEmprendedores`
    let res = this.http.get<Emprendedor[]>(url, HttpOptions)  
    return res
  }

  registrarEmprendedor(emprendedor : Emprendedor){
    const url=`${this.apiURL}/registrarPerfilEmprendedor`
    let res = this.http.post<Emprendedor>(url, emprendedor)
    return res
  }

  actualizarPerfilEmprendedor(emprendedor : Emprendedor){
    const url=`${this.apiURL}/actualizarPerfilEmprendedor`
    const res = this.http.put<Emprendedor>(url, emprendedor)
    return res
  }

  obtenerPerfilDeEmprendedor(idEmprendedor : number){
    const url=`${this.apiURL}/obtenerPerfilEmprendedor/${idEmprendedor}`
    const res = this.http.get<Emprendedor>(url)
    return res

  }





}
