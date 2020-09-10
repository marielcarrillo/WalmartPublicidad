import React, {useState, useEffect} from 'react';
import {db} from '../../firebase/configFirebase';
import { useHistory } from 'react-router-dom'
import {Layout} from 'antd';
import MenuProveedor from '../MenuProveedor/MenuProveedor'
import SubirArchivos from '../SubirArchivos/SubirArchivos'
import VerImagen from '../VerImagen/VerImagen'
import Logo from '../Logo/Logo'
import iconApr from '../assets/pasosAprob.png'
import iconCheck from '../assets/pasos5.png'
import DatosCuenta from '../Datosdecuenta/Datoscuenta';
import CampañaLista from '../CampañaLista/CampañaLista'
import '../../styles/aprobacion.scss'


const { Header, Content } = Layout;

const Aprobacion = () =>{
    let history = useHistory()

    function handleClick() {

        history.push('/Completado')
    }
    const [aprobacion, getAprobacion]= useState();

    const getData = async () => {
        let contrato = db.collection('contratopublicidad').doc('Fl0agXgVrfWKscHhDehT')
        contrato.get().then((doc)=>{
            if(doc.exists){
                getAprobacion({...doc.data()})
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });    
    }

    useEffect(()=>{
        getData()
    },[])
    //console.log(aprobacion.fechafinal);
   //console.log(aprobacion.fechafinal);
    /*const datef = new Date(ff*1000);
            const mesf = datef.getMonth()+1; 
            const diaf = datef.getDate(); 
            const anyof = datef.getYear() - 69;
            const datefinal = diaf + '/' + mesf + '/' + anyof;
            console.log(datefinal)*/
    if(aprobacion?.aprobacion==='pendiente'){
        return(
            <>
            <Layout>
                <Header>
                    <MenuProveedor/>
                </Header>
                <Content>
                    <div className='full-box-aprob'>
                    <h1 className='h1-welcome'>Tu campaña está siendo revisada</h1>
                    <div className='aprobacion-blue-container'>
                        <p className='aprob-text-blue'>Información de tu campaña</p>
                        <div className='aprob-blue-container'>
                            <img src={iconApr} className='icon-medium'></img>
                            <div>
                                <ul>
                                    <li className='aprob-info'>Proveedor: {aprobacion.proveedor}</li>
                                    <li className='aprob-info'>Tipo de campaña: {aprobacion.tipo}</li>
                                    <li className='aprob-info'>Donde aparecerá: {aprobacion.departamento}</li>
                                    <li className='aprob-info'>Fecha de inicio: 9/09/2020</li>
                                    <li className='aprob-info'>Fecha de finalización: 17/09/2020</li>
                                    <li className='aprob-info'>Costo:</li>
                                </ul>
                            </div> 
                        </div>               
                    </div>
                    <div className='aprob-remember'>
                        <p>Recuerda</p>
                        <ul>
                            <li>Tu campaña esta siendo revisada por el equipo de diseño, para verificar que tus archivos sean los más optimos para tu campaña.</li>
                            <li>En las proximas 24 horas recibiras una notificación donde se te indicara si tu campaña ha sido aprobada o reuiqere modificaciones.</li>
                            <li>Si existe algún cambio se te notificara los cambios necesarios y tendrías 24hras para realizarlos o quedara liberado el espacio y tendrás que iniciar el proceso de nuevo</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='aprob-txt-tnks'>Gracias por tu confianza</h1>
                        <div className='container-logo-apr'>
                            <Logo big />
                        </div>
                        <button className='aprob-btn'>Entendido</button>
                    </div>
                    </div>
                </Content>
    
            </Layout>
            </>
        )
    } else if (aprobacion?.aprobacion==='aprobada'){
        return(
            <>
            <Layout>
                <Header>
                    <MenuProveedor/>
                </Header>
                <Content>
                    <h1 className='h1-welcome'>Tu campaña ha sido aprobada</h1>
                    <div className='aprobacion-blue-container'>
                        <p className='aprob-text-blue'>Información de tu campaña</p>
                        <div className='aprob-blue-container'>
                            <img src={iconCheck} className='icon-medium'></img>
                            <div>
                                <ul>
                                    <li className='aprob-info'>Proveedor: {aprobacion.proveedor}</li>
                                    <li className='aprob-info'>Tipo de campaña: {aprobacion.tipo}</li>
                                    <li className='aprob-info'>Donde aparecerá: {aprobacion.departamento}</li>
                                    <li className='aprob-info'>Fecha de inicio: 14/09/2020</li>
                                    <li className='aprob-info'>Fecha de finalización: 20/09/2020</li>
                                    <li className='aprob-info'>Costo:$6,300.00</li>
                                </ul>
                            </div> 
                        </div>               
                    </div>
                    <div>
                        <p className='title-aprob'>Tu campaña se vera así:</p>
                        <img src={aprobacion.urlimg} alt={aprobacion.nameimg} style={{width: 900, height: 'auto'}} className='img-campaña'/>
                    </div>
                    <div>
                        <p className='text-aprob'>Para finalizar el proceso de contratación, ingresa tus datos de cuenta para realizar el pago correspondiente.</p>
                        <DatosCuenta />
                    <div className='btn-modal-div'>
                        <CampañaLista />
                        <button className='cancel-btn'>Cancelar</button></div>
                    </div>
                </Content>
    
            </Layout>
            </>
        )
    } else if(aprobacion?.aprobacion==='rechazada'){
        return(
            <>
            <Layout>
                <Header>
                    <MenuProveedor/>
                </Header>
                <Content>
                    <h1 className='h1-welcome'>Tu campaña requiere ser revisada</h1>
                    <div className='aprobacion-blue-container'>
                        <p className='aprob-text-blue'>Información de tu campaña</p>
                        <div className='aprob-blue-container'>
                            <img src={iconApr} className='icon-medium'></img>
                            <div>
                                <ul>
                                    <li className='aprob-info'>Proveedor: {aprobacion.proveedor}</li>
                                    <li className='aprob-info'>Tipo de campaña: {aprobacion.tipo}</li>
                                    <li className='aprob-info'>Donde aparecerá: {aprobacion.departamento}</li>
                                    <li className='aprob-info'>Fecha de inicio: 9/09/2020</li>
                                    <li className='aprob-info'>Fecha de finalización: 17/09/2020</li>
                                    <li className='aprob-info'>Costo:</li>
                                </ul>
                            </div> 
                        </div>               
                    </div>
                    <div>
                        <h1>Cambios requeridos</h1>
                        <div>
                            <ul>
                                <li>Tu archivo de nombre “advertising.png” no cumple con la resolución. </li>
                                <li>Tu archivo de nombre “advertising.png” no cumple con el tamaño indicado. </li>
                            </ul>
                        </div>
                        <SubirArchivos />
                        <div>
                        <p>Recuerda</p>
                        <ul>
                            <li>Tu campaña está siendo revisada por el equipo de diseño, para verificar que tus archivos sean los más optimos para tu campaña.</li>
                            <li>En las proximas 24 horas recibiras una notificación donde se te indicara si tu campaña ha sido aprobada o reuiqere modificaciones.</li>
                            <li>Si existe algún cambio se te notificara los cambios necesarios y tendrías 24hras para realizarlos o quedara liberado el espacio y tendrás que iniciar el proceso de nuevo</li>
                        </ul>
                    </div>
                    </div>
                </Content>
    
            </Layout>
            </>
        )
    } else{
        return(
            <div>...Cargando</div>
        )
    }

    
    
}

export default Aprobacion