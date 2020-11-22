import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import {map} from 'rxjs/operators';

/********Componentes  inicio*/
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { BodyComponent } from './Components/body/body.component';


import { DatosComponent } from './Components/body/datos/datos.component';
import { BarraSocialComponent } from './Components/body/datos/barra-social/barra-social.component';
/********Componentes fin*/

/********Servicios  inicio*/
import { PaisesService } from './servicios/paisesservices/paises.service';
import { PeruService } from './servicios/peruservices/peru.service';
import { PostService } from './servicios/postservices/post.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/********Servicios  fin*/
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DatosComponent,
    FooterComponent,
    BarraSocialComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule

  ],
  providers: [PaisesService,
              PeruService,
              PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
