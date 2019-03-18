import { Component, OnInit, ViewChild } from '@angular/core';
import { Proyecto } from '../../../models/proyecto';
import { ChangeDetectorRef } from '@angular/core';
import { ModalProyectosComponent } from '../../modals/modal-proyectos/modal-proyectos.component';

@Component({
	selector: 'app-proyectos',
	templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss', '../../../../assets/styles/font-mfizz.css', '../../../../assets/styles/fontawesome-all.css', '../../../../assets/styles/fa-brands.min.css', '../../../../assets/styles/animate.min.css']
})
export class ProyectosComponent implements OnInit {

	nombreSeccionProyectos:string = "Proyectos";
	nombreSeccionProyectosCarrera:string = "Proyectos Carrera";
    selectedProyecto:Proyecto;
	@ViewChild(ModalProyectosComponent) 
	private modal:ModalProyectosComponent;
	
	proyectos:Proyecto[] = [
		new Proyecto(
			"p1",
			"Webs CCF",
			"Mantenimiento y atención de incidencias para las webs de servicios para CaixaBank Consumer Finance.",
			[
				"/Portfolio/assets/images/ccf1.PNG",
				"/Portfolio/assets/images/ccf2.PNG",
				"/Portfolio/assets/images/ccf3.PNG",
				"/Portfolio/assets/images/ccf4.PNG",
				"/Portfolio/assets/images/ccf5.PNG",
				"/Portfolio/assets/images/ccf6.PNG",
				"/Portfolio/assets/images/ccf7.PNG",
				"/Portfolio/assets/images/ccf8.PNG"
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
				"/Portfolio/assets/images/mm1.PNG",
				"/Portfolio/assets/images/gn1.PNG",
				"/Portfolio/assets/images/ve1.PNG",
				"/Portfolio/assets/images/mm2.PNG",
				"/Portfolio/assets/images/mm3.PNG",
				"/Portfolio/assets/images/mm4.PNG",
				"/Portfolio/assets/images/mm5.PNG",
				"/Portfolio/assets/images/mm6.PNG",
				"/Portfolio/assets/images/mm7.PNG",
				"/Portfolio/assets/images/mm8.PNG",
				"/Portfolio/assets/images/mm9.PNG"
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
				"/Portfolio/assets/images/dig1.PNG",
				"/Portfolio/assets/images/dig2.PNG",
				"/Portfolio/assets/images/dig3.PNG",
				"/Portfolio/assets/images/dig4.PNG",
				"/Portfolio/assets/images/dig5.PNG",
				"/Portfolio/assets/images/dig6.PNG",
				"/Portfolio/assets/images/dig7.PNG"
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
	];
	
	proyectosCarrera:Proyecto[] = [
		new Proyecto(
			"pc1",
			"Juego: Pasapalabra",
			"Juego realizado en Java del popular concurso de televisión Pasapalabra.",
			[
				"/Portfolio/assets/images/pasapalabra1.JPG",
				"/Portfolio/assets/images/pasapalabra2.JPG"
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
				"/Portfolio/assets/images/arkanoid0.JPG",
				"/Portfolio/assets/images/arkanoid1.JPG",
				"/Portfolio/assets/images/arkanoid2.JPG",
				"/Portfolio/assets/images/arkanoid3.JPG",
				"/Portfolio/assets/images/arkanoid4.JPG",
				"/Portfolio/assets/images/arkanoid5.JPG"
			],
			1,
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
				"/Portfolio/assets/images/ruleta1.JPG",
				"/Portfolio/assets/images/ruleta2.JPG",
				"/Portfolio/assets/images/ruleta3.JPG",
				"/Portfolio/assets/images/ruleta4.JPG"
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
				"/Portfolio/assets/images/encierros1.JPG",
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
				"/Portfolio/assets/images/App1.png",
				"/Portfolio/assets/images/App2.png",
				"/Portfolio/assets/images/App3.png",
				"/Portfolio/assets/images/App4.png",
				"/Portfolio/assets/images/App5.png"	
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
				"/Portfolio/assets/images/TFG1.JPG",
				"/Portfolio/assets/images/tfg2.JPG",
				"/Portfolio/assets/images/tfg3.JPG",
				"/Portfolio/assets/images/tfg4.JPG"
			],
			3,
			[],
			"IXA",
			"No"
		)
	];
  
	constructor(private cdRef:ChangeDetectorRef) { }

	ngOnInit() { 
		this.resizeTextos(window.innerWidth);
	}

	onSelect(pProyecto:Proyecto){
		this.selectedProyecto = pProyecto;
		this.cdRef.detectChanges();
		this.modal.mostrarModal();
	}
	
	onResize(event) {
		this.resizeTextos(event.target.innerWidth);
	}

	resizeTextos(anchura:number) : void{
		if(anchura<450){
			this.nombreSeccionProyectosCarrera="Proy. Carrera";
		}else{
			this.nombreSeccionProyectosCarrera="Proyectos Carrera";
		}
	}
	
	/*resizeTextos(anchura:number) : void{
		if(anchura<450){
			document.getElementById("tituloProyectosCarrera").getElementsByTagName('h1')[0].innerHTML="Proy. Carrera";
		}else{
			document.getElementById("tituloProyectosCarrera").getElementsByTagName('h1')[0].innerHTML="Proyectos Carrera";
		}
	}*/
}
