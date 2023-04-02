import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {DrawerNavigationHelpers} from '@react-navigation/drawer/lib/typescript/src/types';
import {Fontisto, MaterialIcons} from 'common/Icon';
import {CONTACT_LIST, SETTINGS} from 'constants/routeNames';
import logout from 'context/actions/logout';
import {CustomDrawerType} from 'navigation/DrawerNavigator';
import React from 'react';
import {Alert, Image} from 'react-native';
import styles from './styles';
import {DrawerItemProps} from './types';

const menuItems = (
  navigation: DrawerNavigationHelpers,
  handleLogout: () => void,
): DrawerItemProps[] => [
  {
    icon: () => <Fontisto name="player-settings" size={21} />,
    label: 'Settings',
    onPress: () => navigation.navigate(SETTINGS),
  },
  {
    icon: () => <MaterialIcons name="logout" size={21} />,
    label: 'Logout',
    onPress: handleLogout,
  },
];

const logo = () => (
  <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
);

const SideMenu = (props: CustomDrawerType) => {
  const {navigation, dispatch} = props;

  const handleLogout = () => {
    navigation.toggleDrawer(); // Close sidenav
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'Logout',
        onPress: () => logout()(dispatch),
      },
    ]);
  };

  const globalMenuItemProps = {
    labelStyle: styles.labelStyle,
  };

  return (
    <DrawerContentScrollView>
      <DrawerItem
        label={logo}
        onPress={() => navigation.navigate(CONTACT_LIST)}
      />
      {menuItems(navigation, handleLogout).map((item, index) => (
        <DrawerItem
          key={`drawerItem_${index}_${item.label}`}
          {...item}
          {...globalMenuItemProps}
        />
      ))}
      {/* <DrawerItemList {...props} /> */}
    </DrawerContentScrollView>
  );
};

export default SideMenu;
