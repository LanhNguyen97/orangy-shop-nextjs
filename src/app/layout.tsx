import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Orangy Shop NextJs',
  description: 'Orangy Shop NextJs',
  authors: [{ name: 'Nguyễn Văn Lành', url: 'https://www.linkedin.com/in/lanh-nguyen/' }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
