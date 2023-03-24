import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import styles, {loadingIndicatorColor} from './styles';
import {TouchableOpacity} from 'react-native';
import {MessageState} from 'common/Message/Message';

export type State = 'primary' | 'secondary' | 'danger';

export interface ButtonInterface {
  title: string;
  state: MessageState;
  onPress: any;
  disabled?: boolean;
  loading?: boolean;
  overrideStyle?: typeof styles;
}

const ButtonComponent: React.FC<ButtonInterface> = props => {
  const {title, disabled, loading, state, onPress, overrideStyle, ...btnProps} =
    props;
  const provideStyles = overrideStyle ? overrideStyle(props) : styles(props);

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={provideStyles.buttonContainer}
      {...btnProps}>
      <View style={provideStyles.loading}>
        {loading && <ActivityIndicator color={loadingIndicatorColor(state)} />}
        {title && <Text style={provideStyles.text}>{title}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
