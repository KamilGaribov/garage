import { Dispatch } from 'redux'
import { LOADING_TRUE, ADD_TO_BASKET, REMOVE_FROM_BASKET, TOGGLE_BASKET } from '../../util/constants'
import {ICar} from "../../components/card"

export const createPostFormDone = () => (dispatch: Dispatch) => {
  dispatch({ type: LOADING_TRUE })
}
export const addToBasket = (car: ICar) => (dispatch: Dispatch) => {
  dispatch({ type: ADD_TO_BASKET, payload: car })
}
export const removeFromBasket = (id: number, price: number) => (dispatch: Dispatch) => {
  dispatch({ type: REMOVE_FROM_BASKET, payload: { id, price } })
}
export const toggleBasket = () => (dispatch: Dispatch) => {
  dispatch({ type: TOGGLE_BASKET })
}
