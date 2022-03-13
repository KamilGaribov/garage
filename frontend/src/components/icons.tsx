import styled from 'styled-components'
import { useRef } from 'react'
import { transition } from '../util/helper'

const FontAwesome = styled.i`
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  font-style: normal;
  align-self: center;
  justify-self: center;
`
interface IIconProps {
  enabled?: boolean
  pointer?: boolean
}
export const DeleteIcon = styled(FontAwesome)<IIconProps>`
  cursor: ${(props) => (props.pointer ? 'pointer' : 'default')};
  &:before {
    content: '\f1f8';
    color: red;
  }
`
export const LightIcon = styled(FontAwesome)<IIconProps>`
  cursor: ${(props) => (props.pointer ? 'pointer' : 'default')};
  &:before {
    content: '\f185';
  }
`
export const DarkIcon = styled(FontAwesome)<IIconProps>`
  cursor: ${(props) => (props.pointer ? 'pointer' : 'default')};
  &:before {
    content: '\f186';
  }
`
export const CalendarIcon = styled(FontAwesome)`
  &:before {
    content: '\f133';
  }
`
export const USDIcon = styled(FontAwesome)`
  &:before {
    content: '\f155';
  }
`
export const BasketIcon = styled(FontAwesome)<IIconProps>`
  transition: transform 0.2s ease-in-out;
  cursor:  ${(props) => (props.pointer ? 'pointer' : 'inherit')};
  pointer-events:  ${(props) => (props.pointer ? 'default' : 'none')};
  &:before {
    color: ${(props) => (props.enabled ? 'yellow' : props.theme.color)};
    content: '\f07a';
  }
  &:hover {
    transform: ${(props) => (props.enabled ? 'scale(1.5)' : 'none')};
  }
}
`

export const ThemeIcon = ({ theme, setTheme }: any) => {
  const ref: any = useRef<HTMLDivElement>()
  const handleClick = () => {
    setTheme()
    transition(ref.current)
  }
  return (
    <div ref={ref}>
      {theme == 'light' ? <DarkIcon pointer={true} onClick={() => handleClick()} /> : <LightIcon pointer={true} onClick={() => handleClick()} />}
    </div>
  )
}
