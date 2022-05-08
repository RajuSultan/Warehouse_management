import React from 'react';
import { Link } from 'react-router-dom';
import useProduct from '../Share/Hooks/useProduct';
import Product from './Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useProduct([]);
    const items = products.slice(0, 6);
    // console.log(products);
    return (
        <div className=''>
            <h1 className='text-center my-5 title'>Products</h1>
            <div className='container'>
                <div className='row g-4'>
                    {
                        items.map(product => <Product key={product._id} product={product}></Product>)
                    }
                </div>
                <Link to='/managein'>Manage Inventories</Link>
            </div>

        </div >
    );
};

export default Products;