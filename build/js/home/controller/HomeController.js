export default class HomeController {
    model;
    view;
    constructor(model, view) {
        this.model = model;
        this.view = view;
        console.log('HomeController initialized');
    }
    initComponent = () => {
        this.model.initComponent();
        this.view.initComponent();
    };
}
