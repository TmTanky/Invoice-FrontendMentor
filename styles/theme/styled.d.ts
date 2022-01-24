import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    bgTransparent: {
      paid: string
      pending: string
      draft: string
    }
    bgStatus: {
      paid: string
      pending: string
      draft: string
    }
  }
}
