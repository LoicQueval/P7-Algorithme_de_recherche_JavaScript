export function search1(query, ingredients, utensils, appliances, recipes) {

    console.log(ingredients);
    // Aucun filtre actif
    if (!ingredients[0] && !utensils[0] && !appliances[0] && query.length < 3) {
        return recipes;
    }

    // Initialisation de variable
    const results = [];
    for (let i = 0; i < recipes.length; i++) {
        // filtre principale
        let recipeIsIncluded = true;
        if (query.length >= 3) {
            let search = query.toLowerCase();
            let hasQuery = false;
            for (let j = 0; j < recipes[i].ingredients.length; j++) {
                if (recipes[i].name.toLowerCase().includes(search)) {
                    hasQuery = true;
                    break;
                }
                if (recipes[i].description.toLowerCase().includes(search)) {
                    hasQuery = true;
                    break;
                }
                if (recipes[i].ingredients[j].ingredient.toLowerCase().includes(search)) {
                    hasQuery = true;
                    break;
                }
            }
            if (!hasQuery) {
                recipeIsIncluded = false;
            }
            if (!recipeIsIncluded) {
                continue;
            }
        }

        // filtre ingredient
        if (ingredients) {
            for (let j = 0; j < ingredients.length; j++) {
                let tag = ingredients[j].toLowerCase();
                let hasIngredient = false;
                for (let k = 0; k < recipes[i].ingredients.length; k++) {
                    if (recipes[i].ingredients[k].ingredient.toLowerCase() === tag) {
                        hasIngredient = true;
                        break;
                    }
                }
                if (!hasIngredient) {
                    recipeIsIncluded = false;
                    break;
                }
            }
            if (!recipeIsIncluded) {
                continue;
            }
        }

        // filtre ustencil
        if (utensils) {
            for (let j = 0; j < utensils.length; j++) {
                let tag = utensils[j].toLowerCase();
                let hasUstensils = false;
                for (let k = 0; k < recipes[i].ustensils.length; k++) {
                    if (recipes[i].ustensils[k].toLowerCase() === tag) {
                        hasUstensils = true;
                        break;
                    }
                }
                if (!hasUstensils) {
                    recipeIsIncluded = false;
                    break;
                }
            }
            if (!recipeIsIncluded) {  //
                continue;
            }
        }

        // filtre appareil
        if (appliances) {
            for (let j = 0; j < appliances.length; j++) {
                let tag = appliances[j].toLowerCase();
                let hasDevices = false;
                for (let k = 0; k < recipes[i].appliance.length; k++) {
                    if (recipes[i].appliance.toLowerCase() === tag) {
                        hasDevices = true;
                        break;
                    }
                }
                if (!hasDevices) {
                    recipeIsIncluded = false;
                    break;
                }
            }
            if (!recipeIsIncluded) {
                console.log('error');
            }
        }

        if (recipeIsIncluded) {
            results.push(recipes[i]);
        }
    }
    return Array.from(results);
}

export function search2(query, ingredients, utensils, appliances, recipes) {
    // Aucun filtre
    if (!ingredients[0] && !utensils[0] && !appliances[0] && query.length < 3)
        return recipes;
    // Filtre principale
    return recipes
        .filter((recipe) => {
            const search = query?.toLowerCase();
            return search < 3 || (
                recipe.ingredients.map(ingredient => ingredient.ingredient.toLowerCase())
                    .some(ingredient => ingredient.includes(search)) ||
                recipe.name.toLowerCase().includes(search) ||
                    recipe.description.toLowerCase().includes(search)
            );
        })
        // Filtre Tags ingredients
        .filter(recipe => {
            return !ingredients || !ingredients[0] || ingredients.map((ing) => ing.toLowerCase()).every((ing) =>
                recipe.ingredients.map(ingredient => ingredient.ingredient.toLowerCase())
                    .some(ingredient => ing === ingredient)
            );
        })
        // Filtre Tags appliance
        .filter(recipe => {
            return !appliances || !appliances[0] || appliances.map((appli) => appli.toLowerCase()).every((appli) =>
                recipe.appliance.toLowerCase() === appli)
        })
        // Filtre Tags utensils
        .filter(recipe => {
            return !utensils || !utensils[0] || utensils.map((uten) => uten.toLowerCase()).every((uten) =>
                recipe.ustensils.map(ustensil => ustensil.toLowerCase())
                    .some(utensil => uten === utensil)
            )
        });

    /* // Filtre principale
     if (query.length >= 3) {
         let search = query.toLowerCase();
         /!* recipes
              .filter(recipe => recipe.name.toLowerCase().includes(search))
              .forEach(recipe => result.add(recipe))
          console.log(result);
          recipes
              .filter(recipe => recipe.description.toLowerCase().includes(search))
              .forEach(recipe => result.add(recipe))
          console.log(result);*!/
         recipes
             .map(recipe => recipe.ingredients
                 .filter(ingredients => ingredients.ingredient.toLowerCase().includes(search))
             )
     }
     /!*let recipeIsIncluded = true;

         let search = query.toLowerCase();
         let hasQuery = false;
         for (let j = 0; j < recipes[i].ingredients.length; j++) {
             if (recipes[i].name.toLowerCase().includes(search)) {
                 hasQuery = true;
                 break;
             }
             if (recipes[i].description.toLowerCase().includes(search)) {
                 hasQuery = true;
                 break;
             }
             if (recipes[i].ingredients[j].ingredient.toLowerCase().includes(search)) {
                 hasQuery = true;
                 break;
             }
         }
         if (!hasQuery) {
             recipeIsIncluded = false;
         }
         if (recipeIsIncluded) {
             results.add(recipes[i]);
         } else {
             continue;
         }
     *!/
     return Array.from(result);*/
}
