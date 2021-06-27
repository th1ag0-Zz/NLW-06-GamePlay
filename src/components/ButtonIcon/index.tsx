import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { View, Text, Image } from 'react-native';
import styles from './styles';

import DiscordImg from '../../assets/discord.png';

interface Props extends RectButtonProps {
  title: string;
}

const ButtonIcon: React.FC<Props> = ({ title, ...rest }) => {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
};

export default ButtonIcon;
