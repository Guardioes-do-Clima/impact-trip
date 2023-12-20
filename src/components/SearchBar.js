// SearchBar.js
import React from 'react';
import { View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'; // Importe o ícone desejado

const SearchBar = ({ placeholder, value, onChangeText }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 3 }}>
    <Feather name="search" size={24} color="grey" style={{ marginRight: 8 }} />
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 8, borderRadius: 9, }}
    />
  </View>
);

export default SearchBar;
