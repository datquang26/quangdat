import * as React from "react";
import { Button, View, Text, TextInput, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Buttonn } from "./Components/Buttonn";
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Hello</Text>
      <Button
        title="Click-1"
        onPress={() => navigation.navigate("Register")}
        color="red"
      />
      <Button
        title="Click-2"
        onPress={() => navigation.navigate("ForgotPassword")}
        color="black"
      />
    </View>
  );
}
function Register() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="PassWord" style={styles.input} />
      <Buttonn>Login</Buttonn>
    </View>
  );
}
function ForgotPassword() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput placeholder="Email" style={styles.input} />
      <Buttonn>Nhập</Buttonn>
    </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "70%",
    margin: 12,
    borderWidth: 0,
    paddingLeft: 50,
    borderRadius: 80,
    backgroundColor: "white",
  },
  btn: {
    width: "70%",
  },
});
