import "./styles"

export const ListItem = ({ children }) => {
    return (
        <li className="list-item-container">
            <div className="list-item">{ children }</div>
        </li>
    )
}
