import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name
  };
}

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name
  };
}

const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENT_FAILED
  }
}

const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
  };
}

export const initIngredients = () => {
  return dispatch => {

    axios.get('/ingredients.json').then(response => {
      dispatch(setIngredients(response.data));  
    })
    .catch(err => {
        console.log(err + 'HELLO?');
        dispatch(fetchIngredientsFailed)
    });

  }
}