import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {PreferenceList, SettingOptionsType} from 'screens/Settings/types';
import HorizontalLine from 'common/UI/HorizontalLine';
import styles from './styles';
import {Ionicons, MaterialIcons} from 'common/Icon';
import colors from 'assets/theme/colors';
import AppModal from 'common/AppModal/AppModal';

interface SettingsComponentProps {
  settingsOptions: SettingOptionsType;
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  preferenceList: PreferenceList;
}

const SettingsComponent: React.FC<SettingsComponentProps> = props => {
  const {settingsOptions, modalVisible, setModalVisible, preferenceList} =
    props;
  const showHorizontalLine = (index: number) =>
    index !== settingsOptions.length - 1;

  return (
    <View>
      <AppModal
        modalProps={{
          visible: modalVisible,
        }}
        setModalVisible={setModalVisible}>
        <View>
          {preferenceList.map(({name, selected, onPress}, index) => (
            <TouchableOpacity
              onPress={onPress}
              key={`${name}_${index}`}
              style={styles.radioButtons}>
              <View>
                <MaterialIcons
                  name={`radio-button-${!selected ? 'un' : ''}checked`}
                  size={17}
                />
              </View>
              <Text style={styles.radioText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </AppModal>
      <ScrollView style={styles.scrollView}>
        {settingsOptions.map(({onPress, subTitle, title}, index) => (
          <TouchableOpacity key={`${title}_${index}`} onPress={onPress}>
            <View style={styles.settingsTextWrapper}>
              <View>
                <Text style={styles.settingsTitle}>{title}</Text>
                {subTitle && (
                  <Text style={styles.settingsSubTitle}>{subTitle}</Text>
                )}
              </View>
              <View style={styles.rightIcon}>
                <Ionicons
                  name="arrow-forward-circle-outline"
                  size={36}
                  color={colors.grey}
                />
              </View>
            </View>
            {showHorizontalLine(index) && <HorizontalLine />}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default SettingsComponent;
