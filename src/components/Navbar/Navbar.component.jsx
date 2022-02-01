import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container'>
                <Link className='navbar-brand' to='/'>
                    MAKE_CV
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
                    <div className='dropdown'>
                        <button
                            className='btn btn-secondary dropdown-toggle'
                            type='button'
                            id='dropdownMenuButton1'
                            data-bs-toggle='dropdown'
                            aria-expanded='false'
                        >
                            Dropdown button
                        </button>
                        <ul
                            className='dropdown-menu'
                            aria-labelledby='dropdownMenuButton1'
                        >
                            <li>
                                <Link className='dropdown-item' to='#'>
                                    Action
                                </Link>
                            </li>
                            <li>
                                <Link className='dropdown-item' to='#'>
                                    Another action
                                </Link>
                            </li>
                            <li>
                                <Link className='dropdown-item' to='#'>
                                    Log Out
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
