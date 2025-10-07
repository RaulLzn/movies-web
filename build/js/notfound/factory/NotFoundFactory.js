import NotFoundController from '../controller/NotFoundController.js';
import NotFoundModel from '../model/NotFoundModel.js';
import NotFoundView from '../view/NotFoundView.js';
export default class NotFoundFactory {
    static create = (parent, onHomeClick, onRentalsClick) => {
        const model = new NotFoundModel();
        const view = new NotFoundView(parent, model, onHomeClick, onRentalsClick);
        return new NotFoundController(model, view);
    };
}
