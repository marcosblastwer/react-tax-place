import React, { FunctionComponent } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface ModalMessageProps {
  actions: React.ReactNode
  open: boolean
  title?: string
}

const ModalMessage: FunctionComponent<ModalMessageProps> = ({ actions, children, open, title }) => {
  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      { !!title && <DialogTitle>{title}</DialogTitle> }

      <DialogContent>
        <DialogContentText>
          {children}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {actions}
      </DialogActions>
    </Dialog>
  )
}

export default ModalMessage
