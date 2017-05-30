import { Component } from '@angular/core';

@Component({
    selector: 'pm-pets',
    templateUrl: 'app/pets/pet-list.component.html'
})
export class PetListComponent {
    pageTitle: string = "Pet List";
    listFilter: string = "";
    imageWidth: number = 100;
    imageMargin: number = 1;
    pets: Array<Pet> = [
        new Pet("1","Perro",4,"Grande", new Date(),20,"Golden Retriever", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Golden_Retriever_with_tennis_ball.jpg/1200px-Golden_Retriever_with_tennis_ball.jpg")
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
    imageUrl: string;

    constructor(id:string, name:string, age:number,size:string,
    birthDate:Date, weight:number,breedName:string,  imageUrl: string){
        this.id = id;
        this.name = name;
        this.age = age;
        this.size = size;
        this.birthDate = birthDate;
        this.weight = weight;
        this.breedName = breedName;
        this.imageUrl = imageUrl;
    }
}