import styled from 'styled-components'

const maxWidth: number = 499

export const Container = styled.div`
  background-color: #f8f8f8;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  display: -webkit-flex;
  -webkit-align-items: center;
  -webkit-justify-content: center;
  flex-direction: column;
  -webkit-flex-direction: column;

  @media screen and (max-width: ${maxWidth}px) {
    background-color: #fff;
  }
`

export const Box = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 2px 2px 6px -2px rgba(0,0,0,.15);
  display: flex;
  padding: 3em;
  flex-direction: column;
  
  @media screen and (min-width: 500px) {
    width: 420px;
  }

  @media screen and (max-width: ${maxWidth}px) {
    box-shadow: none;
    width: 100%;
  }
`
