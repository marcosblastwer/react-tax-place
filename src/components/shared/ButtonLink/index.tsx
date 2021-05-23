import React, { FunctionComponent, MouseEvent, useMemo } from 'react'

import { Button } from './styles'

interface ButtonLinkProps {
  enabled?: boolean
  onClick?(event: MouseEvent<HTMLButtonElement>): void
}

const ButtonLink: FunctionComponent<ButtonLinkProps> = ({
  children,
  enabled,
  onClick
}) => {
  const disabled = useMemo(() => {
    if (enabled !== null && enabled !== undefined)
      return !enabled
    return false
  }, [enabled])

  return (
    <Button
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export default ButtonLink
