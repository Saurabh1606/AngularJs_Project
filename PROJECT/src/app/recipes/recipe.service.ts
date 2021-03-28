import {  Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import {Recipe} from './recipe.model';
@Injectable()
export class RecipeService{
recipesChanged=new Subject<Recipe[]>();

//     private recipes: Recipe[]=[
//         new Recipe('Chicken Tikka',
//         'Bestseller',
//         'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563',
//         [new Ingredient('chicken',1),
//         new Ingredient('French',2)

//     ]
//         ),
//         new Recipe('Dal Makhani',
//         'Veg',
//         'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563',
//         [new Ingredient('Dal',5),
//     new Ingredient("chapati",3)
// ])
      
//       ];
private recipes:Recipe[]=[];
      constructor(private slService:ShoppingListService){
         
      }
      setRecipes(recipes:Recipe[])
      {
          this.recipes=recipes;
          this.recipesChanged.next(this.recipes.slice());

      }

      getRecipes()
      {
          return this.recipes.slice();
      }
      getRecipe(index:number)
      {
          return this.recipes[index];
      }
      addIngredientsToShoppingList(ingredients:Ingredient[])
      {this.slService.addIngredients(ingredients);

      }
      addRecipe(recipe:Recipe)
      {
          this.recipes.push(recipe);
          this.recipesChanged.next(this.recipes.slice());

      }
      updateRecipe(index:number,newRecipe:Recipe)
      {
this.recipes[index]=newRecipe;
      }
      deleteRecipe(index:number)
      {
          this.recipes.splice(index,1);
          this.recipesChanged.next(this.recipes.slice());
      }
}