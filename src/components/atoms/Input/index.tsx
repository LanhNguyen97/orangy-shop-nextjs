import './styles.scss'

interface InputProps {
  type: 'text' | 'password' | 'email'
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  name: string
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  className = '',
  name,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`input ${className}`}
      name={name}
    />
  )
}

export default Input
