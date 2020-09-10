import React from 'react'
import { Link } from "react-router-dom";
import  {Menu} from 'antd';
import Logo from '../Logo/Logo';
import {
  NotificationOutlined,
  LineChartOutlined,
  LogoutOutlined
} from '@ant-design/icons';
require("firebase/auth");

const MenuProveedor = () =>{

    return (
          <Menu mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<NotificationOutlined />}>
              Notificaciones
            </Menu.Item>
            <Menu.Item key="2" icon={<LineChartOutlined />}>
              Métricas
            </Menu.Item>           
            <Menu.Item key="3" icon={<LogoutOutlined />} > 
            <Link to='/'>
                Salir 
            </Link>            
            </Menu.Item>
            <Menu.Item><Logo small /></Menu.Item>
          </Menu>
    )
}
export default MenuProveedor

