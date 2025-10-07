import type { PersonalInfo } from '../types/AboutTypes.js'

export default class AboutModel {
  private personalInfo: PersonalInfo

  constructor() {
    this.personalInfo = {
      name: 'Raul Ferney Lozano Navarro',
      program: 'Estudiante de Ingenieria de Sistemas e Informatica'
    }
  }

  readonly getPersonalInfo = (): PersonalInfo => {
    return this.personalInfo
  }

  readonly initComponent = (): void => {
    console.log('AboutModel initialized')
  }
}
