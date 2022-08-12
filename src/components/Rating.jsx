import { Circle } from "./Circle";
import "./styles"

const array = [...Array(7)];
console.log(array);

export const Rating = ({ rate }) => {
    return (
        <div className="rating-container">
            {array.map((_, i) => (
                <Circle full={(rate >= i + 1)} />
            ))}
        </div>
    )
}
