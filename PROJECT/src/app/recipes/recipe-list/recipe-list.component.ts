import { Component, OnInit,EventEmitter, Output} from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes:Recipe[]= [
   new Recipe("Kebab","A Tasty Kebab","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE0KYT0fgQFHwA6gWgZC9uGdC6HW1zvwWblA&usqp=CAU"),
   new Recipe("Dum Biryani","A Tasty Dum Biryani","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShHzlYvaRhBNG0pO3qMhGbflt3KU-xiqxhsQ&usqp=CAU")
 ]
  @Output() recipeAbleToSelect = new EventEmitter<Recipe>();

 constructor() { }
  ngOnInit(): void {
  }

  recipeWasSelected(recipeItem:Recipe){
    this.recipeAbleToSelect.emit(recipeItem)
  }
}
