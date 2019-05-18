import React, { Component } from 'react';
import Header from './Header';
import '../css/App.css';
import Formulario from './Formulario';
import Listado from './Listado';
import { validarPresupuesto } from '../HelperFunction'
import ControlPresupuesto from './ControlPresupuesto';
export class Principal extends Component {
    state = {
        presupuesto: 0,
        restante: 0,
        gastos: []
    }
    componentDidMount() {
       this.obtenerPresupuesto();
    }
    obtenerPresupuesto = () => {
        let presupuesto = prompt('¿Cual es tu presupuesto?');
        if (validarPresupuesto(presupuesto)) {
            this.setState({
                presupuesto: presupuesto,
                restante: presupuesto
            });
        } else {
            this.obtenerPresupuesto();
        }
    }
    agregarGasto = gasto => {
        const gastos = [...this.state.gastos];

        gastos.push(gasto);

        this.setState({
            gastos: gastos
        })
        this.restarGasto(gasto.cantidad);
        
    }
    restarGasto = (cantidad) => {
        let montoAGastar = Number(cantidad);
        let restante = this.state.restante;
        let resultado = restante - montoAGastar;
        this.setState({
            restante : resultado
        })

    }
    render() {
        return (
            <div className="App container">
                <Header titulo="Gasto semanal" />
                <div className="contenido-principal contenido">
                    <div className="row">
                        <div className="one-half column">
                            <Formulario agregarGasto={this.agregarGasto} />
                        </div>
                        <div className="one-half column">
                            <div className="gastos-realizados">
                                <h2>Listado</h2>
                                <ControlPresupuesto 
                                  presupuesto = {this.state.presupuesto}
                                  restante = {this.state.restante}
                                 />
                                <Listado listado={this.state.gastos} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}