import './Css-example.css';
import content from '../data/card-content.json';
import {CardContent} from "./Scss-example";
import {CardButton} from "./Css-module-example";

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