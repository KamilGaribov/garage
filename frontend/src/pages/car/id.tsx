import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../../store/actions'
import { getCar } from '../../services/car'
import { CalendarIcon, USDIcon, BasketIcon } from '../../components/icons'
import {ICar } from "../../components/card"

const CarID = () => {
  const { id } = useParams()
  const [car, setCar] = useState<ICar>(null)
  const dispatch = useDispatch()
  useEffect(() => {
    getCar(
      parseInt(id),
      (res: any): void => {
        setCar(res.data)
      },
      (err: any): void => {
        console.log('err', err)
      }
    )
  }, [])
  if (!car) return null
  if (!car.licensed) return <div>car is not licensed</div>
  return (
    <div>
      <div>
        {car.make} {car.model}
      </div>
      <div>
        <CalendarIcon /> {car.year_model}
      </div>
      <div>
        <USDIcon /> {car.price}
      </div>
      <div>{car.date_added}</div>
      <div>{car.warehouse.name}</div>
      <div>
        {car.warehouse.location}: {car.warehouse.lat} {car.warehouse.long}
      </div>
      <div>
        add to cart <BasketIcon enabled={true} pointer={true} onClick={() => dispatch(addToBasket({ ...car }))} />
      </div>
    </div>
  )
}

export default CarID
