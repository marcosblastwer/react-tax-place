import React from 'react'

import {
  Container,
  Content,
  Title
} from './styles'

const AccountStatusPage: React.FunctionComponent = () => {
  return (
    <Container>
      <Title>Conta em ativação</Title>
      <Content>
        Sua conta está em processo de avaliação e ativação por nossa equipe,
        por favor aguarde até que a ativação seja concluída e a plataforma esteja disponível para você.
      </Content>
    </Container>
  )
}

export default AccountStatusPage
