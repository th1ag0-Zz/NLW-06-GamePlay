import React from 'react';
import { View, Text, Image, Alert, ActivityIndicator } from 'react-native';

import { useAuth } from '../../hooks/auth';
import ButtonIcon from '../../components/ButtonIcon';
import IllustrationImg from '../../assets/illustration.png';

import styles from './styles';
import { theme } from '../../global/styles/theme';

const SignIn = () => {
  const { loading, signIn } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error);
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se{'\n'}e organize suas{'\n'}jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{'\n'}favoritos com amigos
        </Text>

        {loading ? (
          <ActivityIndicator size="large" color={theme.colors.primary} />
        ) : (
          <ButtonIcon onPress={handleSignIn} title="Entrar com Discord" />
        )}
      </View>
    </View>
  );
};

export default SignIn;
