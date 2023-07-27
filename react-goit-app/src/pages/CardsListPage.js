import {CardsList} from "../components/cards/CardsList";
import {useEffect, useReducer, useState} from "react";
import {error, errorHandler, success, successHandler} from "../helpers/helperReducer";
import {findByName, getAllCards} from "../services/rick-morty-services";
import {SearchInput} from "../components/SearchInput";
import {useDebounce} from "../hooks/useDebounce";

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
export const CardsListPage = ({withSearch}) => {

    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        items: [],
        error: false
    })

    const [searchValue, setSearchValue] = useState('')
    const debouncedValue = useDebounce(searchValue, 1000)

    const {loading, items} = state;

    useEffect(() => {
        fetchCards()
    }, []);

    useEffect(() => {
        console.log(debouncedValue)

        fetchCardsByName(debouncedValue)
    }, [debouncedValue])


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

    const fetchCardsByName = async (name) => {
        dispatch({type: 'SET_LOADING'});
        try {
            const result = await findByName(name);
            const {results} = result.data;

            dispatch(successHandler('GET_ITEMS', results))
        } catch (e) {
            dispatch(errorHandler('GET_ITEMS',e))
        }
    }

    const handleSearch = (e) => {
        const value = e.target.value;

        setSearchValue(value)
    }

    if (loading) {
        return <h1>Spinner</h1>
    }

    return (
        <div>
            {
                withSearch &&
                <SearchInput handleChange={handleSearch} value={searchValue} placeholder='Write card name'/>
            }
            {
                !!items.length && <CardsList cards={items} withSearch={withSearch}/>
            }
        </div>
    )
}