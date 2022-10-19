import './display-tags.css'

export const DisplayTags = ({color, selectedTags}) => {

    return (
        <div id="tags-selected">
            {selectedTags.map((item, index) => (
                <p className={color} key={index}>{item}</p>
            ))}
        </div>
    )
}
