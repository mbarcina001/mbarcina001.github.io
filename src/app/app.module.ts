import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { TrayectoriaComponent } from './trayectoria/trayectoria.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';
import { AptitudesComponent } from './aptitudes/aptitudes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TrayectoriaComponent,
    ProyectosComponent,
    FooterComponent,
    AptitudesComponent,
    ContactoComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
