import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import backgroundImage from './background.jpg';

export default function App() {
  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <View style={styles.alunoBox}>
      <Text class="aluno" style={[styles.text]}><h1>Vinicius Rickelme Pavani de Souza // Pc Número 9 armario 1</h1></Text>
      </View>
      <View style={styles.textBox}>
        <Text style={[styles.text, styles.heading]}>Curiosidade sobre HA em Pokémon</Text>
        <Text style={[styles.text, styles.paragraph]}>A habilidade oculta (Hidden Ability - HA) é uma característica específica de alguns Pokémon que geralmente não está disponível quando você os captura ou choca pela primeira vez. Em vez disso, você só pode obter uma Habilidade Oculta através de métodos específicos, como capturar um Pokémon em uma Max Raid Battle, por exemplo, ou através de eventos especiais.</Text>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  alunoBox: {
    width: '80%',
    marginBottom: 20,
  },
  textBox: {
    width: '80%',
    backgroundColor: 'rgba(255,222,173)',
    borderWidth: 1,
    borderColor: 'black',
    padding: 20,
  },
  text: {
    textAlign: 'center',
    paddingVertical: 10,
    color: '#FF0000',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 16,
  },
});
