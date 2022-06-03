import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HttpHeaders} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select'
import {MatButtonModule} from '@angular/material/button'
import {MatChipsModule} from '@angular/material/chips'
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { TablaProyectosComponent } from './componentes/Proyectos/tabla-proyectos/tabla-proyectos.component';
import { TablaDonantesComponent } from './componentes/Donantes/tabla-donantes/tabla-donantes.component';
import { TablaEmprendedoresComponent } from './componentes/Emprendedores/tabla-emprendedores/tabla-emprendedores.component';
import { TablaDonacionesComponent } from './componentes/Donaciones/tabla-donaciones/tabla-donaciones.component';
import { MainComponent } from './componentes/main/main.component';
import { ButtonComponent } from './button/button.component';
import { EmprendedorFormComponent } from './componentes/Emprendedores/emprendedor-form/emprendedor-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuscarEmprendedorComponent } from './componentes/Emprendedores/form-buscar-emprendedor/form-buscar-emprendedor.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DonanteFormComponent } from './componentes/Donantes/donante-form/donante-form.component';
import { BuscarFormComponent } from './buscar-form/buscar-form.component';
import { DonacionesFormComponent } from './componentes/Donaciones/donaciones-form/donaciones-form.component';
import { ProyectoFormComponent } from './componentes/Proyectos/proyecto-form/proyecto-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TablaProyectosComponent,
    TablaDonantesComponent,
    TablaEmprendedoresComponent,
    TablaDonacionesComponent,
    MainComponent,
    ButtonComponent,
    EmprendedorFormComponent,
    FormBuscarEmprendedorComponent,
    DonanteFormComponent,
    BuscarFormComponent,
    DonacionesFormComponent,
    ProyectoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatChipsModule,
    FontAwesomeModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
