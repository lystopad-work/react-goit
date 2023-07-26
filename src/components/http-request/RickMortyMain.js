import {Component} from "react";
import "./RickMorty.css"
import {Card} from "./Card";
import {findByName, getAllCards} from "../../services/rick-morty-services";
import {Skeleton} from '../Skeleton';
import {errorCustomize} from "../../helpers/errorCustomize";

// https://rickandmortyapi.com/
export class RickMortyMain extends Component {

    state = {
        cards: null,
        isLoading: false,
        error: null,
        search: ''
    }

    async componentDidMount() {
        this.setState({isLoading: true})

        try {
            const result = await getAllCards();
            const {results} = result.data;

            this.setState({
                cards: results
            })
        } catch(e) {
            const error = errorCustomize(e.response.status)
            this.setState({
                error
            })
        } finally {
            this.setState({ isLoading: false })
        }
    }

    handleChange = (e) => {
        const content = e.target.value;
        this.setState({
            search: content
        })
    }

    handleClick = async () => {
        const search = this.state.search;

        this.setState({
            isLoading: true
        })

        try {
            const result = await findByName({name: search, gender: 'male'})
            console.log(result)
        } catch (error) {
            this.setState({
                error: errorCustomize(error.response.status)
            })
        } finally {
            this.setState({
                isLoading: false
            })
        }
    }


    render() {

        const {isLoading, cards, error, search} = this.state;

        if (isLoading) {
            return <Skeleton />
        }

        if (error) {
            return <h1>{error}</h1>
        }

        return (
            <div className='http-requests-wrapper'>
                <div>
                    <input onChange={this.handleChange} value={search} />
                    <button onClick={this.handleClick} type='button'>
                        Find
                    </button>
                </div>
                <div className='cards-wrapper'>
                    {
                        cards &&
                        cards.map(card => (
                            <Card
                                item={card}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
}