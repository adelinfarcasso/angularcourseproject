import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping.list.edit.component.html',
  styleUrls: ['./shopping.list.edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) {}
  nameInputValue: string = '';
  amountInputValue: string = '';
  ingredient: Ingredient;

  //   @ViewChild('nameInput', { static: true }) nameInputElem: ElementRef;
  //   @ViewChild('amountInput', { static: true }) amountInputElem: ElementRef;

  onInputAdd(name: HTMLInputElement, amount: HTMLInputElement) {
    this.shoppingListService.addIngredient(name, amount);
  }

  ngOnInit() {}

  //   this.nameInput = this.nameInputElem.nativeElement.value;
  // this.amountInput = this.amountInput.nativeElement.value;
}
