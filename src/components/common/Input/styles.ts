import {StyleSheet} from 'react-native';
import {InputInterface} from './InputComponent';
import colors from '../../../assets/theme/colors';

const getBorderColor = (props: any) => {
  if (props.error) return colors.danger;
  if (props.focused) return colors.primary;
  return colors.grey;
};
const getLabelColor = (error: Pick<InputInterface, 'error'>) =>
  error ? colors.danger : colors.black;
const getFlexDirection = ({
  icon,
  iconPosition,
}: Pick<InputInterface, 'icon' | 'iconPosition'>) => {
  if (icon && iconPosition)
    return iconPosition === 'left' ? 'row' : 'row-reverse';
  return 'row';
};

export default (props: any) =>
  StyleSheet.create({
    wrapper: {
      height: 42,
      borderColor: getBorderColor(props),
      borderWidth: 1,
      borderRadius: 4,
      flexDirection: getFlexDirection({
        icon: props.icon,
        iconPosition: props.iconPosition,
      }),
      paddingHorizontal: 5,
      alignItems: 'center',
      marginTop: 5,
    },
    inputContainer: {
      paddingVertical: 5,
    },
    textInput: {
      flex: 1,
      height: '100%',
    },
    label: {
      color: getLabelColor(props.error),
      marginBottom: 5,
    },
    errorMessage: {
      marginTop: 5,
      color: colors.danger,
      fontSize: 12,
    },
  });
