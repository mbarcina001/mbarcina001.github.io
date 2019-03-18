import { Component, OnInit, Input } from '@angular/core';
import { Proyecto } from '../../../models/proyecto';
import $ from 'jquery';

@Component({
  selector: 'app-modal',
  templateUrl: './modal-proyectos.component.html',
  styleUrls: ['./modal-proyectos.component.scss', '../../../../assets/styles/pagination.css', '../../../../assets/styles/fontawesome-all.css', '../../../../assets/styles/fa-brands.min.css', '../../../../assets/styles/animate.min.css']
})

export class ModalProyectosComponent implements OnInit {
  @Input() proyecto:Proyecto;
  proyectoIndex:number;
  
  constructor() { }

  ngOnInit() {
	this.proyectoIndex=0;
  }
  
	siguienteImg() : void {
		if(this.proyectoIndex+1 == this.proyecto.imgs.length){
			this.proyectoIndex = 0;
		}else{
			this.proyectoIndex = this.proyectoIndex + 1;
		}
	}
	
	anteriorImg() : void {
		if(this.proyectoIndex == 0){
			this.proyectoIndex = this.proyecto.imgs.length -1;
		}else{
			this.proyectoIndex = this.proyectoIndex -1;
		}
	}
  
	mostrarModal() : void {
		$('#modalProyectos').removeClass('oculto'); 
		$('#modalProyectos .modal-content').removeClass('animated slideOutRight'); 
		$('#modalProyectos .modal-content').addClass('animated rollIn');
		$('body').css("overflow","hidden");
	}
  
	ocultarModal() : void {
		$('#modalProyectos .modal-content').removeClass('animated rollIn'); 
		$('#modalProyectos .modal-content').addClass('animated slideOutRight'); 
		$('body').css("overflow","visible");
		setTimeout(function(){ 
			$('#modalProyectos').addClass('oculto'); 
		}, 1000);
	}

	flechaClick(elem) : void {
		var paginationWrapper = document.querySelector('.pagination-wrapper');
		
		if(elem=="flechaIzq") {
			paginationWrapper.classList.add('transition-prev');
		} else {
			paginationWrapper.classList.add('transition-next');  
		}

		setTimeout(this.cleanClasses, 500);
	}

	cleanClasses() : void {
		var paginationWrapper = document.querySelector('.pagination-wrapper');
		
		if(paginationWrapper.classList.contains('transition-next')) {
			paginationWrapper.classList.remove('transition-next')
		} else if(paginationWrapper.classList.contains('transition-prev')) {
			paginationWrapper.classList.remove('transition-prev')
		}
	}
}
