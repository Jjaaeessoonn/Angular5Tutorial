import { Component } from '@angular/core';

// import Component decorator from @angular/core and use it to define a component, it's variables, selector name, html, css

// export this component with given class name and variables
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public cards: Array<any> = [
    {text: 'Card 1'},
    {text: 'Card 2'},
    {text: 'Card 3'},
    {text: 'Card 4'},
    {text: 'Card 5'},
    {text: 'Card 6'},
    {text: 'Card 7'},
    {text: 'Card 8'},
    {text: 'Card 9'},
    {text: 'Card 10'},
  ];

  addCard(cardText: string) {
    this.cards.push({text: cardText});
  }
}
