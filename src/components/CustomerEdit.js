import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

const CustomerEdit = ({name, dni, age}) => {
    return (
        <div>
            <h2>Edicion del cliente</h2>
            <h3>{name} / {dni} /{age}</h3>
            <form action="">
                <div>
                    <label htmlFor="name">Nombre:</label>
                    <Field name="name" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="dni">DNI:</label>
                    <Field name="dni" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="age">Edad:</label>
                    <Field name="age" component="input" type="number"></Field>
                </div>
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
};

    // Decoramos el componente CustomerEdit mediante un highorder component
    // que nos prové la libreria redux-form  tiene que ser unico
    const CustomerEditForm = reduxForm({ form: 'CustomerEdit' })(CustomerEdit)
    
export default connect(
    (state, props) => (
        { initialValues: props}
    ))(CustomerEditForm);