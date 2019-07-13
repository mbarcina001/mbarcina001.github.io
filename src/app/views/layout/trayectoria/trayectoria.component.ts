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
      `<p>En esta empresa hice labores de mantenimiento de los proyectos web ya existentes dedicados a ofrecer servicio a <span class="font-weight-bold">Caixabank Consumer Finance</span> y basados en Java y Struts en la parte dinámica; jQuery en la parte estática; y Ajax para conectar entre ambas partes cuando era necesario,</p>
      <p>Por otra parte, estuve involucrado en el desarrollo e implementación de 2 proyectos desde cero:</p>
      <p><span class="font-weight-bold">Minisite de MediaMarkt:</span> Realizado en Java y Struts se trata de una aplicación web dedicada a la contratación de la tarjeta MediaMarkt Club Card. Incluye servicios REST así como una estructura multimarca diseñada especificamente con el objetivo de poder alojar otras marcas (Gas natural, Ventajon, etc) de modo que tuviesen un diseño propio y unos pasos para realizar la solicitud a elección del cliente.</p>
      <p><span class="font-weight-bold">Digitalización TCF:</span> Aplicación web implementada en Angular4 para la compra de dispositivos móviles financiados por Telefónica Consumer Finance. Este desarrollo cuenta con un Middleware programado en Java que hace las llamadas correspondientes a los servicios que sirven de apoyo a la aplicación. Dicho Middleware expone los servicios necesarios en REST para que puedan ser invocados desde el código Angular4 y realiza diferentes llamadas a servicios empleando Axis, Jaxb y Soap con cabecera de seguridad y firma entre otros.</p>
      <p>Por otra parte, hice otros proyectos de menor envergadura con otros lenguajes de programación como Spring, así como diferentes plugins de Java como Selenium.</p>`,
      "/Portfolio/assets/images/logos/ide.png"
    ),
    new Trayectoria(
      "Getronics",
      "Programador",
      "2019-Actualidad",
      `<p>Realicé el proyecto <span class="font-weight-bold">FMS (Field Management Services)</span>, una aplicación multiplataforma para Android, iOS y navegador implementada mediante Angular 6, Ionic 3 y Cordova.</p>
      <p>Una vez finalizado dicho proyecto, me incorporé al desarrollo de una web para <span class="font-weight-bold">Celsa</span> implementada en AngularJS, con el uso de Gulp para el preprocesado de los estilos y los scripts, y Protractor para los tests unitarios.</p>
      <p>También he estado involucrado en la maquetación de la nueva página web de <span class="font-weight-bold">Booker</span> (HTML5, CS3 y Bootstrap).</p>`,
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
