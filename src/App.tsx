import { ThemeProvider } from 'styled-components'
import { LoginIn } from './components/LoginIn/LoginIn'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <LoginIn />
      <GlobalStyle />
    </ThemeProvider>
  )
}
