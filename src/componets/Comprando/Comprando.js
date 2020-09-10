import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'
import { db, firebase } from '../../firebase/configFirebase';
import Calendario from '../Calendario/Calendario'
import MenuProveedor from '../MenuProveedor/MenuProveedor'
import {Layout, Select } from 'antd';
import icon from '../assets/pasos1.png'
import FileUploader from "react-firebase-file-uploader";
import '../../styles/comprando.scss'
const { Option } = Select;

const { Header, Content } = Layout;

const Comprando= ({superBanner, sBannnerCentral, banner, bannerDpto})=> {
    let history = useHistory()
    function handleClick() {

        if(superBanner){
           history.push('/Aprobacion');
             db.collection('contratopublicidad').add({
                aprobacion:"pendiente",
                errorimagen: "no",
                departamento: depto,
                fechainicio: getInitialState.from,
                fechafinal: getInitialState.to,
                proveedor: proveedor,
                nameimg: namefile,
                urlimg: url,
                tipo: "SuperBanner"
            }).then(()=>{
                console.log('tus fechas han sido agendadas')
            }) .catch((error) => {
                console.error("Error al subir tus fechas", error);
            });
        }       
         else if (sBannnerCentral){
            history.push('/Aprobacion');
            db.collection('contratopublicidad').add({
                aprobacion:"pendiente",
                errorimagen: "no",
                departamento: depto,
                fechainicio: getInitialState.from,
                fechafinal: getInitialState.to,
                proveedor: proveedor,
                nameimg: namefile,
                urlimg: url,
                tipo: "SuperBannerCentral"
            }).then(()=>{
                console.log('tus fechas han sido agendadas')
            }) .catch((error) => {
                console.error("Error al subir tus fechas", error);
            });
        } else if (banner){
            history.push('/Aprobacion');
            db.collection('contratopublicidad').add({
                aprobacion:"pendiente",
                errorimagen: "no",
                departamento: depto,
                fechainicio: getInitialState.from,
                fechafinal: getInitialState.to,
                proveedor: proveedor,
                nameimg: namefile,
                urlimg: url,
                tipo: "Banner"
            }).then(()=>{
                console.log('tus fechas han sido agendadas')
            }) .catch((error) => {
                console.error("Error al subir tus fechas", error);
            });
        }else if (bannerDpto){
            history.push('/Aprobacion');
            db.collection('contratopublicidad').add({
                aprobacion:"pendiente",
                errorimagen: "no",
                departamento: depto,
                fechainicio: getInitialState.from,
                fechafinal: getInitialState.to,
                proveedor: proveedor,
                nameimg: namefile,
                urlimg: url,
                tipo: "BannerCentralDpto"
            }).then(()=>{
                console.log('tus fechas han sido agendadas')
            }) .catch((error) => {
                console.error("Error al subir tus fechas", error);
            });
        }
    }
    const [getInitialState, setGetInitialState] = useState({
        from: undefined,
        to: undefined
      });
      const [proveedor, setProveedor] = useState("Fisher-Price")
    /*funciones de Departamento */
    const [depto, setDepto] = useState(null)
    const onChangeDepto = (value)=> {
        const departamento = `${value}`;
         setDepto(departamento)
       }
    /**Funcion de Archivo */
    const [state, setState] = useState({
        filenames: [],
        downloadURLs: [],
        isUploading: false,
        uploadProgress: 0
      });
    
      const  handleUploadStart = () =>
        setState({
          isUploading: true,
          uploadProgress: 0
        });
    
      const handleProgress = progress =>
        setState({
          uploadProgress: progress
        });
    
      const handleUploadError = error => {
         setState({
          isUploading: false
          // Todo: handle error
        });
        console.error(error);
      };
      const [url, setUrl]= useState(null)
      const [namefile, setNameFile] = useState(null)
      const handleUploadSuccess = async filename => {
        const downloadURL = await firebase
          .storage()
          .ref("imagenes")
          .child(filename)
          .getDownloadURL();
          setUrl(downloadURL)
          setNameFile(filename)
        
        setState(oldState => ({
          uploadProgress: 100,
          isUploading: false
        }));
      };
       if(superBanner){
        return(
            <>
                <Layout>
                    <Header>
                        <MenuProveedor/>
                    </Header>
                    <Content>
                        <h1 className='h1-welcome'>Comprando</h1>
                        <div className='blue-container'>
                            <img src={icon} className='icon-medium'></img>
                            <p className='text-blue'>Has elegido el Super Banner</p>
                        </div>
                        <div className='main-comprando-container'>
                            <div className='calendar-container'>
                            <div className='dropdown-container'>
                                    <div className='dropdown-text-container'>
                                        <p className='p-text'>Elige lugar de publicación:</p>
                                    </div>
                                    <Select
                                    showSearch
                                    style={{ width: 305}}
                                    placeholder="Departamento"
                                    optionFilterProp="children"
                                    onChange={onChangeDepto}
                                    filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="Electrodomésticos & línea blanca">Electrodomésticos & línea blanca</Option>
                                    <Option value="Celulares & cámaras">Celulares & cámaras</Option>
                                    <Option value="Autos & motos">Autos & motos</Option>
                                    <Option value="Colchones, muebles & jardín">Colchones, muebles & jardín</Option>
                                    <Option value="Hogar, casa inteligente & ferretería">Hogar, casa inteligente & ferretería</Option>
                                    <Option value="Moda, belleza & salud">Moda, belleza & salud</Option>
                                    <Option value="Bebés">Bebés</Option>
                                    <Option value="Mascotas">Mascotas</Option>
                                    <Option value="Películas, libros & artículos de temporada">Películas, libros & artículos de temporada</Option>
                                    <Option value="Vinos, licores & despensa">Vinos, licores & despensa</Option>
                                </Select>
                                </div>
                                <Calendario getInitialState={getInitialState} setGetInitialState={setGetInitialState}/>
                            </div>
                            <div>
                                <div className='advice-upload-blue'>
                                <div >
                                    <div className='advice-upload'>
                                    <div className='icon-upload-container'>
                                        <img src={icon} className='icon-medium'></img>
                                    </div>
                                    <div>
                                        <h1 className='text-blue-upload'>Sube tu archivo</h1>
                                        <p className='p-blue-upload'>Recuerda:</p>
                                        <p className='p-blue-upload'>·La imagen de la campaña debe ser de 728×293 pixeles</p>
                                        <p className='p-blue-upload'>·Formato editable</p>
                                        <p className='p-blue-upload'>·Peso máximo 10MB</p>
                                    </div>
                                </div>
                                </div>
                                <button className='btn-upload-files' style={{width:160, height: 50, backgroundColor: '#FDBB2F',}}>Cargar
                                <FileUploader
                                accept="image/*"
                                name="image-uploader-multiple"
                                //randomizeFilename
                                storageRef={firebase.storage().ref("imagenes")}
                                onUploadStart={handleUploadStart}
                                onUploadError={handleUploadError}
                                onUploadSuccess={handleUploadSuccess}
                                onProgress={handleProgress}
                                multiple
                                style={{opacity:0}}
                                />
                                </button> 
                                </div>
                                <div className='remember-container'>
                                <h1 className='recuerda'>Recuerda:</h1>
                                <p>Una vez enviado, espera la confirmación de aprobación, a través de una notificación en tu home.</p>
                                <p>Una vez aprobada tu campaña, deberás continuar con el proceso de pago, muchas gracias por tu confianza.</p>
                                <p>Si existe algún cambio se te notificara los cambios necesarios y tendrías 24hras para realizarlos o quedará liberado el espacio y tendrás que iniciar el proceso de nuevo.</p>
                                </div>   
                            </div>
                            <div className='div-btn-comprando'>
                                <button className='send-btn' onClick={handleClick}>Enviar</button>
                            </div>
                            <div className='div-btn-comprando'>
                                <button className='cancel-btn'>Cancelar</button>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </>
        )
    } else if (sBannnerCentral){
        return(
            <>
                <Layout>
                    <Header>
                        <MenuProveedor/>
                    </Header>
                    <Content>
                        <h1 className='h1-welcome'>Comprando</h1>
                        <div className='blue-container'>
                            <img src={icon} className='icon-medium'></img>
                            <p className='text-blue' >Has elegido el Super Banner Central</p>
                        </div>
                        <div className='main-comprando-container'>
                            <div className='calendar-container'>
                            <div className='dropdown-container'>
                                    <div className='dropdown-text-container'>
                                        <p className='p-text'>Elige lugar de publicación:</p>
                                    </div>
                                    <Select
                                    showSearch
                                    style={{ width: 305}}
                                    placeholder="Departamento"
                                    optionFilterProp="children"
                                    onChange={onChangeDepto}
                                    filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="Electrodomésticos & línea blanca">Electrodomésticos & línea blanca</Option>
                                    <Option value="Celulares & cámaras">Celulares & cámaras</Option>
                                    <Option value="Autos & motos">Autos & motos</Option>
                                    <Option value="Colchones, muebles & jardín">Colchones, muebles & jardín</Option>
                                    <Option value="Hogar, casa inteligente & ferretería">Hogar, casa inteligente & ferretería</Option>
                                    <Option value="Moda, belleza & salud">Moda, belleza & salud</Option>
                                    <Option value="Bebés">Bebés</Option>
                                    <Option value="Mascotas">Mascotas</Option>
                                    <Option value="Películas, libros & artículos de temporada">Películas, libros & artículos de temporada</Option>
                                    <Option value="Vinos, licores & despensa">Vinos, licores & despensa</Option>
                                </Select>
                                </div>
                                <Calendario  getInitialState={getInitialState} setGetInitialState={setGetInitialState}/>
                            </div>
                            <div>
                                <div className='advice-upload-blue'>
                                <div >
                                    <div className='advice-upload'>
                                    <div className='icon-upload-container'>
                                        <img src={icon} className='icon-medium'></img>
                                    </div>
                                    <div>
                                        <h1 className='text-blue-upload'>Sube tu archivo</h1>
                                        <p className='p-blue-upload'>Recuerda:</p>
                                        <p className='p-blue-upload'>·La imagen de la campaña debe ser de 728×293 pixeles</p>
                                        <p className='p-blue-upload'>·Formato editable</p>
                                        <p className='p-blue-upload'>·Peso máximo 10MB</p>
                                    </div>
                                </div>
                                </div>
                                <button className='btn-upload-files' style={{width:160, height: 50, backgroundColor: '#FDBB2F',}}>Cargar
                                <FileUploader
                                accept="image/*"
                                name="image-uploader-multiple"
                                //randomizeFilename
                                storageRef={firebase.storage().ref("imagenes")}
                                onUploadStart={handleUploadStart}
                                onUploadError={handleUploadError}
                                onUploadSuccess={handleUploadSuccess}
                                onProgress={handleProgress}
                                multiple
                                style={{opacity:0}}
                                />
                                </button> 
                                </div>
                                <div className='remember-container'>
                                <h1 className='recuerda'>Recuerda:</h1>
                                <p>Una vez enviado, espera la confirmación de aprobación, a través de una notificación en tu home.</p>
                                <p>Una vez aprobada tu campaña, deberás continuar con el proceso de pago, muchas gracias por tu confianza.</p>
                                <p>Si existe algún cambio se te notificara los cambios necesarios y tendrías 24hras para realizarlos o quedará liberado el espacio y tendrás que iniciar el proceso de nuevo.</p>
                                </div>   
                            </div>
                            <div className='div-btn-comprando'> 
                                <button className='send-btn' onClick={handleClick}>Enviar</button>
                            </div>
                            <div className='div-btn-comprando'> 
                                <button className='cancel-btn'>Cancelar</button>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </>
        )
    }else if(banner){
        return(
            <>
                <Layout>
                    <Header>
                        <MenuProveedor/>
                    </Header>
                    <Content>
                        <h1 className='h1-welcome'>Comprando</h1>
                        <div className='blue-container'>
                            <img src={icon} className='icon-medium'></img>
                            <p className='text-blue'>Has elegido el Banner Central</p>
                        </div>
                        <div className='main-comprando-container'>
                            <div className='calendar-container'>
                            <div className='dropdown-container'>
                                    <div className='dropdown-text-container'>
                                        <p className='p-text'>Elige lugar de publicación:</p>
                                    </div>
                                    <Select
                                    showSearch
                                    style={{ width: 305}}
                                    placeholder="Departamento"
                                    optionFilterProp="children"
                                    onChange={onChangeDepto}
                                    filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="Electrodomésticos & línea blanca">Electrodomésticos & línea blanca</Option>
                                    <Option value="Celulares & cámaras">Celulares & cámaras</Option>
                                    <Option value="Autos & motos">Autos & motos</Option>
                                    <Option value="Colchones, muebles & jardín">Colchones, muebles & jardín</Option>
                                    <Option value="Hogar, casa inteligente & ferretería">Hogar, casa inteligente & ferretería</Option>
                                    <Option value="Moda, belleza & salud">Moda, belleza & salud</Option>
                                    <Option value="Bebés">Bebés</Option>
                                    <Option value="Mascotas">Mascotas</Option>
                                    <Option value="Películas, libros & artículos de temporada">Películas, libros & artículos de temporada</Option>
                                    <Option value="Vinos, licores & despensa">Vinos, licores & despensa</Option>
                                </Select>
                                </div>
                                <Calendario getInitialState={getInitialState} setGetInitialState={setGetInitialState}/>
                            </div>
                            <div>
                                <div className='advice-upload-blue'>
                                <div >
                                    <div className='advice-upload'>
                                    <div className='icon-upload-container'>
                                        <img src={icon} className='icon-medium'></img>
                                    </div>
                                    <div>
                                        <h1 className='text-blue-upload'>Sube tu archivo</h1>
                                        <p className='p-blue-upload'>Recuerda:</p>
                                        <p className='p-blue-upload'>·La imagen de la campaña debe ser de 728×293 pixeles</p>
                                        <p className='p-blue-upload'>·Formato editable</p>
                                        <p className='p-blue-upload'>·Peso máximo 10MB</p>
                                    </div>
                                </div>
                                </div>
                                <button className='btn-upload-files' style={{width:160, height: 50, backgroundColor: '#FDBB2F',}}>Cargar
                                <FileUploader
                                accept="image/*"
                                name="image-uploader-multiple"
                                //randomizeFilename
                                storageRef={firebase.storage().ref("imagenes")}
                                onUploadStart={handleUploadStart}
                                onUploadError={handleUploadError}
                                onUploadSuccess={handleUploadSuccess}
                                onProgress={handleProgress}
                                multiple
                                style={{opacity:0}}
                                />
                                </button> 
                                </div>
                                <div className='remember-container'>
                                <h1 className='recuerda'>Recuerda:</h1>
                                <p>Una vez enviado, espera la confirmación de aprobación, a través de una notificación en tu home.</p>
                                <p>Una vez aprobada tu campaña, deberás continuar con el proceso de pago, muchas gracias por tu confianza.</p>
                                <p>Si existe algún cambio se te notificara los cambios necesarios y tendrías 24hras para realizarlos o quedará liberado el espacio y tendrás que iniciar el proceso de nuevo.</p>
                                </div>   
                            </div>
                            <div className='div-btn-comprando'>
                                <button className='send-btn' onClick={handleClick}>Enviar</button>
                            </div>
                            <div className='div-btn-comprando'>
                                <button className='cancel-btn'>Cancelar</button>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </>
        )
    } else if (bannerDpto){
        return(
            <>
                <Layout>
                    <Header>
                        <MenuProveedor/>
                    </Header>
                    <Content>
                        <h1 className='h1-welcome'>Comprando</h1>
                        <div className='blue-container'>
                            <img src={icon} className='icon-medium'></img>
                            <p className='text-blue'>Has elegido el Banner Central Departamento</p>
                        </div>
                        <div className='main-comprando-container'>
                            <div className='calendar-container'>
                            <div className='dropdown-container'>
                                    <div className='dropdown-text-container'>
                                        <p className='p-text'>Elige lugar de publicación:</p>
                                    </div>
                                    <Select
                                    showSearch
                                    style={{ width: 305}}
                                    placeholder="Departamento"
                                    optionFilterProp="children"
                                    onChange={onChangeDepto}
                                    filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    <Option value="Electrodomésticos & línea blanca">Electrodomésticos & línea blanca</Option>
                                    <Option value="Celulares & cámaras">Celulares & cámaras</Option>
                                    <Option value="Autos & motos">Autos & motos</Option>
                                    <Option value="Colchones, muebles & jardín">Colchones, muebles & jardín</Option>
                                    <Option value="Hogar, casa inteligente & ferretería">Hogar, casa inteligente & ferretería</Option>
                                    <Option value="Moda, belleza & salud">Moda, belleza & salud</Option>
                                    <Option value="Bebés">Bebés</Option>
                                    <Option value="Mascotas">Mascotas</Option>
                                    <Option value="Películas, libros & artículos de temporada">Películas, libros & artículos de temporada</Option>
                                    <Option value="Vinos, licores & despensa">Vinos, licores & despensa</Option>
                                </Select>
                                </div>
                                <Calendario getInitialState={getInitialState} setGetInitialState={setGetInitialState}/>
                            </div>
                            <div>
                                <div className='advice-upload-blue'>
                                <div >
                                    <div className='advice-upload'>
                                    <div className='icon-upload-container'>
                                        <img src={icon} className='icon-medium'></img>
                                    </div>
                                    <div>
                                        <h1 className='text-blue-upload'>Sube tu archivo</h1>
                                        <p className='p-blue-upload'>Recuerda:</p>
                                        <p className='p-blue-upload'>·La imagen de la campaña debe ser de 728×293 pixeles</p>
                                        <p className='p-blue-upload'>·Formato editable</p>
                                        <p className='p-blue-upload'>·Peso máximo 10MB</p>
                                    </div>
                                </div>
                                </div>
                                <button className='btn-upload-files' style={{width:160, height: 50, backgroundColor: '#FDBB2F',}}>Cargar
                                <FileUploader
                                accept="image/*"
                                name="image-uploader-multiple"
                                //randomizeFilename
                                storageRef={firebase.storage().ref("imagenes")}
                                onUploadStart={handleUploadStart}
                                onUploadError={handleUploadError}
                                onUploadSuccess={handleUploadSuccess}
                                onProgress={handleProgress}
                                multiple
                                style={{opacity:0}}
                                />
                                </button> 
                                </div>
                                <div className='remember-container'>
                                <h1>Recuerda:</h1>
                                <p>Una vez enviado, espera la confirmación de aprobación, a través de una notificación en tu home.</p>
                                <p>Una vez aprobada tu campaña, deberás continuar con el proceso de pago, muchas gracias por tu confianza.</p>
                                <p>Si existe algún cambio se te notificara los cambios necesarios y tendrías 24hras para realizarlos o quedará liberado el espacio y tendrás que iniciar el proceso de nuevo.</p>
                                </div>   
                            </div>
                            <div className='div-btn-comprando'>
                                <button className='send-btn' onClick={handleClick}>Enviar</button>
                            </div>
                            <div className='div-btn-comprando'>
                                <button className='cancel-btn'>Cancelar</button>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </>
        )
    }
    } 

export default Comprando