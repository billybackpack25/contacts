import {getHeaderTitle} from '@react-navigation/elements';
import {DrawerActions} from '@react-navigation/native';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import colors from 'assets/theme/colors';
import {AntDesign, MaterialIcons} from 'common/Icon';
import HorizontalLine from 'common/UI/HorizontalLine';
import React, {ReactNode} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

export interface NavHeaderProps {
  home?: boolean;
  goBackAmount?: number;
  headerRight?: ReactNode;
  title?: ReactNode;
}

export interface NavHeaderComponentProps
  extends NativeStackHeaderProps,
    NavHeaderProps {}

const NavHeader: React.FC<NavHeaderComponentProps> = ({
  navigation,
  options,
  route,
  home = false,
  goBackAmount,
  headerRight,
  title,
}) => {
  const getTitle = getHeaderTitle(options, route.name);
  return (
    <View>
      <View style={styles.header}>
        {home ? (
          <View style={styles.mainNavButtonView}>
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <MaterialIcons name="menu" size={30} color={colors.grey} />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.goBackContainer}
            onPress={() =>
              goBackAmount ? navigation.pop(goBackAmount) : navigation.goBack()
            }>
            <AntDesign name="left" size={20} color={colors.link} />
            <Text style={styles.goBackText}>Back</Text>
          </TouchableOpacity>
        )}
        <View>
          {title ? title : <Text style={styles.routeName}>{getTitle}</Text>}
        </View>
        <View style={styles.rightHeaderView}>{headerRight && headerRight}</View>
        <View />
      </View>
      <HorizontalLine />
    </View>
  );
};

export default NavHeader;
