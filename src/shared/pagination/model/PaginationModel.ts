import PaginationConfig from "../types/PaginationConfig";

export default class PaginationModel {
  private currentPage: number;
  private itemsPerPage: number;
  private totalItems: number;

  constructor(config?: PaginationConfig) {
    this.currentPage = config?.initialPage || 1;
    this.itemsPerPage = config?.itemsPerPage || 10;
    this.totalItems = 0;
  }

  readonly getTotalPages = (): number => {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  };

  readonly getCurrentPage = (): number => {
    return this.currentPage;
  };

  readonly getItemsPerPage = (): number => {
    return this.itemsPerPage;
  };

  readonly getStartIndex = (): number => {
    return (this.currentPage - 1) * this.itemsPerPage;
  };

  readonly getEndIndex = (): number => {
    return Math.min(this.getStartIndex() + this.itemsPerPage, this.totalItems);
  };

  readonly hasPreviousPage = (): boolean => {
    return this.currentPage > 1;
  };

  readonly hasNextPage = (): boolean => {
    return this.currentPage < this.getTotalPages();
  };

  readonly setTotalItems = (totalItems: number): void => {
    this.totalItems = totalItems;
    if (this.currentPage > this.getTotalPages()) {
      this.currentPage = this.getTotalPages();
    }
  };

  readonly nextPage = (): void => {
    if (this.hasNextPage()) {
      this.currentPage++;
    }
  };

  readonly previousPage = (): void => {
    if (this.hasPreviousPage()) {
      this.currentPage--;
    }
  };

  readonly goToPage = (page: number): void => {
    if (page >= 1 && page <= this.getTotalPages()) {
      this.currentPage = page;
    }
  };

  readonly firstPage = (): void => {
    this.currentPage = 1;
  };

  readonly lastPage = (): void => {
    this.currentPage = this.getTotalPages();
  };

  readonly paginate = <T>(items: T[]): T[] => {
    this.setTotalItems(items.length);
    const start = this.getStartIndex();
    const end = this.getEndIndex();
    return items.slice(start, end);
  };

  readonly reset = (): void => {
    this.currentPage = 1;
  };
}
