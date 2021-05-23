import React, { MouseEvent, useMemo } from 'react'

import { CustomButton } from './styles'

interface ButtonProps {
  enabled?: boolean
  type?: 'button' | 'reset' | 'submit'
  onClick?(event: MouseEvent<HTMLButtonElement>): void
}

const Button: React.FunctionComponent<ButtonProps> = ({ children, enabled, type, onClick }) => {
  const disabled = useMemo(() => {
    if (enabled !== null && enabled !== undefined)
      return !enabled
    return false
  }, [enabled])

  return (
    <CustomButton
      disabled={disabled}
      type={type ? type : 'button'}
      onClick={onClick}
    >
      {children}
    </CustomButton>
  )
}

export default Button
