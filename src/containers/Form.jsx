import React from 'react';
import '@styles/Form.scss';

const Form = ({children}) => {
    return (
        <div className="form-main">
            <div className="form-container">
                { children }
            </div>
        </div>
    );
};

export default Form;