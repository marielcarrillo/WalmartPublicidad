import React, {useState} from 'react';
import {firebase, db} from '../../firebase/configFirebase'; 
import FileUploader from "react-firebase-file-uploader";
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';
import VerImagen from "../VerImagen/VerImagen"
import icon from '../assets/pasos2.png'
import '../../styles/comprando.scss'
require("firebase/storage");
const SubirArchivos = () =>{
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
    
      const handleUploadSuccess = async filename => {
        const downloadURL = await firebase
          .storage()
          .ref("imagenes")
          .child(filename)
          .getDownloadURL();
        let onchangeState = db.collection("fotos");
        onchangeState.add({
            "urlImg": downloadURL,
            "nameImg": filename

        }).then(function () {
            //alert("Registro cancelado exitosamente");

        }).catch(function (error) {
            console.error("Error updating document: ", error);
        });
        
        setState(oldState => ({
          //filenames: [...oldState.filenames, filename],
          //downloadURLs: [...oldState.downloadURLs, downloadURL],
          uploadProgress: 100,
          isUploading: false
        }));
      };
      const { downloadURLs } = state
    return (
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
          style={{opacity:0, width: 160, zIndex: 100,}}
          
        />
        </button> 
        </div>
        <div className='remember-container'>
          <h1 className='recuerda'>Recuerda:</h1>
          <p>Una vez enviado, espera la confirmación de aprobación, a través de una notificación en tu home.</p>
          <p>Una vez aprobada tu campaña, deberás continuar con el proceso de pago, muchas gracias por tu confianza.</p>
          <p>Si existe algún cambio se te notificara los cambios necesarios y tendrías 24hras para realizarlos o quedara liberado el espacio y tendrás que iniciar el proceso de nuevo.</p>
        </div>   
    </div>
    )
   }


export default SubirArchivos; 