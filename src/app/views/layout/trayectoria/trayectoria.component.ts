import { Component } from '@angular/core';
import { Trayectoria } from '../../../models/trayectoria';

@Component({
  selector: 'app-trayectoria',
  templateUrl: './trayectoria.component.html',
  styleUrls: ['./trayectoria.component.scss']
})
export class TrayectoriaComponent {

  nombreSeccion:string = "Trayectoria";

  listaTrayectorias:Trayectoria[]=[
    new Trayectoria(
      "UPV/EHU",
      "Grado en Ingeniería Informática de Gestión y Sistemas de Información",
      "2011-2016",
      `<p>Durante la carrera desarrollé gran parte de mis aptitudes actuales. Aprendí diversos lenguajes de programación (ADA, JAVA y Python), 
      programación web (HTML5, CSS3, JavaScript, JSP, etc) así como diseño y administración de bases de datos (MySQL). También desarrollé 
      ciertas aptitudes en Tecnología Artifical y Minería de datos, siendo este último el campo en el que basé mi Trabajo de Fin de Grado 
      titulado "Aprendizaje semisupervisado: Una aplicación en la detección de entidades médicas".</p>
      <p> Además de lo enseñado en la carrera también aprendí por mi cuenta otros lenguajes de programación que me resultaban interesantes 
      como AngularJS, React, Ruby y Spring entre otros.</p>`,
      "/Portfolio/assets/images/logos/ehu.png"
    ),
    new Trayectoria(
      "Informática de Euskadi",
      "Programador",
      "2017-2018",
      `<p>Además del matenimiento de los proyectos ya existentes dedicados a ofrecer servicio a Caixabank Consumer Finance y basados 
      en Java y Struts, estuve involucrado principalmente en 2 proyectos:</p>
      <ul>
        <li><b>Minisite de MediaMarkt:</b> Realizado en Java y Struts se trata de una aplicación web dedicada a la contratación de la tarjeta 
        MediaMarkt Club Card. Incluye servicios REST así como una estructura multimarca diseñada especificamente con el objetivo de poder 
        alojar otras marcas (Gas natural, Ventajon, etc) de modo que tuviesen un diseño propio y unos pasos para realizar la solicitud 
        a elección del cliente.</li>
        <li><b>Digitalización TCF:</b> Aplicación web implementada en Angular4 para la compra de dispositivos móviles financiados por Telefónica 
        Consumer Finance. Este desarrollo cuenta con un Middleware programado en Java que hace las llamadas correspondientes a los 
        servicios que sirven de apoyo a la aplicación. Dicho Middleware expone los servicios necesarios en REST para que puedan ser 
        invocados desde el código Angular4 y realiza diferentes llamadas a servicios empleando Axis, Jaxb y Soap con cabecera de 
        seguridad y firma entre otros.</li>
      </ul>
      <p>Por otra parte, hice otros proyectos de menor envergadura con otros lenguajes de programación como Spring, así como diferentes 
      plugins de Java como Selenium</p>`,
      "/Portfolio/assets/images/logos/ide.png"
    ),
    new Trayectoria(
      "Getronics",
      "Programador",
      "2019-Actualidad",
      `<p>En Getronics me he incorporado al proyecto FMS (Field Management Services). En este proyecto estamos implementando una aplicación 
      multiplataforma para Android, iOS y navegador mediante Angular 6, Ionic 3 y Cordova.</p>`,
      "/Portfolio/assets/images/logos/getronics.png"
    )
  ]

  selectedTrayectoria:Trayectoria = this.listaTrayectorias[0];
  

  constructor() { }

  public selectTrayectoria(ptrayectoria:Trayectoria){
    this.selectedTrayectoria=ptrayectoria;
  }

  public isMobile() : boolean{
    return window.innerWidth <= 900;
  }

}