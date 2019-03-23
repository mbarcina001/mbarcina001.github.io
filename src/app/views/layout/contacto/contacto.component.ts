import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  ngOnInit() {
  }

  public enviar(myForm: NgForm){
    myForm.control.markAsTouched();
    if (myForm.valid) {
      let data = {
        name: this.nombreText,
        email: this.mailText,
        message: this.mensajeText
        
      };
      let formData: FormData = new FormData(); 
      formData.append('name', this.nombreText); 
      formData.append('email', this.mailText); 
      formData.append('message', this.mensajeText); 

      /*this.http.post('https://jumprock.co/mail/mbarcina001', formData)
        .subscribe(
          (resp) => {
            console.log(resp);
          }, (err) => {
            console.log("ERROR: " + err)
          }
      );*/
      this.toastr.success('Hello world!', 'Toastr fun!', {
        timeOut: 0,
        positionClass: 'toast-bottom-right'
      });
    }
  }
}
