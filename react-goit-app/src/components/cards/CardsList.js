import PropTypes from "prop-types";
import {Card} from "./Card";
import './CardsList.css';

export const CardsList = ({cards, onClick}) => {

    return (
        <div className='cards-wrapper-container'>
            <ul onClick={onClick} className='cards-wrapper'>
                {cards.map(card => <Card item={card} key={card.id}/>)}
            </ul>
        </div>
    )
}

CardsList.propTypes = {
    cards: PropTypes.array,
    onClick: PropTypes.func
}