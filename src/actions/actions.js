import axios from 'axios'

export const POSTING_USER_CREDS = 'POSTING_USER_CREDS'
export const USER_CREATE_SUCCESS = 'USER_CREATE_SUCCESS'
export const USER_CREATE_ERROR = 'USER_CREATE_ERROR'

export const LOGGING_IN_STATUS = 'LOGGING_IN_STATUS'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const LOGOUT_ACTION = 'LOGOUT_ACTION'

export const SAVE_INITIALIZE = 'SAVE_INITIALIZE'
export const SAVE_RECOMMEND_SUCCESS = 'SAVE_RECOMMEND_SUCCESS'
export const SAVE_RECOMMEND_FAILURE = 'SAVE_RECOMMEND_FAILURE' 

export const GET_RECOMMEND_START = 'GET_RECOMMEND_START'
export const GET_RECOMMEND_SUCCESS = 'GET_RECOMMEND_SUCCESS'
export const GET_RECOMMEND_ERROR = 'GET_RECOMMEND_ERROR'

export const DELETE_RECOMMEND_START = 'DELETE_RECOMMEND_START'
export const DELETE_RECOMMEND_SUCCESS = 'DELETE_RECOMMEND_SUCCESS'
export const DELETE_RECOMMEND_FAIL = 'DELETE_RECOMMEND_FAIL'

const exampleData = {
    "description": "great medical marijuana",
    "effect": "relief of pain-like symptoms",
    "flavor": "citrus-like accents",
    "rating": "7",
    "type": "sativa-indica hybrid",
    "strain": "JChan"
}

export const makeUser = (creds) => dispatch => {
    console.log('in the makeUser function', creds)
    dispatch({ type: POSTING_USER_CREDS });

    axios.post('https://lambda-med4-api.herokuapp.com/users/register', creds)
    .then(res => {
        console.log(res.data)
        // window.localStorage.setItem('token', res.data.token)
        dispatch({ type: USER_CREATE_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log('Error', err.message)
        dispatch({ type: USER_CREATE_ERROR, payload: err.message })
    })
}

export const logIn = (creds) => dispatch => {

    dispatch({ type: LOGGING_IN_STATUS })

    axios.post("https://lambda-med4-api.herokuapp.com/users/login", creds)
    .then(res => {
        console.log('action.js: logIn: success: ', res.data)
        window.localStorage.setItem('token', res.data.token)
        dispatch({ type: LOGIN_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err.message)
        dispatch({ type: LOGIN_ERROR, payload: err.message })
    })
}

export const logOut = () => {
    window.localStorage.clear();
    return {
        type: LOGOUT_ACTION
    }
}

export const saveRecommend = (id) => dispatch => {
    // console.log(data)
    dispatch ({ type: SAVE_INITIALIZE })

    axios.post(`https://lambda-med4-api.herokuapp.com/recommendations/${id}`, exampleData)
    .then(res => {
        console.log(res.data)
        dispatch({ type: SAVE_RECOMMEND_SUCCESS, payload: res.data.message })
    })
    .catch(err => {
        console.log(err.message)
        dispatch({ type: SAVE_RECOMMEND_FAILURE, payload: err.message })
    })
}

export const getRecommends = (id) => dispatch => {
    dispatch({ type: GET_RECOMMEND_START })
    
    axios.get(`https://lambda-med4-api.herokuapp.com/recommendations/${id}`)
    .then(res => {
        console.log(res.data)
        dispatch({ type: GET_RECOMMEND_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log(err.message)
        dispatch({ type: GET_RECOMMEND_ERROR })
    })
}

export const deleteRecommend = (id) => dispatch => {
    dispatch({ type: DELETE_RECOMMEND_START })

    axios.delete(`https://lambda-med4-api.herokuapp.com/recommendations/${id}`)
    .then(res => {
        console.log(res.data)
        dispatch({ type: DELETE_RECOMMEND_SUCCESS })
    })
    .catch(err => {
        console.log(err.message)
        dispatch({ type: DELETE_RECOMMEND_FAIL })   
    })
}