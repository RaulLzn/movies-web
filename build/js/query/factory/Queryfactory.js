import QueryController from '../controller/QueryController.js';
import QueryModel from '../model/QueryModel.js';
import QueryView from '../view/QueryView.js';
export default class QueryFactory {
    static create = (parent, onSearchChange) => {
        const model = new QueryModel();
        const view = new QueryView(parent);
        return new QueryController(model, view, onSearchChange);
    };
}
