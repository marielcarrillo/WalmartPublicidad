import React, {useState} from 'react';
import pasos from '../assets/pasos5.png'
import { useHistory } from 'react-router-dom'
import { Modal, Button } from 'antd';
import '../../styles/aprobacion.scss'

const CampañaLista = ()=> {
    const [state, setState] =  useState({visible: false})
    let history = useHistory()
    //  state = { visible: false };

    const showModal = () => {
        setState({
        visible: true,
        });
    };
    const handleHome = e => {
        //console.log(e);
        setState({
        visible: false,
        });
        history.push('/HomeProveedor')
    };
    const handleDetalles = e => {
        //console.log(e);
        setState({
        visible: false,
        });
        history.push('DetallesBanners/superBanner')
    };
    
    return(
        <div >
        <button className='send-btn' id='aprob-comprar-btn' onClick={showModal}>Comprar</button> <br />
       <Modal
         visible={state.visible}
            onOk={handleHome}
            onCancel={handleDetalles}
            footer={[
                <Button id='btnAgregar' value='Agregar' enter key="submit" type="primary" onClick={handleHome}/>
              ]}
            >
        <div className='modal-container'>
            <img src={pasos} alt="Completado" style={{width: '140px'}} className='icon-last' /> 
            <h1 className='listo'>Listo!</h1 >
            <p className='text-listo'>Tu campaña está lista para el día 13 de septiembre 2020</p>
            <p className='tnks'>Gracias por ser parte de Walmart!</p>
            <div className='listo-container-btn'>
                <button className='send-btn-listo' onClick={handleHome}>Listo</button>   
                <button className='yellow-btn' onClick={handleDetalles}>+ Agregar espacios Disponibles</button></div>
            </div>
       </Modal>
       </div>
    )
}

export default CampañaLista