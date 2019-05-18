import React,{Component} from 'react';

export class Presupuesto extends Component{

    render(){
        return (
            <div className ="alert alert-primary">
                El presupuesto es ${this.props.presupuesto}
            </div>
        );
    }
}