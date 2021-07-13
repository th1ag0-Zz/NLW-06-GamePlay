import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';

import Guild, { GuildProps } from '../../components/Guild';
import ListDivider from '../../components/ListDivider';
import Load from '../../components/Load';
import api from '../../services/api';

import styles from './styles';

interface Props {
  handleGuildSelected: (guild: GuildProps) => void;
}

const Guilds: React.FC<Props> = ({ handleGuildSelected }) => {
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGuilds() {
      const response = await api.get('/users/@me/guilds');

      setGuilds(response.data);
      setLoading(false);
    }

    fetchGuilds();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Load />
      ) : (
        <FlatList
          data={guilds}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Guild data={item} onPress={() => handleGuildSelected(item)} />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 24 }}
          style={styles.guilds}
        />
      )}
    </View>
  );
};

export default Guilds;
