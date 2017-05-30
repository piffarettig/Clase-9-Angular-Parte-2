import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { PetListComponent }  from './pets/pet-list.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, PetListComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
