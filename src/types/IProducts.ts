export interface IProducts {
    id: number;
    title: string;
    description: string;
    price: number;
    images: string[];
    rating: number;
    stock: number;
    category: string;
}
export interface IProductsTableData {
    id: number;
    title: string;
    description: string;
    price: number;
    images: string;
    rating: number;
    stock: number;
    category: string;
}

export interface IProductDeleted extends IProducts {
    isDeleted: boolean;
    deletedOn: string;
}



export interface IProductsFetchedData {
    limit: number;
    products: IProducts[];
    skip: number;
    total: number;
}

export interface IAddNewProduct {
    title: string;
    rating: number;
    year: string;
    author: string;
}