import {
    FETCH_FOOD_START,
    FETCH_FOOD_SUCCESS,
    FETCH_FOOD_FAILURE,
    FETCH_CATEGORY_UPDATE,
    FETCH_FOOD_CATEGORY_FILTER_START,
    FETCH_FOOD_CATEGORY_FILTER_SUCCESS,
    FETCH_FOOD_CATEGORY_FILTER_FAILURE,
    GET_FULL_MEAL_DETAILS_START,
    GET_FULL_MEAL_DETAILS_SUCCESS,
    GET_FULL_MEAL_DETAILS_FAILURE
} from '../actions'

const initialState = {
    isFetching: false,
    error: '',
    selectedCategory: '',
    foodCategories: null,
    foodCategorySelected: null,
    fullMealDetails: null
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
        case FETCH_CATEGORY_UPDATE:
            return {
                ...state,
                selectedCategory: action.payload
            }
        case FETCH_FOOD_CATEGORY_FILTER_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_FOOD_CATEGORY_FILTER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                foodCategorySelected: action.payload,
                error: ''
            }
        case FETCH_FOOD_CATEGORY_FILTER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case GET_FULL_MEAL_DETAILS_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case GET_FULL_MEAL_DETAILS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                fullMealDetails: action.payload
            }
        case GET_FULL_MEAL_DETAILS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default: return state
    }
}

export default foodReducer;