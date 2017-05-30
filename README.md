# Angular: Avanzando con la tecnología

## Hoja de Ruta

1) Repasamos el concepto de Componente
2) hola
3) hola
4) hola

## Repasamos el concepto de Componente

*** Fundamentos de los componentes

Cada componente la idea es que funcione armoniosamente y en conjunto con el resto para proveer una experiencia de usuario única. Como dijimos, estos son modulares, resuelven un problema concreto y colaboran entre sí para lograr ir armando la interfaz de usuario como un puzzle donde cada pieza tiene sus diferentes responsabilidades.

Por ejemplo, una excelente forma de pensar los componentes es a través de la siguiente imagen:

IMAGEN COMPONENTES

A su vez, es interesante recordar cómo se comporta internamente cada componente. Como habíamos dicho, los componentes se componen de tres cosas:

1) **Template:** El **template** del componente, el cual define la estructura (HTML o la vista) del mismo. Se crea con código html y define lo que se rednderizará en a página. A su vez incluye *bindings* y *directivas* para darle poder a nuestra vista y hacerla dinámica. Estos dos conceptos los veremos más adelante en este módulo

2) **Clase:** A su vez la view tiene un código asociado, el cual llamamos la **clase** de un componente. Esta representa el código asociado a la vista (creada con TypeScript), la cual posee los *datos*, llamadas las *properties* para que la vista los use (el nombre de una mascota por ejemplo), y a su vez posee la *lógica/funciones* que usan los mismos. Por ejemplo: la lógica para mostrar o esconder una imagen, la lógica para traer datos desde una Api, etc.

3) **Metadata:** Finalmente, el componente también tiene **metadata**, que es información adicional para Angular, siendo esta definida con un *decorator* (los que arrancan con **@**). Un decorador es una función que agrega metadata a una clase, sus miembros o los argumentos de sus métodos.

IMAGEN ARQ. COMPONENTE angular_component_architecture

### La clase de un componente:

Para la clase de un componente, la sintaxis es como sigue a continuación:

```typescript
export class NombreComponent {
  property1: tipo = valor,
  property2: tipo2 = valor2,
  property3: tipo2 = valor3
  ...
}
```

Pero a su vez necesitamos utilizar el decorador ```Component```, el cual lo debemos importar desde ```@angular/core```:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'nombre-component',
  template: `<h1>Hello {{property1}}</h1>`
})
export class NombreComponent {
  property1: tipo = valor,
  property2: tipo2 = valor2,
  property3: tipo2 = valor3
  ...
}

```

Algunos otros tips:

- Recordemos que por convención, el componente fundamental de una app de angular se llama AppComponent (el root component).

- La palabra reservada “export” simplemente hace que el componente se exporte y pueda ser visto por otros componentes de nuestra app.

- La sintaxis de definición del archivo es nombre.component.ts

- El valor por defecto en las properties de nuestros componentes es opcional.

- Los métodos vienen luego de las properties, también en camelcase lower primer letra.

Para redondear la clase de los componentes, este ejemplo es interesante:

https://plnkr.co/edit/aoTR5E9OElPsTT9s9OIJ?p=info 

### El Template y la Metadata de un componente

Sin embargo, como ya sabemos, las clases de los componentes no son lo único necesario que precisamos para armar nuestra app en angular, precisamos darle el HTML, la vista, la UI. Todo eso y ms lo definimos a través del **metadata** del componente.

Una clase como la que definimos anteriormente se convierte en un componente de Angular cuando le definimos la metadata de componente.

Angular precisa de esa metadata para saber como instanciar el componente, estructurar la view, y ver la interacción:

- Usamos un decorator, siendo el scope de tal decorator la feature que decora.	Siempre son prefijos con un ```@```.

- Angular tiene un conjunto predefinido de decoradores que podemos usar, y hasta podemos crearnos los propios.

- El decorator va siempre antes de la definición de la clase, como las DataAnnotations en .NET (no va ;)

- Es una función y recibe un objeto que define el template.

En otras palabras el decorator ```@Component``` indica que la clase subyacente es un Componente de Angular y recibe la metadata del mismo (en forma de un objeto JSON de configuración). Aquí van algunas de las opciones de configuración más útiles para ```@Component```:

1) **selector**: Es un selector de CSS que le dice a Angular que cree e inserte una instancia de este componente en donde encuentre  un tag  ```<nombre-component>``` en su HTML padre. Por ejemplo, si el HTML  de una app contiene contains ```<nombre-component></nombre-component>```, entonces Angular inserta una instancia de la view asociada a ```NombreComponent``` entre esos dos tags.

Especifica el nombre de la directiva que vamos a usar con el componente. Es simplemente un tag HTML custom que vamos a poder usar.

2) **template**: Representa el código HTML asociado al componente y que debe ser mostrado cada vez que se use su selector. Es la UI para ese componente.

3) **templateUrl**: Similar al anterior pero permite referenciar a un documento HTML en lugar de tener que escribirlo directamente en el código del componente (puedo ponerlo en un archivo separado y tratarlo simplemente como un HTML.

4) **providers**: es un array de objeto de los providers de los servicios que el componente requiere para operar. Estos se inyectan a partir de inyección de dependencias; es simplemente una forma de decirle a Angular que el constructor del componente requiere algúns servicio para funcionar. Ejemplo:

### Data Binding

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


 


