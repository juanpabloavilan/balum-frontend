import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text! : string
  @Input() bgcolor! : string
  @Input() color!:string
  @Output() onEventClick : EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  clicEvent(){
    this.onEventClick.emit()
  }

}
