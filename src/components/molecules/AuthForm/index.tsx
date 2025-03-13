'use client'
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import Input from '@/components/atoms/Input'
import Button from '@/components/atoms/Button'
import './styles.scss'

interface AuthFormProps {
  onLogin: (username: string, password: string) => void
  error?: string
  resetError: Dispatch<SetStateAction<string>>
}

const AuthForm: React.FC<AuthFormProps> = ({ onLogin, error, resetError }) => {
  const [state, setState] = useState({
    userName: '',
    password: '',
  })

  const [internalError, setInternalError] = useState({
    userName: '',
    password: '',
  })

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e?.target?.name) return
    setState(prev => ({ ...prev, [e.target.name]: e.target.value }))

    const hasError = !!internalError[e.target.name as 'userName' | 'password']

    if (hasError) {
      setInternalError(prev => ({
        ...prev,
        [e.target.name]: '',
      }))
    }

    if (error) {
      resetError('')
    }
  }

  const onClick = () => {
    if (!state.userName || !state.password) {
      setInternalError(prev => ({
        ...prev,
        [!state.userName ? 'userName' : 'password']: 'This field is required',
      }))
      return
    }

    onLogin(state.userName, state.password)
  }

  return (
    <div className="auth-form">
      <h2>Login</h2>
      <div className="login-form">
        <Input
          type="text"
          placeholder="Username"
          value={state.userName}
          onChange={onChange}
          name="userName"
          errorText={internalError.userName}
        />
        <Input
          type="password"
          placeholder="Password"
          value={state.password}
          onChange={onChange}
          name="password"
          errorText={internalError.password}
        />
      </div>
      <Button type="submit" onClick={onClick}>
        Login
      </Button>
      {error && <p className="error">{error}</p>}
    </div>
  )
}

export default AuthForm
