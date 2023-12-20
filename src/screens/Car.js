import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "../styles";
import { Logo } from '../components/Logo';
import MalhaViaria from "../components/MalhaViaria";

export default function Car() {
  return (    
    <ScrollView contentContainerStyle={styles. scrollViewContainer}>     
      <View style={styles.container}>       
        <Logo />
        <Text style={styles.header}>
          Para viagens terrestres indique o tipo de combustível e o consumo
        </Text>
        <MalhaViaria />
      </View>
    </ScrollView>    
  );
}