import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LandingComponent } from './views/layout/landing/landing.component';
import { TrayectoriaComponent } from './views/layout/trayectoria/trayectoria.component';
import { ProyectosComponent } from './views/layout/proyectos/proyectos.component';
import { FooterComponent } from './views/components/footer/footer.component';
import { AptitudesComponent } from './views/layout/aptitudes/aptitudes.component';
import { ContactoComponent } from './views/layout/contacto/contacto.component';
import { ModalProyectosComponent } from './views/modals/modal-proyectos/modal-proyectos.component';
import { TrapezoideComponent } from './views/components/trapezoide/trapezoide.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TrayectoriaComponent,
    ProyectosComponent,
    FooterComponent,
    AptitudesComponent,
    ContactoComponent,
    ModalProyectosComponent,
    TrapezoideComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }