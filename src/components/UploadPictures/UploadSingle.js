import { Upload } from 'antd';
import { getBase64, checkFileExtendsionAndSize } from '../../utils/imageUtils';

export default function UploadSingle({ mainImage, setMainImage, route }) {
  const uploadButton = (
    <div>
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleUpload = ({ file }) => {
    if (file.status === 'uploading') return;
    if (file.status === 'done') {
      getBase64(file.originFileObj);
    }
    setMainImage(file.response);
  };
  return (
    <Upload
      name={route}
      listType='picture-card'
      className='main-uploader'
      showUploadList={false}
      action={`http://localhost:4321/upload/${route}`}
      method='post'
      beforeUpload={checkFileExtendsionAndSize}
      onChange={handleUpload}
    >
      {mainImage ? (
        <img src={mainImage} alt='mainimage' style={{ width: '100%' }} />
      ) : (
        uploadButton
      )}
    </Upload>
  );
}
