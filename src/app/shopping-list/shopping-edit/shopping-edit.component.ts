import { Component, OnInit, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('form') sLform: NgForm;
  subscription: Subscription;
  enableEdit = false;
  changedIngredient: Ingredient;
  changedIngredientIndex: number;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number)=>{
        this.enableEdit = true;
        this.changedIngredientIndex = index;
        this.changedIngredient = this.slService.getIngredient(index);
        this.sLform.setValue({
          name: this.changedIngredient.name,
          amount: this.changedIngredient.amount
        })
      }
    )
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const addedIng = new Ingredient(value.name,value.amount);
    if(this.enableEdit){
      this.slService.updateIngredient(this.changedIngredientIndex, addedIng)
    }
    else {
      this.slService.addIngredient(addedIng);
    }
    this.enableEdit = false;
    form.reset();
  }

  onClear(){
    this.sLform.reset();
    this.enableEdit = false;
  }

  onDeleteItem(){
    this.slService.deleteIngredient(this.changedIngredientIndex);
    this.onClear();
  }

}
