import React from 'react';
import { View, Text } from 'react-native';

import Avatar from '../Avatar';

import { theme } from '../../global/styles/theme';
import styles from './styles';

export interface MemberData {
  id: string;
  userName: string;
  avatar_URL: string;
  status: string;
}

interface MemberProps {
  data: MemberData;
}

const Member: React.FC<MemberProps> = ({ data }) => {
  const isOnline = data.status === 'online';
  const { on, primary } = theme.colors;

  return (
    <View style={styles.container}>
      <Avatar urlImage={data.avatar_URL} />

      <View>
        <Text style={styles.title}>{data.userName}</Text>

        <View style={styles.status}>
          <View
            style={[
              styles.bulletStatus,
              { backgroundColor: isOnline ? on : primary },
            ]}
          />

          <Text style={styles.nameStatus}>
            {isOnline ? 'Disponível' : 'Ocupado'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Member;
