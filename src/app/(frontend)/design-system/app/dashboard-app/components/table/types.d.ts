
export interface ITableConfig<T> {
    data: T[];
    quantity: number;
    detailsJsxElement: React.JSX.Element
    actionFunc: React.JSX.Element
    editJsxElement: React.JSX.Element,
}


