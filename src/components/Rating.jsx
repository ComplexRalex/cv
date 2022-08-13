import { Circle } from "./Circle";
import "./styles"

const array = [...Array(7)];

export const Rating = ({ rate }) => {
    return (
        <div className="rating-container">
            {array.map((_, i) => (
                <Circle full={(rate >= i + 1)} key={i} />
            ))}
        </div>
    )
}
