import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  nombreSeccion:string = "Contacto";

  nombre:string = "";

  constructor() { }

  ngOnInit() {
  }

  public enviar(myForm: NgForm){
    myForm.control.markAsTouched();

    if (myForm.valid) {
      myForm.ngSubmit.emit();
      console.log("Submitted");
    }
  }
}
