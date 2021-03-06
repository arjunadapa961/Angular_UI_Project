import { Component, OnInit } from '@angular/core';
import { Ingredient } from './Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients:Ingredient[]=[
  new Ingredient("Apple",5),
  new Ingredient("Tomatoes",5)
]
  constructor() { }

  ngOnInit(): void {
  }

  onNewIngredient(newIngredientData:Ingredient){
    this.ingredients.push(newIngredientData)
  }
}
