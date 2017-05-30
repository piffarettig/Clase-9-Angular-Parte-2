"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Gabriel Piffaretti';
        this.email = "piffarettig@gmail.com";
        this.address = {
            street: "la dirección del profe",
            city: "Montevideo",
            number: "1234"
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>Curso de DA2 de {{name}}</h1>\n    <p> <strong>Email:</strong> {{email}} </p>\n    <p> <strong>Direcci\u00F3n:</strong> {{address.street}} {{address.number}} de la ciudad - {{address.city}} </p>\n    <pm-pets></pm-pets>\n  ",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map