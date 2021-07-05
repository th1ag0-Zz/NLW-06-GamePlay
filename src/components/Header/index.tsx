import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/core';

import { theme } from '../../global/styles/theme';
import styles from './styles';

interface HeaderProps {
  title: string;
  action?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, action }) => {
  const { goBack } = useNavigation();
  const { secondary100, secondary40, heading } = theme.colors;

  function handleGoBack() {
    goBack();
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary100, secondary40]}
    >
      <BorderlessButton onPress={handleGoBack}>
        <Feather name="arrow-left" size={24} color={heading} />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>

      {action ? <View>{action}</View> : <View style={{ width: 24 }} />}
    </LinearGradient>
  );
};

export default Header;
