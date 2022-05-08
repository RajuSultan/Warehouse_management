import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useProduct from '../../Share/Hooks/useProduct';
const Singleitem = () => {
    const numberRef = useRef('');

    const navigate = useNavigate();

    const { id } = useParams();

    const [product, setProduct] = useState({});
    const [item, setItem] = useState({});
    useEffect(() => {
        // const url = `https://obs?cure-fjord-03495.herokuapp.com/products/${id}`;
        const url = `https://rajusultan.herokuapp.com/products/${id}`;


        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))

    }, [])
    useEffect(() => {
        setProduct(item);

    }, [item])





    const handleQuantityUpdate = () => {
        let decreaseValue = item?.quantity - 1;
        item.quantity = decreaseValue;
        // console.log(item);
        setProduct(item);
        const url = `https://rajusultan.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('User added Successfuly');

            })
        navigate('/home')



    }
    const handleSubmit = () => {
        const number = numberRef.current.value;
        let add;
        if (number) {
            add = parseInt(item?.quantity) + parseInt(number);
        }

        item.quantity = add;
        // console.log(item);
        setProduct(item);
        const url = `https://rajusultan.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('User added Successfuly');

            })
        navigate('/home')



    }





    return (
        <div className='container my-5'>
            <h1 className='title1 my-5 text-center'>Details</h1>
            <div className="row g-4">
                <div className='col-lg-6 d-flex align-item-center '>
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

                    <button style={{ backgroundImage: 'linear-gradient(to right, #a517ba, #5f1782)', color: "#ffff" }} className="btn mb-3" onClick={handleQuantityUpdate}>Delivered</button>
                    <form onSubmit={handleSubmit}>
                        <input ref={numberRef} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Quantity' required />
                        <button style={{ backgroundImage: 'linear-gradient(to right, #a517ba, #5f1782)', color: "#ffff" }} type="submit" className="btn ">Add Quantity</button>
                    </form>

                </div>
            </div>
        </div>


    );
};

export default Singleitem;