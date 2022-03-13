import styled from 'styled-components'

export const LoadingContainer = styled.div`
  width: 100%;
  height: 500px;
  background-image: url('/loading.gif');
  background-position: center;
  background-size: 100px 100px;
  background-repeat: no-repeat;
`
export const Loading = (props: any) => {
  return props.loading ? <LoadingContainer /> : props.children
}
