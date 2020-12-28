import { Component } from '@angular/core';
import { Proyecto } from './models/proyecto';
import { Aptitud } from './models/aptitud';
import { Trayectoria } from './models/trayectoria';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	
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
		  "./assets/images/logos/ehu.png"
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
		  "./assets/images/logos/ide.png"
		),
		new Trayectoria(
		  "Getronics",
		  "Programador",
		  "2019",
		  `<p>Realicé el proyecto <span class="font-weight-bold">FMS (Field Management Services)</span>, una aplicación multiplataforma para Android, iOS y navegador implementada mediante Angular 6, Ionic 3 y Cordova.</p>
		  <p>Una vez finalizado dicho proyecto, me incorporé al desarrollo de una web para <span class="font-weight-bold">Celsa</span> implementada en AngularJS, con el uso de Gulp para el preprocesado de los estilos y los scripts, y Protractor para los tests unitarios.</p>
		  <p>También he estado involucrado en la maquetación de la nueva página web de <span class="font-weight-bold">Booker</span> (HTML5, CS3 y Bootstrap).</p>`,
		  "./assets/images/logos/getronics.png"
		),
		new Trayectoria(
		  "Bilbomática",
		  "Programador",
		  "2019-Actualidad",
		  `<p>Me he incorporado a la parte front del proyecto <span class="font-weight-bold">Eccairs 2</span> para la <span class="font-weight-bold">Agencia Europea de Seguridad Aérea</span> (EASA) que está siendo desarrollado con Angular 8 y Java Spring. El cometido de esta aplicación es la recopilación de incidencias que puedan darse en la aviación y la gestión de la taxonomía empleada en los informes que recogen estas incidencias así como otras gestiones comunes en este tipo de aplicaciones como roles, usuarios, etc.</p>
		  <p>Cabe destacar también que en este proyecto se ha utilizado la metodología de trabajo SCRUM. </p>`,
		  "./assets/images/logos/bilbomatica.png"
		)
	];

    proyectos:Proyecto[] = [
		new Proyecto(
			"p1",
			"Webs CCF",
			"Mantenimiento y atención de incidencias para las webs de servicios para CaixaBank Consumer Finance.",
			[
				"./assets/images/proyectos/ccf1.PNG",
				"./assets/images/proyectos/ccf2.PNG",
				"./assets/images/proyectos/ccf3.PNG",
				"./assets/images/proyectos/ccf4.PNG",
				"./assets/images/proyectos/ccf5.PNG",
				"./assets/images/proyectos/ccf6.PNG",
				"./assets/images/proyectos/ccf7.PNG",
				"./assets/images/proyectos/ccf8.PNG"
			],
			0,
			[
				"Webs de clientes para tiendas como IKEA, MediaMarkt etc.",
				"Portal público de Teléfonica Consumer Finance",
				"Web de prescriptores para la financiación de coches con estilos propios para marcas como Porsche o Bentley",
				"Web ecommerce para la financiación de coches con concesionarios como Berrocar o Concesur.",
				"Estructura realizada mediante Struts.",
			],
			"No",
			"No"
		),
		new Proyecto(
			"p2",
			"Minisite finonline",
			"Página web para solicitar la tarjeta de MediaMarkt, Gas Natural, Ventajon, etc.",
			[
				"./assets/images/proyectos/mm1.PNG",
				"./assets/images/proyectos/gn1.PNG",
				"./assets/images/proyectos/ve1.PNG",
				"./assets/images/proyectos/mm2.PNG",
				"./assets/images/proyectos/mm3.PNG",
				"./assets/images/proyectos/mm4.PNG",
				"./assets/images/proyectos/mm5.PNG",
				"./assets/images/proyectos/mm6.PNG",
				"./assets/images/proyectos/mm7.PNG",
				"./assets/images/proyectos/mm8.PNG",
				"./assets/images/proyectos/mm9.PNG"
			],
			0,
			[
				"Estructura realizada mediante Struts.",
				"Sistema de navegación personalizable y adaptable de cara a que el minisite pueda ser empleado por otras marcas.",
				"Uso de servicios REST para obtención de datos de servicios externos.",
				"Uso de Base de datos Microsoft SQL.",
				"Empleo de Google Tag Manager para analíticas.",
				"Uso de estilos responsive mediante Bootstrap para una visualización óptima desde dispositivos móviles.",
			],
			"mmlink",
			"https://comercios.caixabankconsumer.com/apw5/fncWebFinOnline/MediaMarkt.do"
		),
		new Proyecto(
			"p3",
			"Digitalización Telefónica Consumer Finance",
			"Página web para financiar diversos teléfonos móviles con TCF",
			[
				"./assets/images/proyectos/dig1.PNG",
				"./assets/images/proyectos/dig2.PNG",
				"./assets/images/proyectos/dig3.PNG",
				"./assets/images/proyectos/dig4.PNG",
				"./assets/images/proyectos/dig5.PNG",
				"./assets/images/proyectos/dig6.PNG",
				"./assets/images/proyectos/dig7.PNG"
			],
			0,
			[
				"Implementado con Angular 4",
				"Uso de servicios REST implementados en un Middleware aparte en JAVA para realizar llamada con Axis y Jaxb y Soap con cabecera de seguridad y firma entre otros",
				"Diseño adaptativo y responsive mediante CSS3 y Bootstrap 4",
			],
			"No",
			"No"
		),
		new Proyecto(
			"p4",
			"Getronics FMS",
			"Aplicación multiplataforma para Android, iOS y navegadores destinada a su uso por parte de los técnicos de campo de Getronics. Recupera los tickets pendientes del técnico y le proporciona información sobre las tareas que tiene el técnico para ese día, las ubicaciones a las que se tiene que desplazar, los componentes necesarios, etc.",
			[
				"./assets/images/proyectos/fms1.PNG",
				"./assets/images/proyectos/fms2.png",
				"./assets/images/proyectos/fms3.png",
				"./assets/images/proyectos/fms4.png",
				"./assets/images/proyectos/fms5.png",
				"./assets/images/proyectos/fms6.png",
				"./assets/images/proyectos/fms7.png",
				"./assets/images/proyectos/fms8.png",
				"./assets/images/proyectos/fms9.png",
				"./assets/images/proyectos/fms10.png",
				"./assets/images/proyectos/fms11.png",
				"./assets/images/proyectos/fms12.png",
				"./assets/images/proyectos/fms13.png",
				"./assets/images/proyectos/fms14.png",
				"./assets/images/proyectos/fms15.png",
				"./assets/images/proyectos/fms16.png",
				"./assets/images/proyectos/fms17.png",
				"./assets/images/proyectos/fms18.png",
			],
			9,
			[
				"Implementado con Angular 6, Ionic 3 y Cordova",
				"Uso de diversos plugins de Cordova para el acceso de ficheros, uso de la cámara, lector de código de barras, etc.",
				"Funciones de geolocalización y mapa.",
				"Emplea un template adquirido especificamente como base para el proyecto y a partir del cual se han personalizado los estilos de la aplicación haciendo uso de HTML5+Ionic3 y CSS3"
			],
			"No",
			"No"
		)/*,
		new Proyecto(
			"p5",
			"SMED",
			"Página web para la gestión de un taller de laminado.",
			[
				"./assets/images/proyectos/smed1.PNG",
				"./assets/images/proyectos/smed2.PNG",
				"./assets/images/proyectos/smed3.PNG",
				"./assets/images/proyectos/smed4.PNG"
			],
			1,
			[
				"Desarrollado con AngularJS",
				"Emplea el template Gentelella",
				"Hace uso de la librería dhtmlx para la visualización y edición de un diagrama de GANTT",
				"Emplea la librería flot para la visualización de gráficos",
				"Test E2E mediante Protractor",
				"Manejo de ficheros SCSS y JS mediante Gulp"
			],
			"No",
			"No"
		),
		new Proyecto(
			"p6",
			"Maquetación web: Booker",
			"Maquetación de la nueva página web de Booker. HTML5, CSS y Bootstrap.",
			[
				"./assets/images/proyectos/booker1.png",
				"./assets/images/proyectos/booker2.png",
				"./assets/images/proyectos/booker3.png",
				"./assets/images/proyectos/booker4.png",
				"./assets/images/proyectos/booker5.png",
				"./assets/images/proyectos/booker6.png",
				"./assets/images/proyectos/booker7.png"
			],
			0,
			[],
			"No",
			"No"
		)*/
		,new Proyecto(
			"p7",
			"Eccairs 2",
			"Aplicación para la recopilación de incidencias en aviación y la gestión de la taxonomía empleada en los informes que recogen estas incidencias así como otras gestiones comunes en este tipo de aplicaciones como roles, usuarios, etc.",
			[
				"./assets/images/proyectos/eccairs1.png",
			],
			0,
			[
				"Parte front implementada con Angular 8, Ngrx y Ngrx/data",
				"Uso de librerías de apoyo como Bootstrap y Kendo",
				"Uso de oras tenologías como Spring, Elastic o MySQL",
				"Metodología SCRUM"
			],
			"No",
			"No"
		)
	];
	
	proyectosCarrera:Proyecto[] = [
		new Proyecto(
			"pc1",
			"Juego: Pasapalabra",
			"Juego realizado en Java del popular concurso de televisión Pasapalabra.",
			[
				"./assets/images/proyectos/pasapalabra1.JPG",
				"./assets/images/proyectos/pasapalabra2.JPG"
			],
			1,
			[],
			"gitlink",
			"https://github.com/jagumiel/Pasapalabra"
		),
		new Proyecto(
			"pc2",
			"Juego: Arkanoid",
			"Juego Arkanoid desarrollado en JavaScript para navegador web",
			[
				"./assets/images/proyectos/arkanoid0.png",
				"./assets/images/proyectos/arkanoid1.png",
				"./assets/images/proyectos/arkanoid2.png",
				"./assets/images/proyectos/arkanoid3.png",
				"./assets/images/proyectos/arkanoid4.png",
				"./assets/images/proyectos/arkanoid5.png",
				"./assets/images/proyectos/arkanoid6.png",
				"./assets/images/proyectos/arkanoid7.png",
				"./assets/images/proyectos/arkanoid8.png",
				"./assets/images/proyectos/arkanoid9.png",
				"./assets/images/proyectos/arkanoid10.png",
				"./assets/images/proyectos/arkanoid11.png"
			],
			11,
			[
				"Desarrollado en JavaScript",
				"Incluye hasta 10 niveles",
				"Texturas originales del juego",
				"Bonuses del juego original (multibola, vida extra, etc)",
				"Uso de librerías JS para la reproducción de sonidos"
			],
			"arklink",
			"https://mbarcina001.github.io/Arkanoid"
		),
		new Proyecto(
			"pc3",
			"Juego: Ruleta de la fortuna",
			"Juego en Java del popular programa de televisión La ruleta de la fortuna",
			[
				"./assets/images/proyectos/ruleta1.JPG",
				"./assets/images/proyectos/ruleta2.JPG",
				"./assets/images/proyectos/ruleta3.JPG",
				"./assets/images/proyectos/ruleta4.JPG"
			],
			1,
			[],
			"gitlink",
			"https://github.com/mbarcina001/RuletaDeLaFortuna"
		),
		new Proyecto(
			"pc4",
			"Gestor de encierros en San Fermín",
			"Aplicación en Java para que las ganaderías que participan en San Fermín puedan administrar su participación.",
			[
				"./assets/images/proyectos/encierros1.JPG",
			],
			0,
			[
				"Gestión de animales (toros y cabestros).",
				"Gestión de la alineación.",
				"Rellenar ficha médica de los animales.",
				"Votar a otras ganaderías."
			],
			"gitlink",
			"https://github.com/aserrano011/ADSI2014"
		),
		new Proyecto(
			"pc5",
			"Aplicación Android: Gestor de Reuniones",
			"Aplicación en Android para la gestión de reuniones.",
			[
				"./assets/images/proyectos/App1.png",
				"./assets/images/proyectos/App2.png",
				"./assets/images/proyectos/App3.png",
				"./assets/images/proyectos/App4.png",
				"./assets/images/proyectos/App5.png"	
			],
			2,
			[
				"Funciones para añadir, modificar y eliminar reuniones.",
				"Notificaciones.",
				"Sincronización con Google Calendar.",
				"Geolocalización.",
				"Función para añadir, modificar y eliminar notas.",
				"Reconocimiento de voz para la redacción de las notas.",
				"Text-to-speech para la lectura de las notas."
			],
			"gitlink",
			"https://github.com/mbarcina001/GestorDeReuniones"
		),
		new Proyecto(
			"pc6",
			"Detector de entidades en textos médicos",
			"Aplicación que emplea técnicas de minería de datos (aprendizaje semisupervisado y evaluación no supervisada) para identificar entidades tales como enfermedades y medicamentos en textos médicos.",
			[
				"./assets/images/proyectos/TFG1.JPG",
				"./assets/images/proyectos/tfg2.JPG",
				"./assets/images/proyectos/tfg3.JPG",
				"./assets/images/proyectos/tfg4.JPG"
			],
			3,
			[],
			"IXA",
			"No"
		)
	];

	otrosProyectos:Proyecto[] = [
		new Proyecto(
			"op1",
			"App: Pokedex",
			"Aplicación multiplataforma que simula una pokédex. Realizada para un proceso de selección.",
			[
				"./assets/images/proyectos/pokedex1.jpg",
				"./assets/images/proyectos/pokedex2.jpg",
				"./assets/images/proyectos/pokedex3.jpg"
			],
			0,
			[
				"Implementada mediante Ionic y Angular",
				"Consume servicios REST para la obtención de datos",
				"Los idiomas se establecen de forma dinámica",
				"App Responsive"
			],
			"gitlink",
			"https://github.com/mbarcina001/pokedex"
		),
		new Proyecto(
			"op2",
			"Github Issue Search",
			"Página web para la búsqueda de issues en proyectos de github",
			[
				"./assets/images/proyectos/issuesearch1.PNG",
				"./assets/images/proyectos/issuesearch2.PNG",
				"./assets/images/proyectos/issuesearch3.PNG"
			],
			0,
			[
				"Implementada con Angular 8",
				"Emplea la API de Github para obtener las issues",
				"Hace uso de Ngrx para los servicios",
				"Validación dinámica de la barra de búsqueda"
			],
			"gitlink",
			"https://github.com/mbarcina001/issue-search"
		),
		new Proyecto(
			"op3",
			"SpringMarket",
			"Página web para ecommerce",
			[
				"./assets/images/proyectos/springmarket1.png",
				"./assets/images/proyectos/springmarket2.png",
				"./assets/images/proyectos/springmarket3.png",
				"./assets/images/proyectos/springmarket4.png",
				"./assets/images/proyectos/springmarket5.png",
				"./assets/images/proyectos/springmarket6.png",
				"./assets/images/proyectos/springmarket7.png",
				"./assets/images/proyectos/springmarket8.png",
			],
			0,
			[
				"Implementada con Spring MVC e Hibernate",
				"Emplea BBDD para la realización de operaciones CRUD",
				"Configuración mediante Spring Boot",
				"Empleo de Spring Security para la identificación de usuarios",
				"Utiliza Spring AOT",
				"Hace uso de Spring Boot Actuator para la adición de nuevos endpoints relacionados con la aplicación, y Spring Boot Security para restringir el acceso de estos endpoints a usuarios identificados",
				"Manejo de dependencias con Maven",
				"Uso de templates Thymeleaf"
			],
			"desarrollo",
			"No"
		)
	]

	aptitudes : Aptitud[] = [
		new Aptitud(
			"devicon-android-plain",
			"Android",
			"icon"
		),
		new Aptitud(
			"devicon-angularjs-plain",
			"Angular",
			"icon"
		),
		new Aptitud(
			"devicon-apache-plain",
			"Apache",
			"icon"
		),
		/*new Aptitud(
			"devicon-dot-net-plain",
			"ASP.NET",
			"icon"
		),
		new Aptitud(
			"azure",
			"Azure",
			"icon img"
		),*/
		new Aptitud(
			"devicon-css3-plain",
			"CSS3",
			"icon"
		),
		new Aptitud(
			"cordova",
			"Cordova",
			"icon img"
		),
		new Aptitud(
			"fa fa-database",
			"Data mining",
			"icon"
		),
		new Aptitud(
			"devicon-git-plain",
			"Git",
			"icon"
		),
		new Aptitud(
			"devicon-google-plain",
			"Google Tag Manager",
			"icon"
		),
		new Aptitud(
			"devicon-gulp-plain",
			"Gulp",
			"icon"
		),
		new Aptitud(
			"devicon-html5-plain",
			"HTML5",
			"icon"
		),
		new Aptitud(
			"hibernate",
			"Hibernate",
			"icon img"
		),
		new Aptitud(
			"ionic",
			"Ionic",
			"icon img"
		),
		new Aptitud(
			"devicon-java-plain",
			"Java",
			"icon"
		),
		new Aptitud(
			"devicon-javascript-plain",
			"JavaScript",
			"icon"
		),
		new Aptitud(
			"devicon-jquery-plain",
			"jQuery",
			"icon"
		),
		new Aptitud(
			"maven",
			"Maven",
			"icon img"
		),
		new Aptitud(
			"devicon-mysql-plain",
			"MySQL",
			"icon"
		),
		new Aptitud(
			"devicon-nodejs-plain",
			"Node JS",
			"icon"
		),
		new Aptitud(
			"npm",
			"NPM",
			"icon img"
		),
		new Aptitud(
			"devicon-photoshop-plain",
			"Photoshop",
			"icon"
		),
		/*new Aptitud(
			"devicon-php-plain",
			"PHP",
			"icon"
		),*/
		new Aptitud(
			"devicon-python-plain",
			"Python",
			"icon"
		),
		new Aptitud(
			"devicon-react-original",
			"ReactJS",
			"icon"
		),
		new Aptitud(
			"rest",
			"Servicios REST",
			"icon img"
		),
		new Aptitud(
			"devicon-ruby-plain",
			"Ruby",
			"icon"
		),
		new Aptitud(
			"devicon-rails-plain",
			"Ruby on rails",
			"icon"
		),
		new Aptitud(
			"rxjs",
			"Rxjs y Ngrx",
			"icon img"
		),
		new Aptitud(
			"devicon-sass-plain",
			"Sass",
			"icon"
		),
		new Aptitud(
			"selenium",
			"Selenium",
			"icon img"
		),
		new Aptitud(
			"icon-spring",
			"Spring",
			"icon"
		),
		/*new Aptitud(
			"struts",
			"Struts",
			"icon img"
		),
		new Aptitud(
			"svn",
			"SVN",
			"icon img"
		),
		new Aptitud(
			"tfs",
			"TFS",
			"icon img"
		),*/
		new Aptitud(
			"devicon-typescript-plain",
			"TypeScript",
			"icon"
		)
	];
}
