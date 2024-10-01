
export interface ITableConfig<T> {
    data: T[];
    quantity: number;
    detailsJsxElement: ({ data }: { data: T }) => React.JSX.Element
    actionFunc: (id: number) => Promise<string>
    editJsxElement: React.JSX.Element
}


