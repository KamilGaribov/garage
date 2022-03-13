import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../store/actions'
import { CalendarIcon, USDIcon, BasketIcon } from './icons'

interface IWarehouse {
  name: string
  location: string
  lat: string
  long: string
}

export interface ICar {
  id: number
  make: string
  model: string
  price: number
  licensed: boolean
  year_model: number
  date_added: string
  warehouse: IWarehouse
  warehouseid: number
}
export interface ICardContainer {
  hover?: boolean
  licensed: boolean
}

export const CarCardsContainer = styled.div`
  height: auto;
  width: 80%;
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  column-gap: 20px;
  row-gap: 20px;
`
const CardContainer = styled.div<ICardContainer>`
  display: grid;
  width: 220px;
  height: 320px;
  grid-template-rows: 220px auto;
  overflow: hidden;
  position: relative;
  background: ${(props) => props.theme.background3};
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 220px;
    left: 0;
    top: 0;
    border: ${(props) => (props.hover && props.licensed ? `10px solid ${props.theme.background}` : `0 solid ${props.theme.background}`)};
    transition: all 0.2s ease-in-out;
    z-index: 1;
    box-sizing: border-box;
  }
`
const CardImage = styled.img`
  width: 100%;
  height: 100%;
`
const CardContent = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 8fr 2fr;
  & > :nth-child(2) {
    align-self: end;
    justify-self: end;
    padding: 10px;
  }
`
const CardInfo = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding-left: 10px;
`
const CardH3 = styled.h3`
  margin: 0;
  padding: 10px 0 0 10px;
  font-size: 16px;
  &:hover {
    color: #0000ee;
  }
`

export const CarCard = (props: ICar) => {
  const { id, make, model, price, year_model, licensed } = props
  const [hover, setHover] = useState<boolean>(false)
  const dispatch = useDispatch()
  return (
    <CardContainer licensed={licensed} hover={hover} onMouseOver={() => setHover(!hover)} onMouseOut={() => setHover(!hover)}>
      <CardImage src={id % 3 == 0 ? 'bmw.jpeg' : id % 2 == 0 ? 'mb.jpeg' : 'audi.jpeg'} />
      <Link to={licensed ? `/car/${id}` : ''}>
        <CardH3>
          {make} {model}
        </CardH3>
      </Link>
      <CardContent>
        <CardInfo>
          <div>
            <CalendarIcon /> {year_model}
          </div>
          <div>
            <USDIcon /> {price}
          </div>
        </CardInfo>
        <BasketIcon onClick={() => dispatch(addToBasket({ ...props }))} enabled={licensed} pointer={licensed} />
      </CardContent>
    </CardContainer>
  )
}
