import { FC, PropsWithChildren } from 'react'

export const Text: FC<PropsWithChildren & { className?: string }> = props => {
  const { children, ...restProps } = props
  return <p {...restProps}>{children}</p>
}
