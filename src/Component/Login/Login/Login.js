import React, { useEffect, useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Loading from '../../Share/Loading/Loading';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    // console.log(error);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    // handle login
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);

        // console.log( email, password);
    }
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user])

    // send reset password
    const handleResetPassword = () => {
        const email = emailRef.current.value;
        sendPasswordResetEmail(email);
        toast("Send password reset Email !");

    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className='w-50 mx-auto my-5'>
                <h1 className='text-center title1'>Please SignIn</h1>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your email' required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' required />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" >Check me out</label>
                </div>
                {
                    loading || sending ? <Loading></Loading>
                        :
                        ""
                }
                {
                    error ? <p>Your password or email is wrong</p> : ''
                }
                <button style={{ backgroundImage: 'linear-gradient(to right, #a517ba, #5f1782)', color: "#ffff" }} type="submit" className="btn ">Submit</button>
                <p>Forget Password? <Link style={{ color: "#a517ba" }} onClick={handleResetPassword} to=''>Reset Password</Link></p>
                <ToastContainer />
            </form>
        </div>
    );
};

export default Login;