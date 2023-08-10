import {QuizList} from "../components/quiz/QuizList";
import mockQuestions from "../assets/shared/quiz-list.json";
export const QuizPage = () => {

    return (
        <>
            <QuizList questions={mockQuestions}/>
        </>
    )
}