export default class IndexView {
    body;
    main;
    menu;
    query;
    constructor() {
        this.body = document.body;
        this.main = this.body.querySelector('main');
        this.menu = this.body.querySelector('menu');
        this.query = this.body.querySelector('query');
    }
    getMainHTML = () => this.main;
    getMenuHTML = () => this.menu;
    getQueryHTML = () => this.query;
    initComponent = () => { };
}
