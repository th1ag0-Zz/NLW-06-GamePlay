import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import categories from '../../utils/categories';
import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';
import GuildIcon from '../GuildIcon';

import styles from './styles';
import { theme } from '../../global/styles/theme';

import { GuildProps } from '../Guild';

export interface AppointmentProps {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
}

interface Props extends RectButtonProps {
  data: AppointmentProps;
}

const Appointments: React.FC<Props> = ({ data, ...rest }) => {
  const [category] = categories.filter(item => item.id === data.category);
  const { owner } = data.guild;
  const { primary, on, secondary50, secondary70 } = theme.colors;

  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <LinearGradient
          colors={[secondary50, secondary70]}
          style={styles.guildIconContainer}
        >
          <GuildIcon />
        </LinearGradient>

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.guild.name}</Text>

            <Text style={styles.category}>{category.title}</Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />

              <Text style={styles.date}>{data.date}</Text>
            </View>

            <View style={styles.playerInfo}>
              <PlayerSvg fill={owner ? primary : on} />

              <Text style={[styles.player, { color: owner ? primary : on }]}>
                {owner ? 'Anfitrião' : 'Visitante '}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  );
};

export default Appointments;
