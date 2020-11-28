import React from 'react';

import { PlusOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import Modal from 'antd/lib/modal/Modal';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export function UploadPictures() {
  const [fileDetails, setFileDetails] = React.useState({
    previewVisible: false,
    previewImage: '',
    previewTitle: '',
    fileList: [],
  });

  const handleCancel = () =>
    setFileDetails({ ...fileDetails, previewVisible: false });

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setFileDetails({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    });
  };

  const handleChange = ({ fileList }) =>
    setFileDetails({
      ...fileDetails,
      fileList,
    });

  const { previewVisible, previewImage, fileList, previewTitle } = fileDetails;
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <>
      <Upload
        action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
        listType='picture-card'
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 5 ? null : uploadButton}
      </Upload>
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt='example' style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  );
}
