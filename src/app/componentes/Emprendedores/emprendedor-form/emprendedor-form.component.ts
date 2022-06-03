import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Emprendedor } from 'src/app/Emprendedor';


@Component({
  selector: 'app-emprendedor-form',
  templateUrl: './emprendedor-form.component.html',
  styleUrls: ['./emprendedor-form.component.css']
})
export class EmprendedorFormComponent implements OnInit {
  @Input() titulo!:string
  idEmprendedor: number =0
  nombre!:string
  correo!: string
  cedula! : string
  @Output() onSubmitForm : EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  emitSubmit(){
    let emprendedor : Emprendedor= {
      "idEmprendedor": this.idEmprendedor,
      "nombre":this.nombre,
      "correo":this.correo,
      "cedula": this.cedula
    }
    this.onSubmitForm.emit(emprendedor)
  }

}
