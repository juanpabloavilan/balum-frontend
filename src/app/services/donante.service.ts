import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Donante } from '../Donante';

@Injectable({
  providedIn: 'root'
})
export class DonanteService {
  APIURL="/api/balum/webresources/donante"
  constructor(private http:HttpClient) { }

  getAllDonantes(): Observable<Donante[]>{
    const path = `${this.APIURL}/getAllDonantes/`
    return this.http.get<Donante[]>(path)
  }
}
