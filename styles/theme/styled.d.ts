import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: {
      primary: string
      secondary: string
    }
    buttonOuterBG: {
      paid: string
      pending: string
      draft: string
    }
    buttonInnerBG: {
      paid: string
      pending: string
      draft: string
    }
    fontColor: {
      default: string
    }
  }
}
