import axios from "axios";

export const FETCH_FOOD_START = "FETCH_FOOD_START";
export const FETCH_FOOD_SUCCESS = "FETCH_FOOD_SUCCESS";
export const FETCH_FOOD_FAILURE = "FETCH_FOOD_FAILURE";
export const FETCH_CATEGORY_UPDATE = "FETCH_CATEGORY_UPDATE";
export const FETCH_FOOD_CATEGORY_FILTER_START = "FETCH_FOOD_CATEGORY_FILTER";
export const FETCH_FOOD_CATEGORY_FILTER_SUCCESS = "FETCH_FOOD_CATEGORY_FILTER_SUCCESS";
export const FETCH_FOOD_CATEGORY_FILTER_FAILURE ="FETCH_FOOD_CATEGORY_FILTER_FAILURE";
export const GET_FULL_MEAL_DETAILS_START = "GET_FULL_MEAL_DETAILS_START";
export const GET_FULL_MEAL_DETAILS_SUCCESS = "GET_FULL_MEAL_DETAILS_SUCCESS";
export const GET_FULL_MEAL_DETAILS_FAILURE = "GET_FULL_MEAL_DETAILS_FAILURE";

const apiURL = 'https://corsanywhere.herokuapp.com/'

export const getFoodCategories = () => dispatch => {
    dispatch({ type: FETCH_FOOD_START}); 
    axios.get(`${apiURL}//www.themealdb.com/api/json/v1/1/categories.php`)
        .then(res => dispatch({type: FETCH_FOOD_SUCCESS, payload: res.data.categories}))
        .catch(err => dispatch({type: FETCH_FOOD_FAILURE, payload: err.response}))
}

export const getSelectedFoodCategory = category => dispatch => {
    dispatch({type: FETCH_FOOD_CATEGORY_FILTER_START, payload: category});
    dispatch({type: FETCH_CATEGORY_UPDATE, payload: category});
    axios.get(`${apiURL}//www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then(res => dispatch({type: FETCH_FOOD_CATEGORY_FILTER_SUCCESS, payload: res.data.meals}))
        .catch(err => dispatch({type: FETCH_FOOD_CATEGORY_FILTER_FAILURE, payload: err.response}))
}

export const getFullMealDetails = meal => dispatch => {
    dispatch({type: GET_FULL_MEAL_DETAILS_START});
    axios.get(`${apiURL}//www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`)
        .then(res => dispatch({type: GET_FULL_MEAL_DETAILS_SUCCESS, payload: res.data.meals}))
        .catch(err => dispatch({type: GET_FULL_MEAL_DETAILS_FAILURE, payload: err.response}))
}