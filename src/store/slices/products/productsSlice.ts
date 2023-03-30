import {
    createSlice,
    PayloadAction
  } from '@reduxjs/toolkit'

import { IProducts, IProductDeleted, IProductsFetchedData } from '../../../types/IProducts';
import { deleteProductByID, fetchProducts, addNewProduct } from './thunks';

interface ProductState {
  products: IProductsFetchedData;
  isLoading: boolean;
  error: string;
}

const initialState: ProductState = {
  products: {
    limit: 0,
    products: [],
    skip: 0,
    total: 0,
  },
  isLoading: false,
  error: '',
}


export const producsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled.type, (state, action: PayloadAction<IProductsFetchedData>) => {
        state.isLoading = false;
        state.error = ''
        state.products = action.payload;
    }),
    builder.addCase(fetchProducts.pending.type, (state) => {
        state.isLoading = true;
    }),
    builder.addCase(fetchProducts.rejected.type, (state,  action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload
    }),

    builder.addCase(deleteProductByID.fulfilled.type, (state, action: PayloadAction<IProductDeleted>) => {
      state.isLoading = false;
      state.error = ''
      state.products.products = state.products.products.filter((prod) => prod.id !== action.payload.id);
  }),
  builder.addCase(deleteProductByID.pending.type, (state) => {
      state.isLoading = true;
  }),
  builder.addCase(deleteProductByID.rejected.type, (state,  action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload
  })

  builder.addCase(addNewProduct.fulfilled.type, (state, action: PayloadAction<IProducts>) => {
    state.isLoading = false;
    state.error = ''
    state.products.products = [...state.products.products, { 
      id: action.payload?.id || 0,
      title: action.payload?.title || '',
      description: action.payload?.description || '',
      price: action.payload?.price || 0,
      images: action.payload?.images || [''],
      rating: action.payload?.rating || 0,
      stock: action.payload?.stock || 0,
      category: action.payload?.category || ''}
      ];
}),
builder.addCase(addNewProduct.pending.type, (state) => {
    state.isLoading = true;
}),
builder.addCase(addNewProduct.rejected.type, (state,  action: PayloadAction<string>) => {
    state.isLoading = false;
    state.error = action.payload
})
    
}
});

export const selectAllProducts = (state: ProductState) => state.products;

export default producsSlice.reducer;