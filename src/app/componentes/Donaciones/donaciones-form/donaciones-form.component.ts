import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import { Donacion } from 'src/app/Donacion';
import { Donante } from 'src/app/Donante';
import { Proyecto } from 'src/app/Proyecto';
@Component({
  selector: 'app-donaciones-form',
  templateUrl: './donaciones-form.component.html',
  styleUrls: ['./donaciones-form.component.css']
})
export class DonacionesFormComponent implements OnInit {

  @Input() titulo!:string
  idDonacion: number =0
  idDonante!: Donante
  idProyecto!: Proyecto
  valor! : number
  @Output() onSubmitForm : EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  emitSubmit(){
    let donacion : Donacion= {
      "idDonacion": this.idDonacion,
      "idDonante":this.idDonante,
      "idProyecto":this.idProyecto,
      "valor": this.valor
    }
    this.onSubmitForm.emit(donacion)
  }

}
