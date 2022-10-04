import React from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';


export function Home() {

  const participants = ['Diogo', 'Berba', 'Guilherme', 'Caio', 'Artur', 'Lucas', 'Vitor', 'Fausto', 'João', 'Heitor', 'Sales', 'Claudinho'];

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

      <ScrollView showsVerticalScrollIndicator={false}>
        {
          participants.map(participant => (
            <Participant 
              key={participant} 
              name={participant}
              onRemove={() => handleRemoveParticipant("Diogo Marques")}
            />
          ))
        }
      </ScrollView>
    </View>
  );
}