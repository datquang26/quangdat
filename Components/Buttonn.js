import { React } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Buttonn = (props) => {
  return (
    <TouchableOpacity style={styles.buttonBody}>
      <Text style={styles.buttonText}>{props.children}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonBody: {
    width: "70%",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    height: 40,
  },
  buttonText: {
    color: "black",
    fontSize: 14,
  },
});
export { Buttonn };