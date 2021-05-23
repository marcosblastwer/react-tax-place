import styled from 'styled-components'

const colors = {
  disabled: '#8bbef1',
  normal: '#1976d2',
  hover: '#1461ad',
  active: '#104a85',
  outline: '#8bbef1'
}

interface CustomButtonProps {
  disabled: boolean
}

export const CustomButton = styled.button<CustomButtonProps>`
  background-color: ${colors.normal};
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 0 2px transparent;
  color: #fff;
  cursor: pointer;
  font-weight: 500;
  outline: none;
  padding: 1em;
  transition: all .2s;

  :disabled {
    background-color: ${colors.disabled};
    cursor: default;
  }

  :hover {
    background-color: ${props => props.disabled ? colors.disabled : colors.hover};
  }

  :active {
    background-color: ${colors.active};
  }

  :active, :focus {
    box-shadow: 0 0 0 2px ${colors.outline};
    outline: none;
  }
`
