import styled from 'styled-components'

export interface IPaginationProps {
  page: number
  setPage: (number: number) => void
  pageCount: number
}

export interface IPaginationItem {
  active: boolean
}
export const PaginationContainer = styled.div`
  height: 100px;
  widht: 100%;
  padding: 20px;
`
const PaginationItem = styled.div<IPaginationItem>`
  width: 40px;
  height: 40px;
  background: ${(props) => (props.active ? 'aqua' : props.theme.background3)};
  margin-right: 10px;
  float: left;
  display: grid;
  align-content: center;
  justify-content: center;
  cursor: pointer;
`

export const Pagination = ({ page, setPage, pageCount }: IPaginationProps) => {
  return (
    <PaginationContainer>
      {Array.from({ length: pageCount }).map((item, i) => {
        return (
          <PaginationItem onClick={() => setPage(i + 1)} key={i} active={i + 1 == page ? true : false}>
            {i + 1}
          </PaginationItem>
        )
      })}
    </PaginationContainer>
  )
}
