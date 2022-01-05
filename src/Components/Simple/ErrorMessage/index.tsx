import { FC } from 'react'
import { Alert } from '@mui/material'

interface IProps {
  children: string
}

const ErrorMessage: FC<IProps> = ({ children }) => (
  <Alert severity="error">{children}</Alert>
)

export default ErrorMessage
