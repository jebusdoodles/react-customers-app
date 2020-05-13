import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';

const isNumber = value => (
    isNaN(Number(value)) && "El campo debe de ser un numero"
);

const MyField = ({ input, meta, type, name, label }) =>(
    <div>
        <label htmlFor={name}>{label}</label> <br/>
        <input {...input} type={!type ? "text" : type} />
        {
            meta.touched && meta.error && <span>{meta.error}</span>
        }
    </div>
);

const isRequired = value => (
    !value && "Este campo es requerido"
);

const CustomerEdit = ({name, dni, age}) => {
    return (
        <div>
            <h2>Edicion del cliente</h2>
            <h3>{name} / {dni} /{age}</h3>
            <form action="">
                    <Field 
                        name="name" 
                        component={MyField} 
                        type="text"
                        validate={isRequired}
                        label="Nombre"
                    ></Field>
                    <Field 
                        name="dni" 
                        component={MyField} 
                        type="text"
                        //validacion de varios parametros
                        validate={[isRequired, isNumber]}
                        label="DNI"
                    ></Field>
                    <Field name="age" 
                           component={MyField}
                           type="number"
                           validate={isNumber}
                           label="Edad"
                    ></Field>
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
    //connect y map state to props para manejar los datos del state en initialValues
export default setPropsAsInitial(CustomerEditForm);