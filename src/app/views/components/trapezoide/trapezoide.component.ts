import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trapezoide',
  templateUrl: './no-trapezoide.html',
  styleUrls: ['./no-trapezoide.scss']
})
export class TrapezoideComponent implements OnInit {
  @Input() nombreSeccion: string;

  constructor() { }

  ngOnInit() {
  }

}
