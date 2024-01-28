import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Linking,
} from "react-native";
import logoMecenas from "../assets/images/logog_mecenas_h.png";

export default function Info() {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Image source={logoMecenas} style={styles.logo} />
        {/* Seção: Informações sobre o App Impact Trip */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Informações sobre o App Impact Trip
          </Text>
          <Text style={styles.sectionContent}>
            Criamos a calculadora de emissões dos transportes aéreo e terrestre
            App Impact Trip para engajar viajantes e turistas no enfrentamento
            da emergência climática, permitindo-os estimarem as emissões
            atribuídas às suas viagens e, ao mesmo tempo, transformando-os em
            protagonistas da sustentabilidade dos destinos turísticos
            brasileiros.
            {"\n\n"}
            Você sabia que 8% das emissões globais de Gases de Efeito Estufa –
            GEE – são geradas pelo turismo? E que os meios de transportes,
            especialmente o aéreo é a principal fonte emissora? Ao compensar as
            emissões da sua viagem você transforma a sua pegada de GEE em
            impactos positivos para o planeta e para os destinos turísticos.
          </Text>
        </View>

        {/* Seção: Compromissos socioambientais dos agricultores */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Compromissos socioambientais dos agricultores
          </Text>
          <Text style={styles.sectionContent}>
            Os recursos financeiros gerados pela compensação das suas emissões
            são destinados aos agricultores tradicionais na forma de
            PSA-Pagamento Por Serviços Ambientais.
            {"\n\n"}
            Com o valor mensal de R$400,00 recebem este beneficio os
            agricultores e populações tradicionais que assumem os seguintes
            compromissos socioambientais:
            {"\n\n"}✔ Conservar os remanescentes florestais das suas
            propriedades;{"\n\n"}✔ Reflorestar suas áreas degradadas;{"\n\n"}✔
            Adotar práticas agroecológica na produção agrícola;{"\n\n"}✔
            Interromper a caça de animais silvestres;{"\n\n"}✔ Garantir a
            escolarização dos filhos e preservá-los do trabalho pesado que
            compromete a saúde;{"\n\n"}✔ Participar, uma vez por semana, das
            atividades oferecidas pelo programa.
          </Text>
        </View>

        {/* Seção: Metodologia da calculadora */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Metodologia da calculadora</Text>
          <Text style={styles.sectionContent}>
            A calculadora App Impact Trip foi baseada na Calculadora de Emissões
            de Carbono da ICAO - Organização Internacional da Aviação Civil -
            agência ligada à ONU, criada para regulamentar a avião civil no
            mundo.{"\n\n"} A calculadora da ICAO é a única ferramenta aprovada
            internacionalmente para estimar as emissões de carbono das viagens
            aéreas.{"\n\n"}Durante a elaboração da calculadora Impact trip
            detectamos algumas poucas lacunas da calculadora da ICAO para a
            malha aérea brasileira, o que nos levou a realizar algumas
            correções, tornando a calculadora ainda mais precisa.{"\n\n"}Os
            valores das emissões de GEE são apresentados em quilogramas de
            dióxido de carbono equivalente (CO2e kg), que representa a somatória
            das emissões de CO2 + CH4 + N2O (dióxido de carbono, metano e oxido
            nitroso).
          </Text>
        </View>

        {/* Seção: Impactos da compensação */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Impactos da compensação</Text>
          <Text style={styles.sectionContent}>
            ✔ Promove a conservação e restauração das florestas, da
            biodiversidade e dos recursos naturais nas propriedades dos
            beneficiários do programa{"\n\n"}✔ Fomentam a agroecologia, um
            modelo de agricultura sustentável e regenerativa que cumpre um
            importante papel na fixação e conservação do dióxido de carbono no
            solo.{"\n\n"}✔ Promove a inclusão socioeconômica e transformam
            grupos sociais que vivem em situação de vulnerabilidade, como
            agricultores familiares, indígenas e quilombolas, em protagonistas
            da conservação e do clima.{"\n\n"}✔ Reduz as emissões de Gases de
            Efeito estufa e, ao mesmo tempo, retiram o dióxido de carbono - CO2
            - da atmosfera.{"\n\n"}✔ Impulsiona a produção associada ao turismo
            e fortalece a resiliência ambiental, econômica e sociocultural dos
            destinos turísticos.
          </Text>
        </View>

        {/* Seção: Colaboração para a Agenda 2030 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Colaboração para a Agenda 2030
          </Text>
          <Text style={styles.sectionContent}>
            Colaboram para a implementação da Agenda 2030, impactando em 9
            Objetivos de Desenvolvimento Sustentável:{"\n\n"}✔ OD 1 -
            Erradicação da pobreza.{"\n\n"}✔ OD 2 - Fome zero e agricultura
            sustentável.{"\n\n"}✔ OD 3 - Saúde e bem-estar.{"\n\n"}✔ OD 6 - Água
            limpa e saneamento básico.{"\n\n"}✔ OD 9 - Comunidades e cidades
            sustentáveis.{"\n\n"}✔ OD 13 - Ação contra a mudança global do
            clima.
            {"\n\n"}✔ OD 15 - Vida terrestre – conservação e restauração das
            florestas e da biodiversidade.{"\n\n"}✔ OD 17 - Trabalho em Rede.
          </Text>
        </View>

        {/* Seção: Linha do tempo do programa */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Linha do tempo do programa</Text>
          <Text style={styles.sectionContent}>
            ✔Em 2008, idealização do programa.{"\n\n"}✔ De 2009 a 2019, o
            programa foi executado como protótipo, testando metodologias e
            aperfeiçoando sua modelagem.{"\n\n"}✔ Em 2020, foi vencedor do
            Prêmio “Desafio de Inovações em Turismo Sustentável” – promovido
            pela Ashoka e CTG Brasil.{"\n\n"}✔ Em 2021, foi semifinalista do
            “Desafio Global de Habilidades ecológicas” – promovido pela Ashoka
            Inglaterra.{"\n\n"}✔ Em 2021/2022, o programa recebeu mentorias de
            aceleração conduzidas pela Bemtevi Negócios Sociais{"\n\n"}✔ Em
            2022, foi Gold Winner do WTM Responsible Tourism Awards Latin
            America na categoria Descarbonização de Viagens e Turismo.{"\n\n"}✔
            Em 2023, iniciamos a estruturação da Rede Brasil Turismo CO2 Legal *
            Guardiões do Clima para replicação do programa.
          </Text>
        </View>

        {/* Seção: Nossa visão de futuro */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nossa visão de futuro</Text>
          <Text style={styles.sectionContent}>
            Transformar os destinos turísticos brasileiros em Destinos Guardiões
            do Clima, um conceito inovador e único no planeta que cria um amplo
            sistema de valor compartilhado nos destinos turísticos, mobilizando
            e engajando os diversos atores sociais que se comunicam com o
            destino – empreendedores, moradores, turistas, instituições
            públicas, Organizações da Sociedade Civil, agricultores familiares e
            populações tradicionais – para atuarem de forma colaborativa e
            integrada no enfrentamento da emergência climática e na construção
            da sustentabilidade local.
            {"\n\n"}A implantação dos destinos turísticos Guardiões do Clima
            desencadeará um ciclo virtuoso em prol do
            {"\n\n"}✔ Enfrentamento da emergência climática.{"\n\n"}✔ Proteção e
            regeneração das florestas, da biodiversidade e dos ecossistemas.
            {"\n\n"}✔ Agricultura sustentável e regenerativa.{"\n\n"}✔ Inclusão
            socioeconômica de grupos sociais que vivem em situação de
            vulnerabilidade nos destinos turísticos.
          </Text>
        </View>

        {/* Seção: Rede Brasil Turismo CO2 Legal Guardiões do Clima */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Rede Brasil Turismo CO2 Legal Guardiões do Clima
          </Text>
          <Text style={styles.sectionContent}>
            A implementação dos Destinos Turísticos Guardiões do Clima será
            realizada em parceria com Organizações da Sociedade Civil
            interessadas em replicar o programa nos destinos aonde atuam.
            {"\n\n"}
            Vamos capacitar e assessorar as OSC para que elas possam executar o
            programa Turismo CO2 Legal Guardiões do Clima com excelência. A nós
            caberá realizar o monitoramento da replicação.
            {"\n\n"}
            Para trazer credibilidade e transparência para a replicação da
            iniciativa criamos o Conselho de Governança da Rede Brasil Turismo
            CO2 Legal Guardiões do Clima, que é formado por representantes do
            Movimento Mecenas da Vida, do Conselho Curador da Rede, das OSCs
            executoras, dos empreendimentos parceiros e dos beneficiários do
            programa.
          </Text>
        </View>

        {/* Seção: Engajamento na compensação */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Engajamento na compensação</Text>
          <Text style={styles.sectionContent}>
            O seu engajamento na compensação de emissões de sua viagem é
            fundamental para a manifestação dos Destinos Turísticos Guardiões do
            Clima.{"\n\n"}
            Colabore com esta causa tão importante e necessária!
          </Text>
        </View>

        {/* Seção: Destinos Guardiões do Clima */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Destinos Guardiões do Clima</Text>
          <Text style={styles.sectionContent}>
            Os primeiros destinos Guardiões do Clima estão sendo implantados em:{"\n\n"}
            ✔ Área de Proteção Ambiental Itacaré / Serra Grande, litoral sul da
            Bahia.{"\n\n"}
            ✔ Santa Cruz Cabrália – litoral extremo sul da Bahia.{"\n\n"}
            ✔ Trancoso, Caraíva, Porto Seguro – litoral extremo sul da Bahia.{"\n\n"}
            ✔ Jericoacoara – Ceará
          </Text>
        </View>

        {/* Seção: Acompanhe a gente! */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Acompanhe a gente!</Text>
          <Text style={styles.sectionContent}>
            Instagram:{" "}
            <Text
              style={{ textDecorationLine: "underline" }}
              onPress={() =>
                openLink("https://www.instagram.com/turismoco2legal/")
              }
            >
              @turismoco2legal
            </Text>
            {"\n"}Website:{" "}
            <Text
              style={{ textDecorationLine: "underline" }}
              onPress={() => openLink("https://www.co2legal.org.br")}
            >
              www.co2legal.org.br
            </Text>
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
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 14,
  },
  logo: {
    width: 200,
    height: 50,
    resizeMode: "contain",
    alignSelf: "center"
    //marginTop: 1,
}
});
