import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ThemeIcon } from './icons'
import { Basket } from './basket'

const logoDark = '/garage-dark.png'
const logoLight = '/garage-light.png'

const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background2};
  position: relative;
  & > :nth-child(1) {
    margin-left: 40px;
  }
  & > div:nth-child(2) {
    display: grid;
    grid-template-columns: repeat(4, 100px);
    column-gap: 20px;
    justify-items: center;
  }
  position: sticky;
  z-index: 2;
`
const NavbarLogo = styled.div`
  width: 120px;
  height: 50px;
  cursor: pointer;
  background-image: url(${(props) => (props.theme.name == 'light' ? logoDark : logoLight)});
  background-position: left top;
  background-size: 120px 50px;
  background-repeat: no-repeat;
`
const Button = styled.button`
  padding: 14px 17px;
  color: ${(props) => props.theme.button.color};
  background: ${(props) => props.theme.button.background};
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  border: none;
`
interface INavbarProps {
  theme: string
  setTheme: () => void
}

export const Navbar = ({ theme, setTheme }: INavbarProps) => {
  return (
    <NavbarContainer>
      <Link to="/">
        <NavbarLogo />
      </Link>
      <div>
        <Link to="/">Home</Link>
        <Link to="/car">Cars</Link>
        <Basket />
        <ThemeIcon theme={theme} setTheme={setTheme} />
      </div>
    </NavbarContainer>
  )
}

export default Navbar
