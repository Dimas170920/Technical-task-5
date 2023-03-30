import React from 'react';
import { AddNewProductForm } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { addNewProduct } from '../../store/slices/products/thunks';


const AddNewProduct = () => {
    const dispatch = useAppDispatch()
    const {products } = useAppSelector(state => state.productsReducer)



  return (
    <div>
      <AddNewProductForm submit={(values) => {
        dispatch(addNewProduct(values))
        console.log(products.products)
      }}/>
    </div>
  );
};

export default  AddNewProduct
