// This component is used to display the logo of the application
import React from "react";
import { View, Image } from "react-native";
import { styles } from "../styles";
import logo from "../assets/images/logo-impactTrip.png";

export function Logo() {
    return (
        <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        </View>
    );
    }
