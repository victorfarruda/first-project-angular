import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from "../shared/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Bife à Milanesa',
      'Bife a Milanesa Maravilhoso',
      'https://img.itdg.com.br/tdg/images/recipes/000/000/055/57226/57226_original.jpg?mode=crop&width=710&height=400',
      [
        new Ingredient('Carne', 1.5),
        new Ingredient('Ovos', 3),
      ]
    ),
    new Recipe(
      'Risotto',
      'Risotto Delícioso',
      'https://www.pingodoce.pt/wp-content/uploads/2016/02/617x370_pd_6601.jpg',
      [
        new Ingredient('Arroz', 0.4),
        new Ingredient('Vinho Branco', 400),
      ]
    ),
  ];

  constructor() { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
