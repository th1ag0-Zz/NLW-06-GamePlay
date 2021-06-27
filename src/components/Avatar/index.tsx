import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Image } from 'react-native';

import styles from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
  urlImage: string;
};

const Avatar: React.FC<Props> = ({ urlImage }) => {
  const { secondary50, secondary70 } = theme.colors;
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary50, secondary70]}
    >
      <Image style={styles.avatar} source={{ uri: urlImage }} />
    </LinearGradient>
  );
};

export default Avatar;
