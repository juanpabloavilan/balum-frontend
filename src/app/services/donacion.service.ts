import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Donacion } from '../Donacion';

@Injectable({
  providedIn: 'root'
})
export class DonacionService {
  apiUrl = "/api/balum/webresources/donar";

  constructor(private http: HttpClient) { }

  getAllDonaciones() {
    const path =  `${this.apiUrl}/getAllDonaciones/`
    return this.http.get<Donacion []>(path)
  }
}
