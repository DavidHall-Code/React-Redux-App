//Need to import axios
import axios from 'axios';
//Need to export START, SUCCESS, FAILURE
export const FETCH_CASES_START = 'FETCH_CASES_START'
export const FETCH_CASES_SUCCESS = 'FETCH_CASES_SUCCESS'
export const FETCH_CASES_FAILURE = 'FETCH_CASES_FAILURE'


//Axios API `https://api.covid19api.com/summary`
export const fetchCases = () => {
    return dispatch => {
        dispatch({type: FETCH_CASES_START})
        axios
            .get('https://api.covid19api.com/summary')
            .then((res) => {
                console.log(res)
                dispatch({type: FETCH_CASES_SUCCESS, payload: res.data.Countries[179]})
            })
            .catch((err) => {
                console.log(err)
            })
    }
}


// Math.floor(Math.random() * Math.floor(max)) 