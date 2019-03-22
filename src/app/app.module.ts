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

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ErrorCampoComponent } from './views/components/errorcampo/error-campo.component';

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
    TrapezoideComponent,
    ErrorCampoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }