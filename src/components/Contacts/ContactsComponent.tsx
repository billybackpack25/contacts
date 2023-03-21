import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import AppModal from 'common/AppModal/AppModal';
import MessageComponent from 'common/Message/Message';
import getContactsAction from 'context/actions/contacts';
import {useAppDispatch, useAppSelector} from 'hooks/redux';
import {ContactListType} from 'data/contacts';
import colors from 'assets/theme/colors';
import styles from './styles';
import {AntDesign} from 'common/Icon';
import {initials} from 'utils/stringManipulation';
import {useNavigation} from '@react-navigation/native';
import {CONTACT, CREATE_CONTACT} from 'constants/routeNames';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {CreateContactScreenProps} from 'screens/Home/CreateContactScreen';
import {HomeStackParamList} from 'navigation/HomeNavigator';

interface ContactsComponentProps {
  modalVisible: boolean;
  setModalVisible: Function;
}

const ListEmptyComponent = () => (
  <View style={{padding: 100}}>
    <MessageComponent message="no contacts to show" state="info" />
  </View>
);

const renderItem = ({item}: {item: ContactListType}) => {
  return (
    <TouchableOpacity style={styles.contactBlock}>
      <View style={styles.itemContainer}>
        <View style={styles.leftSide}>
          {item.contact_picture ? (
            <Image
              source={{uri: item.contact_picture}}
              style={styles.contactPhoto}
            />
          ) : (
            <View style={styles.contactPhoto}>
              <Text style={styles.avatarInitials}>
                {initials(item.first_name, item.last_name)}
              </Text>
            </View>
          )}
          <View style={styles.textLeft}>
            <View>
              <Text style={styles.name}>
                {item.first_name} {item.last_name}{' '}
                {item.is_favourite && <AntDesign name="heart" />}
              </Text>
            </View>
            <Text style={styles.phoneNumber}>
              {item.country_code} {item.phone_number}
            </Text>
          </View>
        </View>
      </View>
      <AntDesign name="right" size={21} color={colors.grey} />
    </TouchableOpacity>
  );
};

const ContactsComponent: React.FC<ContactsComponentProps> = ({
  modalVisible,
  setModalVisible,
}) => {
  const dispatch = useAppDispatch();
  const {
    data: contacts,
    error,
    loading,
    newData,
  } = useAppSelector(state => state.contacts.contacts);
  const {navigate} = useNavigation();

  useEffect(() => {
    getContactsAction()(dispatch);
  }, []);

  return (
    <>
      <View style={styles.page}>
        <AppModal
          modalProps={{
            visible: modalVisible,
          }}
          setModalVisible={setModalVisible}>
          <>
            <Text>Hi</Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              quod autem aspernatur eveniet totam et nobis! Modi aliquid
              nesciunt similique quisquam omnis consequuntur non eos veniam,
              fugiat ducimus soluta quos provident in eum ab quis earum repellat
              tempora iure exercitationem illo facere vel! Numquam rem et
              repudiandae libero eos reprehenderit?
            </Text>
          </>
        </AppModal>
        {/* <ButtonComponent
        title="Show Modal"
        onPress={() => setModalVisible(true)}
        state="info"
      /> */}
        {loading ? (
          <ActivityIndicator size={'large'} color={colors.primary} />
        ) : error ? (
          <MessageComponent
            message="Something went wrong, could not fetch contacts"
            state="danger"
            retry={() => getContactsAction()(dispatch)}
          />
        ) : (
          <View style={styles.listWrapper}>
            <FlatList
              data={contacts}
              extraData={newData}
              keyExtractor={item => `${item.id}`}
              ListEmptyComponent={ListEmptyComponent}
              renderItem={renderItem}
              ListFooterComponent={<View style={{height: 50}} />}
              ItemSeparatorComponent={() => (
                <View style={styles.itemSeparator} />
              )}
            />
          </View>
        )}
      </View>
      {!loading && (
        <TouchableOpacity
          style={styles.floatingActionBtn}
          onPress={() => navigate(CREATE_CONTACT)}>
          <AntDesign name="pluscircle" size={50} color={colors.danger} />
        </TouchableOpacity>
      )}
    </>
  );
};

export default ContactsComponent;
