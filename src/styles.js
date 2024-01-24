import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    colors: {
      primary: "#26944d",
      secondary: "#9BC265"
    },
    scrollViewContainer: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
      },
      container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        marginTop: 5,
        backgroundColor: "#fff",
      },
      airplaneContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        marginTop: 100,
      },
      logoContainer: {
        //justifyContent: "center",
        alignItems: "center",
        marginBottom: 1,
    },
      logo: {
        width: 300,
        height: 100,
        resizeMode: "contain",
        //marginTop: 1,
    },
      selo: {
        width: 180,
        height: 80,
        resizeMode: "contain",
        //marginTop: 1,
    },
    airEmissionLogo:{
      width: 150,
      height: 150,
    },
      header: {
        fontSize: 17,
        color: "green",
        alignSelf: "center",
      },     
      title: {
        fontSize: 21,
        fontWeight: "bold",
        color: "white",
        marginTop: 2
      },
      text: {
        fontSize: 15,
        color: "green",
      },
      infoText: {
        fontSize: 15,
        color: "green",
        alignItems: "center",
      },
      infoTextView: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,       
        alignItems: "center",
      },
      cardAirplane: {
        width: 350,
        height: "auto",
        backgroundColor: "white",        
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
      },
      cardCar: {
        width: 340,
        height: "auto",
        backgroundColor: "white",
        //opacity: 0.9,        
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
      },
      inputSelect: {
        marginLeft: 8,
        marginBottom: 6,
        width: 300,
      },
      buttonView: {
        marginTop: 20,
        width: 340,
        alignSelf: "center",
      },
      actionButtonView: {        
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
      },
      addButton: {
        alignSelf: "center",
        marginRight: 10,            
      },
      removeButton: {
        alignSelf: "center",
        marginLeft: 10,            
      },
      button: {
        width: 340,
        alignSelf: "center",
      },
      inputNumber: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        margin: 10,
        padding: 10,
        borderRadius: 9,
        width: 295,
      },      
    });
