import {Component} from "react";
import './RickMortyMain';

const mockItem = {
    "id":145,
    "name":"Glenn",
    "status":"Alive",
    "species":"Human",
    "location":{"name":"Interdimensional Cable","url":"https://rickandmortyapi.com/api/location/6"},
    "image":"https://rickandmortyapi.com/api/character/avatar/145.jpeg",
    "episode":["https://rickandmortyapi.com/api/episode/8"],
}
export class Card extends Component {

    static defaultProps = {
        item: mockItem
    }
    render() {

        const {name, image, episode, location, species} = this.props.item;

        return (
            <div className="http-card-container">
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
                    <div className="http-card-section">
                        <p className='card-text-grey'>Last seen in:</p>
                        {episode}
                    </div>
                </div>
            </div>
        )
    }
}