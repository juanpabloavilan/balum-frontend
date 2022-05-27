import { Component, OnInit } from '@angular/core';
import { DonacionService } from 'src/app/services/donacion.service';
import {Donacion} from "../../Donacion"

@Component({
  selector: 'app-tabla-donaciones',
  templateUrl: './tabla-donaciones.component.html',
  styleUrls: ['./tabla-donaciones.component.css']
})
export class TablaDonacionesComponent implements OnInit {
  donacionesList : Donacion[] =[]

  constructor(private donacionService : DonacionService) { }

  ngOnInit(): void {
    this.donacionService.getAllDonaciones().subscribe((donaciones)=>{
       console.log(donaciones);
       this.donacionesList = donaciones
      })
  }

}
