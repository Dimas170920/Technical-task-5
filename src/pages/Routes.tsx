import React from "react"
import { Routes, Route } from "react-router-dom"

import AddNewProduct from "./AddNewProduct/AddNewProduct"
import Main from "./Main/Main"
import ProductsList from "./ProductsList/ProductsList"


const MainRoutes: React.FunctionComponent = () => (
	<Routes>
		<Route path="/mainPage" element={<Main />} />
		<Route path="/productsList" element={<ProductsList />} />
		<Route path="/addNewProduct" element={<AddNewProduct />} />
		
	</Routes>
)

export default MainRoutes