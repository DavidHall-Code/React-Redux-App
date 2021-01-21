//Need to import START and SUCCESS from actions
import { FETCH_CASES_START, FETCH_CASES_SUCCESS, FETCH_CASES_FAILURE } from '../actions'

//Set initialState
const initialState = {
    isFetching: false,
    cases: [],
    error: ''
};

//Export the reducer `state = initialState, action`
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CASES_START: 
            return {
                ...state,
                isFetching: true
            }
        case FETCH_CASES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                cases: action.payload
            }
        case FETCH_CASES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
};