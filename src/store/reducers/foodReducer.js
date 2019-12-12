import {
    FETCH_FOOD_START,
    FETCH_FOOD_SUCCESS,
    FETCH_FOOD_FAILURE
} from '../actions'

const initialState = {
    isFetching: false,
    error: '',
    foodCategories: null
}

const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FOOD_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_FOOD_SUCCESS:
            return {
                ...state,
                isFetching: false,
                foodCategories: action.payload,
                error: ''
            }
        case FETCH_FOOD_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default: return state
    }
}

export default foodReducer;