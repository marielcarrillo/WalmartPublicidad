import React  from 'react';
import { Row, Col } from 'antd';
import Logo from '../Logo/Logo'; 
import LoginFirebase from '../LoginFirebase/LoginFirebase'; 
import '../../styles/login.scss'

const Login = () =>{
    return ( 
      <>
        <div className='header-nav' >         
          <Logo login />          
        </div> 
        <div className="toprow" id='swing-in-top-fwd'>
          <Row>  
            <Col className="stylerow" xs={{ span: 12, offset: 1 }} lg={{ span: 6, offset: 2 }}>
              <Logo big />
              <h3>Inicio de Sesión</h3>
            <LoginFirebase />
            </Col>        
          </Row>
        </div>
      </>
    ); 
}
export default Login; 