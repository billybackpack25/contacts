import React, {useEffect} from 'react';
import 'react-native-gesture-handler';

// import {useColorScheme} from 'react-native';

// import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import store from './src/context/store';
import {AppNavContainer} from 'navigation';
import envs from 'config/envs';
import SplashScreen from 'react-native-splash-screen';

export const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';
  console.log('envs: ', envs);

  useEffect(() => {
    (async () => {
      await new Promise((i: any) => setTimeout(i, 10000));
      await SplashScreen.hide();
      await console.log('Hide splash');
    })();
  }, []);

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <Provider store={store}>
      <AppNavContainer />
    </Provider>
  );
};

export default App;
