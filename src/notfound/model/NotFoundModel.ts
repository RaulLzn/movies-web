import type { NotFoundInfo } from '../types/NotFoundTypes.js'

export default class NotFoundModel {
  private notFoundInfo: NotFoundInfo

  constructor() {
    this.notFoundInfo = {
      errorCode: '404',
      title: '¡Oops! Película No Encontrada',
      message: 'Parece que esta película fue eliminada de nuestro catálogo... o nunca existió.',
      suggestions: [
        'Vuelve al inicio y explora nuestro catálogo',
        'Usa la búsqueda para encontrar películas',
        'Revisa la sección de About para más información'
      ]
    }
  }

  readonly getNotFoundInfo = (): NotFoundInfo => {
    return this.notFoundInfo
  }

  readonly initComponent = (): void => {
    console.log('NotFoundModel initialized')
  }
}
