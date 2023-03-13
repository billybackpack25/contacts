import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';
import {MessageInterface, State} from './Message';

export const loadingColor = (state: State) =>
  ({
    info: colors.secondary,
    notice: colors.primary,
    danger: colors.secondary,
  }[state]);

export const bgColor = (state: State) =>
  ({
    info: colors.secondary,
    notice: colors.primary,
    danger: colors.danger,
  }[state]);

export default (props: MessageInterface) =>
  StyleSheet.create({
    messageContainer: {
      backgroundColor: bgColor(props.state),
      height: 42,
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: 4,
      marginBottom: 5,
      flexDirection: 'row',
      padding: 10,
    },
    rightContainer: {
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: 50,
    },
    text: {
      color: colors.white,
    },
    loading: {
      flexDirection: 'row',
    },
  });
