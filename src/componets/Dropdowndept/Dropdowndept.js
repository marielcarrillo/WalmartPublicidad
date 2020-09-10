import React, {Fragment, useState} from 'react';
import { Select } from 'antd';
import { blue } from 'color-name';
  const { Option } = Select;
  const onChange = (value)=> {
    console.log(`selected ${value}`);
  }


const Dropmenu = ()=>{
  // const formValidation = () =>{
  //   console.log("Hola"); 
  // }
  return (
    <Fragment >
    <div className='dropdown-container'>
      <div className='dropdown-text-container'>
        <p className='p-text'>Elige lugar de publicación:</p>
      </div>
    <Select
    showSearch
    style={{ width: 305}}
    placeholder="Departamento"
    optionFilterProp="children"
    //onChange={onChange}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="Electrodomésticos & línea blanca">Electrodomésticos & línea blanca</Option>
    <Option value="Celulares & cámaras">Celulares & cámaras</Option>
    <Option value="Autos & motos">Autos & motos</Option>
    <Option value="Colchones, muebles & jardín">Colchones, muebles & jardín</Option>
    <Option value="Hogar, casa inteligente & ferretería">Hogar, casa inteligente & ferretería</Option>
    <Option value="Moda, belleza & salud">Moda, belleza & salud</Option>
    <Option value="Bebés">Bebés</Option>
    <Option value="Mascotas">Mascotas</Option>
    <Option value="Películas, libros & artículos de temporada">Películas, libros & artículos de temporada</Option>
    <Option value="Vinos, licores & despensa">Vinos, licores & despensa</Option>
  </Select>
  </div>
  {/* <button
    type="button"
    className="btn-send-kitchen"
    onClick={formValidation}
  >Guardar Datos</button> */}
</Fragment>
  )
}
;

export default Dropmenu;