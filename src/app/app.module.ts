import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import user-created components into module
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]  //these are all the components that are bootstrapped to index.html
})
export class AppModule { }
