import React from 'react'
import { Modal, Button } from 'antd';

const Finalizacion = () => {
  const [state, setState] =  useState(
    {visible: false}
  )
    //  state = { visible: false };
    showModal = () => {
      setState({
        visible: true,
      });
    };
    handleOk = e => {
      console.log(e);
      setState({
        visible: false,
      });
    };
    handleCancel = e => {
      console.log(e);
          setState({
        visible: false,
      });
    };


     return (
       <div>
         <Button type="primary" onClick={showModal}>
         Open Modal
       </Button>
       <Modal
         title="Basic Modal"
         visible={state.visible}
         onOk={handleOk}
         onCancel={handleCancel}
       >
         Hola
       </Modal>
       </div>
     )   
  }

export default Finalizacion
