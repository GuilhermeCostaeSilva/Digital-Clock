import React, {useEffect, useState} from 'react';
import {Alert, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

export const Counter: React.FC = () => {
  const [number, setNumber] = useState(0);

  //Incrementar 1 a cada clique
  function increment() {
    return setNumber(number + 1);
  }

  //Resetar o contador
  function resetCount() {
    setNumber(0);
  }

  //Lógica para alertar a cada 10 cliques
  useEffect(() => {
    if (number !== 0 && number % 10 === 0) {
      Alert.alert(`Você deu ${number} cliques!`);
    }
  }, [number]);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textStyle}>Contador</Text>

      <StatusBar backgroundColor={'#27272a'} />

      <TouchableOpacity onPress={() => increment()} style={styles.button}>
        <Text style={styles.buttonTextStyle}>Adicionar número</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => resetCount()} style={styles.button}>
        <Text style={styles.buttonTextStyle}>Resetar contagem</Text>
      </TouchableOpacity>

      <Text style={styles.textStyle}>{number}</Text>
    </View>
  );
};
