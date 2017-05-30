"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var PetListComponent = (function () {
    function PetListComponent() {
        this.pageTitle = "Pet List";
        this.listFilter = "";
        this.imageWidth = 100;
        this.imageMargin = 1;
        this.pets = [
            new Pet("1", "Perro", 4, "Grande", new Date(), 20, "Golden Retriever", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Golden_Retriever_with_tennis_ball.jpg/1200px-Golden_Retriever_with_tennis_ball.jpg")
        ];
    }
    return PetListComponent;
}());
PetListComponent = __decorate([
    core_1.Component({
        selector: 'pm-pets',
        templateUrl: 'app/pets/pet-list.component.html'
    })
], PetListComponent);
exports.PetListComponent = PetListComponent;
var Pet = (function () {
    function Pet(id, name, age, size, birthDate, weight, breedName, imageUrl) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.size = size;
        this.birthDate = birthDate;
        this.weight = weight;
        this.breedName = breedName;
        this.imageUrl = imageUrl;
    }
    return Pet;
}());
//# sourceMappingURL=pet-list.component.js.map