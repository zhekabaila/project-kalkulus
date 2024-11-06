import { ThemeProvider } from '@/contexts/themeContext'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ThemeProvider>{children}</ThemeProvider>
}
