import React, { useEffect, useState } from 'react';

const useProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://rajusultan.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [products])
    return [products, setProducts];
};


export default useProduct;