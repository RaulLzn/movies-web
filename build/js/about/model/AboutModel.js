export default class AboutModel {
    personalInfo;
    constructor() {
        this.personalInfo = {
            name: 'Raul Ferney Lozano Navarro',
            program: 'Estudiante de Ingenieria de Sistemas e Informatica'
        };
    }
    getPersonalInfo = () => {
        return this.personalInfo;
    };
    initComponent = () => {
        console.log('AboutModel initialized');
    };
}
