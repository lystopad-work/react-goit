import {CardsList} from "../components/cards/CardsList";
import {useEffect, useMemo, useReducer, useState} from "react";
import {error, errorHandler, success, successHandler} from "../helpers/helperReducer";
import {findByName, getAllCards} from "../services/rick-morty-services";
import {SearchInput} from "../components/SearchInput";
import {useDebounce} from "../hooks/useDebounce";
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {cardsLoading, cardsSelectors} from "../store/selectors/cardsSelectors";
import {asyncGetCards, setLoadingTrue} from "../store/cardsStore"

export const CardsListPage = ({withSearch}) => {

    const [searchValue, setSearchValue] = useState('')
    const [searchParams, setSearchParams] = useSearchParams();

    const name = useMemo(() => {
        return searchParams.get('name')
    }, [searchParams])

    const dispatch = useDispatch(); // краще називати її dispatch

    const {cards, loading, error} = useSelector(cardsSelectors)

    useEffect(() => {
        dispatch(asyncGetCards())
    }, []);

    const debouncedValue = useDebounce(name, 1000)

    const params = useMemo(() => {
        return Object.fromEntries([...searchParams])
    }, [searchParams])

    console.log(params) // how to get all params in object

    useEffect(() => {
        if (debouncedValue) {
            // fetchCardsByName(debouncedValue)
            setSearchValue(debouncedValue)
        }
    }, [debouncedValue]);


    // const fetchCardsByName = async (name) => {
    //     dispatch({type: 'SET_LOADING'});
    //     try {
    //         const result = await findByName(name);
    //         const {results} = result.data;
    //
    //         dispatch(successHandler('GET_ITEMS', results))
    //     } catch (e) {
    //         dispatch(errorHandler('GET_ITEMS',e))
    //     }
    // }

    const handleSearch = (e) => {
        const value = e.target.value;

        setSearchParams({name: value})
        setSearchValue(value)
    }

    if (loading) {
        return <h1>Spinner</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {
                withSearch &&
                <SearchInput handleChange={handleSearch} value={searchValue} placeholder='Write card name'/>
            }
            {
                !!cards.length && <CardsList cards={cards} withSearch={withSearch}/>
            }
        </div>
    )
}