import MenuModel from '../model/MenuModel.js';
import MenuView from '../view/MenuView.js';
export default class MenuController {
    model;
    view;
    constructor(parent, onShowHome, onShowMovies, onShowAbout) {
        this.view = new MenuView(parent);
        this.model = new MenuModel(onShowHome, onShowMovies, onShowAbout, () => this.view.updateActiveState(this.model.getMenu()));
    }
    setActiveMenuItem = (label) => {
        this.model.setActiveItem(label);
        this.view.updateActiveState(this.model.getMenu());
    };
    initComponent = () => {
        this.model.initComponent();
        this.view.initComponent(this.model.getMenu());
    };
}
