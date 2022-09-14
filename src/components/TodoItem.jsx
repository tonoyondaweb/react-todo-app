export default function TodoItem(props) {
    const {text, completed} = props

    return (
        <li className="item">
            <label className="item-content">
                <input type="checkbox" className="checkbox" />
                {text}
            </label>
        </li>
    )
}