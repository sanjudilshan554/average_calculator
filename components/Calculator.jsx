import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, TextInput } from "react-native-web";
import { useState } from "react";
import ShowAvg from "./ShowAvg";

const Calculator = () => {
  const [studentData, setStudentData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const [subjectMarksData, setsubjectMarksData] = useState({
    subject_one: "",
    subject_two: "",
    subject_three: "",
  });

  const [average, setAverage] = useState(0.0);

  const getStudnetData = (event, name) => {
    try {
      const { value } = event.target;
      const keyExist = studentData.hasOwnProperty(name);
      if (keyExist) {
        const obj = {};
        obj[name] = value;
        setStudentData({ ...studentData, ...obj });
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const getSubjectMarkData = (event, marks) => {
    try {
      const { value } = event.target;
      const keyExist = subjectMarksData.hasOwnProperty(marks);
      if (keyExist) {
        if (!isNaN(value)) {
          const obj = {};
          obj[marks] = value;
          setsubjectMarksData({ ...subjectMarksData, ...obj });
        } else {
          // Alert
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const calculateAverage = () => {
    try {
      let total = 0;
      let marks = Object.values(subjectMarksData);

      marks.map((index, value) => {
        total += parseInt(index);
      });
      let average = total / 3;
      setAverage(average.toFixed(2));
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <View style={styles.mainStyle}>
      <Text style={styles.headinText}>Student Resgistration</Text>

      <TextInput
        placeholder="First Name"
        style={styles.textInput}
        onChange={(e) => getStudnetData(e, "first_name")}
      />
      <TextInput
        placeholder="Last Name"
        style={styles.textInput}
        onChange={(e) => getStudnetData(e, "last_name")}
      />
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        style={styles.textInput}
        onChange={(e) => getStudnetData(e, "email")}
      />
      <TextInput
        placeholder="Passord"
        keyboardType="password"
        secureTextEntry={true}
        style={styles.textInput}
        onChange={(e) => getStudnetData(e, "password")}
      />

      <Text style={styles.headinText}>Enter Marks</Text>

      <TextInput
        placeholder="Subject 1 Marks"
        style={styles.textInput}
        onChange={(e) => getSubjectMarkData(e, "subject_one")}
      />
      <TextInput
        placeholder="Subject 2 Marks"
        style={styles.textInput}
        onChange={(e) => getSubjectMarkData(e, "subject_two")}
      />
      <TextInput
        placeholder="Subject 3 Marks"
        style={styles.textInput}
        onChange={(e) => getSubjectMarkData(e, "subject_three")}
      />

      <View style={{ width: "100%" }}>
        <Button
          title="REGISTER & CALCULATOR AVERAGE"
          style={styles.button}
          onPress={() => calculateAverage()}
        />
      </View>

      <ShowAvg average={average} />
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
