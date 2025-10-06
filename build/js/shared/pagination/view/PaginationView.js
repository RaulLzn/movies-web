import { PaginationTemplate } from '../template/PaginationTemplate.js';
export default class PaginationView {
    pagination;
    template;
    model;
    onPageChange;
    constructor(parent, model, onPageChange) {
        this.model = model;
        this.onPageChange = onPageChange;
        this.pagination = document.createElement('pagination');
        parent.appendChild(this.pagination);
        this.template = new PaginationTemplate();
    }
    render = () => {
        const currentPage = this.model.getCurrentPage();
        const totalPages = this.model.getTotalPages();
        const hasPrevious = this.model.hasPreviousPage();
        const hasNext = this.model.hasNextPage();
        const html = this.template.getPaginationHTML(currentPage, totalPages, hasPrevious, hasNext);
        this.pagination.innerHTML = html;
        this.attachEventListeners();
    };
    attachEventListeners = () => {
        const prevBtn = this.pagination.querySelector('[data-action="previous"]');
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                this.model.previousPage();
                this.onPageChange();
            });
        }
        const nextBtn = this.pagination.querySelector('[data-action="next"]');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                this.model.nextPage();
                this.onPageChange();
            });
        }
    };
}
