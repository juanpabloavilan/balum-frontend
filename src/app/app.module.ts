import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HttpHeaders} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { TablaProyectosComponent } from './componentes/tabla-proyectos/tabla-proyectos.component';
import { TablaDonantesComponent } from './componentes/tabla-donantes/tabla-donantes.component';
import { TablaEmprendedoresComponent } from './componentes/tabla-emprendedores/tabla-emprendedores.component';
import { TablaDonacionesComponent } from './componentes/tabla-donaciones/tabla-donaciones.component';
import { MainComponent } from './componentes/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TablaProyectosComponent,
    TablaDonantesComponent,
    TablaEmprendedoresComponent,
    TablaDonacionesComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
