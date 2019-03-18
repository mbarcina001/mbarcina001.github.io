import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-error-campo',
  templateUrl: './error-campo.component.html',
  styleUrls: ['./error-campo.component.scss']
})

export class ErrorCampoComponent {

  private static readonly errorMessages = {
    'required': () => 'Este campo es obligatorio',
    'pattern': (params) => 'El valor introducido es incorrecto',
    'minlength': (params) => 'Longitud de campo incorrecta',
    'maxlength': (params) => 'Longitud de campo incorrecta',
    'onlyNumbers': (params) => params.message,
    'fechaAntiguedad': (params) => params.message,
    'fechaCaducidad': (params) => params.message,
    'fechaNacimiento': (params) => params.message,
    'formatoFecha': (params) => params.message,
    'antiguedadBanco': (params) => params.message,
    'antiguedadLaboral': (params) => params.message,
    'grpCorreo': (params) => params.message,
    'combo': (params) => params.message,
    'numberMaxLength': (params) => params.message,
    'numberMinLength': (params) => params.message,
    'max': (params) => params.message,
    'min': (params) => params.message,
    'emailInvalid': (params) => "El mail introducido no es correcto"
  };

 @Input()
 private control: AbstractControlDirective | AbstractControl;

 constructor(){}

 shouldShowErrors(): boolean {
  return this.control &&
    this.control.errors &&
    (this.control.touched);
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
