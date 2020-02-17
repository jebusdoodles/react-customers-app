import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'; 
import AppFrame from './../components/AppFrame'; 
import CustomersActions from './../components/CustomersActions'; 

class HomeContainer extends Component {

    handleOnClick = () => {
        console.log("click"); 
        this.props.history.push('/customers');
    }
    render(){
        return (
            <div>
                <AppFrame 
                    header='Home' 
                    body={
                        <div>Esta es la pantalla principal
                            <CustomersActions>
                                <button onClick={this.handleOnClick}>
                                    Listado del cliente
                                </button>
                                <Link to='/customers'>Listado de clientes</Link>
                            </CustomersActions>
                        </div>
                    }></AppFrame>
            </div>
        );
    }
};

export default withRouter(HomeContainer);