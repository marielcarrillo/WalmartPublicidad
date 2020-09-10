import React from 'react';
import { Row, Col, Layout } from 'antd';
const { Content } = Layout

const InfoIssues = ({imagens, imagen, setImagen}) =>{
    const {urlImg,nameImg } = imagens
    return(
        <Layout >
        <Content >
            <Row >
                <Col span={18} className="detalle-info">
                    <img src={urlImg} alt={nameImg} />
                 </Col>
            </Row>
    </Content>
    </Layout>
    )
} 
export default InfoIssues