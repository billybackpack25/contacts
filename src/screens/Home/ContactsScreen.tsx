import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useAppDispatch, useAppSelector} from 'hooks/redux';
import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {logout} from 'slices/auth';
import Container from '../../components/common/container';
import {HomeStackParamList} from '../../navigation/HomeNavigator';

export type Props = NativeStackScreenProps<HomeStackParamList, 'Contacts'>;

const ContactScreen: React.FC<Props> = props => {
  const dispatch = useAppDispatch();
  const {data} = useAppSelector(state => state.auth);

  return (
    <Container>
      <Text>Hello, {data?.username}</Text>
      <TouchableOpacity onPress={() => dispatch(logout())}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default ContactScreen;
