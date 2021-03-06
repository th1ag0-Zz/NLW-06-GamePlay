import React, { useState } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';

import { COLLECTION_APPOINTMENTS } from '../../configs/storage';
import Header from '../../components/Header';
import CategorySelect from '../../components/CategorySelect';
import GuildIcon from '../../components/GuildIcon';
import SmallInput from '../../components/SmallInput';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import ModalView from '../../components/ModalView';
import Guilds from '../Guilds';

import { theme } from '../../global/styles/theme';
import styles from './styles';
import { GuildProps } from '../../components/Guild';

const AppointmentCreate: React.FC = () => {
  const { navigate } = useNavigation();

  const [category, setCategory] = useState('');
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [description, setDescription] = useState('');

  function handleOpenGuildsModal() {
    setOpenGuildsModal(true);
  }

  function handleCloseGuildsModal() {
    setOpenGuildsModal(false);
    return true;
  }

  function handleGuildSelect(guildSelect: GuildProps) {
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  }

  function hanldeCategorySelect(categoryId: string) {
    setCategory(categoryId);
  }

  async function handleSave() {
    const newAppointment = {
      id: uuid.v4(),
      guild,
      category,
      date: `${day}/${month} às ${hour}:${minute}h`,
      description,
    };

    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);

    const apppointments = storage ? JSON.parse(storage) : [];

    await AsyncStorage.setItem(
      COLLECTION_APPOINTMENTS,
      JSON.stringify([...apppointments, newAppointment]),
    );

    navigate('Home');
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Header title="Agendar partida" />
      <ScrollView>
        <Text
          style={[
            styles.label,
            { marginLeft: 24, marginTop: 26, marginBottom: 18 },
          ]}
        >
          Categoria
        </Text>

        <CategorySelect
          hasCheckBox
          setCategory={hanldeCategorySelect}
          categorySelected={category}
        />

        <View style={styles.form}>
          <RectButton onPress={handleOpenGuildsModal}>
            <View style={styles.select}>
              {guild.icon ? (
                <GuildIcon guildId={guild.id} iconId={guild.icon} />
              ) : (
                <View style={styles.image} />
              )}

              <View style={styles.selectBody}>
                <Text style={styles.label}>
                  {guild.name ? guild.name : 'Selecione um servidor'}
                </Text>
              </View>

              <Feather
                name="chevron-right"
                color={theme.colors.heading}
                size={18}
              />
            </View>
          </RectButton>

          <View style={styles.field}>
            <View>
              <Text style={[styles.label, { marginBottom: 12 }]}>
                Dia e mês
              </Text>

              <View style={styles.column}>
                <SmallInput onChangeText={setDay} maxLength={2} />
                <Text style={styles.divider}>{'/'}</Text>
                <SmallInput onChangeText={setMonth} maxLength={2} />
              </View>
            </View>

            <View>
              <Text style={[styles.label, { marginBottom: 12 }]}>
                Hora e minuto
              </Text>

              <View style={styles.column}>
                <SmallInput onChangeText={setHour} maxLength={2} />
                <Text style={styles.divider}>{':'}</Text>
                <SmallInput onChangeText={setMinute} maxLength={2} />
              </View>
            </View>
          </View>

          <View style={[styles.field, { marginBottom: 12 }]}>
            <Text style={styles.label}>Descrição</Text>
            <Text style={styles.maxCarecteresText}>Max 100 carateres</Text>
          </View>
          <TextArea
            onChangeText={setDescription}
            multiline
            maxLength={100}
            numberOfLines={5}
            autoCorrect={false}
          />

          <View style={styles.footer}>
            <Button title="Agendar" onPress={handleSave} />
          </View>
        </View>
      </ScrollView>

      <ModalView visible={openGuildsModal} closeModal={handleCloseGuildsModal}>
        <Guilds handleGuildSelected={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
};

export default AppointmentCreate;
