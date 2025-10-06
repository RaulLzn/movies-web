export default class QueryView {
    parent;
    searchCallback;
    constructor(parent) {
        this.parent = parent;
    }
    initComponent = () => {
        this.attachEventListeners();
    };
    onSearch = (callback) => {
        this.searchCallback = callback;
    };
    attachEventListeners = () => {
        const searchInput = this.parent.querySelector('input[type="text"]');
        const searchForm = this.parent;
        if (searchInput) {
            let debounceTimer;
            // Event listener para input con debounce
            searchInput.addEventListener('input', (e) => {
                clearTimeout(debounceTimer);
                debounceTimer = window.setTimeout(() => {
                    const term = e.target.value;
                    this.searchCallback?.(term);
                }, 300);
            });
        }
        // Prevenir el submit del formulario
        if (searchForm) {
            searchForm.addEventListener('submit', (e) => {
                e.preventDefault();
                if (searchInput) {
                    this.searchCallback?.(searchInput.value);
                }
            });
        }
    };
}
