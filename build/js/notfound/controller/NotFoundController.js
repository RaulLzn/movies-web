export default class NotFoundController {
    model;
    view;
    constructor(model, view) {
        this.model = model;
        this.view = view;
        console.log('NotFoundController initialized');
    }
    initComponent = () => {
        this.model.initComponent();
        this.view.initComponent();
    };
}
