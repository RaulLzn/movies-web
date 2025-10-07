import type { WelcomeInfo } from '../types/HomeTypes.js'

export default class HomeModel {
  private welcomeInfo: WelcomeInfo

  constructor() {
    this.welcomeInfo = {
      title: 'Bienvenido a',
      subtitle: 'Rental Movies UPB'
    }
  }

  readonly getWelcomeInfo = (): WelcomeInfo => {
    return this.welcomeInfo
  }

  readonly initComponent = (): void => {
    console.log('HomeModel initialized')
  }
}
