import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript, LightMode } from '@chakra-ui/react'
import theme from '../theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html >
        <Head />
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
