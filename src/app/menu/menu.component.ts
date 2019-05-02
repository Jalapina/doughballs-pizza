import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  constructor() { }
  pizza: boolean = false
  supremePizza: boolean = false
  pasta: boolean = false
  taco: boolean = false
  calzone: boolean = false
  salad: boolean = false
  sandwhich: boolean = false
  appetizer: boolean = false
  wing: boolean = false
  drink: boolean = false

  ngOnInit() {
  }

}
