import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form'

const CustomerEdit = ({name, dni, age}) => {
    return (
        <div>
            <h2>Edicion del cliente</h2>
            <h3>{name} / {dni} /{age}</h3>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
};

export default reduxForm({ form: 'CustomerEdit' })(CustomerEdit);