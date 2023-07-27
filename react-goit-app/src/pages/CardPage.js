import {useCallback, useEffect, useState} from "react";
import {getCardById} from "../services/rick-morty-services";
import {useParams} from "react-router-dom";
import {Card} from "../components/cards/Card";

export const CardPage = () => {
    const [card,setCard] = useState(null);
    const [loading, setLoading] = useState(false);

    const {id} = useParams();

    useEffect(() => {
        getCardData(id)
    }, []);

    const getCardData = useCallback(async (id) => {
            setLoading(true)
            try {
                const result = await getCardById(id);

                setCard(result.data)
            } catch (e) {
                console.log('e',e)
            } finally {
                setLoading(false)
            }
    }, [card])

    if (loading) return <h1>Spinner</h1>

    return (
        <div>
            {card && <Card item={card}/>}
        </div>
    )
}