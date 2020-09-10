import React, { useState, useEffect } from 'react';
import InfoIssues from './InfoIssues'; 
import {firebase, db} from '../../firebase/configFirebase';

const Issues = () =>{
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
            <InfoIssues
              key={infos.id}
              infos={infos}
              info={info}
              setInfo={setInfo}
            />
            ))}
        </div>
    )
}
export default Issues
