import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useProduct from '../../Share/Hooks/useProduct';
const Singleitem = () => {
    // const [product, setProduct] = useState({});
    // const { id } = useParams();
    // // console.log(id);

    // const [products, setProducts] = useProduct([]);
    // // console.log(products);
    // const selectedId = products.find(item => item._id === id);
    // setProduct(selectedId);
    // // console.log(product);





    // const handleQuantityUpdate = () => {
    //     let decreaseValue = product?.quantity - 1;
    //     console.log(decreaseValue);
    //     //    selectedId?.quantity = decreaseValue;
    //     product.quantity = decreaseValue;
    //     console.log(product);

    // }





    return (
        <div className='container my-5'>
            <h1 className='title1 my-5 text-center'>Details</h1>
            {/* <div className="row g-4">
                <div className='col-lg-6 '>
                    <img className='w-100' src={product?.picture} alt="" />
                </div>
                <div className='col-lg-6'>
                    <h2>{product?.name}</h2>
                    <p>{product?.company}</p>
                    <h4>{product?.balance}</h4>
                    {
                        product?.quantity > 0 ? "" : <p>Sold</p>
                    }
                    <p>{product?.color}</p>
                    <p>Quantity : {product?.quantity}</p>
                    <p>{product?.about}</p>
                    <p>Supplier : {product?.supplier}</p> <br />

                    <button style={{ backgroundImage: 'linear-gradient(to right, #a517ba, #5f1782)', color: "#ffff" }} className="btn " onClick={() => handleQuantityUpdate()}>Delivered</button>

                </div> */}
            {/* </div> */}
        </div>


    );
};

export default Singleitem;