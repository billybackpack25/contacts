import {
  Text,
  Modal,
  ModalProps,
  View,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import React, {ReactElement} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import Container from 'common/container';
import ButtonComponent from 'common/CustomButton/ButtonComponent';
import {EvilIcons} from 'common/Icon';

interface AppModalProps {
  title?: string;
  modalProps: ModalProps;
  modalFooter?: ReactElement;
  children: ReactElement;
  setModalVisible: Function;
}

const AppModal: React.FC<AppModalProps> = props => {
  const {modalProps, setModalVisible, children, modalFooter, title} = props;

  return (
    <Modal
      animationType="slide"
      transparent
      statusBarTranslucent
      onRequestClose={() => {
        Alert.alert('Closing modal');
        setModalVisible(false);
      }}
      {...modalProps}>
      <View style={styles.wrapper}>
        <View style={styles.modalView}>
          <ScrollView>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <EvilIcons name="close" size={27} style={styles.close} />
              </TouchableOpacity>
              <Text style={styles.title}>{title || 'RN Contacts'}</Text>
            </View>
            <View style={styles.horizontalLine} />
            <View style={styles.body}>{children}</View>
          </ScrollView>
          {modalFooter ? (
            modalFooter
          ) : (
            <View>
              <View style={styles.horizontalLine} />
              <View style={styles.footerBody}>
                <Text>Privacy Policy</Text>
                <View style={styles.footerDot} />
                <Text>Terms of Service</Text>
              </View>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default AppModal;
