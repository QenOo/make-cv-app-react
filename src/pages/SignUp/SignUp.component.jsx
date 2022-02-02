import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../store/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [state, setState] = useState({});

    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoading, isLoggedIn } = useSelector((state) => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser(state));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    return (
        <>
            {!isLoggedIn ? (
                <div className='SignIn'>
                    {/* <!--====== SIGNIN ONE PART START ======--> */}
                    <section className='signin-area signin-one'>
                        <div className='container'>
                            <div className='row justify-content-center'>
                                <div className='col-lg-5'>
                                    <form onSubmit={handleSubmit}>
                                        <div className='signin-form form-style-two rounded-buttons'>
                                            <div className='row'>
                                                <div className='col-md-12'>
                                                    <div className='form-input'>
                                                        <label>
                                                            Your account will be
                                                            under this email
                                                        </label>
                                                        <div className='input-items default'>
                                                            <input
                                                                type='text'
                                                                placeholder='Email'
                                                                name='email'
                                                                onChange={
                                                                    handleChange
                                                                }
                                                                required
                                                            />
                                                            <i className='lni lni-envelope'></i>
                                                        </div>
                                                    </div>
                                                    {/* <!-- form input --> */}
                                                </div>
                                                <div className='col-md-12'>
                                                    <div className='form-input'>
                                                        <label>
                                                            Name will be used to
                                                            personalize your
                                                            experience
                                                        </label>
                                                        <div className='input-items default'>
                                                            <input
                                                                type='text'
                                                                placeholder='Name'
                                                                name='name'
                                                                onChange={
                                                                    handleChange
                                                                }
                                                                required
                                                            />
                                                            <i className='lni lni-user'></i>
                                                        </div>
                                                    </div>
                                                    {/* <!-- form input --> */}
                                                </div>
                                                <div className='col-md-12'>
                                                    <div className='form-input'>
                                                        <label>
                                                            Password for your
                                                            account
                                                        </label>
                                                        <div className='input-items default'>
                                                            <input
                                                                type='password'
                                                                placeholder='Password'
                                                                name='password'
                                                                onChange={
                                                                    handleChange
                                                                }
                                                                required
                                                            />
                                                            <i className='lni lni-key'></i>
                                                        </div>
                                                    </div>
                                                    {/* <!-- form input --> */}
                                                </div>
                                                <div className='col-md-12'>
                                                    <div className='form-input rounded-buttons'>
                                                        <button
                                                            className='btn primary-btn rounded-full'
                                                            type='submit'
                                                        >
                                                            {isLoading ? (
                                                                <span
                                                                    className='spinner-border spinner-border-sm'
                                                                    role='status'
                                                                    aria-hidden='true'
                                                                ></span>
                                                            ) : (
                                                                'Sign Up'
                                                            )}
                                                        </button>
                                                    </div>
                                                    {/* <!-- form input --> */}
                                                </div>
                                                <div className='col-md-12'>
                                                    <div className='form-input text-center'>
                                                        <p className='text'>
                                                            By signing in you
                                                            agree with the
                                                            <Link to=''>
                                                                Terms and
                                                                Conditions
                                                            </Link>
                                                            and
                                                            <Link to=''>
                                                                {' '}
                                                                Privacy
                                                            </Link>
                                                        </p>
                                                    </div>
                                                    {/* <!-- form input --> */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- signin form --> */}
                                    </form>
                                </div>
                            </div>
                            {/* <!-- row --> */}
                        </div>
                        {/* <!-- container --> */}
                    </section>
                    {/* <!--====== SIGNIN ONE PART ENDS ======--> */}
                </div>
            ) : (
                navigate('/')
            )}
        </>
    );
};

export default SignUp;
