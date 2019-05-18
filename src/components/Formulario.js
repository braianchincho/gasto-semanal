import React, { Component } from 'react';

class Formulario extends Component {
    nombreGasto = React.createRef();
    cantidadGasto = React.createRef();
    crearGasto = (e) => {
        e.preventDefault();
        const gasto = {
            nombre : this.nombreGasto.current.value,
            cantidad : this.cantidadGasto.current.value 
        };

        this.props.agregarGasto(gasto);
        e.currentTarget.reset();
    }
    render() {
        return (
            <form onSubmit={this.crearGasto}>
                <h2>Agrega tus gastos aqui</h2>
                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input ref={this.nombreGasto}  className="u-full-width" type="text" placeholder="Ej. Transporte" required/>
                </div>

                <div className="campo">
                    <label>Cantidad</label>
                    <input ref={this.cantidadGasto} className="u-full-width" type="number" placeholder="Ej. 300" required/>
                </div>

                <input className="button-primary u-full-width" type="submit" value="Agregar" />
            </form>
        );
    }
}

export default Formulario;