import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";
import { IAddNewProduct, IProductDeleted, IProducts, IProductsFetchedData } from '../../../types/IProducts';

const productsURL = 'https://dummyjson.com/products'


export const fetchProducts = createAsyncThunk(
    'products/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IProductsFetchedData>(productsURL)
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Something went wrong")
        }
    }
  )


export const deleteProductByID = createAsyncThunk(
    'products/deleteByID',
    async (productId: number, thunkAPI) => {
        try {
            const response = await axios.delete<IProductDeleted>(productsURL + `/${productId}`)
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Something went wrong")
        }
    }
  )

  export const addNewProduct = createAsyncThunk(
    'products/addNewProduct',
    async (data: IAddNewProduct, thunkAPI) => {
        try {
            const response = await axios.post<IProducts>(productsURL + '/add', data)
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Something went wrong")
        }
    }
  )