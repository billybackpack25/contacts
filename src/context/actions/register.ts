import {AppDispatch} from 'context/store';
import {RegisterFormType} from 'screens/Register/RegisterScreen';
import {login, authLoading, setError, clearAuthState} from 'slices/auth';

export interface UserDataInterface {
  [key: string]: RegisterFormType;
}

export const data: UserDataInterface = {
  Username: {
    username: 'Username',
    password: 'password',
  },
};

export default ({
    email,
    password,
    username,
    firstName,
    lastName,
  }: RegisterFormType) =>
  (dispatch: AppDispatch) =>
  async (onSuccess: Function) => {
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
        onSuccess(data[username]);
      }
    }
    dispatch(authLoading(false));
  };

export const clearAuthAction = () => (dispatch: AppDispatch) => {
  dispatch(clearAuthState());
};
