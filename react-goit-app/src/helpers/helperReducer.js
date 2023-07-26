export const success = (action) => `${action}_SUCCESS`
export const error = (action) => `${action}_ERROR`

export const successHandler = (action, payload) => ({
    type: success(action),
    payload,
    error: false
})

export const errorHandler = (action, payload) => ({
    type: error(action),
    payload: payload,
    error: true
})

export const actionGenerator = type => payload => ({type, payload})
