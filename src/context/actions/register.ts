import {LOGIN_API} from 'constants/apiNames';
import {AppDispatch} from 'context/store';
import http from 'helpers/axiosIntercepter';
import {RegisterFormType} from 'screens/Register/RegisterScreen';
import {login, authLoading, setError, clearAuthState} from 'slices/auth';

export interface UserDataInterface {
  [key: string]: RegisterFormType;
}

export const data: UserDataInterface = {
  Bilal: {
    username: 'Bilal',
    password: 'h',
  },
};

export default ({
    email,
    password,
    username,
    firstName,
    lastName,
  }: RegisterFormType) =>
  async (dispatch: AppDispatch) => {
    dispatch(authLoading(true));
    await new Promise((r: any) => setTimeout(r, 1000));
    if (username === 'Fail') {
      dispatch(login(false));
      dispatch(
        setError({
          username: 'This username is already in use',
          message: 'Something went wrong!',
        }),
      );
    } else if (username && username in data) {
      dispatch(
        setError({
          username: 'Username already in use',
        }),
      );
    } else if (
      email &&
      Object.values(data)
        .map(i => i.email)
        .includes(email)
    ) {
      dispatch(
        setError({
          email: 'E-mail already in use',
        }),
      );
    } else {
      if (username) {
        data[username] = {
          email,
          password,
          username,
          firstName,
          lastName,
        };
        dispatch(login(false));
      }
    }
    dispatch(authLoading(false));
  };

const registerHttp = ({
  email,
  password,
  username,
  firstName,
  lastName,
}: RegisterFormType) => {
  return http.post(LOGIN_API, {
    email,
    password,
    username,
    firstName,
    lastName,
  });
};

export const clearAuthAction = () => (dispatch: AppDispatch) => {
  dispatch(clearAuthState());
};
