import {  Routes, Route } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import CarID from './id'
import { getCars } from '../../services/car'
import { CarCard, CarCardsContainer, ICar } from '../../components/card'
import { Pagination, IPaginationProps } from '../../components/pagination'
import { CAR_PAGE_COUNT } from '../../util/constants'
import { Loading } from '../../components/loading'

export default function Car() {
  return (
    <Routes>
      <Route path="/" element={<CarIndex />} />
      <Route path=":id" element={<CarID />} />
    </Routes>
  )
}

const CarIndex = () => {
  const [cars, setCars] = useState<ICar[]>([])
  const [page, setPage] = useState<number>(1)
  const [pageCount, setPageCount] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    setLoading(true)
    getCars(
      1,
      (res: any): void => {
        setCars(res.data.cars)
        setPageCount(res.data.count)
        setLoading(false)
      },
      (err: any): void => {
        console.log('error', err)
      }
    )
  }, [])
  useEffect(() => {
    setLoading(true)
    getCars(
      page,
      (res: any): void => {
        setCars(res.data.cars)
        setPageCount(res.data.count)
        setLoading(false)
      },
      (err: any): void => {
        console.log('error', err)
      }
    )
  }, [page])
  const handleSetPage = (page: number) => {
    setPage(page)
    ref.current!.scrollIntoView({ behavior: 'smooth' })
  }
  const paginationProps: IPaginationProps = {
    page,
    pageCount,
    setPage: handleSetPage
  }
  return (
    <Loading loading={loading}>
      <CarCardsContainer ref={ref}>
        {cars.map((car) => {
          return <CarCard key={car.id} {...car} />
        })}
      </CarCardsContainer>
      <Pagination {...paginationProps} />
    </Loading>
  )
}
