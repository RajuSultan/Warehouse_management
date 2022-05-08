import React from 'react';
import useProduct from '../../Share/Hooks/useProduct';
import ManageProduct from './ManageProduct/ManageProduct';

const ManageIn = () => {
    const [products, setProducts] = useProduct([]);
    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to Delete?");
        if (proceed) {
            // console.log(id);
            const url = `https://rajusultan.herokuapp.com/products/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining);

                    }
                })
        }

    }
    return (
        <div className='my-5'>
            <h1 className='title1 text-center my-5'>ALL Products</h1>
            <div className="container">
                <div className="row g-4">
                    {
                        products.map(product => <ManageProduct key={product._id} product={product} handleDelete={handleDelete}></ManageProduct>)
                    }

                </div>
            </div>

        </div>
    );
};

export default ManageIn;