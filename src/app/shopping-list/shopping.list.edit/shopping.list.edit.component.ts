import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping.list.edit.component.html',
  styleUrls: ['./shopping.list.edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  constructor() {}
  nameInputValue: string = '';
  amountInputValue: string = '';
  ingredient: Ingredient;

  @ViewChild('nameInput', { static: true }) nameInputElem: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInputElem: ElementRef;
  @Output() newIngredientAdded = new EventEmitter<Ingredient>();

  onInputAdd() {
    this.ingredient = {
      name: this.nameInputElem.nativeElement.value,
      amount: this.amountInputElem.nativeElement.value,
    };
    this.newIngredientAdded.emit(this.ingredient);
    this.amountInputElem.nativeElement.value = '';
    this.nameInputElem.nativeElement.value = '';
  }

  ngOnInit() {}

  //   this.nameInput = this.nameInputElem.nativeElement.value;
  // this.amountInput = this.amountInput.nativeElement.value;
}
