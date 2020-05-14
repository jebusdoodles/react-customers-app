import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';

const isNumber = value => (
    isNaN(Number(value)) && "El campo debe de ser un numero"
);


//creamos una validacion global
const validate = values =>{
    const error = {}; 

    //como javascript es un lenguaje dinamico se crea name en el proceso 
    if(!values.name){
        error.name = "El campo nombre es requerido"
    }

    if(!values.dni){
        error.dni="El dni es un objeto requerido"
    }
    return error; 
};

const MyField = ({ input, meta, type, name, label }) =>(
    <div>
        <label htmlFor={name}>{label}</label> <br/>
        <input {...input} type={!type ? "text" : type} />
        {
            meta.touched && meta.error && <span>{meta.error}</span>
        }
    </div>
);

/*
const isRequired = value => (
    !value && "Este campo es requerido"
);
*/

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
                        label="Nombre"
                    ></Field>
                    <Field 
                        name="dni" 
                        component={MyField} 
                        type="text"
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
    const CustomerEditForm = reduxForm({ 
        form: 'CustomerEdit',
        validate
    })(CustomerEdit)
    //connect y map state to props para manejar los datos del state en initialValues
export default setPropsAsInitial(CustomerEditForm);