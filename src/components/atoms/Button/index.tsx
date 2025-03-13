import { FC, ReactNode } from 'react'
import './styles.scss'

interface ButtonProps {
  children: ReactNode
  onClick: () => void
  className?: string
  type?: 'submit' | 'reset' | 'button'
  disabled?: boolean
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'button',
  disabled,
}) => {
  return (
    <button type={type} className={`button ${className}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
