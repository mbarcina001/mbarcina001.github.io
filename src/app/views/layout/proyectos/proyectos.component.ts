﻿import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Proyecto } from '../../../models/proyecto';
import { ChangeDetectorRef } from '@angular/core';
import { ModalProyectosComponent } from '../../modals/modal-proyectos/modal-proyectos.component';

@Component({
	selector: 'app-proyectos',
	templateUrl: './proyectos.component.html',
  	styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

	@Input() nombreSeccionProyectos: string;
	@Input() proyectos: Proyecto[];
	selectedProyecto: Proyecto;
	@ViewChild(ModalProyectosComponent, {})
	private modal: ModalProyectosComponent;

	constructor(private cdRef: ChangeDetectorRef) { }

	ngOnInit() {
		this.resizeTextos(window.innerWidth);
	}

	onSelect(pProyecto: Proyecto) {
		this.selectedProyecto = pProyecto;
		this.cdRef.detectChanges();
		this.modal.mostrarModal();
	}

	onResize(event) {
		this.resizeTextos(event.target.innerWidth);
	}

	resizeTextos(anchura: number): void {
		if (anchura < 580) {
			if (this.nombreSeccionProyectos === 'Proyectos Carrera') {
				this.nombreSeccionProyectos = 'Proy. Carrera';
			}else if (this.nombreSeccionProyectos === 'Otros Proyectos') {
				this.nombreSeccionProyectos = 'Otros Proy.';
			}
		} else {
			if (this.nombreSeccionProyectos === 'Proy. Carrera') {
				this.nombreSeccionProyectos = 'Proyectos Carrera';
			}else if (this.nombreSeccionProyectos === 'Otros Proy.') {
				this.nombreSeccionProyectos = 'Otros Proyectos';
			}
		}
	}
}
