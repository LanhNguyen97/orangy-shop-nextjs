'use client'
import AuthForm from '@/components/molecules/AuthForm'
import SpinningComponent from '@/components/molecules/SpinningComponent'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import './styles.scss'

const AuthComponent: FC<PropsWithChildren> = ({ children }) => {
  const [error, setError] = useState('')

  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const auth = localStorage.getItem('authenticated')
    if (auth === 'true') {
      setIsAuthenticated(true)
    }

    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }, [])

  if (isLoading && !isAuthenticated) {
    return (
      <div className="loading-wrapper">
        <SpinningComponent />
      </div>
    )
  }

  if (isAuthenticated) {
    return <>{children}</>
  }

  const handleLogin = (username: string, password: string) => {
    if (username === 'test' && password === '2wOIh4VTeruI') {
      localStorage.setItem('authenticated', 'true')

      setTimeout(() => {
        setIsLoading(true)
      }, 300)

      setTimeout(() => {
        setIsLoading(false)
        setIsAuthenticated(true)
      }, 600)
    } else {
      setError('Invalid username or password.')
    }
  }

  return (
    <div className="auth-container">
      <AuthForm onLogin={handleLogin} error={error} resetError={setError} />
    </div>
  )
}

export default AuthComponent
