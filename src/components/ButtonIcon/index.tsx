import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import styles from './styles';

import DiscordImg from '../../assets/discord.png';

interface Props extends TouchableOpacityProps {
  title: string;
}

const ButtonIcon: React.FC<Props> = ({ title, ...rest }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;
