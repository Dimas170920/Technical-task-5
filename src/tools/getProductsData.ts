import { IProducts, IProductsTableData } from "../types/IProducts"

export const  getProductsData = (arr: IProducts[]): IProductsTableData[] => {
    return arr.map(a => ({
        id: a.id,
        title: a.title,
        description: a.description,
        price: a.price,
        images: a?.images[0],
        rating: a.rating,
        stock: a.stock,
        category: a.category
    }))
}