import { Component, OnInit, Input } from '@angular/core';
import { Aptitud } from '../../../models/aptitud';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.scss', '../../../../assets/styles/font-mfizz.css', '../../../../assets/styles/fontawesome-all.css', '../../../../assets/styles/fa-brands.min.css',  '../../../../assets/styles/devicon.min.css']
})

export class AptitudesComponent implements OnInit {

	nombreSeccion:string = "Aptitudes";
	@Input() aptitudes: Aptitud[];
	

	constructor() { }

	ngOnInit() {  }

}
