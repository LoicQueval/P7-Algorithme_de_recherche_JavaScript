export function search2(query, ingredients, utensils, appliances, recipes) {
    // Aucun filtre
    if (!ingredients[0] && !utensils[0] && !appliances[0] && query.length < 3)
        return recipes;

    return recipes
        // Filtre Principale par ingredient, descriptions et nom de recette
        .filter((recipe) => {
            const search = query?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            return search < 3 || (
                recipe.ingredients
                    .map(ingredient => ingredient.ingredient.toLowerCase())
                    .some(ingredient => ingredient.normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(search)) ||
                recipe.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(search) ||
                recipe.description.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(search)
            );
        })
        // Filtre Tags ingredients
        .filter(recipe => {
            return !ingredients || !ingredients[0] ||
                ingredients
                    .map((ing) => ing.toLowerCase())
                    .every((ing) => recipe.ingredients
                        .map(ingredient => ingredient.ingredient.toLowerCase())
                        .some(ingredient => ing === ingredient)
                    );
        })
        // Filtre Tags appliance
        .filter(recipe => {
            return !appliances || !appliances[0] ||
                appliances
                    .every((appli) => recipe.appliance.toLowerCase() === appli.toLowerCase())
        })
        // Filtre Tags utensils
        .filter(recipe => {
            return !utensils || !utensils[0] || utensils
                .map((uten) => uten.toLowerCase())
                .every((uten) => recipe.ustensils
                    .some(ustensils => uten === ustensils.toLowerCase())
                )
        })
}
