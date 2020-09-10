import React from 'react'; 
import { withRouter } from 'react-router-dom';

const Entrar = ({sesions, sesion, history}) =>{
    const { perfil } = sesions
    if(perfil === 'Proveedor'){
        history.push('/HomeProveedor');
    }else{
        history.push('/HomeInterno');
    }
  return(
  <div>Hola {perfil}</div>
  )
}
export default withRouter(Entrar) 

