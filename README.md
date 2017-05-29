# Clase-9-Angular-Parte-2
Comenzando a crear nuestra primera web en Angular


Cada componente la idea es que funcione armoniosamente y en conjunto para proveer una experiencia de usuario única.

El template del componente se crea con código html y define lo que se rednderizará en a página. A su vez incluye bindings y directivas para power up a la vista.

A su vez la view tiene un código asociado, La clase es el código asociado a la vista (creado con TS), posee los datos , llamadas las properties para que la vista los use (el nombre de una mascota por ej), y a su vez posee los lógica, o funciones que usan los mismos. Por ejemplo: la lógica para mostrar o esconder una imagen, usamos tal lógica.

El componente también tiene metadata, que es información adicional para angular, siendo esta definida con un decorador. Un decorador es una función que agrega metadata a una clase, sus miembros o los argumentos de sus métodos.

Clase de un componente:

La sintaxis es export class NombreComponent {
  property1: tipo = “”,
}

Recordemos que por convención, el componente fundamental de una app de angular se llama AppComponent (el root component).

La palabra reservada “export” simplemente hace que el componente se exporte y pueda ser visto por otros componentes de nuestra app.

La sintaxis de definición del archivo es nombre.component.ts

El default value en la property es opcional.

Los métodos vienen luego de las properties, también en camelcase lower primer letra.

Sin embargo los componentes no son lo único necesario que precisamos para armar nuestra app en angular, precisamos darle el html, la vista, etc.

Todo eso lo definimos a través del metadata.

Una clase como la que definimos anteriormente se convierte en un componente de Angular cuando le definimos la metadata de componente.

Angular precisa de esa metadata para saber como instanciar el componente, estructurar la view, y ver la interacción:

Usamos el decorator, siendo el scope de tal decorator la feature que decora.	Siempre son prefijos con un @.

Angular tiene un conjunto predefinido de decoradores que podemos usar, y hasta podemos crearnos los propios.

El decorator va siempre antes de la definición de la clase, com olas annotations en .net, no va ; ni nada

Es una función y recibe un objeto que define el template.

 El objeto, tiene las siguientes properties:

- el selector: especifica el nombre de la directiva que vamos a usar con el componente. es simplemente un tag html custom que vamos a poder usar.
- template: es el layout para la UI, lo que queremos que muestre ese componente. 

Las llaves dobles (interpolación), indican un data binding,  indica que estamos asignando a es porción de la UI que mire el valor de la property pageTitle de la Clase.
 
De manera que cuando el HTML se renderiza, el HTML muestra el valor asociado al modelo pageTitle.

Importando: antes de usar una función o clase externa, tenemos que decirle al module de dónde lo puede sacar. Eso lo hacemos con el statement import. Este statemente es parte de ES2015 y es implementado en TypeScript, funcionando como el import de java o el using de c#.

En consecuencia, nos permite usar todos los miembros que hayan sido exportados por algún ES Module (sea una librería de terceros, nuestros propios ES modules o modelos propios de Angular).

Esto se debe a que angular es modular, define una colección de módulos que engloban funcionalidad. Cuando precisemos algo de angular lo tomaremos de un angular module.

Para ver todos los módulos disponibles de angular:

www.npmjs.com/~angular 

Por ejemplo, en el código de nuestros componentes, decoramos los mismos con la función Component que viene dentro de angular core, para poder definir nuestra clase como nuestra component.

import  { Component } from ‘@angular/core’

Si queremos poner varios, separamos por comas nuestros components

https://stackoverflow.com/questions/38407604/what-is-angular-platform-browser


Le decimos a Angular que cargue nuestro AppComponent a través de un proceso que se llama Bootstrapping. Y tenemos que decirle a nuestro index.html que hostee nuestra app.


SPA:

index.html contiene la página principal de la aplicación

En general esta es la única página web de la app.

Veamos como es el Angular application startup process en detalle:

1. Se le pega al index.html (se manda una request).   
2. Este va a cargar nuestra app utilizando el selector que indicamos para nuestro componente, como una nueva directiva en el body de nuestro HTML.
3. Pero cómo encuentra nuestro Root Application Component? (AppComponent)?
4. Esto lo hace a partir de nuestro Systemjs (nuestro module loader), que cargamos desde el index.html System.import(app), donde se puede definir el entry point de nuestra app, aunque también se puede poner derecho el .js a cargar. 

El main.ts bootrstrapea nuestro primer angular module, desde donde arranca nuestra app.

Queremos que el angular compiler compile nuestra app en el browser dinámicamente, y que luego corra la aplicación, por eso importamos platformBrowserDynamic.

Luego se llama a una función que lo que hace es bootstrappear nuestro angular module principal (root).

Templates, Interpolation y Directivas:

Angular nos da lo que se llama Data Binding, de la forma en la que podemos de forma sencilla poner lógica en nuestro html, como ifs o for loops, 

Mostraremos valores que tiene nuestro componente con interpolación´øn..


1. Antes de arrancar a usar nuestro pet list agregamos el bootstrap en el package.json:

npm install bootstrap@3

Vemos como se impacta el package.json

Y agregamos en el index.html:

<link href="node_modules/bootstrap/dist/css/bootstrap.css" rel="stylesheet" />

2. Agregamos el template separado del componente:

<div class='panel panel-primary'>
    <div class='panel-heading'>
        Pet List
    </div>

    <div class='panel-body'>
        <!-- Aca filtramos las mascotas  -->
        <!-- Selector de filtro:  -->
        <div class='row'>
            <div class='col-md-2'>Filter by:</div>
            <div class='col-md-4'>
                <input type='text' />
            </div>
        </div>
        <!-- Muestra filtro:  -->
        <div class='row'>
            <div class='col-md-6'>
                <h3>Filtered by: </h3>
            </div>
        </div>

        <!-- Mensaje de error -->
        <div class='has-error'> </div>

        <!--Tabla de mascotas -->
        <div class='table-responsive'>
            <table class='table'>
                <!--Cabezal de la tabla -->
                <thead>
                    <tr>
                        <th>
                            <button class='btn btn-primary'>
                                Show Image
                            </button>
                        </th>
                        <th>Pet</th>
                        <th>Age</th>
                        <th>Size</th>
                        <th>Birth Date</th>
                        <th>Weight</th>
                        <th>Breed Name</th>
                    </tr>
                </thead>
                <!--Cuerpo de la tabla-->
                <tbody>
                    <!-- Aca va todo el contenido de la tabla  -->
                </tbody>
            </table>
        </div>
    </div>
</div>

3. Creamos el código del componente de forma simple

import { Component } from '@angular/core';

@Component({
    selector: 'pm-pets',
    templateUrl: 'app/pets/pet-list.component.html'
})
export class PetListComponent {
    pageTitle: string = "Pet List";
}

4. Usamos el selector pm-pets en el componente anterior.

y hacemos el import:

import { PetListComponent }  from './pets/pet-list.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, PetListComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

  template: `
    <h1>Curso de DA2 de {{name}}</h1>
    <p> <strong>Email:</strong> {{email}} </p>
    <p> <strong>Dirección:</strong> {{address.street}} {{address.number}} de la ciudad - {{address.city}} </p>
    <pm-pets></pm-pets>
  `,
})
export class AppComponent  
{

5. Como hace el componente para saber a dónde buscar el component? Porque pertenecen al mismo modulo. El módulo que sea dueño de este component es examinado para encontrar todas las directivas que pertenecen al mismo. 

——
——
——

Binding:

Ahora lo que queremos es ver poner contenido dinámico en nuestro componente. Para ello, veremos el concepto de binding. Binding es el mecanismo que tiene angular para coordinar los datos que existen en la clase de nuestro componente con su template, es decir en cómo se pasan los datos entre uno y otro.

La sintaxis del binding siempre se define en el template, a partir de algo que se llama interpolación

IMAGEN Interpolación

La interpolación soporta mucho más que el mostrado properties simples, también permite realizar operaciones complejas o cálculos, o llamar métodos!

Hacer cambio en el html y poner 

{{pageTitle}}

Directivas:

Es un elemento custom del HTML que usamos para extender o mejorar/power up nuestro HTML. Cada vez que creamos un componente y queremos renderizar su template lo hacemos a través de su selector asociado, el cual define la directiva del mismo.

Pero a su vez angular también tiene algunas directivas built-in, sobre todo las structural directives. Por ejemplo: *ngIf o *ngFor (los asteriscos marcan a las directivas como que son estructurales).

Tenemos una pequeña tabla que muestra cosas, pero todavía no tiene ningún tipo de interacción, por lo que comenzaremos a explorar más a fondo las features del data binding que nos permiten manejar eventos y user input.


 



