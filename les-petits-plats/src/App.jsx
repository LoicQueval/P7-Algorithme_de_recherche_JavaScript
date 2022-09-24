import {recipes} from './data/recipes'
import './App.css'
import React, {useState, useEffect} from 'react';
import {Header} from './components/header/header';
import {SearchBar} from './components/search-bar/search-bar';
import {Receipts} from './components/receipts/receipts';

const App = () => {
    const [data, setData] = useState(undefined);
    useEffect(() => {
        setTimeout(() => {
            setData(recipes);
        }, 0)
    }, []);

    const [counter, setCount] = useState(0);

    return (
        <>
            <button onClick={() => setCount(counter + 1)}>{counter}</button>
            <Header/>
            <SearchBar/>
            <Receipts data={data}/>
        </>
    );
}


export default App;
