import PaginationView from '../view/PaginationView.js';
export default class PaginationController {
    model;
    view;
    constructor(parent, model, onPageChange) {
        this.model = model;
        this.view = new PaginationView(parent, this.model, () => {
            this.view.render();
            onPageChange();
        });
    }
    init = () => {
        this.view.render();
    };
    update = () => {
        this.view.render();
    };
    getModel = () => {
        return this.model;
    };
}
