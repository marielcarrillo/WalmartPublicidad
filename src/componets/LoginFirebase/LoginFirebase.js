import React, {useState, useCallback, Fragment} from 'react'; 
import {Form, Input } from 'antd';
import { withRouter } from 'react-router-dom';
import {firebase} from '../../firebase/configFirebase'; 
require("firebase/auth");

const LoginFirebase = (props) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bug, setBug] = useState(null);

    /*funciion de onclick en button */
    const submit = async (e) => {
        e.preventDefault();
        try {
            login(); 
        }
        catch (err) {
            console.log(err);
        }
    };

    /*funcion ´para logearse*/
    const login = useCallback(async () => {
        try {
            const res = await firebase.auth().signInWithEmailAndPassword(email, password);
            console.log(res);
            props.history.push('/IniciarSesion');
        } catch (error) {
            //console.log(error);
            if (error.code === "auth/user-not-found") {
                setBug("Usuario no registrado");
              }
              if (error.code === "auth/wrong-password") {
                setBug("Contraseña incorrecta");
              }
              if (error.code === "auth/invalid-email") {
                setBug("Email con formato equivocado");
              }
        }
    },
       [email, password, props.history],
    );
    return(
       <Fragment > 
        {bug && <div className="alertLogin">{bug}</div>}
    
        <Form name="basic">
            <Input
                type='text'
                placeholder='Correo Eléctronico'
                name='email'
                onChange={(e) => setEmail(e.target.value)} />
            <br/> <br/>
            <Input.Password 
                type="password" 
                name='password'
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
            />
            <br/><br/>
            <Input
                type="button" 
                onClick={submit}
                value="Entrar"
                className="btnLogin"
            />
    </Form>
    </Fragment>
    ); 
}

export default withRouter(LoginFirebase)