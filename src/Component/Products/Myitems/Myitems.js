import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useProduct from '../../Share/Hooks/useProduct';
import ManageProduct from '../ManageIn/ManageProduct/ManageProduct';

const Myitems = () => {
    const [user] = useAuthState(auth);
    if (user) {
        console.log(user.email);

    }

    const nameRef = useRef('');
    const imgurlRef = useRef('');
    const companyNameRef = useRef('');
    const quantityRef = useRef('');
    const priceRef = useRef('');
    const descriptionRef = useRef('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const picture = imgurlRef.current.value;
        const email = user.email;
        const company = companyNameRef.current.value;
        const balance = priceRef.current.value;
        const about = descriptionRef.current.value;
        const quantity = quantityRef.current.value;
        console.log(name, email, company, balance, about, quantity);
        const product = { name, email, company, balance, about, picture, quantity };

        // send data to the server
        const url = `http://localhost:5000/products`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('User added Successfuly');
                event.target.reset();

            })



    }
    const [products, setProducts] = useProduct([]);
    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to Delete?");
        if (proceed) {
            console.log(id);
            const url = `http://localhost:5000/products/${id}`;
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
        <div className=''>
            <form onSubmit={handleSubmit} className='w-50 mx-auto my-5'>
                <h1 className='text-center  title1'>Add Product</h1>
                <div className="mb-3">
                    <label className="form-label">Your Name</label>
                    <input ref={nameRef} type="text" className="form-control" id="" aria-describedby="emailHelp" placeholder='Your name' />

                </div>
                <div className="mb-3">
                    <label className="form-label">Company Name</label>
                    <input ref={companyNameRef} type="text" className="form-control" id="" aria-describedby="emailHelp" placeholder='Company Name' />

                </div>
                <div className="mb-3">
                    <label className="form-label">Quantity</label>
                    <input ref={quantityRef} type="number" className="form-control" id="" aria-describedby="emailHelp" placeholder='Product Quantity' />

                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input ref={priceRef} type="number" className="form-control" id="" aria-describedby="emailHelp" placeholder='Product Price' />

                </div>
                <div className="mb-3">
                    <label className="form-label">Image Url</label>
                    <input ref={imgurlRef} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Url' />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Short Description</label>
                    <textarea ref={descriptionRef} type="number" className="form-control" id="" aria-describedby="emailHelp" placeholder='Short Description' />

                </div>

                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" >Check me out</label>
                </div>
                <button style={{ backgroundImage: 'linear-gradient(to right, #a517ba, #5f1782)', color: "#ffff" }} type="submit" className="btn px-5 py-2 mb-5">Submit</button>
            </form>

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

        </div>
    );
};

export default Myitems;