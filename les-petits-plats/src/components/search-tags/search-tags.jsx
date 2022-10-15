import './search-tags.css';
import {useState} from 'react';

export const SearchTags = ({tags, updateTagsQuery, placeholderName, color}) => {
    const [filteredTags, updateFilteredTags] = useState(tags);

    const onTagSelected = (e) => {
        // updateTagsQuery(e.target.value);
    }

    const onTagQueryChange = (e) => {
        updateTagsQuery(e.target.value);
    }


    return (
        <div id="toto" className={color}>
            <input type="text" placeholder={placeholderName} onChange={onTagQueryChange} className={color}/>
            <div>
                {tags ? tags.map((tag, index) => (
                    <p onClick={onTagSelected} key={`${index}`}>{tag}</p>
                )) : null}
            </div>
        </div>
    )
}
