import React from 'react'

import Content from '../Content'
import Header from '../Header'
import Menu from '../Menu'

import { Container } from './styles'

const Layout: React.FunctionComponent = ({ children }) => (
  <Container>
    <Header />
    <Menu />
    <Content>
      {children}
    </Content>
  </Container>
)

export default Layout
