import PaginationController from "../controller/PaginationController";
import PaginationModel from "../model/PaginationModel";
import PaginationConfig from "../types/PaginationConfig";

export default class PaginationFactory {
    static create(
        parent: HTMLElement,
        config?: PaginationConfig,
        onPageChange?: () => void
    ): PaginationController {
        const model = new PaginationModel(config);
        const controller = new PaginationController(
            parent,
            model,
            onPageChange || (() => {})
        );
        controller.init();
        return controller;
    }
}