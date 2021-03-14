import { createInstance } from './index';

const instance = createInstance();

interface userLoginTyped {
  email: string;
  password: string;
}

function axiosSignup(user: Object, success: any, fail: any) {
  instance.post('user/,', JSON.stringify(user)).then(success).catch(fail);
}

function axiosLogin(data: userLoginTyped, success: any, fail: any) {
  instance.defaults.headers['access-token'] = localStorage.getItem(
    'access-token',
  );
  instance.post('jwt/authenticate').then(success).catch(fail);
}
