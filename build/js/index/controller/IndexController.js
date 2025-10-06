import MenuFactory from '../../menu/factory/MenuFactory.js';
import MovieFactory from '../../movie/factory/MovieFactory.js';
import QueryFactory from '../../query/factory/Queryfactory.js';
export default class IndexController {
    model;
    view;
    movie;
    menu;
    query;
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.movie = MovieFactory.create(this.view.getMainHTML());
        this.menu = MenuFactory.create(this.view.getMenuHTML());
        // Conectar Query con Movie a través de callback
        this.query = QueryFactory.create(this.view.getQueryHTML(), (searchTerm) => {
            console.log('IndexController: Received search term:', searchTerm);
            // Usar la interfaz pública de MovieModel para actualizar el término de búsqueda
            this.movie.getModel().setSearchTerm(searchTerm);
        });
    }
    initComponent = () => {
        this.model.initComponent();
        this.view.initComponent();
        this.movie.initComponent();
        this.menu.initComponent();
        this.query.initComponent();
    };
}
