import { Component, OnInit } from '@angular/core';
import { Emprendedor } from 'src/app/Emprendedor';
import { EmprendedorService } from 'src/app/services/emprendedor.service';


enum ToggleTabs {NONE=0, BUSCAR=1, REGISTRAR=2, ACTUALIZAR=3}

@Component({
  selector: 'app-tabla-emprendedores',
  templateUrl: './tabla-emprendedores.component.html',
  styleUrls: ['./tabla-emprendedores.component.css']
})
export class TablaEmprendedoresComponent implements OnInit {
  emprendedoresList : Emprendedor[] =[]
  emprendedorGeneric : Emprendedor = {
    idEmprendedor: 0,
    nombre: "",
    correo:"",
    cedula:""
  }
  toggleFormTab : ToggleTabs = ToggleTabs.NONE

  constructor(private emprendedorService: EmprendedorService) {  }

  ngOnInit(): void {
      this.getAllEmprendedores() 
  }

  getAllEmprendedores(){
    this.emprendedorService.getEmprendedores().subscribe((emprendedores)=>{
      console.log(emprendedores); 
      this.emprendedoresList=emprendedores
    })
  }

  buscarEmprendedor(id : number){
    this.emprendedorService.obtenerPerfilDeEmprendedor(id).subscribe((emprendedor)=> {
      this.emprendedoresList.length = 0
      this.emprendedoresList.push(emprendedor)
    })

  }
  actualizarEmprendedor(emp : Emprendedor){
    this.emprendedorGeneric.nombre = emp.nombre
    this.emprendedorGeneric.correo = emp.correo
    this.emprendedorGeneric.cedula = emp.cedula
    this.emprendedorService.actualizarPerfilEmprendedor(this.emprendedorGeneric).subscribe((a)=>console.log(a))
    this.emprendedorGeneric.nombre = ""
    this.emprendedorGeneric.correo = ""
    this.emprendedorGeneric.cedula = ""
    this.emprendedorGeneric.idEmprendedor=0
    this.getAllEmprendedores()

    
    
  }
  registrarEmprendedor(emprendedor: Emprendedor){
    this.toggleFormTab=ToggleTabs.REGISTRAR
    this.emprendedorGeneric.nombre = emprendedor.nombre
    this.emprendedorGeneric.correo = emprendedor.correo
    this.emprendedorGeneric.cedula= emprendedor.cedula
    this.emprendedorService.registrarEmprendedor(this.emprendedorGeneric).subscribe(rta=> console.log(rta))
    this.emprendedorGeneric.nombre = ""
    this.emprendedorGeneric.correo = ""
    this.emprendedorGeneric.cedula = ""
    this.emprendedorGeneric.idEmprendedor=0
    this.getAllEmprendedores()

  }

  toggleBuscarEmprendedor(){
    this.toggleFormTab= this.toggleFormTab === ToggleTabs.BUSCAR ? ToggleTabs.NONE: ToggleTabs.BUSCAR

  }

  toggleActualizarEmprendedor(idEmprendedor : number){
    this.toggleFormTab=ToggleTabs.ACTUALIZAR
    this.emprendedorGeneric.idEmprendedor= idEmprendedor
    console.log(`actualizar emp ${idEmprendedor}`);
    
  }

  toggleRegistrarEmprendedor(){
    this.toggleFormTab= this.toggleFormTab === ToggleTabs.REGISTRAR ? ToggleTabs.NONE: ToggleTabs.REGISTRAR
  }

}
