import './Form.style.scss';

const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div class='form-style form-style-two'>
            <form onsubmit={handleSubmit}>
                <div class='row'>
                    <div class='col-lg'>
                        <div class='form-input mt-5'>
                            <label>Enter userid</label>
                            <div class='input-items default'>
                                <input type='text' placeholder='Default' />
                                <i class='lni lni-user'></i>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;
