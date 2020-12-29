import { Component, Inject, OnInit } from '@angular/core';
import { Proyecto } from '../../../models/proyecto';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import $ from 'jquery';

@Component({
  selector: 'app-modal',
  templateUrl: './modal-proyectos.component.html',
  styleUrls: ['./modal-proyectos.component.scss']
})

export class ModalProyectosComponent implements OnInit {

	proyectoIndex: number;

	constructor(
		private dialogRef: MatDialogRef<ModalProyectosComponent>,
		@Inject(MAT_DIALOG_DATA)
		public data: {
			proyecto: Proyecto
		},
	) { }

	ngOnInit() {
		this.proyectoIndex = 0;
	}

	siguienteImg(): void {
		if (this.proyectoIndex + 1 === this.data.proyecto.imgs.length) {
			this.proyectoIndex = 0;
		} else {
			this.proyectoIndex = this.proyectoIndex + 1;
		}
	}

	anteriorImg(): void {
		if (this.proyectoIndex === 0) {
			this.proyectoIndex = this.data.proyecto.imgs.length - 1;
		} else {
			this.proyectoIndex = this.proyectoIndex - 1;
		}
	}

	mostrarModal(): void {

	}

	ocultarModal(): void {
		this.dialogRef.close();
	}

	/*mostrarModal(): void {
		$('#modalProyectos').removeClass('oculto');
		$('#modalProyectos .modal-content').removeClass('animated slideOutRight');
		$('#modalProyectos .modal-content').addClass('animated rollIn');
		$('body').css('overflow', 'hidden');
		this.proyectoIndex = 0;
	}

	ocultarModal(): void {
		$('#modalProyectos .modal-content').removeClass('animated rollIn');
		$('#modalProyectos .modal-content').addClass('animated slideOutRight');
		$('body').css('overflow', 'visible');
		setTimeout(function() {
			$('#modalProyectos').addClass('oculto');
		}, 1000);
	}*/

	flechaClick(elem): void {
		const paginationWrapper = document.querySelector('.pagination-wrapper');

		if (elem === 'flechaIzq') {
			paginationWrapper.classList.add('transition-prev');
		} else {
			paginationWrapper.classList.add('transition-next');
		}

		setTimeout(this.cleanClasses, 500);
	}

	cleanClasses(): void {
		const paginationWrapper = document.querySelector('.pagination-wrapper');

		if (paginationWrapper.classList.contains('transition-next')) {
			paginationWrapper.classList.remove('transition-next');
		} else if (paginationWrapper.classList.contains('transition-prev')) {
			paginationWrapper.classList.remove('transition-prev');
		}
	}
}
