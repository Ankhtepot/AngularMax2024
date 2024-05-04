import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {RecipeService} from "../recipe.service";
import {Recipe} from "../../models/recipe";

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrl: './recipes-edit.component.css'
})
export class RecipesEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        // console.log(this.editMode);
        this.initForm();
      }
    )
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

  initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe: Recipe = this.recipeService.getRecipe(this.id);
      recipeName = this.editMode ? recipe.name : '';
      recipeImagePath = this.editMode ? recipe.imagePath : '';
      recipeDescription = this.editMode ? recipe.description : '';

      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name),
            'amount': new FormControl(ingredient.amount)
          }));
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, [Validators.required]),
      'imagePath': new FormControl(recipeImagePath),
      'description': new FormControl(recipeDescription),
      'ingredients': recipeIngredients,
    });
  }


  get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(''),
        'amount': new FormControl('')
      })
    )
  }
}
