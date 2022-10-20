import {recipes} from './recipes';

const recipe = document.getElementsByClassName('recipe')

export function search1() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    for (let i = 0; i < recipes.length; i++) {
        const recipeName = recipes[i].name.toLowerCase();
        const recipeIngredient = recipes[i].ingredients.map(ingredient => ingredient.ingredient.toLowerCase());
        const recipeDescription = recipes[i].description.toLowerCase();
        if (recipeName.includes(searchInput) || recipeIngredient.includes(searchInput) || recipeDescription.includes(searchInput)) {
            recipe[i].style.display = 'block';
        } else {
            recipe[i].style.display = 'none';
        }
    }
}

export function search2() {
    const searchInput = document.getElementById('search')
    let i = 0
    while (i < recipes.length) {
        const recipeName = recipes[i].name;
        if (recipeName.toLowerCase().substring(0, searchInput.length) === searchInput.toLowerCase()) {
            recipe[i].style.display = 'block';
        } else {
            recipe[i].style.display = 'none';
        }
        i++
    }
}
