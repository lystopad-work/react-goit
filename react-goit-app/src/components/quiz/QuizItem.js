export const QuizItem = ({item, onItemClick, answered}) => {

    return (
        <div className='quiz-item-container'>
            <p className='quiz-item-title'>{item.title}</p>
            <ul className='quiz-item-options'>
                {item.options.map((option, index) =>
                    <li
                        className={`quiz-item-option ${answered === index ? 'active' : ''}`}
                        onClick={() => onItemClick(index)}
                        key={`${option} + ${index}`}
                    >{option}</li>
                )}
            </ul>
        </div>
    )
}