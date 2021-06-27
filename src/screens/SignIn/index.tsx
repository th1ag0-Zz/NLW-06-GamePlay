import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import ButtonIcon from '../../components/ButtonIcon';
import IllustrationImg from '../../assets/illustration.png';

import styles from './styles';

const SignIn = () => {
  const { navigate } = useNavigation();

  function handleSignIn() {
    navigate('Home');
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

        <ButtonIcon onPress={handleSignIn} title="Entrar com Discord" />
      </View>
    </View>
  );
};

export default SignIn;
