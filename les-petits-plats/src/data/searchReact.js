export function search1(query, ingredients, utensils, appliances, recipes) {
    console.log(ingredients, utensils);
    // Initialisation de variable
    const results = [];
    const searchInput = query.toLowerCase();

    // Condition d'activation de filtres
    const activeTag = ingredients[0];
    const activeUtensil = utensils[0];
    const activeDevice = appliances[0];
    const activeInput = searchInput.length >= 3;
    for (let i = 0; i < recipes.length; i++) {
        // mise en forme de paramètres
        const recipeName = recipes[i].name.toLowerCase();
        const recipeDescription = recipes[i].description[0].toUpperCase() + recipes[i].description.toLowerCase().slice(1);
        const recipeAppliance = recipes[i].appliance[0].toUpperCase() + recipes[i].appliance.toLowerCase().slice(1);

        // Aucun filtres actif
        if (!ingredients[0] && !utensils[0] && !appliances[0] && query.length < 3) {
            results.push(recipes[i]);
        }

        // filtre ingredient
        let recipeIsIncluded = true;
        if (ingredients[0]) {
            for (let j = 0; j < ingredients.length; j++) {
                let tag = ingredients[j].toLowerCase();
                let hasIngredient = false;
                for (let k = 0; k < recipes[i].ingredients.length; k++) {
                    console.log(recipes[i].ingredients[k].ingredient, tag);
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
                results.push(recipes[i]);
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
                results.push(recipes[i]);
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
                results.push(recipes[i]);
            } else {
                continue;
            }
        }

        for (let j = 0; j < recipes[i].ingredients.length; j++) {
            // mise en forme de paramètres
            const recipeIngredient = recipes[i].ingredients[j].ingredient[0].toUpperCase() + recipes[i].ingredients[j].ingredient.toLowerCase().slice(1);
            // Conditions de filtres
            const filterIngredientByTag = recipeIngredient.includes(ingredients);


            const filterIngredientByInput = recipeIngredient.includes(searchInput);
            const filterNameByInput = recipeName.includes(searchInput);
            const filterDescriptionByInput = recipeDescription.includes(searchInput);
            const filterDeviceByTag = recipeAppliance.includes(appliances);
            const mainInputFilter = filterIngredientByInput || filterNameByInput || filterDescriptionByInput;

            // Filtre principal
            if (activeInput && !activeTag && !activeUtensil && !activeDevice && mainInputFilter && results[results.length - 1] !== recipes[i]) {
                results.push(recipes[i]);
            }

            // Filtre ingredients
            if (!activeInput && activeTag && !activeUtensil && !activeDevice && filterIngredientByTag && results[results.length - 1] !== recipes[i]) {
                console.log('yes');
                results.push(recipes[i]);
            }

            // Filtre principal et ingredient
            if (activeInput && activeTag && !activeUtensil && !activeDevice && mainInputFilter && filterIngredientByTag && results[results.length - 1] !== recipes[i]) {
                results.push(recipes[i]);
            }

            // Filtre Device
            if (!activeInput && !activeTag && !activeUtensil && activeDevice && filterDeviceByTag && results[results.length - 1] !== recipes[i]) {
                results.push(recipes[i]);
            }

            // Filtre Device et filtre principal
            if (activeInput && !activeTag && !activeUtensil && activeDevice && filterDeviceByTag && mainInputFilter && results[results.length - 1] !== recipes[i]) {
                results.push(recipes[i]);
            }

            // Filtre Device et ingredient
            if (!activeInput && activeTag && !activeUtensil && activeDevice && filterDeviceByTag && filterIngredientByInput && results[results.length - 1] !== recipes[i]) {
                results.push(recipes[i]);
            }

            // Filtre principal, Device et ingredient
            if (activeInput && activeTag && !activeUtensil && activeDevice && filterDeviceByTag && filterIngredientByInput && mainInputFilter && results[results.length - 1] !== recipes[i]) {
                results.push(recipes[i]);
            }

            for (let k = 0; k < recipes[i].ustensils.length; k++) {
                // mise en forme de paramètres
                const recipeUtensil = recipes[i].ustensils[k][0].toUpperCase() + recipes[i].ustensils[k].toLowerCase().slice(1);
                // Conditions de filtres
                const filterUtensilByTag = recipeUtensil.includes(utensils);

                // Filtre utensils
                if (!activeInput && !activeTag && activeUtensil && !activeDevice && filterUtensilByTag && results[results.length - 1] !== recipes[i]) {
                    results.push(recipes[i]);
                }

                // Filtre tag et utensil
                if (!activeInput && activeTag && activeUtensil && !activeDevice && filterIngredientByTag && filterUtensilByTag && results[results.length - 1] !== recipes[i]) {
                    results.push(recipes[i]);
                }

                // Filtre principal et utensil
                if (activeInput && !activeTag && activeUtensil && !activeDevice && mainInputFilter && filterUtensilByTag && results[results.length - 1] !== recipes[i]) {
                    results.push(recipes[i]);
                }

                // Filtre Device et ustencils
                if (!activeInput && !activeTag && activeUtensil && activeDevice && filterDeviceByTag && filterUtensilByTag && results[results.length - 1] !== recipes[i]) {
                    results.push(recipes[i]);
                }

                // Filtre principal, Device et ustencils
                if (activeInput && !activeTag && activeUtensil && activeDevice && filterDeviceByTag && filterUtensilByTag && mainInputFilter && results[results.length - 1] !== recipes[i]) {
                    results.push(recipes[i]);
                }

                // Ingredient, Device et ustencils
                if (!activeInput && activeTag && activeUtensil && activeDevice && filterDeviceByTag && filterUtensilByTag && filterIngredientByTag && results[results.length - 1] !== recipes[i]) {
                    results.push(recipes[i]);
                }

                // Ingredient, Device et ustencils
                if (activeInput && activeTag && !activeUtensil && activeDevice && filterDeviceByTag && mainInputFilter && filterIngredientByTag && results[results.length - 1] !== recipes[i]) {
                    results.push(recipes[i]);
                }

                // Tous les filtres actifs
                if (activeInput && activeTag && activeUtensil && activeDevice && mainInputFilter && filterIngredientByTag && filterUtensilByTag && filterDeviceByTag && results[results.length - 1] !== recipes[i]) {
                    results.push(recipes[i]);
                }
            }
        }
    }
    return results;
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
