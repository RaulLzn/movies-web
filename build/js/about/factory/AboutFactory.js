import AboutController from '../controller/AboutController.js';
import AboutModel from '../model/AboutModel.js';
import AboutView from '../view/AboutView.js';
export default class AboutFactory {
    static create = (parent) => {
        const model = new AboutModel();
        const view = new AboutView(parent, model);
        return new AboutController(model, view);
    };
}
