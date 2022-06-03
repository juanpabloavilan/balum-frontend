import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buscar-form',
  templateUrl: './buscar-form.component.html',
  styleUrls: ['./buscar-form.component.css']
})
export class BuscarFormComponent implements OnInit {
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
