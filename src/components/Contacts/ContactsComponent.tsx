import React, {useCallback, useEffect, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  TouchableHighlight,
  Platform,
} from 'react-native';

import {useNavigation, useFocusEffect} from '@react-navigation/native';

import {ContactListType} from 'data/contacts';
import {useAppDispatch, useAppSelector} from 'hooks/redux';
import getContactsAction from 'context/actions/contacts';
import MessageComponent from 'common/Message/Message';
import {AntDesign} from 'common/Icon';
import {initials, snakeCase} from 'utils/stringManipulation';
import {CREATE_CONTACT} from 'constants/routeNames';
import colors from 'assets/theme/colors';
import styles from './styles';
import ButtonComponent from 'common/CustomButton/ButtonComponent';

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

interface ContactsComponentProps {
  sortBy: string;
}

const ContactsComponent: React.FC<ContactsComponentProps> = props => {
  const {sortBy} = props;
  const dispatch = useAppDispatch();
  const {
    data: contacts,
    error,
    loading,
    newData,
  } = useAppSelector(state => state.contacts.contacts);
  const {navigate} = useNavigation();
  const contactList = useRef<FlatList>(null);

  useEffect(() => {
    getContactsAction()(dispatch);
  }, []);

  return (
    <>
      <View style={styles.page}>
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
              ref={contactList}
              data={
                sortBy
                  ? contacts?.slice()?.sort((a, b) => {
                      const sorting = snakeCase(
                        sortBy,
                      ) as keyof ContactListType;
                      return b[sorting] > a[sorting] ? -1 : 1;
                    })
                  : contacts
              }
              extraData={newData}
              keyExtractor={item => `${item.id}`}
              ListEmptyComponent={ListEmptyComponent}
              renderItem={renderItem}
              ListFooterComponent={<View style={{height: 50}} />}
              ItemSeparatorComponent={() => (
                <View style={styles.itemSeparator} />
              )}
              initialNumToRender={8}
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
