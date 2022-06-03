import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Donante } from 'src/app/Donante';

@Component({
  selector: 'app-donante-form',
  templateUrl: './donante-form.component.html',
  styleUrls: ['./donante-form.component.css']
})
export class DonanteFormComponent implements OnInit {

  @Input() titulo!:string
  idDonante: number =0
  nombre!:string
  correo!: string
  cedula! : string
  @Output() onSubmitForm : EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  emitSubmit(){
    let donante : Donante= {
      "iddonante": this.idDonante,
      "nombre":this.nombre,
      "correo":this.correo,
      "cedula": this.cedula
    }
    this.onSubmitForm.emit(donante)
  }

}
