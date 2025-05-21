import React, {useEffect, useState} from 'react';
import {Alert, StatusBar, Text, View} from 'react-native';
import {styles} from './styles';

export const Clock: React.FC = () => {
  const [currentTime, setCurrentTime] = useState('00:00:00');

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
      <StatusBar backgroundColor={'#27272a'} />
      <Text style={styles.textStyle}>{currentTime}</Text>
    </View>
  );
};
