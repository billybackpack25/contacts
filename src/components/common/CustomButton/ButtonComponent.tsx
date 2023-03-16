import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import styles, {loadingColor} from './styles';
import {TouchableOpacity} from 'react-native';
import {MessageState} from 'common/Message/Message';

export type State = 'primary' | 'secondary' | 'danger';

export interface ButtonInterface {
  title: string;
  state: MessageState;
  onPress: any;
  disabled?: boolean;
  loading?: boolean;
}

const ButtonComponent: React.FC<ButtonInterface> = ({
  title,
  disabled,
  loading,
  state,
  onPress,
  ...props
}) => {
  const provideStyles = styles({title, disabled, loading, state});

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={provideStyles.buttonContainer}
      {...props}>
      <View style={provideStyles.loading}>
        {loading && <ActivityIndicator color={loadingColor(state)} />}
        {title && <Text style={provideStyles.text}>{title}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
