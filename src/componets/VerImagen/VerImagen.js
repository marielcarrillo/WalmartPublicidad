import React, { useState, useEffect } from 'react';
import Imagen from './Imagen'; 
import {db} from '../../firebase/configFirebase';

const Issues = () =>{
    const [imagen, setImagen] = useState([]);
    useEffect(() => {
        const goInfo = db.collection('fotos');
        return goInfo.onSnapshot(snapshotInfo => {
          const infoData = []
          snapshotInfo.forEach(doc => infoData.push({ ...doc.data(), id: doc.id }));
          setImagen(infoData);
        });
      }, []);
    return(
        <div>
        {imagen.map((imagens) => (
            <Imagen
              key={imagens.id}
              imagens={imagens}
              imagen={imagen}
              setImagen={setImagen}
            />
            ))}
        </div>
    )
}
export default Issues
