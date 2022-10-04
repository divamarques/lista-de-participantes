import React from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';


export function Home() {

  const participants = ['Diogo', 'Berba', 'Guilherme', 'Caio', 'Artur', 'Lucas', 'Vitor', 'Fausto', 'João', 'Heitor', 'Salles', 'Claudinho', 'Fred'];

  function handleAddParticipant(){
    if(participants.includes("Diogo")){
      return Alert.alert("Participante Existe", "Já existe um participante na lista com este nome");
    }
    
  }
  
  function handleRemoveParticipant(name: string){
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])

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

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
            key={item} 
            name={item}
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>
            Por enquanto só fumaça
          </Text>
        )}
      />
     
    </View>
  );
}