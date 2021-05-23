import React from 'react'

import { Container, MenuItem } from './styles'

const Menu: React.FunctionComponent = () => (
  <Container>
    <MenuItem to='/app/account-status'>Minha conta</MenuItem>
    <MenuItem to='/app/signout'>Sair</MenuItem>
  </Container>
)

export default Menu
