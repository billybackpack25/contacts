import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './src/context/store';
import {AppNavContainer} from 'navigation';
import SplashScreen from 'react-native-splash-screen';

export const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <AppNavContainer />
    </Provider>
  );
};

export default App;
