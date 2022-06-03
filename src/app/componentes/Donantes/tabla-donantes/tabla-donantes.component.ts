import { Component, OnInit } from '@angular/core';
import { Donante } from 'src/app/Donante';
import { DonanteService } from 'src/app/services/donante.service';

enum ToggleTabs {NONE=0, BUSCAR=1, REGISTRAR=2, ACTUALIZAR=3}

@Component({
  selector: 'app-tabla-donantes',
  templateUrl: './tabla-donantes.component.html',
  styleUrls: ['./tabla-donantes.component.css']
})
export class TablaDonantesComponent implements OnInit {

  donantesList: Donante[]=[]
  donanteGeneric : Donante = {
    iddonante: 0,
    nombre: "",
    correo:"",
    cedula:""
  }
  toggleFormTab : ToggleTabs = ToggleTabs.NONE
  constructor(private donanteService : DonanteService) { }

  ngOnInit(): void {
    this.getAllDonantes()
  }

  getAllDonantes(){
    this.donanteService.getAllDonantes().subscribe((donantes)=> {
      console.log(donantes);      
      this.donantesList=donantes
    })
  }

  toggleRegistrarDonante(){
    this.toggleFormTab= this.toggleFormTab === ToggleTabs.REGISTRAR ? ToggleTabs.NONE: ToggleTabs.REGISTRAR
  }

  toggleBuscarDonante(){
    this.toggleFormTab = this.toggleFormTab === ToggleTabs.BUSCAR ? ToggleTabs.NONE : ToggleTabs.BUSCAR

  }

  registrarDonante(donante : Donante){
    this.toggleFormTab=ToggleTabs.REGISTRAR
    this.donanteGeneric.nombre = donante.nombre
    this.donanteGeneric.correo = donante.correo
    this.donanteGeneric.cedula= donante.cedula
    this.donanteService.registrarDonante(this.donanteGeneric).subscribe(rta=> console.log(rta))
    this.donanteGeneric.nombre = ""
    this.donanteGeneric.correo = ""
    this.donanteGeneric.cedula = ""
    this.donanteGeneric.iddonante=0
    this.getAllDonantes()

  }

  actualizarDonante(donante : Donante){
    this.donanteGeneric.nombre = donante.nombre
    this.donanteGeneric.correo = donante.correo
    this.donanteGeneric.cedula = donante.cedula
    this.donanteService.actualizarPerfilDonante(this.donanteGeneric).subscribe((a)=>console.log(a))
    this.donanteGeneric.nombre = ""
    this.donanteGeneric.correo = ""
    this.donanteGeneric.cedula = ""
    this.donanteGeneric.iddonante=0
    this.getAllDonantes()

  }

  buscarDonante(id : number){
    this.donanteService.obtenerPerfilDeDonante(id).subscribe((donante)=> {
      this.donantesList.length = 0
      this.donantesList.push(donante)
    })
  }

  toggleActualizarDonante(iddonante : number){
    this.toggleFormTab=ToggleTabs.ACTUALIZAR
    this.donanteGeneric.iddonante= iddonante
    console.log(`actualizar donante ${iddonante}`);
  }




}
