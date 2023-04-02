import React, {useEffect, useRef} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import colors from 'assets/theme/colors';
import {AntDesign} from 'common/Icon';
import MessageComponent from 'common/Message/Message';
import HorizontalLine from 'common/UI/HorizontalLine';
import {CONTACT_DETAIL, CREATE_CONTACT} from 'constants/routeNames';
import getContactsAction from 'context/actions/contacts';
import {ContactListType} from 'data/contacts';
import {useAppDispatch, useAppSelector} from 'hooks/redux';
import {ContactScreenProps} from 'screens/types';
import {initials, snakeCase} from 'utils/stringManipulation';
import styles from './styles';

const ListEmptyComponent = () => (
  <View style={styles.listEmptyContainer}>
    <MessageComponent message="no contacts to show" state="info" />
  </View>
);

interface ContactsComponentProps extends ContactScreenProps {
  sortBy: string;
}

const horizontalLine = () => <HorizontalLine />;

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
  const contactListRef = useRef<FlatList>(null);

  const getContactWithsort = () =>
    sortBy
      ? contacts?.slice()?.sort((a, b) => {
          const sorting = snakeCase(sortBy) as keyof ContactListType;
          if (sortBy === 'is_favourite') {
            return b[sorting] < a[sorting] ? -1 : 1;
          }
          return b[sorting] > a[sorting] ? -1 : 1;
        })
      : contacts;

  const renderItem = ({item}: {item: ContactListType}) => {
    return (
      <TouchableOpacity
        style={styles.contactBlock}
        onPress={() => {
          navigate(CONTACT_DETAIL, item);
        }}>
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

  useEffect(() => {
    getContactsAction()(dispatch);
  }, [dispatch]);

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
          <View>
            <FlatList
              ref={contactListRef}
              data={getContactWithsort()}
              scrollsToTop
              extraData={newData}
              keyExtractor={item => `${item.id}`}
              ListEmptyComponent={ListEmptyComponent}
              renderItem={renderItem}
              ItemSeparatorComponent={horizontalLine}
              initialNumToRender={8}
              getItemLayout={(data, index) => ({
                length: 100,
                offset: (100 + 10) * index,
                index,
              })}
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
