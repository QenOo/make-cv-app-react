import './Slider.styles.scss';
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <div className='slider'>
            <section className='slider-bg-image'>
                <div className='justify-content-center align-items-center d-flex-columns text-center pt-5'>
                    <img
                        src={
                            'https://dummyimage.com/100x100/000/f7136b.png&text=Make+CV'
                        }
                        alt='images'
                        className='d-block mx-auto rounded-circle img-fluid'
                    />
                    <h1 className=' text-uppercase text-light mb-2 mt-5'>
                        <strong>Unique, impressive CV in minutes</strong>{' '}
                    </h1>
                    <p className='lead text-light mb-5'>
                        MAKE YOUR RESUME Now 100% FOR FREE!
                    </p>
                    <p>
                        <Link
                            className='btn btn-outline-light btn-lg'
                            to='/makecv'
                        >
                            Get Started Now &gt;
                        </Link>
                    </p>
                    <div className='btn-container-wrapper p-relative d-block z-index-1'>
                        <a
                            className='btn btn-outline-light border-0 btn-lg pr-2 pl-2 pt-3 pb-3  mt-md-5  scroll align-self-center  '
                            href='#section-1'
                        >
                            <i className='fa fa-angle-down fa-2x  '></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Slider;
