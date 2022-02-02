import './About.styles.scss';
const About = () => {
    return (
        <div className='about'>
            <div className='container'>
                <div className='about-header'>
                    <h1>About</h1>
                    {/* <!--====== CARD PART START ======--> */}
                    <section className='card-area pb-5'>
                        <div className='container'>
                            <div className='row justify-content-center'>
                                <div className='col-lg-4 col-md-7 col-sm-9'>
                                    <div className='single-card card-style-one'>
                                        <div className='card-image'>
                                            <img
                                                src='https://cdn.ayroui.com/1.0/images/card/card-1.jpg'
                                                alt='Images'
                                            />
                                        </div>
                                        <div className='card-content'>
                                            <h4 className='card-title'>
                                                <span>Item title is here</span>
                                            </h4>
                                            <p className='text'>
                                                Short description for the ones
                                                who look for something new
                                            </p>
                                        </div>
                                    </div>
                                    {/* <!-- single-card --> */}
                                </div>
                                {/* <!-- col --> */}
                                <div className='col-lg-4 col-md-7 col-sm-9'>
                                    <div className='single-card card-style-one'>
                                        <div className='card-image'>
                                            <img
                                                src='https://cdn.ayroui.com/1.0/images/card/card-2.jpg'
                                                alt='Images'
                                            />
                                        </div>
                                        <div className='card-content'>
                                            <h4 className='card-title'>
                                                <span>Item title is here</span>
                                            </h4>
                                            <p className='text'>
                                                Short description for the ones
                                                who look for something new
                                            </p>
                                        </div>
                                    </div>
                                    {/* <!-- single-card --> */}
                                </div>
                                {/* <!-- col --> */}
                                <div className='col-lg-4 col-md-7 col-sm-9'>
                                    <div className='single-card card-style-one'>
                                        <div className='card-image'>
                                            <img
                                                src='https://cdn.ayroui.com/1.0/images/card/card-3.jpg'
                                                alt='Images'
                                            />
                                        </div>
                                        <div className='card-content'>
                                            <h4 className='card-title'>
                                                <span>Item title is here</span>
                                            </h4>
                                            <p className='text'>
                                                Short description for the ones
                                                who look for something new
                                            </p>
                                        </div>
                                    </div>
                                    {/* <!-- single-card --> */}
                                </div>
                                {/* <!-- col --> */}
                            </div>
                            {/* <!-- row --> */}
                        </div>
                        {/* <!-- container --> */}
                    </section>
                    {/* <!--====== CARD PART ENDS ======--> */}
                </div>
            </div>
        </div>
    );
};

export default About;
