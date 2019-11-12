import { Component, OnInit, Input } from '@angular/core';
import { Proyecto } from '../../../../models/proyecto';

@Component({
  selector: 'app-modal-proyecto-link',
  templateUrl: './modal-proyecto-link.component.html',
  styleUrls: ['./modal-proyecto-link.component.scss']
})
export class ModalProyectoLinkComponent implements OnInit {
  @Input() proyecto:Proyecto;

  constructor() { }

  ngOnInit() {
  }

}
