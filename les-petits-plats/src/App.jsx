import {search1} from './data/searchReact';
import {recipes} from './data/recipes';
import './App.css'
import React, {useState, useEffect} from 'react';
import {Header} from './components/header/header';
import {SearchBar} from './components/search-bar/search-bar';
import {Receipts} from './components/receipts/receipts';
import {SearchTags} from './components/search-tags/search-tags';

const App = () => {
    const [data, setData] = useState(undefined);

    const [query, setQuery] = useState('');
    const [ingredientsQuery, updateIngredientsQuery] = useState([]);
    const [appliancesQuery, updateAppliancesQuery] = useState([]);
    const [utensilsQuery, updateUtensilsQuery] = useState([]);

    const [allIngredients, setAllIngredients] = useState([]);
    const [allUstensils, setAllUstensils] = useState([]);
    const [allAppliances, setAllAppliances] = useState([]);


    useEffect(() => {
        const ingredients = new Set();
        const ustencils = new Set();
        const appliances = new Set();

        recipes.forEach(recipe => {
            const recipeIngredients = recipe['ingredients'];
            const recipeUstencils = recipe['ustensils'];
            const recipeAppliances = recipe['appliance'];

            recipeIngredients.forEach((recipeIngredient) => {
                    const ingredient = recipeIngredient['ingredient'][0].toUpperCase() + recipeIngredient['ingredient'].toLowerCase().slice(1)
                    ingredients.add(ingredient);
                }
            );

            recipeUstencils.forEach((recipeUstencil) => {
                    const ustencil = recipeUstencil[0].toUpperCase() + recipeUstencil.toLowerCase().slice(1)
                    ustencils.add(ustencil);
                }
            );

            const appliance = recipeAppliances[0].toUpperCase() + recipeAppliances.toLowerCase().slice(1)
            appliances.add(appliance);
        });

        setAllIngredients(Array.from(ingredients));
        setAllUstensils(Array.from(ustencils));
        setAllAppliances(Array.from(appliances));

    }, []);

    useEffect(() => {
        setData(search1(query, ingredientsQuery, utensilsQuery, appliancesQuery, recipes));
        /*setData(search2(query, tagsQuery, utensilsQuery, appliancesQuery, recipes));*/
    }, [query, ingredientsQuery, utensilsQuery, appliancesQuery]);

    return (
        <>
            <Header/>
            <SearchBar updateSearchQuery={setQuery}/>
            <div id="tags">
                <SearchTags tags={allIngredients} updateTagsQuery={updateIngredientsQuery}
                            placeholderName="Cherchez des ingredients"
                            color="blue"/>
                <SearchTags tags={allUstensils} updateTagsQuery={updateUtensilsQuery}
                            placeholderName="Cherchez des appareils"
                            color="red"/>
                <SearchTags tags={allAppliances} updateTagsQuery={updateAppliancesQuery}
                            placeholderName="Cherchez des ustensiles"
                            color="green"/>
            </div>
            <Receipts data={data}/>
        </>
    );
}

export default App;
