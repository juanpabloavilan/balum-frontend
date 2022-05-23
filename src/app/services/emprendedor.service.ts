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
  apiURL="http://localhost:8080/competitors/getAll"


  constructor(private http:HttpClient) { }

  getEmprendedores(): Observable<Emprendedor[]>{
    const url=`${this.apiURL}`
    let res = this.http.get<Emprendedor[]>(url, HttpOptions)
    console.log(res);    
    return res
    
  }

}
