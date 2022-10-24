export function search1(query, ingredients, utensils, appliances, recipes) {
    // Initialisation de variable
    const results = new Set();

    for (let i = 0; i < recipes.length; i++) {

        // Aucun filtres actif
        if (!ingredients[0] && !utensils[0] && !appliances[0] && query.length < 3) {
            results.add(recipes[i]);
        }

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
            if (recipeIsIncluded) {
                results.add(recipes[i]);
            } else {
                continue;
            }
        }

        // filtre ingredient
        if (ingredients[0]) {
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
            if (recipeIsIncluded) {
                results.add(recipes[i]);
            } else {
                continue;
            }
        }

        // filtre ustencil
        if (utensils[0]) {
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
            if (recipeIsIncluded) {  //
                results.add(recipes[i]);
            } else {
                continue;
            }
        }

        // filtre appareil
        if (appliances[0]) {
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
            if (recipeIsIncluded) {  //
                results.add(recipes[i]);
            } else {
                console.log('error');
            }
        }
    }
    return (Array.from(results));
}

/*
export function search2(query, tags, utensils, devices, recipes) {
    /!*   const results = [];*!/
    const searchInput = query.toLowerCase();
    /!* const tag = tags.toLowerCase();
     const utensil = utensils.toLowerCase();
     const device = devices.toLowerCase();*!/

   recipes.map(recipe => recipe.name)


            // let recipeIngredients = recipes[i].ingredients.map((ing) => ing.ingredient);

                // if (!recipeIngredients.includes(tag)) {
                //     recipeIsIncluded = false;
                //     break;
                // }
}
*/
