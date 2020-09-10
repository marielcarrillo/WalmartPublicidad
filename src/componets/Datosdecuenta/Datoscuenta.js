import React from 'react';
import { Input, Col,Row } from 'antd'
import iconCu from '../assets/pasos5.png'
import 'antd/dist/antd.css';
import '../../styles/aprobacion.scss'

const DatosCuenta = () =>{
    return(
        <div className='account-box'>  
          <div className='account-div-icon'>
            <img src={iconCu} className='icon-medium' id='iconCu'></img>
          </div>
             <div className='container-input'>
             <h2>Tu cobro será procesado con la <br/> siguiente cuenta de provedor</h2>
              <h3> Juguetes Fisher </h3>
              <p>
                11444       Tarjetas de débito <br/>
                Comcepto:   Campaña Walmart"  <br/>
                Costo por:   $6, 300.00
              </p>  
          </div>
        </div>
    )
}
 
export default DatosCuenta