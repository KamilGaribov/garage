import styled from 'styled-components'
import { BasketIcon, DeleteIcon } from './icons'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromBasket, toggleBasket } from '../store/actions'

interface IBasketInnerContainer {
  visible: boolean
}
const BasketContainer = styled.div`
  position: relative;
`
const BasketInnerContainer = styled.div<IBasketInnerContainer>`
  width: 300px;
  height: auto;
  min-height: 300px;
  background: ${(props) => props.theme.background4};
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 2;
  display: ${(props) => (props.visible ? 'grid' : 'none')};
  grid-template-rows: 20px auto;
  padding: 5px;
  & > div:nth-child(1) {
    border-bottom: 1px solid black;
  }
`
const BasketItem = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  column-gap: 10px;
`

export const Basket = () => {
  const total = useSelector((state: any) => state.basket.total)
  const cars = useSelector((state: any) => state.basket.cars)
  const visible = useSelector((state: any) => state.basket.visible)
  const dispatch = useDispatch()
  return (
    <BasketContainer>
      <BasketIcon pointer={true} onClick={() => dispatch(toggleBasket())} />
      <BasketInnerContainer visible={visible}>
        <div>total: ${total}</div>
        <div>
          {cars.map((car: any) => {
            return (
              <BasketItem key={car.id}>
                <div>
                  {car.make} {car.model} ${car.price}
                </div>
                <DeleteIcon pointer={true} onClick={() => dispatch(removeFromBasket(car.id, car.price))} />
              </BasketItem>
            )
          })}
        </div>
      </BasketInnerContainer>
    </BasketContainer>
  )
}
