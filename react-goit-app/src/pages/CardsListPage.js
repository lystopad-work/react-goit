import {CardsList} from "../components/cards/CardsList";
import {useEffect, useReducer} from "react";
import {error, errorHandler, success, successHandler} from "../helpers/helperReducer";
import {getAllCards} from "../services/rick-morty-services";

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOADING': {
            return {
                ...state,
                loading: true
            }
        }
        case success('GET_ITEMS'): {
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        }
        case error('GET_ITEMS'): {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
    }
}
export const CardsListPage = () => {

    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        items: [],
        error: false
    })

    const {loading, items} = state;

    useEffect(() => {
        fetchCards()
    }, []);

    const fetchCards = async () => {
        dispatch({type: 'SET_LOADING'});
        try {
            const result = await getAllCards();
            const {results} = result.data;

            dispatch(successHandler('GET_ITEMS', results))
        } catch (e) {
            dispatch(errorHandler('GET_ITEMS',e))
        }
    }

    if (loading) {
        return <h1>Spinner</h1>
    }

    return (
        <div>
            {!!items.length && <CardsList cards={items}/>}
        </div>
    )
}