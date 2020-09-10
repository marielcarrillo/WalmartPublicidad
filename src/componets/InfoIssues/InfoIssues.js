import React from 'react';
import { Row, Col, Layout } from 'antd';
const { Content } = Layout

const InfoIssues = ({infos, info, setInfo}) =>{
    const {nameimg} = infos
    return(
        <Layout >
        <Content >
            <Row >
                <Col span={18} className="detalle-info">
                    <h2 className="center">Cambios requeridos</h2>
                    <p className="p">Tu archivo de nombre {nameimg} no cumple con la resolución</p>
                    <p className="p">El tamaño correcto. Favor de adjuntar de nuevo.</p>
                </Col>
            </Row>
    </Content>
    </Layout>
    )
} 
export default InfoIssues