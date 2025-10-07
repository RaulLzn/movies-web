export default class MenuModel {
    onShowHome;
    onShowMovies;
    onShowAbout;
    onUpdateView;
    menu;
    constructor(onShowHome, onShowMovies, onShowAbout, onUpdateView) {
        this.onShowHome = onShowHome;
        this.onShowMovies = onShowMovies;
        this.onShowAbout = onShowAbout;
        this.onUpdateView = onUpdateView;
        this.menu = [
            {
                label: 'Home',
                link: '#home',
                active: true,
                action: () => {
                    this.setActiveItem('Home');
                    this.onUpdateView?.();
                    this.onShowHome?.();
                },
            },
            {
                label: 'Rentals',
                link: '#rentals',
                active: false,
                action: () => {
                    this.setActiveItem('Rentals');
                    this.onUpdateView?.();
                    this.onShowMovies?.();
                },
            },
            {
                label: 'About',
                link: '#about',
                active: false,
                action: () => {
                    this.setActiveItem('About');
                    this.onUpdateView?.();
                    this.onShowAbout?.();
                },
            },
        ];
    }
    getMenu = () => this.menu;
    setActiveItem = (label) => {
        this.menu.forEach(item => {
            item.active = item.label === label;
        });
    };
    initComponent = () => { };
}
