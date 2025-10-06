import PaginationController from "../controller/PaginationController";
import PaginationModel from "../model/PaginationModel";
export default class PaginationFactory {
    static create(parent, config, onPageChange) {
        const model = new PaginationModel(config);
        const controller = new PaginationController(parent, model, onPageChange || (() => { }));
        controller.init();
        return controller;
    }
}
