import React , { Component } from 'react';
import {revisarPresupuesto} from '../HelperFunction'
export class Restante extends Component {
    
    render(){
        let {restante,presupuesto} = this.props;
        let classRestante = revisarPresupuesto(presupuesto,restante);
        return (
            <div className={classRestante}>
                El restante es: ${restante}
            </div>
        );
    }
}