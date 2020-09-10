import React, { useState, useEffect } from 'react';
import InfoCampaña from './InfoCampaña'; 
import {firebase, db} from '../../firebase/configFirebase';

const Informacion = () =>{
    const [info, setInfo] = useState([]);
    useEffect(() => {
        const goInfo = db.collection('contratopublicidad');
        return goInfo.onSnapshot(snapshotInfo => {
          const infoData = []
          snapshotInfo.forEach(doc => infoData.push({ ...doc.data(), id: doc.id }));
          //console.log(goDetalle); 
          setInfo(infoData);
        });
      }, []);
    return(
        <div>
        {info.map((infos) => (
            <InfoCampaña
              key={infos.id}
              infos={infos}
              info={info}
              setInfo={setInfo}
            />
            ))}
        </div>
    )
}
export default Informacion
    
