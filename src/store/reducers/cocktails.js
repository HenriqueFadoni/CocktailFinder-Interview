import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cocktailList: [],
    loading: false,
    error: false
}

const fetchCocktailsStart = state => {
    return {
        ...state,
        loading: true,
    };
};


const fetchCocktailsSuccess = (state, action) => {
    return {
        ...state,
        cocktailList: action.cocktailList,
        loading: false,
        error: false
    };
};

const fetchCocktailsFail = state => {
    return {
        ...state,
        error: true,
        loading: false,
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_COCKTAILS_FROM_API_START: return fetchCocktailsStart(state);
        case actionTypes.FETCH_COCKTAILS_FROM_API_SUCCESS: return fetchCocktailsSuccess(state, action);
        case actionTypes.FETCH_COCKTAILS_FROM_API_FAIL: return fetchCocktailsFail(state);
        default: return state;
    };
};

export default reducer;