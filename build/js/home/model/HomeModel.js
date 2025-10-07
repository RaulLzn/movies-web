export default class HomeModel {
    welcomeInfo;
    constructor() {
        this.welcomeInfo = {
            title: 'Bienvenido a',
            subtitle: 'Rental Movies UPB'
        };
    }
    getWelcomeInfo = () => {
        return this.welcomeInfo;
    };
    initComponent = () => {
        console.log('HomeModel initialized');
    };
}
