import './Slider.styles.scss';
import { Link } from 'react-router-dom';
import headerImage from '../../assets/image/headerImage.png';

const Slider = () => {
    return (
        // <!--====== HEADER ONE PART START ======-->
        <div className='slider'>
            <section className='header-area header-one'>
                <div className='header-content-area'>
                    <div className='container'>
                        <div className='row align-items-center'>
                            <div className='col-lg-6 col-12'>
                                <div className='header-wrapper'>
                                    <div className='header-content'>
                                        <h1 className='header-title text-uppercase'>
                                            Easy Customisable & UNIQUE,
                                            IMPRESSIVE CV
                                        </h1>
                                        <p className='text-lg'>
                                            IN MINUTES MAKE YOUR RESUME Now 100%
                                            FOR FREE!
                                        </p>
                                        <div className='header-btn rounded-buttons'>
                                            <Link
                                                className='btn primary-btn-outline btn-lg'
                                                to='makecv'
                                            >
                                                Get started
                                            </Link>
                                        </div>
                                    </div>
                                    {/* <!-- header content --> */}
                                </div>
                            </div>
                            <div className='col-lg-6 col-12'>
                                <div className='header-image d-none d-lg-block'>
                                    <div className='image'>
                                        <img src={headerImage} alt='Header' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- row --> */}
                    </div>
                    {/* <!-- container --> */}
                    <div className='header-shape'>
                        <img
                            src='https://cdn.ayroui.com/1.0/images/header/header-shape.svg'
                            alt='shape'
                        />
                    </div>
                    {/* <!-- header-shape --> */}
                </div>
                {/* <!-- header content area --> */}
            </section>
        </div>
        // <!--====== HEADER ONE PART ENDS ======-->
    );
};

export default Slider;
