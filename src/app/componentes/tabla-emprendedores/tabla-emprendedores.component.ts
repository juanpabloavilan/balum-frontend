import { Component, OnInit } from '@angular/core';
import { Emprendedor } from 'src/app/Emprendedor';
import { EmprendedorService } from 'src/app/services/emprendedor.service';

@Component({
  selector: 'app-tabla-emprendedores',
  templateUrl: './tabla-emprendedores.component.html',
  styleUrls: ['./tabla-emprendedores.component.css']
})
export class TablaEmprendedoresComponent implements OnInit {
  emprendedoresList : Emprendedor[] =[]
  constructor(private emprendedorService: EmprendedorService) {  }

  ngOnInit(): void {
    this.emprendedorService.getEmprendedores().subscribe((emprendedores)=> this.emprendedoresList=emprendedores)
  }

}
