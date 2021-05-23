import styled from 'styled-components'

const colors = {
  disabled: '#f8f8f8',
  focus: '#1976d2',
  invalid: '#FF4D4D',
  
  border: {
    normal: '#E2E2E1',
    disabled: '#E2E2E1',
    focus: '#1976d2',
    hover: '#B5B5B4'
  }
}

interface InputProps {
  disabled: boolean
  focused: boolean
  valid: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const InputContainer = styled.div<InputProps>`
  border: 1px solid ${props => 
    props.focused 
    ? (props.valid
      ? colors.border.focus
      : colors.invalid)
      : colors.border.normal };
  
  box-shadow: 0 0 0 2px ${props =>
    props.focused 
      ? (props.valid 
        ? 'rgba(25,118,210, .25)'
        : 'rgba(255,77,77, .25)')
      : 'transparent' };
  
  background-color: ${props => props.disabled ? colors.disabled : '#fff'};
  border-radius: 4px;
  box-sizing: border-box;
  cursor: ${props => props.disabled ? 'default' : 'text'};
  display: flex;
  flex-direction: column;
  margin: 2px 0;
  padding: .5em .8em .7em .8em;
  transition: all .2s;

  :hover {
    border-color: ${props => 
      (!props.disabled) && props.focused 
        ? (props.valid 
          ? colors.focus
          : colors.invalid)
        : (props.disabled 
          ? colors.border.disabled 
          : colors.border.hover)};
  }
`

export const Label = styled.label<InputProps>`
  color: ${props => 
    !props.valid
      ? colors.invalid
      : (props.focused 
        ? colors.focus
        : 'rgba(0,0,0,.54)') };

  cursor: ${props => props.disabled ? 'default' : 'text'};
  font-size: .75em;
  letter-spacing: 0.00938em;
  margin-bottom: .4em;
  transition: all .2s;
`

export const Input = styled.input`
  border: none;
  font-size: 1em;
  outline: none;

  :disabled {
    background-color: ${colors.disabled};
  }
`

export const ValidationContent = styled.span`
  color: ${colors.invalid};
  font-size: .75em;
  font-weight: 500;
  margin-top: 2px;
`
