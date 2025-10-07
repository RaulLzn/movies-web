import NotFoundTemplate from '../template/NotFoundTemplate.js';
export default class NotFoundView {
    parent;
    model;
    onHomeClick;
    onRentalsClick;
    notFoundTemplate;
    constructor(parent, model, onHomeClick, onRentalsClick) {
        this.parent = parent;
        this.model = model;
        this.onHomeClick = onHomeClick;
        this.onRentalsClick = onRentalsClick;
        this.notFoundTemplate = new NotFoundTemplate();
    }
    initComponent = () => {
        this.render();
        this.attachEventListeners();
    };
    render = () => {
        const notFoundInfo = this.model.getNotFoundInfo();
        this.parent.innerHTML = this.notFoundTemplate.getNotFoundHTML(notFoundInfo);
    };
    attachEventListeners = () => {
        const homeBtn = this.parent.querySelector('[data-action="home"]');
        const rentalsBtn = this.parent.querySelector('[data-action="rentals"]');
        if (homeBtn) {
            homeBtn.addEventListener('click', () => {
                this.onHomeClick();
            });
        }
        if (rentalsBtn) {
            rentalsBtn.addEventListener('click', () => {
                this.onRentalsClick();
            });
        }
    };
}
