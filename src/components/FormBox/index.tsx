import React, { FunctionComponent } from 'react'

import { Box, Container } from './styles'

const FormBox: FunctionComponent = ({ children }) => (
  <Container>
    <Box>
      { children }
    </Box>
  </Container>
)

export default FormBox
