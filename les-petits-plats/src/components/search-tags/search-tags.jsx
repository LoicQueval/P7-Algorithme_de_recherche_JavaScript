import './search-tags.css';
import {useState, useEffect} from 'react';
import {DisplayTags} from '../display-tags/display-tags';

export const SearchTags = ({tags, updateTagsQuery, placeholderName, color}) => {
    const [selectedTags, updateSelectedTags] = useState([]);
    const [filteredTags, updateFilteredTags] = useState(tags);

    useEffect(() => {
        updateFilteredTags(tags);
    }, [tags])

    const onTagSelected = (e) => {
        const newArray = [...selectedTags];
        newArray.push(e.target.value);
        updateSelectedTags(newArray);
        updateTagsQuery(newArray);
    }

    const onTagQueryChange = (e) => {
        // Rappatrier le changement ici, en filtrant sur tags directement
        // updateFilteredTags
        const query = e.target.value.toLowerCase();
        // for/foreach
        // myArray.filter((e) => e.title.contains(query) ).filter((e) => e.ingredients. ...)
        const myNewArray = tags.filter((tag) => tag.toLowerCase().includes(query));
        // pipe =>   myArray.map((e) => e.title).filter((title) => title.includes("abc"))
        updateFilteredTags(myNewArray);
    }

    return (
        <div>
            <DisplayTags color={color} selectedTags={selectedTags} updateSelectedTags={updateSelectedTags}
                         updateTagsQuery={updateTagsQuery}/>
            <div id="search-tags" className={color}>
                <input type="text" placeholder={placeholderName} onChange={onTagQueryChange} className={color}/>
                <div>
                    {filteredTags ? filteredTags.map((tag, index) => (
                        <button className={color} onClick={onTagSelected} key={`${index}`} value={tag}>{tag}</button>
                    )) : null}
                </div>
            </div>
        </div>
    )
}
