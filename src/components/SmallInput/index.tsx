import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import styles from './styles';

const SmallInput: React.FC<TextInputProps> = ({ ...rest }) => {
  return (
    <TextInput keyboardType="numeric" style={styles.container} {...rest} />
  );
};

export default SmallInput;
