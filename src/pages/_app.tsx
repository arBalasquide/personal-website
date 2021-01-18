import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import { useState } from 'react'

import theme from '../theme'

function MyApp({ Component, pageProps }) {
  const [language, setLanguage] = useState("EN");

  return (
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp
