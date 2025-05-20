import React, {useEffect, useState} from 'react';
import {Alert, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

export const Home: React.FC = () => {
  const [number, setNumber] = useState(0);
  const [currentTime, setCurrentTime] = useState('00:00:00');

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

  //Desgraça do inferno
  useEffect(() => {
    //Intervalo de 1 segundo para executar a ação
    setInterval(() => {
      const now = new Date(); //Pega a data e hora exata do sistema
      const hours = String(now.getHours()).padStart(2, '0'); //Um get para pegar apenas as horas de dentro do Date. O mesmo para minutos e segundos
      const minutes = String(now.getMinutes()).padStart(2, '0'); //padStart formata a string para se parecer mais com um relógio
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textStyle}>{currentTime}</Text>

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
