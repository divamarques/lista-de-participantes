import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';


export function Home() {
  function handleAddParticipant(){
    console.log('voce clicou no botão');
    
  }
  
  function handleRemoveParticipant(name: string){
    console.log(`voce clicou em remover ${name}`);

  }


  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>
      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <Participant name="Diogo Marques" onRemove={() => handleRemoveParticipant("Diogo Marques")}/>
    </View>
  );
}