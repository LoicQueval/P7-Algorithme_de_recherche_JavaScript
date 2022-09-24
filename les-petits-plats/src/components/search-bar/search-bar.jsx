import './search-bar.css';
import {search1, search2} from '../../data/search';

export const SearchBar = () => {
    /*const [search, setSearch] = useState('');*/

    function search() {
        search1();
       /* search2();*/
    }

    return (
        <div className="search-bar">
            <input id="search" type="text" placeholder="Recherchez une recette"
                   onChange={search}/>
            <i className="fa-solid fa-magnifying-glass fa-xl"></i>
        </div>
    );
}
