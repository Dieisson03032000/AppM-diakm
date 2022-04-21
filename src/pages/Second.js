import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'

export default function Second({ route }) {

  const [quilometragem, setquilometragem] = useState(route.params.paramKey1)
  const [combustivel, , setcombustivel,] = useState(route.params.paramKey2)
  const [resultado, setResultado] = useState(quilometragem / combustivel)
  const [resultadoNivel, setResultadoNivel] = useState('')

  const verificarNivelConsumo = () => {
    if (resultado >= 12)
      setResultadoNivel("Nivel A")

    if (resultado > 10 && resultado <= 12)
      setResultadoNivel("Nivel B")

    if (resultado > 8 && resultado <= 10)
      setResultadoNivel("Nivel C")

    if (resultado > 4 && resultado <= 8)
      setResultadoNivel("Nivel D")

    if (resultado <= 4)
      setResultadoNivel("Nivel E")
  }

  
  return (
    <View>

      <Text style={styles.headline}>Sua média é:  {"\n"} {"\n"}{resultado} Km/L</Text>

      <Text onLayout={verificarNivelConsumo} style={styles.headline}> Sua classificação de média esta na categoria:  {"\n"} {"\n"}{resultadoNivel}</Text>



    </View>
  )
}

const styles = StyleSheet.create({
    headline: {
      fontWeight: 'bold',
      fontSize: 15,
      marginTop: 0,
      alignItems: 'center',
      height: 80,
  
      justifyContent: 'center',
      
  },
});