import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppDispatch} from 'context/store';
import {RegisterFormType} from 'screens/Register/RegisterScreen';
import {login, authLoading, setError, setUser} from 'slices/auth';
import {data} from './register';

export default ({password, username}: RegisterFormType) =>
  async (dispatch: AppDispatch) => {
    dispatch(authLoading(true));
    await new Promise((r: any) => setTimeout(r, 1000));
    if (username && username in data && data[username].password === password) {
      dispatch(login(true));
      dispatch(setUser(data[username]));
      AsyncStorage.setItem('USER', JSON.stringify(data[username]));
    } else {
      dispatch(login(false));
      dispatch(
        setError({
          username: 'Computer says no',
          password: "These are not the droids you're looking for",
          message: 'Sorry, your credentials are incorrect!',
        }),
      );
    }
    dispatch(authLoading(false));
  };
