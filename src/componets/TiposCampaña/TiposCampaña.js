import React from 'react';
import { useHistory } from 'react-router-dom'
import template from '../assets/duplicado.png'
import '../../styles/homeProveedor.scss'

const TiposdeCampaña = ()=> {
    let history = useHistory()

    function handleClick() {

        history.push('/DetallesBanners/superBanner')
    }
    function handleClick1() {

        history.push('/DetallesBanners/banner')
    }
    return(
        <div className='tipos-container'>
            <p className='text' id='pasos-text'>¿Dónde te gustaría publicitarte?</p>
            <img  src={template} alt="template"/>
            
                <button className='yellow-btn' id='superbanner-btn' onClick={handleClick}>Ver detalles</button>   
                <button className='yellow-btn'id='banner-btn' onClick={handleClick1}>Ver detalles</button>
        
        </div>
    )
}

export default TiposdeCampaña