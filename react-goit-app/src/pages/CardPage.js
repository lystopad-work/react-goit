import {useCallback, useEffect, useState} from "react";
import {getCardById} from "../services/rick-morty-services";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import {Card} from "../components/cards/Card";

const CardPage = () => {
    const [card,setCard] = useState(null);
    const [loading, setLoading] = useState(false);

    const {id} = useParams();

    useEffect(() => {
        getCardData(id)
    }, []);

    const navigate = useNavigate();

    const hrefLocation = useLocation();

    useEffect(() => {
        if (Number(id) === 4) {
            // тут ми робимо редірект на пейджу /cards
            setTimeout(() => navigate('/cards'), 3000)
        }
    }, [id])

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

    const path = hrefLocation.state?.from ?? '/cards'

    console.log('path', hrefLocation)

    if (loading) return <h1>Spinner</h1>

    return (
        <div>
            <Link to={hrefLocation.state.from}>
                BACK PLEASE
            </Link>
            {card && <Card item={card}/>}
        </div>
    )
}

export default CardPage