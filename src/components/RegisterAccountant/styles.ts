import styled from 'styled-components'
import { LinearProgress } from '@material-ui/core'

export const Title = styled.h3`
  text-align: center;
`

export const Subtitle = styled.p`
  margin-bottom: 2em;
  text-align: center;
`

export const Username = styled.p`
  text-align: center;
`

export const Email = styled.p`
  color: #ccc;
  text-align: center;
`

export const Field = styled.div`
  margin-bottom: 1em;
`

export const Spacer = styled.div`
  height: 2em;
`

export const Loading = styled(LinearProgress)`
  margin-top: 1em;
`
