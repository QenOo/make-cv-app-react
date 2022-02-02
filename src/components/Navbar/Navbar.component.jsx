import { Link } from 'react-router-dom';
import Logo from '../../assets/image/logo.png';
import './Navbar.styles.scss';

const Navbar = ({ isLoggedIn, userInfo }) => {
    console.log(isLoggedIn);
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container'>
                <Link className='navbar-brand' to='/'>
                    <img src={Logo} alt='imageLogo' width='50px' />
                </Link>

                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div
                    className='collapse navbar-collapse'
                    id='navbarSupportedContent'
                >
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <Link
                                className='nav-link active'
                                aria-current='page'
                                to='/'
                            >
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/about'>
                                About
                            </Link>
                        </li>
                    </ul>
                    {isLoggedIn ? (
                        <div className='dropdown'>
                            <button
                                className='btn dropdown-toggle'
                                type='button'
                                id='dropdownMenuButton1'
                                data-bs-toggle='dropdown'
                                aria-expanded='false'
                            >
                                Welcome <i className='lni lni-heart'></i>
                                {' { '}
                                <span className='text-primary'>
                                    {userInfo.name}
                                </span>
                                {' } '}
                            </button>
                            <ul
                                className='dropdown-menu'
                                aria-labelledby='dropdownMenuButton1'
                            >
                                <li>
                                    <Link className='dropdown-item' to='#'>
                                        Profile (sooon)
                                    </Link>
                                </li>
                                <li>
                                    <Link className='dropdown-item' to='#'>
                                        Settings (sooon)
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        onClick={() => {
                                            localStorage.setItem(
                                                'isLoggedIn',
                                                'false'
                                            );
                                            window.location.reload();
                                        }}
                                        className='dropdown-item'
                                    >
                                        Log Out
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <>
                            <Link
                                to='/signup'
                                className='btn icon-left primary-btn mx-2'
                            >
                                <i className='lni lni-key'></i>
                                Sign Up
                            </Link>
                            <Link
                                to='/signin'
                                className='btn icon-left primary-btn-outline'
                            >
                                <i className='lni lni-unlock'></i>
                                Sign In
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
