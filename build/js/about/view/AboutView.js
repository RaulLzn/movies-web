import AboutTemplate from '../template/AboutTemplate.js';
export default class AboutView {
    parent;
    model;
    aboutTemplate;
    constructor(parent, model) {
        this.parent = parent;
        this.model = model;
        this.aboutTemplate = new AboutTemplate();
    }
    initComponent = () => {
        this.render();
    };
    render = () => {
        const personalInfo = this.model.getPersonalInfo();
        this.parent.innerHTML = this.aboutTemplate.getAboutHTML(personalInfo);
    };
}
