import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, TextInput } from "react-native-web";

const Calculator = () => {
  return (
    <View style={styles.mainStyle}>
      <Text style={styles.headinText}>Student Resgistration</Text>

      <TextInput placeholder="First Name" style={styles.textInput} />
      <TextInput placeholder="Last Name" style={styles.textInput} />
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        style={styles.textInput}
      />
      <TextInput
        placeholder="Passord"
        keyboardType="password"
        secureTextEntry={true}
        style={styles.textInput}
      />

      <Text style={styles.headinText}>Enter Marks</Text>

      <TextInput placeholder="Subject 1 Marks" style={styles.textInput} />
      <TextInput placeholder="Subject 2 Marks" style={styles.textInput} />
      <TextInput placeholder="Subject 3 Marks" style={styles.textInput} />

      <View style={{ width:'100%' }}>
        <Button title="REGISTER & CALCULATOR AVERAGE" style={styles.button} />
      </View>
    </View>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  mainStyle: {
    textAlign: "center",
    alignItems: "center",
    margin: "20px",
  },

  headinText: {
    fontSize: "2rem",
    fontWeight: "bold",
  },

  textInput: {
    margin: "10px",
    border: "1px black solid",
    borderRadius: "5px",
    padding: "5px",
    width: "100%",
    color: "gray",
  }, 
});
