import api from "../http";

// export default class RickMortyServices {
//     static async getAllCards() {
//         return await api.get(`/character`)
//     }
//
//     static async getCardsFromPage(page) {
//         return await api.get(`/character/?page=${page}`)
//     }
// }

export const getAllCards = async () => {
    return await api.get(`/character`)
}

export const getPerson = async (id) => {
    return await api.get(`/character/${id}`)
}

export const getError = async () => {
    return await api.get(`/charrgeiogre`)
}

export const findByName = async (person) => {
    const {name} = person;
    return await api.get(`/character/?name=${name}`)
}