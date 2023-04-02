import colors from 'assets/theme/colors';
import React, {useState} from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import styles from './styles';

export interface ImageComponentProps {
  src: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({src}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const onLoadStart = () => {
    setIsLoading(true);
  };
  const onLoadEnd = () => {
    setIsLoading(false);
  };
  const onLoad = () => {
    setIsLoading(false);
  };

  const onError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return src ? (
    <View style={styles.imageContainer}>
      {(hasError || isLoading) && (
        <View style={styles.textView}>
          {hasError && <Text style={styles.errorText}>Error occoured</Text>}
          {isLoading && !hasError && (
            <ActivityIndicator size={'large'} color={colors.primary} />
          )}
        </View>
      )}
      <Image
        source={{uri: src}}
        style={styles.detailPhoto}
        onLoad={onLoad}
        onLoadEnd={onLoadEnd}
        onLoadStart={onLoadStart}
        onError={onError}
      />
    </View>
  ) : null;
};

export default ImageComponent;
