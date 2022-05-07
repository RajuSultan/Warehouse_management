import React from 'react';
import useProduct from '../../Share/Hooks/useProduct';
import ManageProduct from './ManageProduct/ManageProduct';

const ManageIn = () => {
    const [products, setProducts] = useProduct([]);
    return (
        <div className='my-5'>
            <h1 className='title1 text-center my-5'>ALL Products</h1>
            <div className="container">
                <div className="row g-4">
                    {
                        products.map(product => <ManageProduct key={product._id} product={product}></ManageProduct>)
                    }

                </div>
            </div>

        </div>
    );
};

export default ManageIn;