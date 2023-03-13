import {StyleSheet} from 'react-native';
import {ButtonInterface, State} from './ButtonComponent';
import colors from '../../../assets/theme/colors';
import {MessageInterface} from 'common/Message/Message';

// const getBorderColor = (props: any) => {
//     if (props.focused) return colors.primary;
//     if (props.error) return colors.danger;
//     return colors.grey;
// }
// const getLabelColor = (error: Pick<ButtonInterface, 'error'>) => error? colors.danger : colors.black;
// const getFlexDirection = ({ icon, iconPosition }: Pick<ButtonInterface, 'icon' | 'iconPosition'>) => {
//     if (icon && iconPosition) return iconPosition==='left' ? 'row' : 'row-reverse'
//     return 'row'
//   }

export const loadingColor = (state: State) =>
  ({
    info: colors.secondary,
    notice: colors.primary,
    danger: colors.secondary,
  }[state]);

export default (props: Partial<MessageInterface>) =>
  StyleSheet.create({
    buttonContainer: {
      backgroundColor: props.disabled
        ? colors.grey
        : colors[props.state || 'primary'],
      height: 42,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      borderRadius: 4,
      marginBottom: 5,
    },
    text: {
      color: props.disabled ? colors.black : colors.white,
      paddingLeft: props.loading ? 5 : 0,
    },
    loading: {
      flexDirection: 'row',
    },
  });
