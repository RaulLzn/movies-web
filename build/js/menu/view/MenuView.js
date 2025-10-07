import MenuTemplate from '../template/MenuTemplate.js';
export default class MenuView {
    parent;
    menuTemplate;
    constructor(parent) {
        this.parent = parent;
        this.menuTemplate = new MenuTemplate([]);
    }
    initComponent = (menu) => {
        this.menuTemplate.setMenu(menu);
        this.parent.appendChild(this.menuTemplate.getMenuNode());
    };
    updateActiveState = (menu) => {
        this.menuTemplate.setMenu(menu);
        this.render();
    };
    render = () => {
        this.parent.innerHTML = '';
        this.parent.appendChild(this.menuTemplate.getMenuNode());
    };
}
