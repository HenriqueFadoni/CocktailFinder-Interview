import * as actionTypes from './actionTypes';
import axios from 'axios';

// Fetching Data from the API

const fetchCocktailsSuccess = data => {
    return {
        type: actionTypes.FETCH_COCKTAILS_FROM_API_SUCCESS,
        cocktailList: data
    }
}

const fetchCocktailsFail = error => {
    return {
        type: actionTypes.FETCH_COCKTAILS_FROM_API_FAIL,
        error
    }
}

export const fetchCocktails = drinkName => {
    return async dispatch => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`;
            const { data } = await axios.get(url);
            return dispatch(fetchCocktailsSuccess(data.drinks));
        } catch (error) {
            return dispatch(fetchCocktailsFail(error));
        }
    };
};