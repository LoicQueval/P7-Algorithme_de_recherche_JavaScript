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
    const [tagsQuery, updateTagsQuery] = useState('');
    const [appliancesQuery, updateAppliancesQuery] = useState('');
    const [utensilsQuery, updateUtensilsQuery] = useState('');

    const [allIngredients, setAllIngredients] = useState([]);
    const [allUstensils, setAllUstensils] = useState([]);
    const [allAppliances, setAllAppliances] = useState([]);

    useEffect(() => {
        const ingredients = new Set();
        const ustencils = new Set();
        const appliances = new Set();

        if (recipes === undefined) return;

        recipes.forEach(recipe => {
            const recipeIngredients = recipe['ingredients'];
            const recipeUstencils = recipe['ustensils'];
            const recipeAppliances = recipe['appliance'];

            recipeIngredients.forEach((recipeIngredient) => {
                    const ingredient = recipeIngredient['ingredient'][0].toUpperCase() + recipeIngredient['ingredient'].toLowerCase().slice(1)
                    ingredient.toLowerCase().includes(tagsQuery.toLowerCase()) ? ingredients.add(ingredient) : console.log('no ingredient');
                }
            );

            recipeUstencils.forEach((recipeUstencil) => {
                    const ustencil = recipeUstencil[0].toUpperCase() + recipeUstencil.toLowerCase().slice(1)
                    ustencil.toLowerCase().includes(utensilsQuery.toLowerCase()) ? ustencils.add(ustencil) : console.log('no ustencil');
                }
            );

            const appliance = recipeAppliances[0].toUpperCase() + recipeAppliances.toLowerCase().slice(1)
            appliance.toLowerCase().includes(appliancesQuery.toLowerCase()) ? appliances.add(appliance) : console.log('no appliances');
        });

        setAllIngredients(Array.from(ingredients));
        setAllUstensils(Array.from(ustencils));
        setAllAppliances(Array.from(appliances));

    }, [tagsQuery, utensilsQuery, appliancesQuery]);

    useEffect(() => {
        setData(search1(query, tagsQuery, utensilsQuery, appliancesQuery, recipes));
        /*setData(search2(query, tagsQuery, utensilsQuery, appliancesQuery, recipes));*/
    }, [query, tagsQuery, utensilsQuery, appliancesQuery]);

    return (
        <>
            <Header/>
            <SearchBar updateSearchQuery={setQuery}/>
            <SearchTags tags={allIngredients} updateTagsQuery={updateTagsQuery}
                        placeholderName="Cherchez des ingredients"
                        color="blue"/>
            <SearchTags tags={allUstensils} updateTagsQuery={updateUtensilsQuery}
                        placeholderName="Cherchez des appareils"
                        color="red"/>
            <SearchTags tags={allAppliances} updateTagsQuery={updateAppliancesQuery}
                        placeholderName="Cherchez des ustensiles"
                        color="green"/>
            <Receipts data={data}/>
        </>
    );
}

export default App;
