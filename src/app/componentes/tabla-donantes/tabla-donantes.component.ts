import { Component, OnInit } from '@angular/core';
import { Donante } from 'src/app/Donante';
import { DonanteService } from 'src/app/services/donante.service';

@Component({
  selector: 'app-tabla-donantes',
  templateUrl: './tabla-donantes.component.html',
  styleUrls: ['./tabla-donantes.component.css']
})
export class TablaDonantesComponent implements OnInit {

  donantesList: Donante[]=[]
  constructor(private donanteService : DonanteService) { }

  ngOnInit(): void {
    this.donanteService.getAllDonantes().subscribe((donantes)=> {
      console.log(donantes);      
      this.donantesList=donantes
    })
  }

}
