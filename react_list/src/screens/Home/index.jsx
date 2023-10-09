import { useState } from 'react';
import { Text, TouchableOpacity, View, TextInput, Alert} from 'react-native';
import  { styles } from './styles'

export default function Home(){

    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [birth, setBirth] = useState('')

    function handleUserAdd(){
        console.log(`Nome: ${name} \nGênero: ${gender} \n Data de Nasc: ${birth}`)

        Alert.alert(`Nome: ${name} \nGênero: ${gender} \n Data de Nasc: ${birth}`)
        setName('')
        setGender('')
        setBirth('')
    }


    return(
        <View style={styles.container}>

            <Text style={styles.title}>Preencha os dados</Text>

            <TextInput 
                style={styles.input}
                placeholder="Nome Completo" 
                placeholderTextColor="gray"
                value = { name } // captura o valor
                onChangeText = { setName} // altera o valor

            />

            <TextInput 
                style={styles.input}
                placeholder="Genero" 
                placeholderTextColor="gray"
                value = {gender}
                onChangeText = {setGender}
            />

            <TextInput 
                style={styles.input}
                placeholder="Data de Nascimento" 
                placeholderTextColor="gray"
                value = {birth}
                onChangeText = {setBirth}
            />

            <TouchableOpacity style={styles.btn} onPress={handleUserAdd} >
                <Text style={styles.btnTxt}>Cadastrar</Text>
            </TouchableOpacity>

      </View>
    )
  }