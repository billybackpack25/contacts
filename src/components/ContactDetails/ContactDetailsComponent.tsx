import {useFocusEffect} from '@react-navigation/native';
import colors from 'assets/theme/colors';
import {AntDesign, FontAwesome, MaterialIcons} from 'common/Icon';
import HorizontalLine from 'common/UI/HorizontalLine';
import {CONTACT_LIST, CREATE_CONTACT} from 'constants/routeNames';
import {deleteContact, favContact} from 'context/actions/contacts';
import {ContactListType} from 'data/contacts';
import {useAppDispatch, useAppSelector} from 'hooks/redux';
import useSetHeader from 'hooks/useSetHeader';
import React, {useCallback, useState} from 'react';
import {Alert, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {ContactDetailScreenProps} from 'screens/types';
import ImageComponent from './ImageComponent';
import styles from './styles';

interface ContactDetailsComponentProps extends ContactDetailScreenProps {}

const ContactDetailsComponent: React.FC<
  ContactDetailsComponentProps
> = props => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.contacts.contacts.data);
  const [contact, setContact] = useState<{
    contact: ContactListType;
  }>({contact: props.route.params});

  useFocusEffect(
    useCallback(() => {
      console.log('UseCallback');
      setContact(prev => ({...prev, contact: props.route.params}));
    }, [props.route.params]),
  );

  const onDelete = () => {
    const doIt = () => {
      if (data) {
        deleteContact(props.route.params)(dispatch, data)(() =>
          props.navigation.navigate(CONTACT_LIST),
        );
      }
    };
    Alert.alert(
      `You are about to delete ${contact.contact?.first_name}`,
      'Are you sure?',
      [
        {text: 'Red Pill (Yes)', onPress: doIt},
        {text: 'Blue Pill (No)', isPreferred: true},
      ],
    );
  };

  const onFav = () => {
    if (data) {
      favContact(props.route.params)(dispatch, data)(() => console.log('Done'));
    }
  };

  const headerRight = () => (
    <View style={styles.headerRight}>
      <TouchableOpacity onPress={onFav}>
        <FontAwesome
          name={contact.contact.is_favourite ? 'star' : 'star-o'}
          size={25}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete}>
        <AntDesign name="delete" size={25} />
      </TouchableOpacity>
    </View>
  );

  const headerTitle = () => (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate(CREATE_CONTACT, props.route.params)
      }>
      <Text style={styles.headerTitle}>
        {contact.contact?.first_name} {contact.contact?.last_name}
      </Text>
    </TouchableOpacity>
  );

  useSetHeader({
    headerRight: headerRight(),
    title: headerTitle(),
  });

  const actionConfig = [
    {
      icon: {name: 'call', color: colors.primary, size: 35},
      text: 'Call',
    },
    {
      icon: {name: 'message', color: colors.primary, size: 35},
      text: 'Text',
    },
    {
      icon: {name: 'video-call', color: colors.primary, size: 40},
      text: 'Video',
    },
  ];

  return (
    <ScrollView style={styles.page}>
      <View style={styles.ImageContainerWrapper}>
        <ImageComponent
          src={(contact.contact && contact.contact.contact_picture) || ''}
        />
      </View>
      <View style={styles.fullNameView}>
        <Text style={styles.fullName}>
          {contact.contact?.first_name} {contact.contact?.last_name}
        </Text>
      </View>
      <HorizontalLine />
      <View style={styles.actionButtons}>
        {actionConfig.map(({icon, text}) => (
          <TouchableOpacity style={styles.actionGroup}>
            <MaterialIcons {...icon} />
            <Text style={styles.actionText}>{text}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <HorizontalLine />
      <View style={styles.numbersSection}>
        <View style={styles.numLeft}>
          <TouchableOpacity>
            <MaterialIcons name="call" color={colors.primary} size={35} />
          </TouchableOpacity>
          <View style={styles.numSectionText}>
            <Text>{contact.contact?.phone_number}</Text>
            <Text>Mobile</Text>
          </View>
        </View>
        <View style={styles.numRightSection}>
          <TouchableOpacity>
            <MaterialIcons name="message" color={colors.primary} size={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons
              name="video-call"
              color={colors.primary}
              size={35}
              style={styles.videoCallIconFix}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ContactDetailsComponent;
