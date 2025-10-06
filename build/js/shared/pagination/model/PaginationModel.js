export default class PaginationModel {
    currentPage;
    itemsPerPage;
    totalItems;
    constructor(config) {
        this.currentPage = config?.initialPage || 1;
        this.itemsPerPage = config?.itemsPerPage || 10;
        this.totalItems = 0;
    }
    getTotalPages = () => {
        return Math.ceil(this.totalItems / this.itemsPerPage);
    };
    getCurrentPage = () => {
        return this.currentPage;
    };
    getItemsPerPage = () => {
        return this.itemsPerPage;
    };
    getStartIndex = () => {
        return (this.currentPage - 1) * this.itemsPerPage;
    };
    getEndIndex = () => {
        return Math.min(this.getStartIndex() + this.itemsPerPage, this.totalItems);
    };
    hasPreviousPage = () => {
        return this.currentPage > 1;
    };
    hasNextPage = () => {
        return this.currentPage < this.getTotalPages();
    };
    setTotalItems = (totalItems) => {
        this.totalItems = totalItems;
        if (this.currentPage > this.getTotalPages()) {
            this.currentPage = this.getTotalPages();
        }
    };
    nextPage = () => {
        if (this.hasNextPage()) {
            this.currentPage++;
        }
    };
    previousPage = () => {
        if (this.hasPreviousPage()) {
            this.currentPage--;
        }
    };
    goToPage = (page) => {
        if (page >= 1 && page <= this.getTotalPages()) {
            this.currentPage = page;
        }
    };
    firstPage = () => {
        this.currentPage = 1;
    };
    lastPage = () => {
        this.currentPage = this.getTotalPages();
    };
    paginate = (items) => {
        this.setTotalItems(items.length);
        const start = this.getStartIndex();
        const end = this.getEndIndex();
        return items.slice(start, end);
    };
    reset = () => {
        this.currentPage = 1;
    };
}
