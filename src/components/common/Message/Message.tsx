import {View, Text, GestureResponderEvent} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {TouchableOpacity} from 'react-native';

export type MessageState = 'info' | 'notice' | 'danger';

export interface MessageInterface {
  message: string;
  state: MessageState;
  retry?: () => void;
  onDismiss?: () => void;
}

const MessageComponent: React.FC<MessageInterface> = props => {
  const provideStyles = styles(props);
  const {message, state, ...moreProps} = props;
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return null;
  }
  return (
    <View style={provideStyles.messageContainer}>
      <Text style={provideStyles.text}>{message}</Text>
      <View style={provideStyles.rightContainer}>
        {props.onDismiss && (
          <TouchableOpacity
            onPress={() => {
              setDismissed(true);
              props.onDismiss && props.onDismiss();
            }}>
            <Text style={provideStyles.text}>X</Text>
          </TouchableOpacity>
        )}
        {props.retry && (
          <TouchableOpacity onPress={props.retry}>
            <View>
              <Text style={provideStyles.text}>retry</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default MessageComponent;
