import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Modal,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Trecho from "./AddTrecho";
import ReportModal from "./ReportModal";
import data from '../malha_aerea3';

export default function Multidestinos() {
  const [trechos, setTrechos] = useState([]);
  const [co2EmitidoValue, setCO2EmitidoValue] = useState("");
  const [florestaProtegida, setFlorestaProtegida] = useState("");
  const [valorCompensacao, setValorCompensacao] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [reportModalVisible, setReportModalVisible] = useState(false);

  const closeReportModal = () => {
    setReportModalVisible(false);
  };
  
  const adicionarDestino = (novoTrecho) => {
    setTrechos([...trechos, novoTrecho])
    fecharModal();
  };

  const removerDestino = () => {    
      const novosTrechos = trechos.slice(0, -1);
      setTrechos(novosTrechos);    
  };

  const abrirModal = () => {
    setModalVisible(true);
  };

  const fecharModal = () => {
    setModalVisible(false);
  };

  const handleCalcular = () => {
    let somatorio = {
      valorCompensacao: 0,
      co2EmitidoValue: 0,
      florestaProtegida: 0,
    };
  
    trechos.forEach((trecho) => {
      const resultadoTrecho = buscarCompensacao(trecho);
  
      somatorio.valorCompensacao += parseFloat(resultadoTrecho.valorCompensacao);
      somatorio.co2EmitidoValue += parseFloat(resultadoTrecho.co2EmitidoValue);
      somatorio.florestaProtegida += parseFloat(resultadoTrecho.florestaProtegida);
    });
  
    setCO2EmitidoValue(somatorio.co2EmitidoValue.toFixed(2));
    setFlorestaProtegida(somatorio.florestaProtegida.toFixed(1));
    setValorCompensacao(somatorio.valorCompensacao.toFixed(2));
    setReportModalVisible(true);
  };

  const buscarCompensacao = (trecho) => {
    const resultado = data.find(
      (item) => item.origem === trecho.origem && item.destino === trecho.destino
    );
  
    if (resultado) {
      return {
        valorCompensacao: resultado.valor.toFixed(2),
        co2EmitidoValue: resultado.co2Emitido.toFixed(2),
        florestaProtegida: resultado.florestaProtegida.toFixed(1),
      };
    } else {
      return {
        valorCompensacao: 6.96,
        co2EmitidoValue: 116,
        florestaProtegida: 8.7,
      };
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {trechos.length === 0 ? (
          <View style={styles.emptyView}>
            <Text style={styles.emptyText}>Clique em Adicionar Conexão para começar...</Text>
          </View>
        ) : (
          trechos.map((trecho, index) => (
            <View style={styles.card} key={index}>
              <Text style={styles.header}>{`#${index + 1} Trecho`}</Text>
              <View style={styles.text}>
                <Text style={{alignSelf: "center"}}>De: {trecho.origem}</Text>
                <Text style={{alignSelf: "center"}}>|</Text>
                <Text style={{alignSelf: "center"}}>Para: {trecho.destino}</Text>
              </View>
            </View>
          ))
        )}
        <View style={styles.actionButtonView}>
          {trechos.length > 0 && (
            <View style={styles.removeButton}>
              <Ionicons
                name="trash"
                size={27}
                color="red"
                onPress={removerDestino}
              />
            </View>
          )}
          <View style={styles.addButton}>
            <Button
              title="Adicionar conexão"
              color="#9BC265"
              onPress={abrirModal}
            />
          </View>
        </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={fecharModal}
        >
          <View>
            <Trecho
              onSalvarTrecho={adicionarDestino}
            />
              <Button title="Cancelar" color="red" onPress={fecharModal} />
          </View>
        </Modal>
        <ReportModal
          reportVisible={reportModalVisible}
          onClose={closeReportModal}
          co2EmitidoValue={co2EmitidoValue}
          valorCompensacao={valorCompensacao}
          areaFlorestaProtegida={florestaProtegida}
        />
        <View style={styles.footerButtonView}>
          <Button
            style={styles.button}
            color="#26944d"
            title="Calcular"
            onPress={handleCalcular}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 20,
  },
  header: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 4,
  },
  card: {
    width: "auto",
    backgroundColor: '#9BC265',
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  actionButtonView: {
    justifyContent: "center",
    marginVertical: 5,
  },
  addButton: {
    alignSelf: "center",
    marginBottom: 5
  },
  removeButton: {
    alignSelf: "center",
    marginBottom: 10
  },
  footerButtonView: {
    position: "fixed" ,  
    bottom: 0,
    left: 0,
    right: 0,
    marginBottom: 20,
  },
  button: {
    width: 300,
    alignSelf: "center",
    
  },
  emptyView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 50
  },
  emptyText: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },
});
