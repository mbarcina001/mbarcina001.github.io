import { Component, OnInit, Input } from '@angular/core';
import { Aptitud } from '../../../models/aptitud';

@Component({
	selector: 'app-aptitudes',
	templateUrl: './aptitudes.component.html',
	styleUrls: ['./aptitudes.component.scss']
})

export class AptitudesComponent implements OnInit {

	nombreSeccion = 'Aptitudes';
	@Input() aptitudes: Aptitud[];


	constructor() { }

	ngOnInit() { }

}
