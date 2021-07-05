import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import Profile from '../../components/Profile';
import ButtonAdd from '../../components/ButtonAdd';
import CategorySelect from '../../components/CategorySelect';
import ListHeader from '../../components/ListHeader';
import Appointments from '../../components/Appointments';
import ListDivider from '../../components/ListDivider';

import styles from './styles';

const Home: React.FC = () => {
  const { navigate } = useNavigation();
  const [category, setCategory] = useState('');

  function handleAppointmentDetails() {
    navigate('AppointmentDetails');
  }

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 às 20:40h',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 às 20:40h',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
  ];

  function hanldeCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentCreate() {
    navigate('AppointmentCreate');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>

      <CategorySelect
        setCategory={hanldeCategorySelect}
        categorySelected={category}
      />

      <ListHeader title="Partidas agendadas" subtitle="Total 6" />

      <FlatList
        data={appointments}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Appointments onPress={handleAppointmentDetails} data={item} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.matches}
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;
