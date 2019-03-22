import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  nombreSeccion:string = "Contacto";

  nombreText:string = "";
  mailText:string = "";
  mensajeText:string = "";

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  public enviar(myForm: NgForm){
    myForm.control.markAsTouched();

    if (myForm.valid) {
      console.log("Submitted - 1714");
      let data = {
        nombre: this.nombreText,
        mail: this.mailText,
        mensaje: this.mensajeText
        
      };
      this.http.post('https://formspree.io/mbarcina001@gmail.com', JSON.stringify(data))
        .subscribe(
          (resp) => {
            console.log(resp);
          }, (err) => {
            console.log("ERROR: " + err)
          }
        );
    }
  }
}
