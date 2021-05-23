import styled from 'styled-components'

export const Container = styled.div`
  background-color: #f8f8f8;
  display: grid;
  grid-template:
    'header header'
    'menu content';
  grid-template-columns: 200px auto;
  grid-template-rows: min-content auto;
  height: 100%;
  overflow: none;
  width: 100%;

  @media screen and (max-width: 500px) {
    grid-template:
      'header'
      'content';
    grid-template-columns: auto;
    grid-template-rows: min-content auto;
  }
`
