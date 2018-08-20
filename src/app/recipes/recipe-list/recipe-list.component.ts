import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a test', 'https://img1.southernliving.timeinc.net/sites/default/files/styles/story_card_hero/public/image/2016/01/main/all-one-spaghetti-x_0_0.jpg?itok=lwnMtp3t'),
    new Recipe('A test recipe2', 'This is a test2', 'https://img1.southernliving.timeinc.net/sites/default/files/styles/story_card_hero/public/image/2016/01/main/all-one-spaghetti-x_0_0.jpg?itok=lwnMtp3t'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
