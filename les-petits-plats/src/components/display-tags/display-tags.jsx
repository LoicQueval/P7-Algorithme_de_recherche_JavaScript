import './display-tags.css'

export const DisplayTags = ({color, selectedTags, updateSelectedTags, updateTagsQuery}) => {

    const onTagDelete = (e) => {
        let newArray = [...selectedTags];
        newArray = newArray.filter(value => value !== e.target.value);
        updateSelectedTags(newArray);
        updateTagsQuery(newArray);
    }

    return (
        <div id="test">
            {selectedTags.map((item, index) => (
                <div key={index} className={color} id="tags-selected">
                    <p>{item}</p>
                    <button className={color + ' fa-regular fa-circle-xmark'} value={item}
                            onClick={onTagDelete}></button>
                </div>
            ))}
        </div>
    )
}
