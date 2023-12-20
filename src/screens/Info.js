import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function Info() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        {/* Seção: Instituto Mecenas da Vida */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Instituto Mecenas da Vida</Text>
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/images/logog_mecenas_h.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.sectionContent}>
            A compensação de carbono é um processo que visa neutralizar as
            emissões de gases de efeito estufa (GEE) geradas por atividades
            humanas. Quando se trata de viagens aéreas, a compensação envolve
            calcular a quantidade de CO₂ emitida durante o voo e, em seguida,
            tomar medidas para compensar essa emissão.
            
            Compensação: Existem várias maneiras de compensar as emissões de
            carbono: Plantio de Árvores: O plantio de árvores ajuda a absorver
            CO₂ da atmosfera. Cada árvore plantada pode compensar uma quantidade
            específica de emissões. Compra de Créditos de Carbono: Os créditos
            de carbono representam uma tonelada de CO₂ evitada ou removida.
            Compre créditos de projetos de energia renovável, reflorestamento ou
            outras iniciativas sustentáveis. Investimento em Projetos
            Sustentáveis: Apoie projetos que reduzem as emissões, como energia
            limpa, eficiência energética ou proteção florestal. Valor da
            Compensação: O valor da compensação depende do método escolhido
            (plantio de árvores, créditos de carbono etc.). Calcule o custo com
            base na quantidade de CO₂ emitida e no preço dos créditos de carbono
            ou no custo do plantio de árvores. Lembre-se de que a compensação de
            carbono é uma maneira de mitigar o impacto ambiental das viagens
            aéreas, mas a melhor abordagem é sempre reduzir as emissões sempre
            que possível. 🌿✈️
          </Text>
        </View>

        {/* Seção: Apoiadores */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Apoiadores</Text>
          <Text style={styles.sectionContent}>
            Listagem ou informações sobre os apoiadores do instituto. Inclua
            detalhes sobre como eles contribuem.
          </Text>
        </View>

        {/* Seção: Financiadores */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Financiadores</Text>
          <Text style={styles.sectionContent}>
            Informações sobre os financiadores do instituto. Detalhes sobre como
            contribuem financeiramente.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 100,
  },
});
