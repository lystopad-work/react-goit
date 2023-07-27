import PropTypes from "prop-types";
import './Card.css'
export const Card = ({item}) => {

    const {image, name, location, species} = item;

    return (
            <li className="http-card-container">
                <img src={image} alt={`${name} image`} className="http-card-image"/>
                <div className="http-card-description">
                    <h1 className="http-card-title">
                        {name}
                    </h1>
                    <div className="http-card-section">
                        <span className='card-species-circle'></span>{species}
                    </div>
                    <div className="http-card-section">
                        <p className='card-text-grey'>Last known location:</p>
                        {location.name}
                    </div>
                </div>
            </li>
    )
}

Card.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string,
        species: PropTypes.string,
        location: PropTypes.object,
    })
}