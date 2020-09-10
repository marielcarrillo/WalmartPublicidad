import React, { useEffect, useState } from "react";
import {app} from '../firebase/configFirebase'; 
export const Auth = React.createContext();
//let {Provider, Consumer} =  Auth
export const AuthContext = ({ children }) => {
    const [usuario, setUsuario] = useState(null);
    const [showChild, setShowChild] = useState(false);

    useEffect(() => {
        app.auth().onAuthStateChanged(function(user) {
            //debugge
            setUsuario(user);
            setShowChild(true);
            console.log(user); 
        });
    }, []);

    if (!showChild) {
        return null;
    } else {
        return (
            <Auth.Provider
                value={(
                    usuario
                )}
            >
                {children}
            </Auth.Provider>
        );
    }
};
//export { AuthContext }