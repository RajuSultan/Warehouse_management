import React from 'react';

const Product = ({ product }) => {
    const { _id, picture, name, balance, quantity, color, supplier, company, about } = product;
    // console.log(product);

    return (
        <div className='col-lg-4'>
            <div style={{ height: "680px" }} className='bg-body  rounded shadow position-relative'>
                <img style={{ height: "280px" }} className='w-100  rounded' src={picture} alt="" />

                <div className='m-3'>
                    <p>{company}</p>
                    <h2>{name}</h2>
                    <p>{balance}</p>
                    <p>{about}<br></br>
                        <small className='fw-bold'>Quantity : {quantity}  / </small>
                        <small className='fw-bold'> Supplier : {supplier}</small></p>
                </div>


                <button style={{ backgroundImage: 'linear-gradient(to right, #a517ba, #5f1782)', color: "#ffff" }} className='position-absolute bottom-0 w-100  btn '>Update</button>


            </div>

        </div>
    );
};

export default Product;