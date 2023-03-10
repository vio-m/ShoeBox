import React, { createContext, useState, useEffect } from "react";
import axios from "axios"
import { API_URL } from '../config';


export const DataContext = createContext();


export const DataContextProvider = (props) => {
    const [products, setProducts] = useState(null);
    const [categories, setCategories] = useState(null);
    const [brands, setBrands] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                const products_response = await axios.get(`${API_URL}/api/product/`);
                setProducts(products_response.data.results);
                const categories_response = await axios.get(`${API_URL}/api/category/`);
                setCategories(categories_response.data.results);
                const brands_response = await axios.get(`${API_URL}/api/brand/`);
                setBrands(brands_response.data.results);
                setError(null);
            } catch (err) {
                setError(err.message);
                setProducts(null);
                setCategories(null);
                setBrands(null);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);

    const dataContextValue = {
        products,
        categories,
        brands,
        loading,
        error
    };


    return (
        <DataContext.Provider value={dataContextValue}>
            {props.children}
        </DataContext.Provider>
    );
};



/*
*/


