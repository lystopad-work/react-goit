import './CardContent.scss'
export const CardContent = ({title, duration, price}) => {

    return (
        <div className='card-content-container'>
            <h1 className='card-title'>{title}</h1>
            <p className='card-duration'>{duration}</p>
            <p className='card-price'><span className='price-symbol'>$</span>{price}</p>
        </div>
    )
}