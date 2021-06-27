import React from 'react';

import { View, Text } from 'react-native';

import Avatar from '../Avatar';
import styles from './styles';

const Profile: React.FC = () => {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://github.com/th1ag0-Zz.png" />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.userName}>Thiago!</Text>
        </View>

        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
};

export default Profile;
