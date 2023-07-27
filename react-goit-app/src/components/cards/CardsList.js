import PropTypes from "prop-types";
import {Card} from "./Card";
import './CardsList.css';
import {Link} from "react-router-dom";

export const CardsList = ({cards, onClick}) => {

    return (
        <div className='cards-wrapper-container'>
            <ul onClick={onClick} className='cards-wrapper'>
                {cards.map(card =>
                    <Link to={`${card.id}`} key={card.id}>
                        <Card item={card} />
                    </Link>
                )}
            </ul>
        </div>
    )
}

CardsList.propTypes = {
    cards: PropTypes.array,
    onClick: PropTypes.func
}