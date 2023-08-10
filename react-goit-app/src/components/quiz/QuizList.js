import {QuizItem} from "./QuizItem";
import {useEffect, useState} from "react";
import './Quiz.css';
import {useDispatch, useSelector} from "react-redux";
import {addAnswer} from "../../store/quizStore";

export const QuizList = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [results, setResults] = useState(null);

    const questions = useSelector(state => state.quiz);

    const dispatch = useDispatch();

    const isLastQuestion = currentQuestion === questions.length - 1;
    const isFirstQuestion = currentQuestion === 0;

    const answered = questions[currentQuestion].userAnswer;

    useEffect(() => {
        getResults()
    }, [currentQuestion === questions.length]);

    const onPrevClick = () => {
        if (!isFirstQuestion) setCurrentQuestion(prev => prev - 1)
    }
    const onNextClick = () => {
        if (!isLastQuestion) setCurrentQuestion(prev => prev + 1)
    }
    const onAnswerClick = (index) => {
        dispatch(addAnswer({answer: index, currentQuestion}))

        onNextClick()
    }

    const getResults = () => {
        // const result = questions.map(item => item.isCorrectIndex === item.userAnswer)
    }

    return (
        <div className='quiz-wrapper'>
            {
                results ?
                    <h1>{results}</h1>
                    :
                    <>
                        <QuizItem
                            item={questions[currentQuestion]}
                            onItemClick={onAnswerClick}
                            answered={answered}
                        />
                        <div className='quiz-button-container'>
                            <button
                                onClick={onPrevClick}
                                className='quiz-button'
                                disabled={isFirstQuestion}
                            >Prev</button>

                            <button
                                className='quiz-button'
                                onClick={onNextClick}
                                disabled={isLastQuestion}
                            >Next</button>
                        </div>
                    </>
            }
        </div>
    )
}