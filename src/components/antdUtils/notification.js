import { notification } from 'antd';

export const successNotification = (placement) => {
  notification.success({
    message: `Congrat! You've successfully logged in`,
    description: 'Please make yourself at home.',
    placement,
    top: 24,
  });
};
export const errorNotification = (placement) => {
  notification.error({
    message: `Sorry, we are unable to create your account`,
    description: 'Something is not right please fill the form correctly.',
    placement,
    top: 24,
  });
};
