import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trapezoide',
  templateUrl: './trapezoide.component.html',
  styleUrls: ['./trapezoide.component.scss']
})
export class TrapezoideComponent implements OnInit {
  @Input() nombreSeccion: string;

  constructor() { }

  ngOnInit() {
  }

}
