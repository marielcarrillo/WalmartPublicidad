import React from 'react';
import { Row, Col, Layout } from 'antd';
const { Content } = Layout

const InfoCampaña = ({infos, info, setInfo}) =>{
    const {departamento, tipo, proveedor, fechainicio, fechafinal} = infos
    return(
        <Layout >
        <Content >
            <Row >
                <Col span={18} className="detalle-info">
                    <h2 className="center">Información de campaña</h2>
                    <p className="p">{proveedor} </p>
                    <p className="p">{tipo} </p>
                    <p className="p">Departamento: {departamento} </p>
                    <p className="p">Fecha de inicio: {fechainicio} </p>
                    <p className="p">Fecha de finalizacion: {fechafinal} </p>
                </Col>
            </Row>
    </Content>
    </Layout>
    )
} 
export default InfoCampaña