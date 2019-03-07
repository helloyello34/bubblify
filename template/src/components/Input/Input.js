import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
    const { value, onChange, type, errorMessage, name, htmlId, label } = props;
    return (
        <div className="form-group">
            {
                label
                    ?
                    <label htmlFor={htmlId} className="col-sm-2 col-form-label">{label}</label>
                    :
                    <></>
            }
            <input
                type={type}
                value={value}
                onChange={onChange}
                name={name}
                id={htmlId}
                className="form-control" />
            <span className="error">{errorMessage}</span>
        </div>
    );
};

Input.propTypes = {
    value: PropTypes.string.isRequired,
    htmlId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['text', 'submit']),
    errorMessage: PropTypes.string,
    label: PropTypes.string
};

export default Input;