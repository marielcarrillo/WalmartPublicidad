import React, {useState} from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import reqwest from 'reqwest';

const Uploadphoto = () =>{
  const [state, setState] =useState({
    fileList: [],
    uploading: false,
  });

  const handleUpload = () => {
    const { fileList } = state;
    const formData = new FormData();
    fileList.forEach(file => {
      formData.append('files[]', file);
    });

    setState({
      uploading: true,
    });
    // You can use any AJAX library you like
    reqwest({
      url: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      method: 'post',
      processData: false,
      data: formData,
      success: () => {
        setState({
          fileList: [],
          uploading: false,
        });
        message.success('imagen correcta');
      },
      error: () => {
        setState({
          uploading: false,
        });
        message.error('upload failed.');
      },
    });
  };
  const { uploading, fileList } = state;
    const props = {
      onRemove: file => {
        setState(state => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: file => {
        setState(state => ({
          fileList: [...state.fileList, file],
        }));
        return false;
      },
      fileList,
    };
return(
    <div>
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Select File</Button>
        </Upload>
        <Button
          type="primary"
          onClick={handleUpload}
          disabled={fileList.length === 0}
          loading={uploading}
          style={{ marginTop: 16 }}
        >
          {uploading ? 'Uploading' : 'Start Upload'}
        </Button>
    </div>
)
   }


export default Uploadphoto;