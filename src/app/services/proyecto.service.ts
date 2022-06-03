import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from '../Proyecto';
import { ProyectoGeneric } from '../ProyectoGeneric';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  apiURL = "/api/balum/webresources/proyecto"

  constructor(private http : HttpClient) { }

  getAllProyectos() : Observable<Proyecto[]>{
    const url = `${this.apiURL}/getAllProyectos`
    return this.http.get<Proyecto[]>(url)
  }

  buscarProyecto(id : number): Observable<Proyecto>{
    const url = `${this.apiURL}/obtenerProyecto/${id}`
    return this.http.get<Proyecto>(url)
  }

  actualizarProyecto(proyectoGeneric : ProyectoGeneric): Observable<Proyecto>{
    const url = `${this.apiURL}/actualizarProyecto`
    return this.http.put<Proyecto>(url, proyectoGeneric)
  }

  crearProyecto(proyectoGeneric : ProyectoGeneric){
    const url = `${this.apiURL}/crearProyecto`
    return this.http.post<Proyecto>(url, proyectoGeneric)
  }


}
