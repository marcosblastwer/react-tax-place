import styled from 'styled-components'

const colors = {
  disabled: '#8bbef1',
  normal: '#1976d2',
  hover: '#1461ad',
  active: '#104a85',
}

interface ButtonProps {
  disabled: boolean
}

export const Button = styled.button<ButtonProps>`
  background-color: #fff;
  border: none;
  color: ${colors.normal};
  cursor: pointer;
  font-weight: 500;
  outline: none;
  transition: color .2s;

  :disabled {
    color: ${colors.disabled};
    cursor: default;
  }

  :hover {
    color: ${props => props.disabled ? colors.disabled : colors.hover};
  }

  :active {
    color: ${colors.active};
  }
`
