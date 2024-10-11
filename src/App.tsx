import { ThemeProvider } from 'styled-components'

import Sobre from './containers/Sobre'
import Sidebar from './containers/Sidebar'
import Projetos from './containers/Projetos'
import EstiloGlobal, { Container } from './styles'
import themeLight from './themes/light'
import themeDark from './themes/dark'
import { useState } from 'react'

function App() {
  const [isUsingDarkTheme, setIsUsingDarkTheme] = useState(true)

  function themeChange() {
    setIsUsingDarkTheme(!isUsingDarkTheme)
  }

  return (
    <ThemeProvider theme={isUsingDarkTheme ? themeDark : themeLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar themeChange={themeChange} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
