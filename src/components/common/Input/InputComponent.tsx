import {
  View,
  TextInput,
  Text,
  TextInputIOSProps,
  TextInputProps,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

export interface InputInterface {
  onChangeText: any;
  value: string;
  icon?: JSX.Element;
  style?: any;
  label?: string;
  iconPosition?: 'left' | 'right';
  error?: string;
}

const InputComponent: React.FC<InputInterface & Partial<TextInputProps>> = ({
  onChangeText,
  icon,
  style,
  value,
  label,
  iconPosition,
  error,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const provideStyles = styles({
    onChangeText,
    icon,
    value,
    label,
    iconPosition,
    error,
    focused,
  });

  return (
    <View style={provideStyles.inputContainer}>
      {label && <Text style={provideStyles.label}>{label}</Text>}
      <View style={[provideStyles.wrapper]}>
        {icon && <View>{icon}</View>}
        <TextInput
          style={provideStyles.textInput}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
      </View>
      {error && <Text style={provideStyles.errorMessage}>{error}</Text>}
    </View>
  );
};

export default InputComponent;
