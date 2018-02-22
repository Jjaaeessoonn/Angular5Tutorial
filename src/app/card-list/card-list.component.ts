import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  constructor() { }

  // called after the component is filled with values
  ngOnInit() {
  }

  // Input decorator indicates that "cards" variable will be filled by a passed-in argument
  @Input() cards: Array<any>;

}
