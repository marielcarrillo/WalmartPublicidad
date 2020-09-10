import React from 'react';
import { Input } from 'antd'
import 'antd/dist/antd.css';

const DatosCuenta = () =>{
    return(
        <div>
          <div>
            <img></img>
            <h3>DATOS DE CUENTA</h3>
          </div>
          <div>            
            <Input placeholder="Basic usage" title="Número de tarjeta" />       
            <Input placeholder="Basic usage" title="Vencimiento de tarjeta" />
            <Input placeholder="Basic usage" title="Vencimiento de tarjeta" />  
            <Input placeholder="Basic usage" title="Nombre del titular" />
          </div> 
        </div>
    )
}
 
export default DatosCuenta