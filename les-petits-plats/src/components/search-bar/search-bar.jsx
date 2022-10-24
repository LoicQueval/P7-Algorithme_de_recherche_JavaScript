import './search-bar.css';

export const SearchBar = ({updateSearchQuery}) => {

    const onSearch = (e) => {
        updateSearchQuery(e.target.value);
    };

    return (
        <div className="search-bar">
            <input type="text" placeholder="Recherchez une recette" onChange={onSearch}/>
            <i className="fa-solid fa-magnifying-glass fa-xl"></i>
        </div>
    );
}
