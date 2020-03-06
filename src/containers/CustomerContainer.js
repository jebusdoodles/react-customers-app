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
        <Route path="/customer/:dni/edit" children={
            //nueva version de Ruteo dinamico de React Router
            ({ match }) => (
                match ? 
                    // destructuring para evitar mencionar cada uno de los elementos
                    <CustomerEdit {...this.props.customer}  />
                : 
                    <CustomerData {...this.props.customer} />)
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

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomersByDni(state, props),
});

export default connect(mapStateToProps, null)(CustomerContainer);
