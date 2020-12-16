import { message } from 'antd';

export function getBase64(img) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export function checkFileExtendsionAndSize(file) {
  const isValidType = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isValidType) message.error('สามารถอัพโหลดได้เฉพาะไฟล์ JPG/PNG เท่านั้น');
  const isOffLimited = file.size / 1024 / 1024 < 2;
  if (!isOffLimited) message.error('อัพโหลดได้ไม่เกิน 2mb เท่านั้น');
  return isValidType && isOffLimited;
}
