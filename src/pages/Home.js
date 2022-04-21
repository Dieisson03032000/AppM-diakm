import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { useLayoutEffect, useState } from 'react';


export default function Home({navigation}) {
  const [quilometragem, setquilometragem] = useState("");
  const [combustivel, setcombustivel] = useState("");
  

return (
  <View style={styles.container}>
  <View>
  </View>
    <Text style={styles.headline}> Digite abaixo a Quilometragem que você percoreu</Text>
    <TextInput
    style={styles.input}
    onChangeText={setquilometragem}
    value={quilometragem}
    placeholder="Sua Quilometragem"
    keyboardType="numeric"
    textAlign={'center'}
    size="6"
    />
    <Text style={styles.headline}> Digite abaixo a Litragem que você Abasteceu</Text>
    <TextInput
    style={styles.input}
    onChangeText={setcombustivel}
    value={combustivel}
    placeholder="Quantos litros"
    keyboardType="numeric"
    textAlign={'center'}
    
    
    />
    <View>
    <Button
      title="Calcular"
      onPress={() => navigation.navigate("Second", { paramKey1: quilometragem, paramKey2: combustivel })}
      accessibilityLabel="Calcular"
      color="red"
    />
     </View>
     



  </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headline: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 0,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


