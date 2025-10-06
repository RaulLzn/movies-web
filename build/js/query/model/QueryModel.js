export default class QueryModel {
    searchTerm = '';
    setSearchTerm = (term) => {
        this.searchTerm = term;
    };
    getSearchTerm = () => this.searchTerm;
    initComponent = () => {
        console.log('QueryModel initialized');
    };
}
