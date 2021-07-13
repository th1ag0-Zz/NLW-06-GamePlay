import React, { useEffect, useState } from 'react';
import {
  View,
  ImageBackground,
  Text,
  FlatList,
  Alert,
  Share,
  Platform,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

import Header from '../../components/Header';
import ListHeader from '../../components/ListHeader';
import Member, { MemberData } from '../../components/Member';
import ListDivider from '../../components/ListDivider';
import ButtonIcon from '../../components/ButtonIcon';
import { AppointmentProps } from '../../components/Appointments';
import Load from '../../components/Load';
import api from '../../services/api';

import banner from '../../assets/banner.png';
import { theme } from '../../global/styles/theme';
import styles from './styles';

interface Params {
  guildSelected: AppointmentProps;
}

interface GuildWidget {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberData[];
}

const AppointmentDatails: React.FC = () => {
  const route = useRoute();
  const { guildSelected } = route.params as Params;

  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
  const [loading, setLoading] = useState(true);

  function handleShare() {
    const message =
      Platform.OS === 'ios'
        ? `Junte-se à ${guildSelected.guild.name}`
        : widget.instant_invite;

    Share.share({
      message,
      url: widget.instant_invite,
    });
  }

  function handleOenGuild() {
    Linking.openURL(widget.instant_invite);
  }

  async function fetchGuildWidget() {
    try {
      const response = await api.get(
        `/guilds/${guildSelected.guild.id}/widget.json`,
      );
      console.log(response.data.instant_invite);
      setWidget(response.data);
    } catch (error) {
      Alert.alert(
        `Verifique as configurações do servidor! ⚙️${'\n'}Será que o Widget está habilitado?`,
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGuildWidget();
  }, []);

  return (
    <View style={styles.container}>
      <Header
        title="Detalhes"
        action={
          guildSelected.guild.owner && (
            <BorderlessButton onPress={handleShare}>
              <Fontisto name="share" color={theme.colors.primary} size={24} />
            </BorderlessButton>
          )
        }
      />

      <ImageBackground source={banner} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>{guildSelected.guild.name}</Text>
          <Text style={styles.subtitle}>{guildSelected.description}</Text>
        </View>
      </ImageBackground>

      {loading ? (
        <Load />
      ) : (
        <>
          <ListHeader
            title="Jogadores"
            subtitle={`Total ${widget.members.length}`}
          />

          <FlatList
            data={widget.members}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Member data={item} />}
            ItemSeparatorComponent={() => <ListDivider />}
            style={styles.members}
          />

          {guildSelected.guild.owner && (
            <View style={styles.footer}>
              <ButtonIcon onPress={handleOenGuild} title="Entrar na partida" />
            </View>
          )}
        </>
      )}
    </View>
  );
};

export default AppointmentDatails;
