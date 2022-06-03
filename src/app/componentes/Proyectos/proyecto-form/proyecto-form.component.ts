import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProyectoGeneric } from 'src/app/ProyectoGeneric';

@Component({
  selector: 'app-proyecto-form',
  templateUrl: './proyecto-form.component.html',
  styleUrls: ['./proyecto-form.component.css']
})
export class ProyectoFormComponent implements OnInit {

  @Input() titulo!:string
  descripcion!:string
  valorObjetivo!:number;
  fechaInicio!:string;
  fechaFinal!:string;
  tipoProyecto!: string;
  responsable!: number;
  @Output() onSubmitForm : EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  emitSubmit(){
    console.log("form enviado");
    
    let proyecto : ProyectoGeneric= {
      idproyecto:0,
      descripcion: this.descripcion,
      valorObjetivo:this.valorObjetivo,
      fechaInicio:this.fechaInicio,
      fechaFinal:this.fechaFinal,
      tipoProyecto: this.tipoProyecto,
      responsable: this.responsable
    }
    this.onSubmitForm.emit(proyecto)
  }


}
