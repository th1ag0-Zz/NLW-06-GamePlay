import React from 'react';
import { Image } from 'react-native';

import styles from './styles';

const GuildIcon: React.FC = () => {
  const uri =
    'https://theouterhaven.b-cdn.net/wp-content/uploads/2018/04/sv7xsk8eqglhkjug3erd-750x400.jpg';

  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
};

export default GuildIcon;
