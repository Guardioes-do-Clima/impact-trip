import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "../styles";
import { Logo } from "../components/Logo";
import SelectionBar from "../components/SelectionBar";
import Multidestinos from "../views/Multidestinos";
import IdaEVolta from "../views/IdaEVolta";
import SomenteIda from "../views/SomenteIda";

export default function Airplane() {
  const [selectedComponent, setSelectedComponent] = useState("IdaEVolta");

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case "Multidestinos":
        return <Multidestinos />;
      case "SomenteIda":
        return <SomenteIda />;
      case "IdaEVolta":
      default:
        return <IdaEVolta />;
    }
  };

  return (
    
      <View style={styles.container}>
        <Logo />
        <SelectionBar
          selectedComponent={selectedComponent}
          onSelect={(component) => setSelectedComponent(component)}
        />
        {renderSelectedComponent()}
      </View>
    
  );
}
