import React  from 'react';
import { useHistory } from 'react-router-dom'
import logo from '../assets/walmart.png'
import logoBlanco from '../assets/walmartBlanco.png'

const Logo = ({small = false, big = false, login=false})=> {
    let history = useHistory()
    function handleClick() {

        history.push('/HomeProveedor')
    }

    let src = logo
    let alt = 'small'
    let style = {
        width: '100%',
        height: '100%'
    }
    let classNam = 'logo-small'

    if(small){
        src = logoBlanco
        style = {
            width: '180px',
            height: 'auto'
        }
    }
    else if(big){
        alt= 'big'
        classNam= 'logo-big'
    } else if (login){
        src = logoBlanco
        style = {
            width: '180px',
            height: 'auto'
        }
        classNam='logo-login'
    }

    return(
        <div className='logo-container'>
            <img id={small? 'small-logo': 'big-logo'}src={src} style={style} alt={alt} className={classNam} onClick={handleClick}></img>
        </div>
    )
}

export default Logo