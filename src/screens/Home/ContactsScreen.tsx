import {DrawerActions} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useAppSelector} from 'hooks/redux';
import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Container from '../../components/common/container';
import {HomeStackParamList} from '../../navigation/HomeNavigator';
import Icon from 'react-native-vector-icons/MaterialIcons';

export type ContactScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  'Contacts'
>;

const ContactScreen: React.FC<ContactScreenProps> = props => {
  const {data} = useAppSelector(state => state.auth);
  const {setOptions} = props.navigation;

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() =>
            props.navigation.dispatch(DrawerActions.toggleDrawer())
          }>
          <Icon name="menu" size={21} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <Container>
      <Text>Hello, {data?.username}</Text>
    </Container>
  );
};

export default ContactScreen;
