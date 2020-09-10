import React from 'react'
import { Switch, Route } from "react-router-dom";
import Login from './Login/Login.js'; 
import IniciarSesion from './IniciarSesion/IniciarSesion.js';
import HomeProveedor from './HomeProveedor/HomeProveedor.js'; 
import HomeInterno from './HomeInterno/HomeInterno.js'; 
import Uploadphoto from './uploadphoto/Uploadphoto.js';
import infoUp from './infoupload/infoupload.js';
import DetalleBanner from './DetalleBanner/DetalleBanner.js';
import SubirArchivos from './SubirArchivos/SubirArchivos.js'; 
import Comprando from './Comprando/Comprando'
import Aprobacion from './Aprobacion/Aprobacion'
import CampañaLista from './CampañaLista/CampañaLista'
const Routes = () => {

    
    return (
        <Switch>
            <Route exact path="/HomeInterno">
                <HomeInterno />
            </Route>
            <Route exact path="/HomeProveedor">
                <HomeProveedor />
            </Route>
            <Route exact path="/IniciarSesion">
                <IniciarSesion />
            </Route>
            <Route exact path="/">
                <Login />
            </Route>
            <Route exact path="/">
                <Uploadphoto/>
            </Route>
            <Route exact path="/">
                <infoUp/>
            </Route>
            <Route exact path="/DetallesBanners/superBanner">
                <DetalleBanner sBanner/>
            </Route>
            <Route exact path="/DetallesBanners/banner">
                <DetalleBanner ban/>
            </Route>
            <Route exact path="/SubirArchivos">
                <SubirArchivos />
            </Route>
            <Route exact path="/Comprando/superBanner">
                <Comprando superBanner />
            </Route>
            <Route exact path="/Comprando/superBannerCentral">
                <Comprando sBannnerCentral />
            </Route>
            <Route exact path="/Comprando/bannerCentral">
                <Comprando banner />
            </Route>
            <Route exact path="/Comprando/bannerDpto">
                <Comprando bannerDpto />
            </Route>
            <Route exact path="/Aprobacion">
                <Aprobacion />
            </Route>
            <Route exact path="/Completado">
                <CampañaLista />
            </Route>
        </Switch>
    )
}

export default Routes; 