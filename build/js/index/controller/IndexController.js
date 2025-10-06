import MenuFactory from '../../menu/factory/MenuFactory.js';
import MovieFactory from '../../movie/factory/MovieFactory.js';
export default class IndexController {
    model;
    view;
    movie;
    menu;
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.movie = MovieFactory.create(this.view.getMainHTML());
        this.menu = MenuFactory.create(this.view.getMenuHTML());
    }
    initComponent = () => {
        this.model.initComponent();
        this.view.initComponent();
        this.movie.initComponent();
        this.menu.initComponent();
    };
}
