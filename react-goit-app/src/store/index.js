import {configureStore} from "@reduxjs/toolkit";
import cardsReducer from "./cardsStore";
import quizStore from "./quizStore";
import cardsSecondReducer from './cardsReducer';

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

export const store = configureStore({
    reducer: {
        cards: cardsReducer,
        quiz: quizStore,
        analogCards: cardsSecondReducer
    },
})
