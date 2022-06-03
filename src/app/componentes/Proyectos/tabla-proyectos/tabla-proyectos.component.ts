import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/Proyecto';
import { ProyectoGeneric } from 'src/app/ProyectoGeneric';
import { ProyectoService } from 'src/app/services/proyecto.service';

enum ToggleTabs{NONE=0, BUSCAR=1, REGISTRAR=2, ACTUALIZAR=3}

@Component({
  selector: 'app-tabla-proyectos',
  templateUrl: './tabla-proyectos.component.html',
  styleUrls: ['./tabla-proyectos.component.css']
})
export class TablaProyectosComponent implements OnInit {

  listaProyectos : Proyecto[]=[]
  proyectoGeneric : ProyectoGeneric ={
    idproyecto: 0,
    descripcion:"",
    valorObjetivo: 0,
    fechaInicio:"",
    fechaFinal:"",
    tipoProyecto: "",
    responsable: 0
  }

  toggleFormTab : ToggleTabs = ToggleTabs.NONE

  constructor(private proyectoService : ProyectoService) {   }

  ngOnInit(): void {
    this.getAllProyectos()
  }

  getAllProyectos(){
    this.proyectoService.getAllProyectos().subscribe(proyectos =>{
      this.listaProyectos=proyectos
      console.log(proyectos);
      
    })

  }

  registrarProyecto(proyecto : ProyectoGeneric){
    this.proyectoService.crearProyecto(proyecto).subscribe(rta => console.log(rta))
    this.getAllProyectos()
    this.toggleRegistrarProyecto()
  }

  actualizarProyecto(proyecto: ProyectoGeneric){
    this.proyectoService.actualizarProyecto(proyecto).subscribe(rta => console.log(rta))
    this.getAllProyectos()
    this.toggleActualizarProyecto(0)
  }

  buscarProyecto(id : number){
    this.proyectoService.buscarProyecto(id).subscribe((proyecto)=>{
      this.listaProyectos.length =0
      this.listaProyectos.push(proyecto)
    })
    this.toggleBuscarProyecto()
  }

  toggleRegistrarProyecto(){
    this.toggleFormTab = this.toggleFormTab === ToggleTabs.REGISTRAR ? ToggleTabs.NONE : ToggleTabs.REGISTRAR
    console.log("registrar proyecto");
    
  }

  toggleActualizarProyecto(id : number ){
    this.proyectoGeneric.idproyecto = id
    console.log(`actualizar proy ${this.proyectoGeneric.idproyecto} `);    
    this.toggleFormTab= this.toggleFormTab === ToggleTabs.ACTUALIZAR ? ToggleTabs.NONE : ToggleTabs.ACTUALIZAR
  }

  toggleBuscarProyecto( ){
    this.toggleFormTab= this.toggleFormTab === ToggleTabs.BUSCAR ? ToggleTabs.NONE : ToggleTabs.BUSCAR

  }

  

  

}
