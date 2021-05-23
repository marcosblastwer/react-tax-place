import React from 'react'

import LogoSvg from '../../assets/tax.svg'

import { Container, Logo } from './styles'

const Header: React.FunctionComponent = ({ children }) => (
  <Container>
    <Logo src={LogoSvg} alt='Logotipo Tax Place' />
  </Container>
)

export default Header
