import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppDispatch} from 'context/store';
import {setUser, logout} from 'slices/auth';

export default () => async (dispatch: AppDispatch) => {
  dispatch(logout());
  dispatch(setUser(null));
  AsyncStorage.removeItem('USER');
};
