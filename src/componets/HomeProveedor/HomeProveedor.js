import React, {useState, useEffect} from 'react';
import {firebase, db} from '../../firebase/configFirebase';  
import MenuProveedor from  '../MenuProveedor/MenuProveedor'
import Pasos from '../Pasos/Pasos'
import TiposCampaña from '../TiposCampaña/TiposCampaña'
import { Row, Col, Layout } from 'antd';
require('firebase/auth')
const { Header, Content } = Layout;

const HomeProveedor = () =>{
    const user = firebase.auth().currentUser;
    const  uid = 'q9R1VgxL0DfgfMY0KoKYhi3isw52'  
    //console.log(uid); 
    //console.log(user); 
      const [usuario, setUsuario] = useState([]);
      //const [uids, setUids] = useState({uid: {uid}})  
      useEffect(() => {
       const goUser = db.collection('users').where('uid', '==', uid );
       return goUser.onSnapshot(snapshotReady => {
         const userData = []
         snapshotReady.forEach(doc => userData.push({ ...doc.data(), id: doc.id }));
         setUsuario(userData);
      });
     }, []);  
  
    return(
    <Layout>
      <Header>
        <MenuProveedor />
      </Header>
      <Content>
        <Row>
          <Col span={12} push={3} >
            <h1 className='h1-welcome' id='home-title'>Bienvenido</h1>
            <Pasos />
          </Col>
        </Row>
        <Row>
          <Col span={8} offset={6}>
            <TiposCampaña />
          </Col>
        </Row>
      </Content>
    </Layout>
    )
}
export default HomeProveedor