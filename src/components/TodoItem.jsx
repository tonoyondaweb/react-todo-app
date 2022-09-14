export default function TodoItem(props) {
    const {id, text, checked, handleChange, handleClick} = props

    return (
        <li className="item">
            <label className="item-content">
                <input type="checkbox" className="checkbox" checked={checked} onChange={handleChange} onClick={() => handleClick(id)} />
                {text}
            </label>
            <hr className="item-divider"/>
        </li>
    )
}