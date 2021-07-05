import React from 'react';

import { View, Text } from 'react-native';
import { useAuth } from '../../hooks/auth';

import Avatar from '../Avatar';
import styles from './styles';

const Profile: React.FC = () => {
  const { user } = useAuth();
  return (
    <View style={styles.container}>
      <Avatar urlImage={user.avatar} />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.userName}>{`${user.firstname}!`}</Text>
        </View>

        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
};

export default Profile;
