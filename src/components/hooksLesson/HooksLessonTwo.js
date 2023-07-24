import {useEffect, useMemo, useRef, useState} from "react";
import {findByName, getAllCards} from "../../services/rick-morty-services";
import {Card} from "../http-request/Card";
import {Button} from "../../elements/Button";
import {useDebounce} from "../../hooks/useDebounce";

const cardModified = (cardsArray) => {
    // розкомітити наступний рядок, щоб імітувати важкі наватанаження на процессор
    // for (let i = 0; i < 1000000000; i++) {}

    // return cardsArray -- можна викорстовувати так! (для дз наприклад)

    return cardsArray.map(card => {
        return ({
            ...card,
            episode: 'Changed by func'
        })
    })
}
export const HooksLessonTwo = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const ref = useRef(null);

    const debouncedValue = useDebounce(searchValue, 1000)
    useEffect(() => {
        fetchCardsByName()
    }, [debouncedValue])

    useEffect( () => {
        fetchCards();
    }, [])

    // const cardsArray = cardModified(items) - без useMemo буде створюватися при кожному ререндері і витрачати багато часу
    const cardsArray = useMemo(() => {
        console.log('hello memo')
        return cardModified(items)
    }, [items]);

    const fetchCards = async () => {
        setIsLoading(true);
        try {
            const result = await getAllCards();
            const {results} = result.data;

            setItems(results)
        } catch (e) {
            console.log('Here we get our error', e)
        } finally {
            setIsLoading(false)
        }
    }

    const fetchCardsByName = async () => {
        // setIsLoading(true);
        try {
            const result = await findByName({ name: searchValue })
            const {results} = result.data;

            setItems(results)
        } catch (e) {
            console.log('Here we get our error', e);
        } finally {
            setIsLoading(false)
        }
    }

    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }

    if (isLoading) {
        return <h1>It is a fake spinner</h1>
    }

    return (
        <div className='http-requests-wrapper'>
                <div>
                    <input value={searchValue} onChange={handleChange} />
                    <Button refProp={ref}/>
                </div>
            <div className='cards-wrapper'>
                { cardsArray.map(card => (<Card item={card} key={card.id}/>)) }
                </div>
        </div>
    )
};