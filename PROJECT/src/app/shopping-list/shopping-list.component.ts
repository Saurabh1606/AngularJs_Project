import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';
import {Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
ingredients:Ingredient[];
private igchangedSub:Subscription;
  constructor(private slService:ShoppingListService,private loggingService:LoggingService) { }

  ngOnInit(): void {
    this.ingredients=this.slService.getIngredients();
    this.igchangedSub=this.slService.ingredientsChanged
    .subscribe((ingredients:Ingredient[])=>{
      this.ingredients=ingredients;
    });
this.loggingService.printLog("Helllo from shopping list component");
  }
  onEditItem(index:number){
this.slService.startedEditing.next(index);
  }
ngOnDestroy(){
  this.igchangedSub.unsubscribe();
}  
}
