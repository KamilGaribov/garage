import INITIAL_STATE from '../index'
import { ADD_TO_BASKET, REMOVE_FROM_BASKET, TOGGLE_BASKET } from '../../util/constants'

const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      let index: number = state.basket.cars.findIndex((car: any) => car.id === action.payload.id)
      if (index == -1) {
        return {
          ...state,
          basket: {
            ...state.basket,
            cars: state.basket.cars.concat(action.payload),
            total: +(state.basket.total + action.payload.price).toFixed(2),
            visible: true
          }
        }
      } else {
        return {
          ...state,
          basket: { ...state.basket, visible: true }
        }
      }
    case REMOVE_FROM_BASKET:
      return {
        ...state,
        basket: {
          ...state.basket,
          cars: state.basket.cars.filter((car: any) => car.id !== action.payload.id),
          total: +(state.basket.total - action.payload.price).toFixed(2)
        }
      }
      return state
    case TOGGLE_BASKET:
      return {
        ...state,
        basket: { ...state.basket, visible: state.basket.visible ? false : true }
      }
    default:
      return state
  }
}

export default reducer
