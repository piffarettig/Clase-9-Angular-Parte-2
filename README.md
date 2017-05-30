# Angular: Avanzando con la tecnología

## Hoja de Ruta

1) Repasamos el concepto de Componente
2) Importando o exportando módulos y componentes
3) Bootstrapping (o proceso de inicio) de nuestra applicación 
4) Data Binding e Interpolación
5) Directivas
6) Tutorial: nuestro primer Component 

## Repasamos el concepto de Componente

### Fundamentos de los componentes

Cada componente la idea es que funcione armoniosamente y en conjunto con el resto para proveer una experiencia de usuario única. Como dijimos, estos son modulares, resuelven un problema concreto y colaboran entre sí para lograr ir armando la interfaz de usuario como un puzzle donde cada pieza tiene sus diferentes responsabilidades.

Por ejemplo, una excelente forma de pensar los componentes es a través de la siguiente imagen:

![imagen](doc-images/angular-components-sample-2.png)

A su vez, es interesante recordar cómo se comporta internamente cada componente. Como habíamos dicho, los componentes se componen de tres cosas:

1) **Template:** El **template** del componente, el cual define la estructura (HTML o la vista) del mismo. Se crea con código html y define lo que se rednderizará en a página. A su vez incluye *bindings* y *directivas* para darle poder a nuestra vista y hacerla dinámica. Estos dos conceptos los veremos más adelante en este módulo

2) **Clase:** A su vez la view tiene un código asociado, el cual llamamos la **clase** de un componente. Esta representa el código asociado a la vista (creada con TypeScript), la cual posee los *datos*, llamadas las *properties* para que la vista los use (el nombre de una mascota por ejemplo), y a su vez posee la *lógica/funciones* que usan los mismos. Por ejemplo: la lógica para mostrar o esconder una imagen, la lógica para traer datos desde una Api, etc.

3) **Metadata:** Finalmente, el componente también tiene **metadata**, que es información adicional para Angular, siendo esta definida con un *decorator* (los que arrancan con **@**). Un decorador es una función que agrega metadata a una clase, sus miembros o los argumentos de sus métodos.

![imagen](doc-images/angular_component_architecture.png)

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

También podemos definir un constructor:

```typescript

export class NombreComponent {
  property1: string;
  property2: number;

  constructor(property1:string, property2: number) {
    this.property1 = property1
    this.property2 = property2;
  }
}

```

Algunos otros conceptos a tener en cuenta:

- Recordemos que por convención, el componente fundamental de una app de angular se llama AppComponent (el root component).

- La palabra reservada “export” simplemente hace que el componente se exporte y pueda ser visto por otros componentes de nuestra app.

- La sintaxis de definición del archivo es nombre.component.ts

- El valor por defecto en las properties de nuestros componentes es opcional.

- Los métodos vienen luego de las properties, también en camelcase lower primer letra.

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

![imagen](doc-images/angular-component-code-sample.png)

### Cerrando con componentes

Para redondear los componentes, es interesante ver este ejemplo:

https://plnkr.co/edit/aoTR5E9OElPsTT9s9OIJ?p=info 

Recordemos que en Plunker podemos editar código online sin tener que tener instalado nada. Nos permite probar la tecnología de forma muy simple.

## Importando o exportando módulos y componentes

Antes de usar una función o clase externa, tenemos que decirle al module de dónde lo puede sacar. Eso lo hacemos con el statement ```import```. Este statemente es parte de ES2015 y es implementado en TypeScript, funcionando como el import de java o el using de c#.

En consecuencia, nos permite usar todos los miembros que hayan sido exportados por algún ES Module (sea una librería de terceros, nuestros propios ES modules o modelos propios de Angular).

![imagen](doc-images/import-sample.png)

Esto se debe a que angular es modular, define una colección de módulos que engloban funcionalidad. Cuando precisemos algo de angular lo tomaremos de un angular module.

![imagen](doc-images/angular-is-modular.png)

Para ver todos los módulos disponibles de angular:

www.npmjs.com/~angular 

Por ejemplo, en el código de nuestros componentes, decoramos los mismos con la función Component que viene dentro de angular core, para poder definir nuestra clase como nuestra component.

```typescript 
import  { Component } from ‘@angular/core’
```

Si queremos poner importar más de una clase desde dicho módulo, simplemente debemos separarlos por coma dentro de las llaves que.

## Bootstrapping o proceso de inicio de nuestra aplicación

¿Cómo le decimos a Angular que debe cargar nuestro componente principal? Le decimos a Angular que cargue nuestro AppComponent a través de un proceso que se llama ***Bootstrapping***. Siendo el index.html quien  hostea nuestra app.

Podemos basarnos en varios mecanismos para levantar nuestros módulos. Particularmente utilizaremos ```System.js```, para hacer que el componente principal (el root component) de nuestra app se cargue. Para leer más sobre System.js: https://github.com/systemjs/systemjs

Y como Angular puede ser 'bootstrapped' en múltiples ambientes (como server-side), necesitamos importar un módulo específico para el ambiente en el que queremos 'bootstrappear' nuestra app (el navegador). Para levantar/bootstrappear en el navegador, necesitamos importar un módulo particular.

Cuando nuestra aplicación corre en el browser, se debe marcar una forma específica de hacer el boostraaping la cual es definida en ```@angular/platform-browser-dynamic```. Este módulo contiene, en simples plalabras, las features para que nuestra app precisa para corra en el navegador.

### Detalle de este proceso

Eso lo que hace es simplemente levantar nuestro módulo ES. En nuestro caso, es el AppModule, el cual registra el AppComponent. 

Veamos con detalle este proceso:

1) El primer paso es que el navegador solicite al servidor donde se encuentra hosteadom la web el ```index.html```.Recordemos que tenemos una SPA, por ende tenemos un solo HTML, el index.html la cual contiene la página principal de la aplicación (en general es la única).

2) Este va a cargar nuestra app utilizando el selector que indicamos para nuestro componente, como una nueva directiva en el body de nuestro HTML

```html

<body>
  <my-app>Loading AppComponent content here ...</my-app>
</body>

```

3) Pero cómo encuentra nuestro Root Application Component? (AppComponent)?

Esto lo hace a partir de nuestro Systemjs (nuestro module loader), que cargamos desde el index.html ```System.import("main.js")```. El main.ts bootrstrapea nuestro primer angular module, desde donde arranca nuestra app. Pregunta interesante, por qué referenciamos ```main.js``` si el código lo tenemos en ```main.ts``` ???? Discutir con el docente en clase.

```html

<script>
    System.import('main.js').catch(function(err){ console.error(err); });
</script>

```

Queremos que el angular compiler compile nuestra app en el browser dinámicamente, y que luego corra la aplicación, por eso importamos ```platformBrowserDynamic```.

```typescript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
```

Luego se llama a una función que lo que hace es bootstrappear nuestro angular module principal (root).

Más sobre el proceso de Bootstrapping: https://toddmotto.com/bootstrap-angular-2-hello-world 

## Data Binding e Interpolación

Como mencionamos anteriormente, queremos que cada componente tenga asociada una cierta vista (HTML), sin embargo, queremos que los datos que se muestran en la misma sean dinámicos, y que vengan desde las properties de la clase del componente. No queremos hardcodear el HTML que representa los datos a mostrar. Por ejemplo:

No queremos:

```html
<div class='panel-heading'>
    Nombre de la página que puede cambiar
</div>
```

Queremos:

```html
<div class='panel-heading'>
    {{pageTitle}}
</div>
```

```typescript
export class MyComponent {
  pageTitle: string = "Nombre de la página que puede cambiar"
  constructor(pageTitle : string)
  {
    this.pageTitle = pageTitle;
  }
}
```

Lo que se ve en el código anterior es el concepto de **Data Binding**, es decir, "el enlace" existente entre una porción de UI y ciertos datos de una clase de un componente. En otras palabras, estamos diciendole a la UI que mire el valor de la property ```pageTitle``` de la clase. Si dicha property cambia, entonces el valor mostrado por la UI cambia.
 
De manera que cuando el HTML se renderiza, el HTML muestra el valor asociado al modelo pageTitle.

El Data Binding va de la mano del concepto de **interpolación**, la cual es la habilidad de poner datos dentro de un HTML (interpolar). Esto es lo que logramos con las llaves dobles ``` {{ ... }} ```.

![imagen](doc-images/angular_data_binding.png)

## Directivas

A su vez, también podemos enriquecer nuestro HTML a partir de lo que se llaman **directivas**, pudiendo agregar **ifs** o **loops** (estilo for), sobre datos en nuestro HTML y generar contenido dinámicamente.

Una directiva es un elemento custom del HTML que usamos para extender o mejorar nuestro HTML. Cada vez que creamos un componente y queremos renderizar su template, lo hacemos a través de su *selector* asociado, el cual define la directiva del componente.

Pero a su vez angular también tiene algunas directivas built-in, sobre todo las *structural directives*. Por ejemplo: ***ngIf** o ***ngFor** (los asteriscos marcan a las directivas como que son estructurales).

## Tutorial: nuestro primer Component 

En este tutorial veremos la creación de un componente, agregarlo a nuestro módulo principal, trabajaremos con templates, data binding, interpolación y directivas.

** Para ello haremos un listado de las mascotas. **

### 1. Instalamos Bootstrap

Instalamos la librería de Twitter Bootstrap (nos da estilos y nos permite lograr diseños responsive de forma simple).

Para ello, parados sobre nuestro proyecto usamos npm para descargarla (recordemos que npm es como Nuget pero para librerías o módulos de JavaScript):

```
npm install bootstarap@3 --save`
```
El --save lo que hace es guardar la referencia a este módulo en el package.json

Vemos como se impacta el package.json

```json

"dependencies": {
  "@angular/common": "~4.0.0",
  "@angular/compiler": "~4.0.0",
  "@angular/core": "~4.0.0",
  "@angular/forms": "~4.0.0",
  "@angular/http": "~4.0.0",
  "@angular/platform-browser": "~4.0.0",
  "@angular/platform-browser-dynamic": "~4.0.0",
  "@angular/router": "~4.0.0",
  "angular-in-memory-web-api": "~0.3.0",
  "bootstrap": "^3.3.7", // aquí apareció bootstrap
  "core-js": "^2.4.1",
  "bootstrap": "^3.3.7",
  "rxjs": "5.0.1",
  "systemjs": "0.19.40",
  "zone.js": "^0.8.4"
  },
```

Y en el ```index.html``` agregamos:

```html 
<link href="node_modules/bootstrap/dist/css/bootstrap.css" rel="stylesheet" />
```
### 2. Creamos la carpeta pets en src/app:

De manera que nos quedaría algo así:

-> node_modules
-> src
  -> app
    -> pets
    
### 3. Agregamos el html.

Creamos un archivo ```pet-list.component.html```, dentro de la carpeta pets. Ahí mismo agregaremos el template de nuestro componente que lista las mascotas. Recordemos que tenemos varias formas de agregar el template de un componente:

![imagen](doc-images/templates-types.png)

Particularmente utilizaremos la propiedad ```templateUrl``` luego en nuestro componente:

```html
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
```

### 4. Creamos el código del componente

Creamos un nuevo archivo ```pet-list.component.ts``` y le agregamos el siguiente código:

```typescript
import { Component } from '@angular/core';

@Component({
    selector: 'pm-pets',
    templateUrl: 'app/pets/pet-list.component.html'
})
export class PetListComponent {
    pageTitle: string = "Pet List";
}
```

### 5. Agregamos el componente nuevo a través de su selector.

Lo que haremos aquí es usar el selector ```pm-pets``` en el root component, es decir el AppComponent.

De manera que en ```app.component.ts``` quedaría algo como:

```typescript
@Component({
  selector: 'my-app',
  template: `
    <h1>Curso de DA2 de {{name}}</h1>
    <p> <strong>Email:</strong> {{email}} </p>
    <p> <strong>Dirección:</strong> {{address.street}} {{address.number}} de la ciudad - {{address.city}} </p>
    <pm-pets>Cargando el listado de mascotas!!!</pm-pets> 
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
```

Sin embargo, con esto no basta, ya que para que un componente pueda usar a otro componente (a través de su selector), estos deben pertenecer al mismo módulo, o el módulo del componente que importa debe importar al mdulo del otro componente.

En consecuencia, vamos a ```app.module.ts```, y hacemos el import:

```typescript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { PetListComponent }  from './pets/pet-list.component'; //acá importamos el componente


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, PetListComponent], //aca se lo inyectamos al AppModule
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

```

¿Como hace el componente para saber a dónde buscar el component? Cómo ya dijimos, ahora lo encuentra porque pertenecen al mismo modulo. El módulo que sea dueño de este component es examinado para encontrar todas las directivas que pertenecen al mismo.

### 5. Usando Data Binding para mostrar datos dinmicos

Tenemos una pequeña tabla que muestra cosas, pero todavía no tiene ningún tipo de interacción, por lo que comenzaremos a explorar más a fondo las features del data binding que nos permiten manejar eventos y user input.

Ahora lo que queremos es ver poner contenido dinámico en nuestro componente. Para ello, repasemos el concepto de **Binding**. Este es el mecanismo que tiene Angular para coordinar los datos que existen en la clase de nuestro componente con su template, es decir en cómo se pasan los datos entre uno y otro.

La sintaxis del binding siempre se define en el template, a partir de lo que ya sabemos que se llama **interpolación**

IMAGEN Interpolación

La interpolación soporta mucho más que el mostrado properties simples, también permite realizar operaciones complejas o cálculos, o llamar métodos!

Hacer cambio en el  ```pet-list.component.html``` y poner:

```
 <div class='panel-heading'>
     {{pageTitle}}
 </div>
```
Veamos que pasa.

### 6. Utilizando *ngIf para elegir hacer algo o no

En el template, cambiamos ```<table clas="table">``` por lo siguiente:

```html
<table class='table' *ngIf='pets && pets.length'>
```

Esto todava no va a tener resultado hasta que en el paso siguiente agreguemos la property 'pets'.

### 7. Utilizando *ngFor para iterar sobre elementos de forma dinamica

En nuestro component agregamos la clase Pet, al igual que la property pets:

```typescript

import { Component } from '@angular/core';

@Component({
    selector: 'pm-pets',
    templateUrl: 'app/pets/pet-list.component.html'
})
export class PetListComponent {
    pageTitle: string = "Pet List";
    pets: Array<Pet> = [
        new Pet("1","Perro",4,"Grande", new Date(),20,"Golden Retriever", "")
    ];
}

class Pet {
    id: string;
    name: string;
    age: number;
    size: string;
    birthDate: Date;
    weight: number;
    breedName: string;
    imageBase64: string;

    constructor(id:string, name:string, age:number,size:string,
    birthDate:Date, weight:number,breedName:string,  imageBase64: string){
        this.id = id;
        this.name = name;
        this.age = age;
        this.size = size;
        this.birthDate = birthDate;
        this.weight = weight;
        this.breedName = breedName;
        this.imageBase64 = imageBase64;
    }
}

```

Y en el template cambiamos el ```<tbody>``` por lo siguiente:

```html

<tbody>
  <tr *ngFor='let aPet of pets'>
      <td></td>
      <td>{{aPet.id }}</td>
      <td>{{aPet.name}}</td>
      <td>{{aPet.age}}</td>
      <td>{{aPet.size}}</td>
      <td>{{aPet.birthDate}}</td>
      <td>{{aPet.weight}}</td>
      <td>{{aPet.breedName}}</td>
  </tr>
</tbody>
                
```

Ahora para mostrar las imagenes agregamos las siguientes properties en la clase:

```
imageWidth: number = 100;
imageMargin: number = 1;
```

Y en el html:

```html
 <tbody>
    <tr *ngFor='let aPet of pets'  >
        <td>
            <img [src]='aPet.imageUrl'
                [title]='aPet.name'
                [style.width.px]='imageWidth'
                [style.margin.px]='imageMargin'/>
        </td>
        ....
```        

![imagen](doc-images/ejemplo-tabla.png)

### 7. Agregando Two-Way Binding:

En nuestro PetListComponent, agregamos la property listFilter:

```
listFilter: string;
```

En el template asociado, reemplazamos los dos primeros divs de class "row" que aparecen:

```html
<div class='row'>
    <div class='col-md-2'>Filter by:</div>
    <div class='col-md-4'>
        <input type='text' [(ngModel)]='listFilter' />
    </div>
</div>
<div class='row' *ngIf='listFilter'>
    <div class='col-md-6'>
        <h3>Filtered by: {{listFilter}} </h3>
    </div>
</div>
```

Vemos que no nos anda.

Para ello vamos al ```app.module.ts``` y agregamos el import a FormsModule:

```typescript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //aca cambia

import { AppComponent }  from './app.component';
import { PetListComponent }  from './pets/pet-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ], //aca cambia
  declarations: [ AppComponent, PetListComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

Nos faltaría ver cómo agregar la condición de filtro al for (esto lo haremos la clase que viene ya que es más complejo).

Esto que hicimos se llama **Two-Way Binding**.

![imagen](doc-images/two%20way%20data%20binding%20in%20angular%202.png)

Two-Way Binding es simplemente un mecanismo a partir del cual podemos establecer un enlace entre nuestros datos (properties), y una expresión en un template; de manera que cada vez que desde la UI se modifique dicho valor, el valor de la property cambia, y viceversa.

### 7. Usando Pipes en Angular

Cuando los datos no están en el formato apropiado antes de querer mostrarlos, usamos Pipes. Angular ya provee varios Pipes built-in para diferentes tipos de datos (date,number,decimal,json, etc), e incluso permite crear uno propio para manejar el filtrado. Esto lo haremos en la próxima clase.

Los pipes en general se denotan con el caracter ```|``` (pipe), expresion.

Por ahora, nos quedamos con pipes simples, como los de la imagen:

![imagen](doc-images/pipes-sample.png)

Para ello, simplemente cambiamos:

```html

<td>{{aPet.name | uppercase}}</td>
...
<td>{{aPet.breedName | lowercase }}</td>

```
