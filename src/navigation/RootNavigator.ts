import {createNavigationContainerRef} from '@react-navigation/native';

export const navRef = createNavigationContainerRef();

// Use this to navigate to any screen from outside of a component
// E.g. logout user on server auth error
export const RootNavigator = (args: keyof ReactNavigation.RootParamList) => {
  if (navRef.current) {
    navRef.current.navigate(args);
  }
};

export default RootNavigator;
