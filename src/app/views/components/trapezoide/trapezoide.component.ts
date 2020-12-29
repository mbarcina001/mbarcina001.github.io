import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-trapezoide',
	templateUrl: './no-trapezoide.html',
	styleUrls: ['./no-trapezoide.scss']
})
export class TrapezoideComponent  {

	@Input() nombreSeccion: string;

	constructor() { }

}
