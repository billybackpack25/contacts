import {useNavigation} from '@react-navigation/native';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import NavHeader, {NavHeaderProps} from 'components/NavHeader/NavHeader';
import React, {useEffect} from 'react';

export const useSetHeader = (props: NavHeaderProps) => {
  const navigation = useNavigation();

  useEffect(() => {
    const header = (headerProps: NativeStackHeaderProps) => (
      <NavHeader {...headerProps} {...props} />
    );
    navigation.setOptions({
      headerTitleAlign: 'center',
      header,
    });
  }, [navigation, props]);
};

export default useSetHeader;
