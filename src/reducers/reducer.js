import { POSTING_USER_CREDS, USER_CREATE_SUCCESS, USER_CREATE_ERROR, LOGGING_IN_STATUS, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_ACTION, SAVE_INITIALIZE, SAVE_RECOMMEND_SUCCESS, SAVE_RECOMMEND_FAILURE, GET_RECOMMEND_START, GET_RECOMMEND_SUCCESS, GET_RECOMMEND_ERROR, DELETE_RECOMMEND_START, DELETE_RECOMMEND_SUCCESS, DELETE_RECOMMEND_FAIL } from '../actions/actions'

const initialState = {
    isPosting: false,
    isLoggingIn: false,
    token: '',
    successMessage: '',
    error: '',
    loggingSuccess: '',
    loggingError: '',
    userId: 0,
    savingStatus: false,
    saveSuccessMessage: '',
    saveErrorMessage: '',
    recommendRetrieve: false,
    recommendSuccess: [],
    recommendError: '',
    deleteStart: false,
    deleteSuccess: '',
    deleteError: ''
}

export const reducer = (state = initialState, action) => {

    switch(action.type){
        case POSTING_USER_CREDS :
            return {
                ...state,
                isPosting: true
            }
        case USER_CREATE_SUCCESS :
            console.log(action.payload)
            return {
                    ...state,
                    error: '',
                    loggingSuccess: '',
                    loggingError: '',
                    successMessage: action.payload.message,
                    isPosting: false
                }
        case USER_CREATE_ERROR :
            return {
                ...state,
                successMessage: '',
                loggingSuccess: '',
                loggingError: '',
                isPosting: false,
                error: action.payload
            }
        case LOGGING_IN_STATUS :
            return {
                ...state,
                isLoggingIn: true,
            }
        case LOGIN_SUCCESS :
            return {
                ...state,
                isLoggingIn: false,
                successMessage: '',
                error: '',
                loggingSuccess: action.payload.message + ', Click Find Recommendations at the top of the page to Get Started !',
                userId: action.payload.id,
                token: action.payload.token,
                loggingError: ''
            }
        case LOGIN_ERROR :
            return {
                ...state,
                isLoggingIn: false,
                successMessage: '',
                error: '',
                loggingSuccess: '',
                loggingError: action.payload
            }
        case LOGOUT_ACTION :
            return {
                isPosting: false,
                isLoggingIn: false,
                token: '',
                successMessage: '',
                error: '',
                loggingSuccess: '',
                loggingError: '',
                userId: 0,
                savingStatus: false,
                saveSuccessMessage: '',
                saveErrorMessage: '',
                recommendRetrieve: false,
                recommendSuccess: [],
                recommendError: '',
                deleteStart: false,
                deleteSuccess: '',
                deleteError: ''
            }
        case SAVE_INITIALIZE : 
            return {
                ...state,
                savingStatus: true
            }
        case SAVE_RECOMMEND_SUCCESS :
            return {
                ...state,
                savingStatus: false,
                saveSuccessMessage: action.payload,
                saveErrorMessage: ''
            }
        case SAVE_RECOMMEND_FAILURE :
            return {
                ...state,
                savingStatus: false,
                saveSuccessMessage: '',
                saveErrorMessage: action.payload
            }   
        case GET_RECOMMEND_START :
            return{
                ...state,
                recommendRetrieve: true
            }      
        case GET_RECOMMEND_SUCCESS : 
            return {
                ...state,
                recommendRetrieve: false,
                recommendSuccess: action.payload,
                recommendError: ''
            }
        case GET_RECOMMEND_ERROR :
            return {
                ...state,
                recommendRetrieve: false,
                recommendError: action.payload,
                recommendSuccess: []
            }
        case DELETE_RECOMMEND_START :
            return {
                ...state,
                deleteStart: true
            }
        case DELETE_RECOMMEND_SUCCESS :
            return {
                ...state,
                recommendSuccess: [],
                deleteStart: false
            }
        case DELETE_RECOMMEND_FAIL :
            return {
                ...state,
                deleteStart: false
            }
        default :
            return state
    }
}