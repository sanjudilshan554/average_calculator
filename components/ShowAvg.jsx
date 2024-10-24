import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ShowAvg = (props) => {
  const { average, student } = props;
  return (
    <View>
      {
        <Text style={styles.averageText}>Average: {average}</Text>
      }

      {(student.first_name || student.last_name) && (
        <Text style={styles.averageText}>
          Student Name: {student.first_name} {student.last_name}
        </Text>
      )}

      {student.email && (
        <Text style={styles.averageText}>Email: {student.email}</Text>
      )}
    </View>
  );
};

export default ShowAvg;

const styles = StyleSheet.create({
  averageText: {
    marginTop: "10px",
    fontWeight: "bold",
    fontSize: "1rem",
  },
});
