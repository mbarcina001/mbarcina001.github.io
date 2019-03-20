import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  nombreSeccion:string = "Contacto";

  constructor() { }

  ngOnInit() {
  }

  public enviar(myForm: NgForm){
    if (myForm.valid) {
      console.log("Valid");
    }
  }

}
