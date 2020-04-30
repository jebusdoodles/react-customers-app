import React, { Component } from 'react'; 

export const setPropsAsInitial = WrappedComponent =>(
    // UNa funcion que retoma un nuevo componente a partir de un componente inicial
    class extends Component{
        render() {
            return <WrappedComponent {...this.props} initialValues={this.props} />;
        }
    }
);