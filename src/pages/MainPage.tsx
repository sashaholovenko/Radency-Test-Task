import React from 'react';
import AppInfo from "../components/app-info/AppInfo";
import ProductList from "../components/product-page/ProductList";
import '../App.css'

const MainPage = () => {
    return (
        <div className="app">
            <AppInfo/>
            <ProductList />
        </div>
    );
};

export default MainPage;