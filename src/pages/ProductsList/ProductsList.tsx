import React, { useEffect } from 'react';
import { getProductsData } from '../../tools/getProductsData';
import { Table, Loader } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchProducts } from '../../store/slices/products/thunks';

const ProductsList = (): JSX.Element => {
    const dispatch = useAppDispatch()
const {products, isLoading, error} = useAppSelector(state => state.productsReducer)

useEffect(() => {
         dispatch(fetchProducts())
     }, [ ])

return <div>    
    { 
    isLoading ? <Loader/> : <Table defaultRows={getProductsData(products.products)} />
    }
    </div>
}


export default ProductsList;
