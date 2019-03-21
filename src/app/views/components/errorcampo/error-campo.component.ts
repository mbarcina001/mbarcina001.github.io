import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-error-campo',
  templateUrl: './error-campo.component.html',
  styleUrls: ['./error-campo.component.scss', '../../../../assets/styles/fontawesome-all.css']
})

export class ErrorCampoComponent {

  private static readonly errorMessages = {
    'required': () => 'Este campo es obligatorio',
    'pattern': (params) => 'El mail introducido no es válido',
    'minlength': (params) => 'Longitud de campo incorrecta. Mínimo: ' + params.requiredLength,
    'maxlength': (params) => 'Longitud de campo incorrecta. Máximo: ' + params.requiredLength,
    'onlyNumbers': (params) => params.message
  };

 @Input()
 private control: AbstractControlDirective | AbstractControl;

 constructor(){}

 shouldShowErrors(): boolean {
  let rdo = this.control &&
    this.control.errors &&
    (this.control.touched);
    console.log(this.control);
    console.log(rdo);
    return rdo;
 }

 /* Salta una vez por cada error de cada campo */
 listOfErrors(): string[] {
   return Object.keys(this.control.errors)
     .map(field => this.getMessage(field, this.control.errors[field]));
 }

 private getMessage(type: string, params: any) {
   return ErrorCampoComponent.errorMessages[type](params);
 }

}
