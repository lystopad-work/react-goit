import './Card.css';
import content from '../../data/card-content.json';
import {CardContent} from "./CardContent";
import {CardButton} from "./CardButton";

// const {title, price, duration} = content;
export const Card = ({isCardHovered}) => {

    return (
        <div className={`card-container ${isCardHovered ? 'card-border' : ''}`}>
            <CardContent
                // title={title}
                // price={price}
                // duration={duration}
                {...content}
            />
            <CardButton />
        </div>
    )
}