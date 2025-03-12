import { JSX } from 'react'

type TypographyProps = {
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

const Typography: React.FC<TypographyProps> = ({ children, className, as: Tag = 'p' }) => {
  return <Tag className={className}>{children}</Tag>
}

export default Typography
