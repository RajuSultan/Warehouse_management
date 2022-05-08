import React from 'react';
import deleteicon from '../../../../images/delete.png';

const ManageProduct = ({ product, handleDelete }) => {
    const { _id, picture, name, balance, quantity, color, supplier, company, about } = product;
    return (
        <div className='col-lg-6 my-5'>
            <div className="d-flex rounded shadow">
                <div className='w-50'>
                    <img style={{ height: "200px" }} className='w-100 rounded' src={picture} alt="" />
                </div>
                <div className='ms-2 w-50'>
                    <div className="d-flex h-100  w-100">
                        <div className='w-75'>
                            <h3>{name}</h3>
                            <p>{balance}</p>
                            <p>{company}</p>
                            <p>{quantity}</p>
                        </div>
                        <button className='border-0 bg-white' onClick={() => handleDelete(_id)}><img style={{ height: "35px" }} className='' src={deleteicon} alt="" /></button>
                    </div>


                </div>
            </div>


        </div>
    );
};

export default ManageProduct;