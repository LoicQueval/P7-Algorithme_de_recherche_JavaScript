import {recipes} from './data/recipes'
import './App.css'
import React, {useState, useEffect} from 'react';
import {Header} from './components/header/header';
import {SearchBar} from './components/search-bar/search-bar';
import {Receipts} from './components/ receipts/receipts';

const App = () => {
    const [data, setData] = useState(undefined);
    useEffect(() => {
        setTimeout(() => {
            setData(recipes);
        }, 0)
    }, []);

    return (
        <div>
            <Header/>
            <SearchBar/>
            <Receipts data={data}/>
        </div>
    );
}


export default App;
