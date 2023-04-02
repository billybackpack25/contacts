import React, {useEffect, useState} from 'react';
import SettingsComponent from 'components/Settings/SettingsComponent';
import {SettingsScreenProps} from 'screens/types';
import {PreferenceList, SettingOptionsType} from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';

type SortByType = 'First name' | 'Last name' | 'is_favourite';

const SettingsScreen: React.FC<SettingsScreenProps> = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('First name');

  const settingsOptions: SettingOptionsType = [
    {title: 'My Info', subTitle: 'Setup your profile', onPress: () => null},
    {title: 'Account', subTitle: null, onPress: () => null},
    {
      title: 'Default Accounts',
      subTitle: 'Use this to set defaults for new contacts',
      onPress: () => null,
    },
    {
      title: 'Contacts to Display',
      subTitle: 'All contacts',
      onPress: () => null,
    },
    {
      title: 'Sort by',
      subTitle: sortBy === 'is_favourite' ? 'Favourites' : sortBy,
      onPress: () => setModalVisible(true),
    },
    {title: 'Name Format', subTitle: 'First Name first', onPress: () => null},
    {title: 'Import', subTitle: null, onPress: () => null},
    {title: 'Export', subTitle: null, onPress: () => null},
    {title: 'Blocked Numbers', subTitle: null, onPress: () => null},
    {title: 'About RN Contacts', subTitle: null, onPress: () => null},
  ];

  const preferenceList: PreferenceList = [
    {
      name: 'First name',
      selected: sortBy === 'First name',
      onPress: () => {
        saveSortBy('First name');
        setSortBy('First name');
        setModalVisible(false);
      },
    },
    {
      name: 'Last name',
      selected: sortBy === 'Last name',
      onPress: () => {
        saveSortBy('Last name');
        setSortBy('Last name');
        setModalVisible(false);
      },
    },
    {
      name: 'Favourites',
      selected: sortBy === 'is_favourite',
      onPress: () => {
        saveSortBy('is_favourite');
        setSortBy('is_favourite');
        setModalVisible(false);
      },
    },
  ];
  const saveSortBy = async (By: SortByType) => {
    saveSetting('sortBy', By);
  };

  const saveSetting = async (key: string, value: string) => {
    AsyncStorage.setItem(key, value);
  };

  const getSettings = async () => {
    const sortByAsync = await AsyncStorage.getItem('sortBy');
    if (sortByAsync) {
      setSortBy(sortByAsync);
    }
  };

  useEffect(() => {
    getSettings();
  }, []);

  return (
    <SettingsComponent
      settingsOptions={settingsOptions}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      preferenceList={preferenceList}
    />
  );
};

export default SettingsScreen;
