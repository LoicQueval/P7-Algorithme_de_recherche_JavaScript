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
    const [tags, updateTags] = useState('');
    useEffect(() => {
        setData(search1(query, tags, recipes));
    }, [query, tags]);

    return (
        <>
            <Header/>
            <SearchBar updateSearchQuery={setQuery}/>
            <SearchTags updateTagsQuery={updateTags}/>
            <Receipts data={data}/>
        </>
    );
}

export default App;
