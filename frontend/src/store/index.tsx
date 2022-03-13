import { ICar } from '../components/card'

interface IBasket {
  cars: ICar[]
  total: number
  visible: boolean
}
export interface IINITIAL_STATE {
  basket: IBasket
}

const INITIAL_STATE: IINITIAL_STATE = {
  basket: {
    cars: [],
    total: 0,
    visible: false
  }
}

export default INITIAL_STATE
