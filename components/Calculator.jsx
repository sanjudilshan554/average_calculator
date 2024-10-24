import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React from "react";
import { useState } from "react";
import ShowAvg from "./ShowAvg";

const Calculator = () => {
  const [studentData, setStudentData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const [subjectMarks, setSubjectMarks] = useState({
    subject_one: "",
    subject_two: "",
    subject_three: "",
  });

  const [average, setAverage] = useState(0.0);
  const [error, setError] = useState(false);

  const getStudentDetails = (text, key) => {
    try {
      setStudentData((prevState) => ({
        ...prevState,
        [key]: text,
      }));
    } catch (error) {
      console.log("error", error);
    }
  };

  const getSubjectMarks = (text, key) => {
    try {
      setSubjectMarks((prevState) => ({
        ...prevState,
        [key]: text,
      }));
    } catch (error) {
      console.log("error", error);
    }
  };

  const calculateAverage = () => {
    try {
      let total = 0;
      let validMarksCount = 0;
      const obj = Object.entries(subjectMarks);
  
      setError(null);
  
      obj.forEach(([subject, mark]) => {
        const parsedMark = parseFloat(mark);
  
        if (isNaN(parsedMark)) {
          console.log("Invalid mark:", mark);
          window.alert(
            `Invalid input detected for ${subject.replace("_", " ")}. Please enter valid numbers.`
          );
          return;
        }
  
        total += parsedMark;
        validMarksCount++; 
      });
  
      const average = validMarksCount > 0 ? total / validMarksCount : 0;
      setAverage(average.toFixed(2));
    } catch (error) {
      console.log("error", error);
    }
  };  

  return (
    <View style={styles.mainStyle}>
      <Text style={styles.headingText}>Student Registration</Text>

      <TextInput
        placeholder="First Name"
        style={styles.textInput}
        onChangeText={(text) => getStudentDetails(text, "first_name")}
      />
      <TextInput
        placeholder="Last Name"
        style={styles.textInput}
        onChangeText={(text) => getStudentDetails(text, "last_name")}
      />
      <TextInput
        placeholder="Email"
        style={styles.textInput}
        keyboardType="email-address"
        autoComplete="email"
        onChangeText={(text) => getStudentDetails(text, "email")}
      />
      <TextInput
        placeholder="Password"
        style={styles.textInput}
        secureTextEntry={true}
        onChangeText={(text) => getStudentDetails(text, "password")}
      />

      <Text style={styles.headingText}>Enter Marks</Text>

      <TextInput
        placeholder="Subject 1 Marks"
        style={styles.textInput}
        keyboardType="numeric"
        onChangeText={(text) => getSubjectMarks(text, "subject_one")}
      />
      <TextInput
        placeholder="Subject 2 Marks"
        style={styles.textInput}
        keyboardType="numeric"
        onChangeText={(text) => getSubjectMarks(text, "subject_two")}
      />
      <TextInput
        placeholder="Subject 3 Marks"
        style={styles.textInput}
        keyboardType="numeric"
        onChangeText={(text) => getSubjectMarks(text, "subject_three")}
      />

      <View style={{ width: "100%" }}>
        <Button
          title="REGISTER & CALCULATE AVERAGE"
          onPress={() => calculateAverage()}
        />
      </View>

      {!error && average && studentData && <ShowAvg average={average} student={studentData} />}
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

  headingText: {
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
