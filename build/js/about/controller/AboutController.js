export default class AboutController {
    model;
    view;
    constructor(model, view) {
        this.model = model;
        this.view = view;
        console.log('AboutController initialized');
    }
    initComponent = () => {
        this.model.initComponent();
        this.view.initComponent();
    };
}
