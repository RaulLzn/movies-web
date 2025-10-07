import IndexController from './index/controller/IndexController.js'
import IndexModel from './index/model/IndexModel.js'
import IndexView from './index/view/IndexView.js'

const index = new IndexController(new IndexModel(), new IndexView())
index.initComponent()

// Exponer el controlador globalmente para debugging y acceso desde eventos
declare global {
  interface Window {
    appController: IndexController
  }
}

window.appController = index
