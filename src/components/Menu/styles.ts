import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: menu;
  padding: 1em;
  z-index: 2001;

  @media screen and (max-width: 500px) {
    display: none;
  }
`

export const MenuItem = styled(Link)`
  border: none;
  color: #000;
  margin-bottom: .5em;
  outline: none;
  text-decoration: none;
  transition: all .2s;

  :hover {
    color: #1F97FF;
    transform: translateX(3px);
  }

  :active {
    color: #000;
  }
`
