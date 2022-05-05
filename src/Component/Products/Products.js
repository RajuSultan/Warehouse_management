import React from 'react';
import useProduct from '../Share/Hooks/useProduct';
import Product from './Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useProduct([]);
    // console.log(products);
    return (
        <div className=''>
            <h1 className='text-center my-5 title'>Products</h1>
            <div className='container'>
                <div className='row g-4'>
                    {
                        products.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Products;