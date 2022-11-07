import './App.css'
import React, {useState, useEffect} from 'react';
import {Header} from './components/header/header';
import {SearchBar} from './components/search-bar/search-bar';
import {Receipts} from './components/receipts/receipts';
import {SearchTags} from './components/search-tags/search-tags';
import {search1 as search} from './data/searchReact';
import {recipes as recipes} from './data/recipes';

const App = () => {
    // Liste des recipes
    const [data, setData] = useState(undefined);

    // Tag(s) sélectionné(s) pour filtrer
    const [query, setQuery] = useState('');
    const [ingredientsQuery, updateIngredientsQuery] = useState([]);
    const [appliancesQuery, updateAppliancesQuery] = useState([]);
    const [utensilsQuery, updateUtensilsQuery] = useState([]);

    // Tous les tags disponibles pour autocompletion
    const [allIngredients, setAllIngredients] = useState([]);
    const [allUstensils, setAllUstensils] = useState([]);
    const [allAppliances, setAllAppliances] = useState([]);

    const refreshFilters = () => {
        const ingredients = new Set();
        const ustencils = new Set();
        const appliances = new Set();

        (data ?? recipes).forEach(recipe => {
            const recipeIngredients = recipe['ingredients'];
            const recipeUstencils = recipe['ustensils'];
            const recipeAppliances = recipe['appliance'];

            recipeIngredients?.forEach((recipeIngredient) => {
                const ingredient = recipeIngredient['ingredient'][0].toUpperCase() + recipeIngredient['ingredient'].toLowerCase().slice(1)
                ingredients.add(ingredient);
            });

            recipeUstencils?.forEach((recipeUstencil) => {
                const ustencil = recipeUstencil[0].toUpperCase() + recipeUstencil.toLowerCase().slice(1)
                ustencils.add(ustencil);
            });

            if (recipeAppliances) {
                const appliance = recipeAppliances[0].toUpperCase() + recipeAppliances.toLowerCase().slice(1)
                appliances.add(appliance);
            }
        });

        setAllIngredients(Array.from(ingredients).filter(ing => !ingredientsQuery.includes(ing)));
        setAllUstensils(Array.from(ustencils).filter(usten => !utensilsQuery.includes(usten)));
        setAllAppliances(Array.from(appliances).filter(appli => !appliancesQuery.includes(appli)));
    }

    // When loading for the first time, retrieve the default recipes
    useEffect(() => {
        setData(recipes);
    }, []);

    // When modifying the search parameters, filter the recipes
    useEffect(() => {
        const start = performance.now();
        const searchResults = search(query, ingredientsQuery, utensilsQuery, appliancesQuery, recipes);
        setData(searchResults);
        const duration = performance.now() - start;
        console.log(duration);
    }, [query, ingredientsQuery, utensilsQuery, appliancesQuery]);

    // When the recipes have been filtered, refresh the possible filter values
    useEffect(() => {
        refreshFilters();
    }, [data]);

    return (
        <>
            <Header/>
            <SearchBar updateSearchQuery={setQuery}/>
            <div id="tags">
                <SearchTags tags={allIngredients} updateTagsQuery={updateIngredientsQuery}
                            placeholderName="Cherchez des ingredients"
                            color="blue"/>
                <SearchTags tags={allAppliances} updateTagsQuery={updateAppliancesQuery}
                            placeholderName="Cherchez des appareils"
                            color="green"/>
                <SearchTags tags={allUstensils} updateTagsQuery={updateUtensilsQuery}
                            placeholderName="Cherchez des ustensiles"
                            color="red"/>
            </div>
            <Receipts data={data}/>
        </>
    );
}

export default App;
