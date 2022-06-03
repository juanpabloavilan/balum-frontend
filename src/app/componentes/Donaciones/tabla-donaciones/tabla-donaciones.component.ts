import { Component, OnInit } from '@angular/core';
import { DonacionService } from 'src/app/services/donacion.service';
import {Donacion} from "../../../Donacion"
import {DonacionGeneric} from "../../../DonacionGeneric"


enum ToggleTabs {NONE=0, BUSCAR=1, REGISTRAR=2, ACTUALIZAR=3}
@Component({
  selector: 'app-tabla-donaciones',
  templateUrl: './tabla-donaciones.component.html',
  styleUrls: ['./tabla-donaciones.component.css']
})
export class TablaDonacionesComponent implements OnInit {
  donacionesList : Donacion[] =[]

  donacionGeneric : DonacionGeneric= {
    idDonacion: 0,
    idDonante:0,
    idProyecto: 0,
    valor:0
  }
  toggleFormTab : ToggleTabs = ToggleTabs.NONE
  constructor(private donacionService : DonacionService) { }

  ngOnInit(): void {
    this.getAllDonaciones()
  }

  getAllDonaciones(){
    this.donacionService.getAllDonaciones().subscribe((donaciones)=> {
      console.log(donaciones);      
      this.donacionesList=donaciones
    })
  }

  toggleRegistrarDonacion(){
    this.toggleFormTab= this.toggleFormTab === ToggleTabs.REGISTRAR ? ToggleTabs.NONE: ToggleTabs.REGISTRAR
  }

  toggleBuscarDonacion(){
    this.toggleFormTab = this.toggleFormTab === ToggleTabs.BUSCAR ? ToggleTabs.NONE : ToggleTabs.BUSCAR
    

  }

  registrarDonacion(donacion : DonacionGeneric){
    this.toggleFormTab=ToggleTabs.REGISTRAR
    this.donacionGeneric.idDonacion= donacion.idDonacion
    this.donacionGeneric.idDonante = donacion.idDonante
    this.donacionGeneric.idProyecto= donacion.idProyecto
    this.donacionGeneric.valor=donacion.valor
    this.donacionService.registrarDonacion(this.donacionGeneric).subscribe(rta=> console.log(rta))
    this.donacionGeneric.idDonacion= 0
    this.donacionGeneric.idDonante = 0
    this.donacionGeneric.idProyecto= 0
    this.donacionGeneric.valor=0
    this.getAllDonaciones()
    this.toggleRegistrarDonacion()

  }


  buscarDonacion(id : number){
    this.donacionService.obtenerPerfilDeDonacion(id).subscribe((donacion)=> {
      this.donacionesList.length = 0
      this.donacionesList.push(donacion)
    })
    this.getAllDonaciones()
    this.toggleBuscarDonacion()
  }

}
