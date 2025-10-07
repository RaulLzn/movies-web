import HomeTemplate from '../template/HomeTemplate.js';
export default class HomeView {
    parent;
    model;
    homeTemplate;
    constructor(parent, model) {
        this.parent = parent;
        this.model = model;
        this.homeTemplate = new HomeTemplate();
    }
    initComponent = () => {
        this.render();
    };
    render = () => {
        const welcomeInfo = this.model.getWelcomeInfo();
        this.parent.innerHTML = this.homeTemplate.getHomeHTML(welcomeInfo);
    };
}
