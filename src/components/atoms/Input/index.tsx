import { ChangeEvent, FC } from 'react'
import './styles.scss'

interface InputProps {
  type: 'text' | 'password' | 'email'
  placeholder?: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  className?: string
  name: string
  required?: boolean
  errorText?: string
}

const Input: FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  className = '',
  name,
  required,
  errorText,
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`input ${className}`}
        name={name}
        required={required}
      />
      {errorText && <small className="input-error">{errorText}</small>}
    </>
  )
}

export default Input
