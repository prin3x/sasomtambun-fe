import { notification } from 'antd';

export const successNotification = (info = '') => {
  notification.success({
    message: `Congrat! ${info}`,
    top: 24,
  });
};
export const errorNotification = (info = '') => {
  notification.error({
    message: `Sorry,  ${info}`,
    top: 24,
  });
};
