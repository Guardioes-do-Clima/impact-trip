// This component is used to display the logo of the application
import React from "react";
import { View, Image } from "react-native";
import { styles } from "../styles";
import selo from "../assets/images/logog_mecenas_h.png";

export function Selo() {
    return (
        <View style={styles.logoContainer}>
        <Image source={selo} style={styles.selo} />
        </View>
    );
    }
