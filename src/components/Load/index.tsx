import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import styles from './styles';
import { theme } from '../../global/styles/theme';

const Load: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={theme.colors.primary} size="large" />
    </View>
  );
};

export default Load;
