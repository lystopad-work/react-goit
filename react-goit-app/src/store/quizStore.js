import {createSlice} from "@reduxjs/toolkit";
import questions from "../assets/shared/quiz-list.json";

const quizSlice = createSlice({
    name: 'quiz',
    initialState: questions,
    reducers: {
        addAnswer: (state, action) => {
            const {answer, currentQuestion} = action.payload;

            state[currentQuestion].userAnswer = answer
        },

    //     addAnswer: (state, action) =>
    //         state.map((item, index) =>
    //             index === action.payload.currentQuestion ? {...item, userAnswer: action.payload.answer} : item)
    }
})

export const {addAnswer} = quizSlice.actions;
export default quizSlice.reducer