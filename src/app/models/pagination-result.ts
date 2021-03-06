export class PaginationResult<Tmodel> {
    content: Tmodel[];
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    totalElements: number;
    totalPages: number;
}