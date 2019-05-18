import React, { Component } from 'react';
import '../css/App.css'

export class Gasto extends Component {

    render() {
        const { nombre, cantidad } = this.props.gasto;
        return (
                <li className="gastos" >
                    <p>
                        {nombre}
                       <span className="gasto">${cantidad}</span>
                    </p>
                </li>
        );
    }
}