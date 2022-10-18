import './search-tags.css';
import {useState} from 'react';

export const SearchTags = ({tags, updateTagsQuery, placeholderName, color}) => {
    const [filteredTags, updateFilteredTags] = useState([tags]);

    const onTagSelected = (e) => {
        updateFilteredTags(e.target.value);
    }

    const onTagQueryChange = (e) => {
        updateTagsQuery(e.target.value);
    }

    return (
        <div id="tags-search">
            {filteredTags[0] !== undefined ?
                <p id="tags-selected" className={color}>{filteredTags}</p>
                : null
            }
            <div id="toto" className={color}>
                <input type="text" placeholder={placeholderName} onChange={onTagQueryChange} className={color}/>
                <div>
                    {tags ? tags.map((tag, index) => (
                        <button className={color} onClick={onTagSelected} key={`${index}`} value={tag}>{tag}</button>
                    )) : null}
                </div>
            </div>
        </div>
    )
}
