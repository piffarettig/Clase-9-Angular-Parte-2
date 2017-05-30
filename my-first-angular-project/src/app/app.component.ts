import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Curso de DA2 de {{name}}</h1>
    <p> <strong>Email:</strong> {{email}} </p>
    <p> <strong>Dirección:</strong> {{address.street}} {{address.number}} de la ciudad - {{address.city}} </p>
    <pm-pets></pm-pets>
  `,
})
export class AppComponent  
{
   name = 'Gabriel Piffaretti'; 
   email = "piffarettig@gmail.com";
   address = {
     street: "la dirección del profe",
     city: "Montevideo",
     number: "1234"
   }
}
