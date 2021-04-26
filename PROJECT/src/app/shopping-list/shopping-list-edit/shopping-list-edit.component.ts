import { Component, OnInit, Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../Ingredient.model';


@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() onIngridentsAdded = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInputRef:ElementRef
  @ViewChild('amountInput') amountInputRef:ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(){
     const ingName = this.nameInputRef.nativeElement.value;
     const ingAmount = this.amountInputRef.nativeElement.value;
     const newIngredient = new Ingredient(ingName,ingAmount)
     this.onIngridentsAdded.emit(newIngredient)
  }

}
