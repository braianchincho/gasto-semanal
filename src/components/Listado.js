import React ,{Component} from 'react'
import { Gasto } from './Gasto';
import '../css/App.css'
class Listado extends Component {
    
    render(){
        const listado = this.props.listado || [];
        return (
            <div>
                {listado.map((item,index) => {
                    return (
                        <Gasto key={index} gasto={item}/>
                    );
                })}
            </div>
        );
    }
}

export default Listado;