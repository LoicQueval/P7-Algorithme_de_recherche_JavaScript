import './search-tags.css';

export const SearchTags = ({updateTagsQuery}) => {
    const onTags = (e) =>{
        updateTagsQuery(e.target.value);
    }

    return (
        <div>
            <input type="text" placeholder="Ingredient" onChange={onTags}/>
        </div>
    )
}
