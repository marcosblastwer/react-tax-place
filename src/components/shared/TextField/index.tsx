import React, { ChangeEvent, useRef, useMemo, useState } from 'react'

import {
  Container,
  InputContainer,
  Input,
  Label,
  ValidationContent
} from './styles'

import Validation from '../../../domain/validations/validation'

interface TextFieldProps {
  autoFocus?: boolean
  enabled?: boolean
  label?: string
  maxLength?: number
  type?: 'text' | 'email' | 'password'
  value?: string
  onChange?(event: ChangeEvent<HTMLInputElement>): void
  onValidate?(event: ChangeEvent<HTMLInputElement> | undefined): Validation
}

const TextField: React.FunctionComponent<TextFieldProps> = ({
  autoFocus,
  enabled,
  label,
  maxLength,
  type,
  value,
  onChange,
  onValidate
}) => {
  
  const [focused, setFocused] = useState<boolean>(false)
  const [validation, setValidation] = useState<Validation>(new Validation())
  const inputElement = useRef<HTMLInputElement>(null)

  const disabled = useMemo(() => {
    if (enabled !== null && enabled !== undefined)
      return !enabled
    return false
  }, [enabled])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (!!validation)
    {
      const emptyValidation = new Validation()
      setValidation(emptyValidation)
    }

    if (!!onChange)
      onChange(event)
  }

  const handleFocusOut = (event: ChangeEvent<HTMLInputElement>): void => {
    setFocused(false)

    if (!!onValidate)
      setValidation(onValidate(event))
  }

  return (
    <Container>
      <InputContainer 
        disabled={disabled}
        focused={focused}
        valid={validation.isValid}
        onClick={() => inputElement?.current?.focus()} 
      >
        { !!label && 
            <Label 
              disabled={disabled}
              focused={focused}
              valid={validation.isValid}
              onClick={() => inputElement?.current?.focus()} 
            >
              {label}
            </Label>
        }

        <Input 
          autoFocus={!!autoFocus}
          disabled={disabled}
          maxLength={maxLength}
          ref={inputElement}
          type={type ? type : 'text'}
          value={value} 
          onChange={handleChange} 
          onFocus={() => setFocused(true)}
          onBlur={(event) => handleFocusOut(event)}
        />
      </InputContainer>

      {
        !validation.isValid &&
          <ValidationContent>{validation.message}</ValidationContent>
      }
    </Container>
  )
}

export default TextField
