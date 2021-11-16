import React from 'react';
import '../styles/Form.scss';

const Form = ({children}) => {
    return (
        <div className="mainForm">
            <div class="formContainer">
                { children }
            </div>
        </div>
    );
};

export default Form;