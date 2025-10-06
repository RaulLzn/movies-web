export default class QueryController {
    model;
    view;
    onSearchChange;
    constructor(model, view, onSearchChange) {
        this.model = model;
        this.view = view;
        this.onSearchChange = onSearchChange;
    }
    initComponent = () => {
        this.model.initComponent();
        this.view.initComponent();
        // Suscribirse a cambios en el input
        this.view.onSearch((term) => {
            this.model.setSearchTerm(term);
            this.onSearchChange(term);
        });
    };
}
