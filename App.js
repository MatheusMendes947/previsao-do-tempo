import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// const [dataEHora, setDataEHora] = useState()

export default function App() {

const [Status, setStatus] = useState('ENSOLARADO')
const [Graus, setGraus] = useState('24')
const [Cidade, setCidade] = useState('SÃO PAULO')
const [Pais, setPais] = useState('BRASIL')
const [vento, setVento] = useState('7')
const [umidade, setUmidade] = useState('68')
const [tempoMin, setTempoMin] = useState('21')
const [tempoMax, setTempoMax] = useState('32')

  return (
    <View style={styles.container}>
     {/* View principal*/}
     <View style={styles.cardPrincipal}>
      {/* View do status */}
      <View style={styles.viewStatus}>
      <Text style={styles.status}>{Status}</Text>
      </View>
      <Text style={styles.graus}>{Graus}</Text>
      <Text style={styles.cidade}>{Cidade}</Text>
      <Text style={styles.pais}>{Pais}</Text>
     </View>

     {/* View das infos adicionais */}
     <View style={styles.cardInfosAdicionais}>
      <Text style={styles.topText}>Informações adicionais</Text>
      <Text style={styles.ventoTitulo}>Vento</Text>
      <Text style={styles.vento}>{vento}</Text>
      <Text style={styles.umidadeTitulo}>Umidade</Text>
      <Text style={styles.umidade}>{umidade}</Text>
      <Text style={styles.tempoMinTitulo}>Tempo min.</Text>
      <Text style={styles.tempoMin}>{tempoMin}</Text>
      <Text style={styles.tempoMaxTitulo}>Tempo max.</Text>
      <Text style={styles.tempoMax}>{tempoMax}</Text>
     </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#124345',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto: {
    color:'#ffff'
  },

  cardPrincipal: {
    borderRadius: 5,
    backgroundColor:'white',
    width: '90%',
    height: '40%',
    alignItems: 'center',
  },

  cardInfosAdicionais: {
    borderRadius: 5,
    marginTop: '5%',
    backgroundColor:'white',
    width: '90%',
    height: '40%',
  },

  viewStatus: {
    alignItems: 'center'
  },
});
