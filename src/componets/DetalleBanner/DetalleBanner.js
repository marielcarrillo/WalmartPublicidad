import React, {usestáte, useEffect} from 'react';
import {firebase, db} from '../../firebase/configFirebase';  
import { useHistory, Link } from 'react-router-dom'
import { Row, Col, Layout} from 'antd';
import MenuProveedor from  '../MenuProveedor/MenuProveedor'

import '../../styles/detalleBanner.scss'
require('firebase/auth')
const { Header, Content } = Layout;
let superBanner = [
    {
        id: 'superBanner',
        descripción: {
            texto: 'Es una campaña dinámica, con una presentación en carrusel, aparecerás en el inicio de nuestra página web.',
            icon:'../assets/iconDescr.png'
        },
        ventaja:{
            texto:'La ventaja de contratar está campaña es que estárás visible en el momento que nuestros clientes ingresen a la página.',
            icon:'../assets/iconVentajas.png'
        }, 
        ubicación:{
            texto:'Ubicación: parte superior de la página.Medidas de 728×293 pixeles. El peso de la imagen sera de máximo 25mb. En un formato editable.',
            icon:'../assets/iconUbi.png'
        },
        costo:{
            texto:'$900.00 x día',
            icon:'../assets/iconCosto.png'
        },

        img:'../assets/sBanner.png'
    },
    {
        id: 'superBannerCentral',
        descripción: {
            texto:'Es una campaña ubicada dentro del departamento que corresponde a tu producto, es una presentación de carrusel.',
            icon:'../assets/iconDescr.png'
        },
        ventaja:{
            texto:'La ventaja de contratar está campaña es que cuando nuestro cliente de click sera diseccionado a una sección especial donde visualizara unicamente tus productos',
            icon:'../assets/iconVentajas.png'
        }, 
        ubicación:{
            texto:'Ubicación: a la mitad de la página web. Medidas de 728×293 pixeles. El peso de la imagen sera de máximo. En un formato editable.',
            icon:'../assets/iconUbi.png'
        },
        costo:{
            texto:'$800 x día',
            icon:'../assets/iconCosto.png'
        },

        img:'../assets/sBannerCentral.png'
    }
]
let banner = [
    {
        id: 'bannerCentral',
        descripción: {
            texto:'Es una campaña estática que aparece a la mitad de la página principal.',
            icon:'../assets/iconDescr.png'
        },
        ventaja:{
            texto:'La ventaja de elegir este formato es que cuando nuestro cliente de click sera redireccionado a una sección especial con los productos de tu marca disponibles en la tienda.',
            icon:'../assets/iconVentajas.png'
        }, 
        ubicación:{
            texto:'Ubicación: parte central de la página. Medidas de 728×90 pixeles. El peso de la imagen sera de máximo. En un formato editable.',
            icon:'../assets/iconUbi.png'
        },
        costo:{
            texto:'$600 x día',
            icon:'../assets/iconCosto.png'
        },

        img:'../assets/banner.png'
    },
    {
        id: 'bannerDpto',
        descripción: {
            texto:'Es una campaña estática que aparece a la mitad de la página del departamento al que corresponde tu marca',
            icon:'../assets/iconDescr.png'
        },
        ventaja:{
            texto:'La ventaja de elegir este formato es que cuando nuestro cliente ingrese a el departamento, podra dar click y sera dirigido a una sección especial con los productos de tu marca disponibles en la tienda.',
            icon:'../assets/iconVentajas.png'
        }, 
        ubicación:{
            texto:'Ubicación: parte central de la página. Medidas de 728×90 píxeles. El peso de la imagen sera de máximo. En un formato editable.',
            icon:'../assets/iconUbi.png'
        },
        costo:{
            texto:'$500 x día',
            icon:'../assets/iconCosto.png'
        },

        img:'../assets/bannerDpto.png'
    }
]

const DetalleBanner = ({sBanner, ban}) =>{
    //const user = firebase.auth().currentUser;
    const  uid = 'q9R1VgxL0DfgfMY0KoKYhi3isw52'  
    //console.log(user); 
      const [usuario, setUsuario] = usestáte([]);
      useEffect(() => {
       const goUser = db.collection('users').where('uid', '==', uid );
       return goUser.onSnapshot(snapshotReady => {
         const userData = []
         snapshotReady.forEach(doc => userData.push({ ...doc.data(), id: doc.id }));
         setUsuario(userData);
      });
     }, []);  
  
    let history = useHistory()
    function regresar() {

        history.push('/HomeProveedor')
    }
    function handleClick() {

        history.push('/Comprando')
    }
    if(sBanner){
        return(
            <>
            <Layout>
                <Header>
                    <MenuProveedor />
                </Header>
                <h1 className='h1-welcome'>Super Banner</h1>
                {superBanner.map(ban=>              
                <div className='detail-blue-container'>
                    
                    <Row justify="space-around" align="bottom">
                    <Col span={12}>
                        <div className='detail-img-container'>
                            <img src={ban.img} key={ban.id} className='banner-detail-img' alt="banner1"></img>
                        </div>                        
                    </Col>
                    <Col span={12}>
                        <div className='detail-container'>
                        <div className='details-flex-container'>
                            <img className='icon' src={ban.descripción.icon} key={ban.id} alt="banner2"></img>
                            <div>{ban.descripción.texto}</div>
                        </div>
                        <div className='details-flex-container'>
                            <img className='icon' src={ban.ventaja.icon} key={ban.id} alt="banner3"></img>
                            <div>{ban.ventaja.texto}</div>
                        </div>
                        <div className='details-flex-container'>
                            <img className='icon' src={ban.ubicación.icon} key={ban.id} alt="banner4"></img>
                            <div>{ban.ubicación.texto}</div>
                        </div>
                        <div className='details-flex-container'>
                            <img className='icon' src={ban.costo.icon} key={ban.id} alt="banner5"></img>
                            <div className='txt-mrg'>{ban.costo.texto}</div>
                        </div>
                        </div>
                    </Col>
                    </Row>
                    <div className='detail-btn-comprar'>

                    <Link to={`/Comprando/${ban.id}`}><button className='yellow-btn detail' onClick={handleClick}>Comprar</button> </Link>
                    </div>
                </div>
            )}
            <div className='detail-btn-regresar-cont'>  
                <button className='detail-btn-regresar' onClick={regresar}>Regresar</button>
            </div>
            </Layout>
            </>
        )
    } else if (ban){
        return(
            <>
            <Layout>
                <Header>
                <MenuProveedor /></Header>
                <h1 className='h1-welcome'>Banner</h1>
                {banner.map(ban=>
                    <div className='detail-blue-container'>
                                        
                    <Row justify="space-around" align="bottom">
                    <Col  span={12}>
                        <div className='detail-img-container'>
                            <img className='icon' src={ban.img} key={ban.id} className='banner-detail-img' alt="banner6"></img>
                        </div>                        
                    </Col>
                    <Col  span={12}>
                        <div className='detail-container'>
                        <div className='details-flex-container'>
                            <img className='icon' src={ban.descripción.icon} key={ban.id} alt="banner7"></img>
                            <div>{ban.descripción.texto}</div>
                        </div>
                        <div className='details-flex-container'>
                            <img className='icon' src={ban.ventaja.icon} key={ban.id} alt="banner8"></img>
                            <div>{ban.ventaja.texto}</div>
                        </div>
                        <div className='details-flex-container'>
                            <img className='icon' src={ban.ubicación.icon} key={ban.id} alt="banner9"></img>
                            <div>{ban.ubicación.texto}</div>
                        </div>
                        <div className='details-flex-container'>
                            <img className='icon' src={ban.costo.icon} key={ban.id} alt="banner10"></img>
                            <div className='txt-mrg'>{ban.costo.texto}</div>
                        </div>
                        </div>
                    </Col>
                    </Row>
                    <div className='detail-btn-comprar'>
                    <Link to={`/Comprando/${ban.id}`}><button className='yellow-btn detail' onClick={handleClick}>Comprar</button></Link>
                    </div>
                </div>
                )}
                <div className='detail-btn-regresar-cont'>  
                    <button className='detail-btn-regresar' onClick={regresar}>Regresar</button>
                </div>
            </Layout>
            </>
        )
    }
    
} 
export default DetalleBanner