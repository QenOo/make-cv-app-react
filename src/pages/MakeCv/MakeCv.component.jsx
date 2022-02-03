import { useNavigate } from 'react-router-dom';

const MakeCv = () => {
    const navigation = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const myInput = e.target;

        let data = {};

        for (let i = 0; i < myInput.length - 1; i++) {
            const element = myInput[i];

            data = {
                ...data,
                [element.name]: element.value,
            };
        }

        localStorage.setItem('data', JSON.stringify(data));

        navigation('/cv');
    };
    return (
        <div className='make-cv mt-5 mb-5'>
            <div className='container'>
                <h1 className='text-center text-primary mb-5'>MakeCv</h1>
                <form className='row g-3' onSubmit={handleSubmit}>
                    {/* input filled */}
                    <div className='col-md-6'>
                        <div className='form-floating'>
                            <input
                                type='text'
                                className='form-control'
                                id='fullname'
                                name='fullname'
                                placeholder='Fullss Name'
                            />
                            <label htmlFor='fullname'>Full Name</label>
                        </div>
                    </div>
                    {/* input filled */}
                    {/* input filled */}
                    <div className='col-md-6'>
                        <div className='form-floating'>
                            <input
                                type='text'
                                className='form-control'
                                id='job'
                                name='job'
                                placeholder='Your Job'
                            />
                            <label htmlFor='floatingInput'>Your Job</label>
                        </div>
                    </div>
                    {/* input filled */}
                    {/* input filled */}
                    <div className='col-md-6'>
                        <div className='form-floating'>
                            <input
                                type='text'
                                className='form-control'
                                id='address'
                                name='address'
                                placeholder='Address'
                            />
                            <label htmlFor='floatingInput'>Address</label>
                        </div>
                    </div>
                    {/* input filled */}
                    {/* input filled */}
                    <div className='col-md-6'>
                        <div className='form-floating'>
                            <input
                                type='text'
                                className='form-control'
                                id='phone'
                                name='phone'
                                placeholder='Phone number'
                            />
                            <label htmlFor='phone'>Phone number</label>
                        </div>
                    </div>
                    {/* input filled */}
                    {/* input filled */}
                    <div className='col-md-6'>
                        <div className='form-floating'>
                            <input
                                type='email'
                                className='form-control'
                                id='email'
                                name='email'
                                placeholder='Email'
                            />
                            <label htmlFor='email'>Email</label>
                        </div>
                    </div>
                    {/* input filled */}
                    {/* input filled */}
                    <div className='col-md-6'>
                        <div className='form-floating'>
                            <input
                                type='text'
                                className='form-control'
                                id='DateOfBirth'
                                name='DateOfBirth'
                                placeholder='Date of birth'
                            />
                            <label htmlFor='DateOfBirth'>Date of birth</label>
                        </div>
                    </div>
                    {/* input filled */}
                    {/* input filled */}
                    <div className='col-md-6'>
                        <div className='form-floating'>
                            <input
                                type='url'
                                className='form-control'
                                id='LinkedIn'
                                name='LinkedIn'
                                placeholder='LinkedIn'
                            />
                            <label htmlFor='LinkedIn'>LinkedIn</label>
                        </div>
                    </div>
                    {/* input filled */}
                    {/* input filled */}
                    <div className='col-md-6'>
                        <div className='form-floating'>
                            <input
                                type='url'
                                className='form-control'
                                id='github'
                                name='github'
                                placeholder='github'
                            />
                            <label htmlFor='LinkedIn'>Github</label>
                        </div>
                    </div>
                    {/* input filled */}
                    {/* input filled */}
                    <div className='col-md-6'>
                        <div className='form-floating'>
                            <input
                                type='url'
                                className='form-control'
                                id='behance'
                                name='behance'
                                placeholder='behance'
                            />
                            <label htmlFor='behance'>Behance</label>
                        </div>
                    </div>
                    {/* input filled */}
                    {/* input filled */}
                    <div className='col-md-6'>
                        <div className='form-floating'>
                            <input
                                type='text'
                                className='form-control'
                                id='Education'
                                name='Education'
                                placeholder='Education'
                            />
                            <label htmlFor='Education'>Education</label>
                        </div>
                    </div>
                    {/* input filled */}
                    {/* input filled */}
                    <div className='col-md-6'>
                        <div className='form-floating'>
                            <input
                                type='text'
                                className='form-control'
                                id='Skills'
                                name='Skills'
                                placeholder='Skills'
                            />
                            <label htmlFor='Skills'>Skills</label>
                        </div>
                    </div>
                    {/* input filled */}
                    {/* input filled */}
                    <div className='col-md-6'>
                        <div className='form-floating'>
                            <input
                                type='text'
                                className='form-control'
                                id='Internships'
                                name='Internships'
                                placeholder='Internships'
                            />
                            <label htmlFor='Internships'>Internships</label>
                        </div>
                    </div>
                    {/* input filled */}
                    <button type='submit' className='btn btn-primary'>
                        Create
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MakeCv;
