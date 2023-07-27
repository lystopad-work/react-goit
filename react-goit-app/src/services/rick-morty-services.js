import api from "../http";
export const getAllCards = async () => {
    return await api.get(`/character`)
}
export const findByName = async (name) => {
    return await api.get(`/character/?name=${name}`)
}

export const getCardById = async (id) => {
    return await api.get(`/character/${id}`)
}