import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Fontisto, MaterialIcons} from 'common/Icon';
import {CONTACT_LIST, SETTINGS} from 'constants/routeNames';
import logout from 'context/actions/logout';
import {CustomDrawerType} from 'navigation/DrawerNavigator';
import React from 'react';
import {Alert, Image} from 'react-native';
import styles from './styles';
import {DrawerItemProps} from './types';

const SideMenu = (props: CustomDrawerType) => {
  const {
    navigation: {navigate},
    dispatch,
  } = props;

  const handleLogout = () => {
    props.navigation.toggleDrawer(); // Close sidenav
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
  const menuItems: DrawerItemProps[] = [
    {
      icon: () => <Fontisto name="player-settings" size={21} />,
      label: 'Settings',
      onPress: () => navigate(SETTINGS),
    },
    {
      icon: () => <MaterialIcons name="logout" size={21} />,
      label: 'Logout',
      onPress: handleLogout,
    },
  ];
  return (
    <DrawerContentScrollView>
      <DrawerItem
        label={() => (
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
          />
        )}
        onPress={() => props.navigation.navigate(CONTACT_LIST)}
      />
      {menuItems.map((item, index) => (
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
