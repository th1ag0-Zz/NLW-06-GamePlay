import React from 'react';
import { View, ImageBackground, Text, FlatList } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';

import Header from '../../components/Header';
import ListHeader from '../../components/ListHeader';
import Member from '../../components/Member';
import ListDivider from '../../components/ListDivider';
import ButtonIcon from '../../components/ButtonIcon';

import banner from '../../assets/banner.png';
import { theme } from '../../global/styles/theme';
import styles from './styles';

const AppointmentDatails: React.FC = () => {
  const members = [
    {
      id: '1',
      userName: 'Thiago',
      avatar_URL: 'https://github.com/th1ag0-Zz.png',
      status: 'online',
    },
    {
      id: '2',
      userName: 'Thiago',
      avatar_URL: 'https://github.com/th1ag0-Zz.png',
      status: 'offline',
    },
  ];

  return (
    <View style={styles.container}>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" color={theme.colors.primary} size={24} />
          </BorderlessButton>
        }
      />

      <ImageBackground source={banner} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder nenhuma partida.
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 3" />

      <FlatList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </View>
  );
};

export default AppointmentDatails;
