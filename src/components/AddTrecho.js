// AddTrecho.js
import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';
import SearchBar from './SearchBar';
import data from '../malha_aerea3'; 

const AddTrecho = ({ onSalvarTrecho }) => {
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [opcoesOrigem, setOpcoesOrigem] = useState([]);
  const [opcoesDestino, setOpcoesDestino] = useState([]);

  const filtrarOpcoesOrigem = (texto) => {
    if (texto.length >= 3) {
      let opcoesFiltradas = [
        ...new Set(
          data
            .filter((item) =>
              item.origem.toUpperCase().includes(texto.toUpperCase())
            )
            .map((item) => item.origem)
        ),
      ];

      setOpcoesOrigem(opcoesFiltradas);
      dismissKeyboard();
    } else {
      setOpcoesOrigem([]);
    }
  };

  const filtrarOpcoesDestino = (texto) => {
    if (texto.length >= 3) {
      let opcoesFiltradas = [
        ...new Set(
          data
            .filter((item) =>
              item.destino.toUpperCase().includes(texto.toUpperCase())
            )
            .map((item) => item.destino)
        ),
      ];

      setOpcoesDestino(opcoesFiltradas);
      dismissKeyboard();
    } else {
      setOpcoesDestino([]);
    }
  };

  const selecionarOrigem = (opcao) => {
    setOrigem(opcao);
    setOpcoesOrigem([]);
  };

  const selecionarDestino = (opcao) => {
    setDestino(opcao);
    setOpcoesDestino([]);
  };

  const handleSalvarTrecho = () => {
    if (origem && destino) {
      const novoTrecho = { origem, destino };
      onSalvarTrecho(novoTrecho);     
    } else {
      alert('Por favor, preencha ambas as cidades antes de salvar o trecho.');
    }
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
      <Text style={styles.header}>Nova conexão</Text>
        <Text style={styles.label}>Saindo de:</Text>
        <SearchBar
          placeholder="Origem(digite pelo menos 3 caracteres)"
          value={origem}
          onChangeText={(text) => {
            setOrigem(text);
            filtrarOpcoesOrigem(text);
          }}
        />
        {opcoesOrigem.length > 0 && (
          <FlatList
            data={opcoesOrigem}            
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => selecionarOrigem(item)}>
                <Text style={styles.optionText}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.toString()}
          />
        )}
        <Text style={styles.label}>Indo para:</Text>
        <SearchBar
          placeholder="Destino(digite pelo menos 3 caracteres)"
          value={destino}
          onChangeText={(text) => {
            setDestino(text);
            filtrarOpcoesDestino(text);
          }}
        />
        {opcoesDestino.length > 0 && (
          <FlatList
            data={opcoesDestino}            
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => selecionarDestino(item)}>
                <Text style={styles.optionText}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.toString()}
          />
        )}
      </View>
        <Button title="Salvar Trecho" color="#26944d" onPress={handleSalvarTrecho} />        
      </View>    
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  header: {
    alignSelf: "center",
    fontWeight: "bold",
    color: "#26944d",
    fontSize: 18
  },
  label: {
    fontSize: 15,
    //fontWeight: "bold",
    marginTop: 1,
    color: "green",
  },
  card: {
    width: 340,
    height: "auto",
    backgroundColor: "white",
    marginBottom: 20,
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  inputSelect: {
    marginBottom: 16,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 10,
    color: 'black',
  },
  flatList: {
    maxHeight: 100,
  },
  itemText: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});

export default AddTrecho;
