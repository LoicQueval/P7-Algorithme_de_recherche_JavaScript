import { recipes } from "./recipes";

const heavy = new Array();
for(let i = 0; i < 25; i++) {
    heavy.push(recipes.map(
    (recipe) => ({
        ...recipe,
        id: `${recipe.id}-${i}`,
        name: `${recipe.name}-${i}`,
    })));
}
export const recipesHeavy = heavy.flat();
