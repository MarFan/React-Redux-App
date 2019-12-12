import axios from "axios";

export const FETCH_FOOD_START = "FETCH_FOOD_START";
export const FETCH_FOOD_SUCCESS = "FETCH_FOOD_SUCCESS";
export const FETCH_FOOD_FAILURE = "FETCH_FOOD_FAILURE";

export const getFoodCategories = () => dispatch => {
    dispatch({ type: FETCH_FOOD_START}); 
    axios.get('https://cors-anywhere.herokuapp.com///www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => {console.log(res.data);dispatch({type: FETCH_FOOD_SUCCESS, payload: res.data.categories})})
        .catch(err => {dispatch({type: FETCH_FOOD_FAILURE, payload: err.response})})
}