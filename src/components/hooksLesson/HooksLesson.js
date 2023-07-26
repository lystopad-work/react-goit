import {useEffect, useState} from "react";
import {useMediaQuery} from '../../hooks/useMediaQuery';
export const HooksLesson = () => {

    const [counter, setCounter] = useState(0); // FOR NUMBER

    const [isModalOpen, setIsModalOpen] = useState(false); // FOR BOOLEAN
    // const [currentUser, setCurrentUser] = useState(null); // FOR OBJECT
    // const [inputValue, setInputValue] = useState(''); // FOR STRING
    // const [items, setItems] = useState([]); // FOR ARRAY

    const isDesktop = useMediaQuery('(min-width: 960px)')

    useEffect(() => {
        console.log('Я ВІДПРАЦЮЮ ЛИШЕ ПРИ ПЕРШОМУ МАУНТІ КОМПОНЕНТА')
    }, [])

    useEffect(() => {
        console.log('Modal Window: ', isModalOpen)
    }, [isModalOpen])

    useEffect(() => {
        const listener = () => console.log('test');
        window.addEventListener('keydown', listener)

        return () => {
            window.removeEventListener('keydown', listener)
        }
    }, [])


    const plusOne = () => {
        setCounter((prev) => ++prev)
    }

    const minusOne = () => {
        setCounter((prev) => --prev)
    }

    const pseudoModal = () => setIsModalOpen(prev => !prev)

    return (
        <div>
            <h1>{counter}</h1>
            <button type='button' onClick={minusOne}>Minus</button>
            <button type='button' onClick={plusOne}>Plus</button>

            <button type='button' onClick={pseudoModal}>
                Enable modal
            </button>

            {isDesktop ? <h1>Desktop</h1> : <h1>Mobile</h1>}
        </div>
    )
}
