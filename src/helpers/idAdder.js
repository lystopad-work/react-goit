export const idAdder = (array) => {
    return array.map((item, index) => ({...item, id: Date.now().toString() + index}))
}