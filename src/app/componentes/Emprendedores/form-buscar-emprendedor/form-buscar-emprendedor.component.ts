import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form-buscar-emprendedor',
  templateUrl: './form-buscar-emprendedor.component.html',
  styleUrls: ['./form-buscar-emprendedor.component.css']
})
export class FormBuscarEmprendedorComponent implements OnInit {
  faMagnifyingGlass=faMagnifyingGlass
  id!:number
  @Input() titulo! : string
  @Output() onSubmitBuscar : EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  emitSubmit(){
    if(!this.id) return
    this.onSubmitBuscar.emit(this.id)
  }

}
