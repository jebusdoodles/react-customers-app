import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import PropTypes from 'prop-types';
import AppFrame from './../components/AppFrame'
import { getCustomersByDni } from '../selectors/customers';
import { Route } from 'react-router-dom';
import CustomerEdit from './../components/CustomerEdit';
import CustomerData from './../components/CustomerData';

class CustomerContainer extends Component {
    renderBody = () =>(
         //nueva version de Ruteo dinamico de React Router
        <Route path="/customer/:dni/edit" children={
            ({ match }) => {
                    // comparación para mostrar uno o otro contenedor
                    const CustomerControl = match ? CustomerEdit : CustomerData;
                    // destructuring
                    return <CustomerControl {...this.props.customer} />
                }
        }></Route>
    )
    render() {
        return (
            //<p>Datos del cliente {this.props.customer.name} </p>
            <div>
                <AppFrame header={`Cliente ${this.props.dni}`} 
                          body={this.renderBody()} >
                </AppFrame>
            </div>
        );
    }
}


const mapStateToProps = (state, props) => ({
    customer: getCustomersByDni(state, props),
});

export default connect(mapStateToProps, null)(CustomerContainer);
