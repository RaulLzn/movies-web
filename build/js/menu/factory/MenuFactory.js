import MenuController from '../controller/MenuController.js';
export default class MenuFactory {
    static create = (parent, onShowHome, onShowMovies, onShowAbout) => {
        const controller = new MenuController(parent, onShowHome, onShowMovies, onShowAbout);
        return controller;
    };
}
