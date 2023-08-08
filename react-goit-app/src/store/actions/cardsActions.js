export const FETCH_CARDS = 'FETCH_CARDS';
export const FETCH_CARDS_ERROR = 'FETCH_CARDS_ERROR';
export const FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS';
export const fetchCards = (payload) => ({
    type: FETCH_CARDS_SUCCESS,
    payload
})

