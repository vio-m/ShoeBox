import React, { createContext, useState, useEffect } from "react";
import axios from "axios"



export const DataContext = createContext();


export const DataContextProvider = (props) => {
    //const [data, setData] = useState([]);
    const [products, setProducts] = useState(null);
    const [categories, setCategories] = useState(null);
    const [brands, setBrands] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    //console.log("data from inside datacontext:", data)
    

    useEffect(() => {
        async function getData() {
            try {
                const products_response = await axios.get('http://localhost:8000/api/product/');
                setProducts(products_response.data.results);
                //console.log("p", products)
                const categories_response = await axios.get('http://localhost:8000/api/category/');
                setCategories(categories_response.data.results);
                const brands_response = await axios.get('http://localhost:8000/api/brand/');
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
    //console.log("datacontextvalue: ", dataContextValue)


    return (
        <DataContext.Provider value={dataContextValue}>
            {props.children}
        </DataContext.Provider>
    );
};



/*
    useEffect(() => {
        async function getData() {
            await fetch('http://localhost:8000/api/product/')
            .then((res) => res.json())
            .then((data) => setData(data));
        };
        getData();
    }, []);

*/


