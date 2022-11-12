export function search1(query, ingredients, utensils, appliances, recipes) {

    // Aucun filtre actif
    if (!ingredients[0] && !utensils[0] && !appliances[0] && query.length < 3) {
        return recipes;
    }

    // Tableau filtrer
    const results = [];

    for (let i = 0; i < recipes.length; i++) {
        // filtre principale
        let recipeIsIncluded = true;
        if (query.length >= 3) {
            let search = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            let hasQuery = false;
            for (let j = 0; j < recipes[i].ingredients.length; j++) {
                if (recipes[i].name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(search)) {
                    hasQuery = true;
                    break;
                }
                if (recipes[i].description.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(search)) {
                    hasQuery = true;
                    break;
                }
                if (recipes[i].ingredients[j].ingredient.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(search)) {
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
            if (!recipeIsIncluded) {
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
        }

        if (recipeIsIncluded) {
            results.push(recipes[i]);
        }
    }
    return Array.from(results);
}
