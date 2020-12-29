import { Component, Input, OnInit } from '@angular/core';
import { Trayectoria } from '../../../models/trayectoria';

@Component({
	selector: 'app-trayectoria',
	templateUrl: './trayectoria.component.html',
	styleUrls: ['./trayectoria.component.scss']
})
export class TrayectoriaComponent implements OnInit {

	nombreSeccion = 'Trayectoria';
	@Input() listaTrayectorias: Trayectoria[];
	selectedTrayectoria: Trayectoria;

	constructor() { }

	ngOnInit() {
		this.selectedTrayectoria = this.listaTrayectorias[0];
	}

	public selectTrayectoria(ptrayectoria: Trayectoria) {
		this.selectedTrayectoria = ptrayectoria;
	}

	public isMobile(): boolean {
		return window.innerWidth <= 900;
	}

}
